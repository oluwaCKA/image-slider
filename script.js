const slider_img = document.querySelector('.slider-img');

const images = ['Wizkid.webp', 'Olamide.png', 'OBO.jpeg', 'Kizz-Daniel.webp', 'Burna-Boy.jpeg', 'BNXN-Buju.webp'];

let i = 0 // current image index

// function for the previous button

function previous() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

// function for the next button

function next() {
    if( i >= images.length-1 ) i = -1;
    i++;
    return setImg();

}

// function for the slides

function setImg() {
    return slider_img.setAttribute('src', 'images/'+images[i]);
}
