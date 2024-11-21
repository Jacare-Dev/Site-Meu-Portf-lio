const containers = document.querySelectorAll('.imagem');

containers.forEach(container => {
    const img = container.querySelector('img');
    const info = container.querySelector('.info');

    img.addEventListener('mouseover', () => {
        info.style.display = 'block';
    });

    img.addEventListener('mouseout', () =>{
        info.style.display = 'none'
    });

});