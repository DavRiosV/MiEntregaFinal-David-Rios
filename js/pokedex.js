const btnswitch = document.querySelector(`#switch`)

btnswitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active'); 

    // guardar la seleccion del modo oscuro en localStorage 

if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
} else {
    localStorage.setItem('dark-mode', 'false');
}
});

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnswitch.classList.add('active'); 
} else {
    document.body.classList.remove('dark');
    btnswitch.classList.remove('active');
}

const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
    electric: '#F8D030',
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    ice: '#98D8D8',
    rock: '#705898',
    flying: '#A890F0',
    grass: '#78C850',
    psychic: '#F85888',
    ghost: '#561D25',
    bug: '#A8B820',
    poison: '#A040A0',
    ground: '#E0C068',
    dragon: '#7038F8',
    steel: '#B8B8D0',
    fighting: '#C03028',
    dark: '#705848',
    fairy: '#F0B6BC',
    default: '#ffffff',
    transparent: 'transparent',
};


const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    console.log(event)
    console.log(value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const sprite =  data.sprites.other['official-artwork'].front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    colorCard(types);
    renderPokemonTypes(types);
}

const colorCard = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors[types[0].type.name];
    pokeImg.style.background =  `linear-gradient( ${colorOne} 60% , ${colorTwo} 10%)`;
}

const renderPokemonTypes = types => {
    console.log(types)
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.background = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderNotFound = () => {
    console.log("entro")
    pokeName.textContent = 'Pokemon aún sin descubrir';
    pokeImg.setAttribute('src', '../MiEntregaFinal-David-Rios/new-img/MissingnoIdle.webp');
    pokeImg.style.background =  '#ececec';
    pokeTypes.innerHTML = '';
    pokeId.textContent = '';
}


(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
        }, false);
    });
    }, false);
})();