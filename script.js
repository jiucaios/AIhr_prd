

    // 为表格行增加焦点高亮（提升可读性）
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
