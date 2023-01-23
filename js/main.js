// PRODUCTOS
const productos = [
    // Peluches
    {
        id: "Peluche-01",
        titulo: "Peluche Pikachu",
        imagen: "./new-img/pikachu.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",
            oferta: false
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Trueno"
        },
        oferta: false
    },
    {
        id: "Peluche-02",
        titulo: "Pikachu durmiendo",
        imagen: "./new-img/pikachu-durmiendo.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "20000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Trueno"
        },
        oferta: false
    },
    {
        id: "Peluche-03",
        titulo: "Pareja kimono",
        imagen: "./new-img/couple.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",

        },
        precio: "20000",
        oferta: true,
        descuento: 15,
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Trueno",
        },

    },
    {
        id: "Peluche-04",
        titulo: "Peluche Charmander",
        imagen: "./new-img/charmander.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Fuego"
        },
        oferta: false
    },
    {
        id: "Peluche-05",
        titulo: "Peluche Charmeleon",
        imagen: "./new-img/charmeleon.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Fuego"
        },
        oferta: false
    },
    {
        id: "Peluche-06",
        titulo: "Peluche Charizard",
        imagen: "./new-img/charizard.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Fuego / Volador"
        },
        oferta: false
    },
    {
        id: "Peluche-07",
        titulo: "Holiday Bulbasaur",
        imagen: "./new-img/holiday-bulbasaur.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Planta"
        },
        oferta: false
    },
    {
        id: "Peluche-08",
        titulo: "Peluche Ivysaur",
        imagen: "./new-img/ivysaur.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "35000",
        descripcion: "Peluche de 50 cm de alto",
        tipo: {
            TipoElemental: "Planta"
        },
        oferta: false
    },
    {
        id: "Peluche-09",
        titulo: "Peluche Venasaur",
        imagen: "./new-img/venasaur.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Planta / Veneno"
        },
        oferta: false
    },
    {
        id: "Peluche-10",
        titulo: "Peluche Squirtle",
        imagen: "./new-img/squirtle.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Agua"
        },
        oferta: false
    },
    {
        id: "Peluche-11",
        titulo: "Peluche Wartortle",
        imagen: "./new-img/wartortle.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Agua"
        },
        oferta: false
    },
    {
        id: "Peluche-12",
        titulo: "Peluche Blastoise",
        imagen: "./new-img/blastoise.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches"
        },
        precio: "15000",
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Agua"
        },
        oferta: false
    },
    {
        id: "Peluche-13",
        titulo: "Ditto Bulbasaur",
        imagen: "./new-img/ditto-bulbasaur.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",
        },
        precio: "15000",
        ofertas: true,
        descuento: 15,
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Normal"
        },

    },
    {
        id: "Peluche-14",
        titulo: "Ditto Charmander",
        imagen: "./new-img/ditto-charmander.jpeg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",
        },
        precio: "15000",
        oferta: true,
        descuento: 15,
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Normal"
        },

    },
    {
        id: "Peluche-15",
        titulo: "Ditto Squirtle",
        imagen: "./new-img/ditto-squirtle.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",
        },
        precio: "15000",
        oferta: true,
        descuento: 15,
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Normal"
        },

    },
    {
        id: "Peluche-16",
        titulo: "Weird Pikachu",
        imagen: "./new-img/pepechu.jpg",
        categoria: {
            nombre: "Peluches",
            id: "Peluches",
        },
        precio: "15000",
        oferta: true,
        descuento: 15,
        descripcion: "Peluche de 30 cm de alto",
        tipo: {
            TipoElemental: "Normal"
        },

    },
    // Juegos
    {
        id: "Juego-01",
        titulo: "Pokemon Sword NSW",
        imagen: "./new-img/sword.jpg",
        categoria: {
            nombre: "Juegos",
            id: "Juegos"
        },
        precio: "69990",
        descripcion: "VideoJuegos Nintendo Switch",
        oferta: false
    },
    {
        id: "Juego-02",
        titulo: "Pokemon Shield NSW",
        imagen: "./new-img/shield.jpg",
        categoria: {
            nombre: "Juegos",
            id: "Juegos"
        },
        precio: "69990",
        descripcion: "VideoJuegos Nintendo Switch",
        oferta: false
    },
    {
        id: "Juego-03",
        titulo: "Pokemon Legend Arceus NSW",
        imagen: "./new-img/arceus.jpg",
        categoria: {
            nombre: "Juegos",
            id: "Juegos"
        },
        precio: "69990",
        descripcion: "VideoJuegos Nintendo Switch",
        oferta: false
    },
    {
        id: "Juego-04",
        titulo: "Pokemon double pack",
        imagen: "./new-img/perla-diamante.jpg",
        categoria: {
            nombre: "Juegos",
            id: "Juegos",
        },
        precio: "90000",
        oferta: true,
        descuento: 15,
        descripcion: "VideoJuegos diamante - perla Nintendo Switch",
    },
    {
        id: "Juego-05",
        titulo: "Pokemon Scarlet",
        imagen: "./new-img/scarlet.png",
        categoria: {
            nombre: "Juegos",
            id: "Juegos"
        },
        precio: "69990",
        descripcion: "VideoJuegos scarlet NSW",
        oferta: false
    },
    {
        id: "Juego-06",
        titulo: "Pokemon violet",
        imagen: "./new-img/violet.jpg",
        categoria: {
            nombre: "Juegos",
            id: "Juegos"
        },
        precio: "69990",
        descripcion: "VideoJuegos violet Nintendo Switch",
        oferta: false
    },

    // cartas TCG
    {
        id: "cartas-01",
        titulo: "Tempestad Plateada",
        imagen: "./new-img/tempestad-plateada.jpg",
        categoria: {
            nombre: "Cartas",
            id: "Cartas"
        },
        precio: "54000",
        descripcion: "Pokémon TCG",
        oferta: true,
        descuento: 15,
    },
    {
        id: "Cartas-02",
        titulo: "Lost Origin Weavile",
        imagen: "./new-img/lost-origin-weavile.jpg",
        categoria: {
            nombre: "Cartas",
            id: "Cartas"
        },
        precio: "15990",
        descripcion: "Pokémon TCG",
        oferta: false
    },
    {
        id: "Cartas-03",
        titulo: "Sobre Lost Origin",
        imagen: "./new-img/sobre.jpg",
        categoria: {
            nombre: "Cartas",
            id: "Cartas"
        },
        precio: "4990",
        descripcion: "Pokémon TCG",
        oferta: false
    },
    {
        id: "Cartas-04",
        titulo: "Fusion Strike Build",
        imagen: "./new-img/fusion.jpg",
        categoria: {
            nombre: "Cartas",
            id: "Cartas"
        },
        precio: "74990",
        descripcion: "Pokémon TCG",
        oferta: false
    },
    {
        id: "Cartas-05",
        titulo: "Entrenador Elite Mewtwo",
        imagen: "./new-img/mewtwo.jpg",
        categoria: {
            nombre: "Cartas",
            id: "Cartas"
        },
        precio: "64000",
        descripcion: "Pokémon TCG",
        oferta: true,
        descuento: 15,
    }
];

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

// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let btnAgregar = document.querySelectorAll(".agregar-carro");
const numeroCarrito = document.querySelector("#numeroCarrito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="agregar-carro" id="${producto.id}"><strong>Agregar</strong></button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBtnAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos" && e.currentTarget.id != "Ofertas"  ) {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }  else if (e.currentTarget.id === "todos" ) {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        } else {tituloPrincipal.innerText = "Ofertas";
        const productosBoton = productos.filter(producto => producto.oferta);
        cargarProductos(productosBoton);} 
    })
});

function actualizarBtnAgregar() {
    btnAgregar = document.querySelectorAll(".agregar-carro");

    btnAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCarrito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #F08030, #C03028)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarCarrito() {
    let nuevoProducto = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerText = nuevoProducto;
}

