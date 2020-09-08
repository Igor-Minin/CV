'use strict';

//import '../css/style.css';
//burger menu


var navWindow = document.querySelector('.header-wrapper .nav');
var burgerButton = document.querySelector('.header__burger');
var navCross = document.querySelector('.nav__cross');

if (burgerButton) {
    burgerButton.addEventListener('click', function () {
        navWindow.classList.toggle('nav__show');
        document.body.style.overflow = 'hidden';
    });
}
navCross.addEventListener('click', function () {
    navWindow.classList.toggle('nav__show');
    document.body.style.overflow = '';
});
//slider
var sliderText = document.querySelectorAll('.slider__item');
var sliderImages = document.querySelectorAll('.slider__images__user');
var sliderImagesConteiner = document.querySelector('.slider__images');
var imagesArray = Array.from(sliderImages);
var leftArrow = document.querySelector('.slider__arrows__left');
var rightArrow = document.querySelector('.slider__arrows__right');
var counter = 0;

setInterval(function () {
    if (counter < sliderImages.length) {
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 105) + '%)';
        });
        counter++;
    } else {
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        counter = 0;
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 107.5) * sliderText.length + '%)';
        });
        counter++;
    }
}, 10000);

sliderImagesConteiner.addEventListener('click', function () {
    counter = 0;
    if (imagesArray.indexOf(event.target) >= counter) {
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(imagesArray.indexOf(event.target) * 105) + '%)';
        });
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[imagesArray.indexOf(event.target)].classList.add('active-image');
        counter = 1 * imagesArray.indexOf(event.target);
    } else {
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + imagesArray.indexOf(event.target) * 105 + '%)';
        });
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[imagesArray.indexOf(event.target)].classList.add('active-image');
        counter = 1 * imagesArray.indexOf(event.target);
    }
});
leftArrow.addEventListener('click', function () {
    if (counter == 0) {
        counter = imagesArray.length - 1;
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 105) + '%)';
        });
    } else {
        counter--;
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 105) + '%)';
        });
    }
});
rightArrow.addEventListener('click', function () {
    if (counter == sliderImages.length - 1) {
        counter = 0;
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 105) + '%)';
        });
    } else {
        counter++;
        sliderImages.forEach(function (element) {
            return element.classList.remove('active-image');
        });
        sliderImages[counter].classList.add('active-image');
        sliderText.forEach(function (element) {
            return element.style.transform = 'translateX(' + -(counter * 105) + '%)';
        });
    }
});

var switchMover = document.querySelector('.white-element');
var switchBlock = document.querySelector('.choose-plan__content__switch');
switchBlock.addEventListener('click', function () {
    switchMover.classList.toggle('move');
});

//show animation

var animItems = document.querySelectorAll('.anim-items');
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return top + height >= 0 && height + window.innerHeight >= bottom;
}

if (animItems.length > 0) {
    var anim = function anim() {
        for (var i = 0; i < animItems.length; i++) {
            var animItem = animItems[i];
            if (isPartiallyVisible(animItem) == true) {
                animItem.classList.add('active');
            }
        }
    };
    window.addEventListener('scroll', anim);
    anim();
}

var header = document.querySelector('.header');
if (window.pageYOffset > 0) {
    header.classList.add('active');
}
window.addEventListener('scroll', function () {
    if (window.pageYOffset == 0) {
        header.classList.add('active');
        if (window.pageYOffset == 0) {
            header.classList.remove('active');
        }
    } else if (window.pageYOffset > 0) {
        header.classList.add('active');
    }
});