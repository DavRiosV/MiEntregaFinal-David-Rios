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


let enCarrito = localStorage.getItem("productos-en-carrito");
enCarrito = JSON.parse(enCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function agregarAlCarrito() {
    if (enCarrito && enCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        enCarrito.forEach(producto => {
            let precio = sumaProducto(producto);
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${ precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

agregarAlCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = enCarrito.findIndex(producto => producto.id === idBoton);
    
    enCarrito.splice(index, 1);
    agregarAlCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(enCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        text: "Se eliminaran todos los produtos de tu carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, vaciar carrito!'
    }).then((result) => {
        if (result.isConfirmed) {
            enCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(enCarrito));
            agregarAlCarrito();
        Swal.fire(
            '¡Carrito vaciado!',
            '¡tus productos han sido eliminados con exito!.',
            'success'
        )
        }
    })

}


function actualizarTotal() { 
    const totalCalculado = enCarrito.reduce((acc, producto) => acc + sumaProductoCantidad(producto), 0);
    total.innerText = `CLP$ ${totalCalculado}`;
}
function sumaProductoCantidad(producto) {

    if (producto.oferta) {
        return (  producto.precio - (producto.precio * producto.descuento / 100) ) * producto.cantidad;
    } else {
        return producto.precio * producto.cantidad;
    }
}
function sumaProducto(producto) {

    if (producto.oferta) {
        return (  producto.precio - (producto.precio * producto.descuento / 100) );
    } else {
        return producto.precio;
    }
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    Swal.fire({
        title: '¡Felicidades! atrapaste tus productos',
        text: 'Esperamos poder verte pronto.',
        imageUrl: 'https://media.tenor.com/lAz1WcGbKukAAAAC/pokeball-catch.gif',
        imageWidth: 400,
        imageHeight: 200,
    })

    enCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(enCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}




    if (contenedorCarritoVacio === 0) {
        const div = document.createElement("div");
            div.classList.add("carrito-vacio");
            div.innerHTML = `
            <img src="https://www.kindpng.com/picc/m/107-1075179_transparent-pokeball-png-transparent-background-pokeball-opening-png.png" alt="Transparent Pokeball Png - Transparent Background Pokeball Opening, Png Download@kindpng.com">
            `;
    }
