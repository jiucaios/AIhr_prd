// 外部 JavaScript：独立控制交互，无侵入，确保页面稳健
document.addEventListener('DOMContentLoaded', () => {
    // 返回按钮行为：针对作品集通常采用后退或跳转，若history不可用则提示
    const backBtn = document.getElementById('backButton');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // 尝试返回上一页，如果无历史则跳转占位（用户可根据实际作品集首页修改）
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // 可选：自定义作品集首页链接，目前保留友好提示
                console.log('返回作品集首页（可自定义链接）');
                alert('返回作品集示意：您可在此处配置实际作品集链接。');
            }
        });
    }

    // 可选：为表格行增加焦点高亮（提升可读性）
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'rgba(255, 222, 156, 0.08)';
            });
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = '';
            });
        });
    });

    // 控制台输出，表明脚本分离加载成功
    console.log('AI面试PRD文档已加载 | 样式&JS分离版本');
});
