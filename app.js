let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000); // 10 saniyede bir resim değişimi
 }

 function showCards(category) {
   const cards = document.querySelectorAll('.cards');
   const selectedCategory = document.getElementById(category);
  for (let i = 0; i < cards.length; i++) {
    if(selectedCategory==cards[i]) {
      cards[i].style.display = 'block'
    } else {
      cards[i].style.display = 'none';
    }
  }
}





var formVisible = false;

document.getElementById("randevuButtons").addEventListener("click", function() {
  document.getElementById("randevuForm").style.display = "block";
  formVisible = true;
});

document.querySelector(".closeButton button").addEventListener("click", function() {
  if (formVisible) {
    document.getElementById("randevuForm").style.display = "none";
    formVisible = false;
  }
});
