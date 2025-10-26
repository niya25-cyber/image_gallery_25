let overLay = document.querySelector('.galleryOverLay')
let imgbox = document.querySelector('.imgbox')
let img = document.querySelector('.imgbox img')
let gallery = document.querySelector('.gallery')
let close = document.querySelector('.imgbox span')

gallery.addEventListener('click', (event) => {
    let currentImgPath = event.target.src;

    if (currentImgPath != undefined) {
        overLay.classList.add('galleryOverLayShow')
        imgbox.classList.add('imgboxShow')
        img.src = currentImgPath;
        console.log(currentImgPath);

    }

    close.addEventListener("click", () => {
        overLay.classList.remove('galleryOverLayShow')
        imgbox.classList.remove('imgboxShow')
    })

})