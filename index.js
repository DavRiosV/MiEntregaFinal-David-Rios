function cardsHtml ( array ) {

    const contenedor = document.querySelector(".container")
    
    array.map( ( pokemonPlush ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="container-img">
                <img src=${pokemonPlush.img} alt=${pokemonPlush.producto}>
            </div>
            <h2>
                ${pokemonPlush.producto}
            </h2>
            <p>
            ${pokemonPlush.precio}
            </p>
            <button>Comprar</button>
        `
        contenedor.appendChild(card)
    })    
}


cardsHtml(pokemonPlush)

    const pokemonascendente = [...pokemonPlush].sort((a, b) => {
        return parseInt (b.id) - parseInt (a.id)
    })
    
    console.log(pokemonPlush)
    console.log(pokemonascendente)
    
    const pokemonDescendente = [...pokemonPlush].sort((a, b) => {
        return parseInt (a.id) - parseInt (b.id)
    })
    console.log(pokemonDescendente)

    function ascendente (propiedad){
        const nombrePokemonA = [...pokemonPlush].sort((a, b) => {
            if(a[propiedad].toLocaleLowerCase() < b[propiedad].toLocaleLowerCase()){
                return 1;
            } else if (a[propiedad].toLocaleLowerCase() > b[propiedad].toLocaleLowerCase()){
                return -1;
            } 
            return 0;
        })
        console.log(nombrePokemonA)
    }

    function descentende (propiedad){
        const nombrePokemonZ = [...pokemonPlush].sort((a, b) => {
            if(a[propiedad].toLocaleLowerCase() > b[propiedad].toLocaleLowerCase()){
                return 1;
            } else if (a[propiedad].toLocaleLowerCase() < b[propiedad].toLocaleLowerCase()){
                return -1;
            } 
            return 0;
        })
    
        console.log(nombrePokemonZ)
    }

        var confirma = confirm("Bienvenidos a R&A ¿Quieres ver nuestras ofertas?")
        console.log(confirma)
        if ( confirma) {
            const contenedor = document.querySelector(".container").innerHTML = " "; 
            cardsHtml(pokemonPlush.filter(item => item.oferta));
        }

        
    function orden (){
        const valor = document.getElementById("ordenar").value;
        if ("value1" == valor) {
            descentende ("producto")
        } else { ("value2" == valor) 
            ascendente ("producto")
        }
    }

