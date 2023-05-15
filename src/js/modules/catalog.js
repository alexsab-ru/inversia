const links = document.querySelectorAll('.category-link');
if(links){
    links.forEach(link => {
        link.addEventListener('click', e => {
            link.closest('.categories-mobile-item.with-submenu').classList.toggle('open');
        })
    })
}

document.getElementById('catalog-menu-btn').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('bg-white/20');
    document.getElementById('categories-mobile-list').classList.toggle('translate-x-full');    
})