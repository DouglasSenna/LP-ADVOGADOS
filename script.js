function toggleMenu(){
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'block' || menu.computedStyleMap.dysplay === ''){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }    
    }
}