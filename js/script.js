const selectMarca = document.getElementById("marca");

const todosCards = document.querySelectorAll(".card-carro");

selectMarca.addEventListener("change", function() {
    const marcaSelecionada = selectMarca.value.toLowerCase()

    todosCards.forEach(card => {
        const  titulo = card.querySelector("h3").textContent.toLowerCase()
        if(marcaSelecionada === "" || titulo.includes(marcaSelecionada)) {
        card.style.display = "flex"
        } else {
            //Se a condição for falsa (a marca do carro NÃo corresponde à selecionada),
            // o card é ocultado (display: none).
            card.style.display = "none"
        }
    })
})

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;

    let slides = document.getElementsByClassName("meuSlide");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";
}

let autoSlideIndex =0;
carouselAutomatico();

function carouselAutomatico() {
    let i;
    let slides = document.getElementsByClassName("meuSlide");
    let dots = document.getElementsByClassName("dot");

    for (i =0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }

    autoSlideIndex++;

    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active"

    setTimeout(carouselAutomatico(), 5000)
        
    
}