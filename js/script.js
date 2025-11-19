const selectMarca = document.getElementById("marca");

const todosCards = document.querySelectorAll(".card-carro");

selectMarca.addEventListener("change", function() {
    const marcaSelecionada = selectMarca.value.toLowerCase()

    todosCards.forEach(card => {
        const  titulo = card.querySelector("h3").textContent.toLowerCase()
        if(marcaSelecionada === "" || titulo.includes(marcaSelecionada)) {
        card.style.display = "flex"
        } else {
            card.style.display = "none"
        }
    })
})
