function carousel() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //This will show the first picture automatically once last slide is reached and
    //if n is greater than the number of slides available
    if (n > slides.length) {
      slideIndex = 1;
    }
    //This will show the last slide available when n is 0 or less
    if (n < 1) {
      slideIndex = slides.length;
    }
    //Starting at 0 until last slid hide the slide i
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //Starting at 0 until last dot replace dot class name from active to nothing
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //Set block display to slides[0] when page loads
    slides[slideIndex - 1].style.display = "block";
    //set class for dot to active to activate css
    dots[slideIndex - 1].className += " active";
  }

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });
}

export default carousel;
