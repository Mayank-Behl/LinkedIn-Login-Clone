const sliderImages = document.querySelectorAll(".fs");
const arrowLeft = document.querySelector("#left-arrow");
const arrowRight = document.querySelector("#right-arrow");
let current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.display = "flex";
}

// Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "flex";
  current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "flex";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if(current == 0 ){
    arrowLeft.disable=true;
    arrowLeft.classList.add('change-for-inactive');
  }
else{
  slideLeft();
  arrowLeft.classList.remove('change-for-inactive');
  arrowRight.classList.remove('change-for-inactive');
}
});

// Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
        arrowRight.disable=true;
        arrowRight.classList.add('change-for-inactive');        
    }
    else{
      slideRight();
      arrowLeft.classList.remove('change-for-inactive');
      arrowRight.classList.remove('change-for-inactive');
    }
});

startSlide();