function rolarParaImagem(imageId) {
    const image = document.getElementById(imageId);
    if (image) {
        window.scrollTo({
            behavior: 'smooth',
            top: image.offsetTop
        });
    }
}

document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const imageId = link.textContent.toLowerCase().replace(' ', ''); 
        rolarParaImagem(imageId);
    });
});
