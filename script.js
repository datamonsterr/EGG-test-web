const navItems = document.querySelectorAll('#left-nav > div.item');
navItems.forEach(item => {
    if (item.querySelector('ul') !== null) {
        item.addEventListener('mouseover', (e) => {
            item.querySelector('ul').style.display = 'block';
        });
        item.addEventListener('mouseout', (e) => {
            item.querySelector('ul').style.display = 'none';
        })
    }
}
);

