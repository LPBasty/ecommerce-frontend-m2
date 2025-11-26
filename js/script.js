// Esperamos a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los botones que tengan la clase "btn-agregar"
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    
    // Seleccionamos el elemento donde se muestra el número del carrito (el badge)
    const contadorCarrito = document.getElementById('contador-carrito');

    // Leemos si ya había algo en el carrito guardado en el navegador.
    // localStorage guarda datos incluso si cierras la pestaña.
    let cantidad = localStorage.getItem('cantidadCarrito') || 0;
    
    // Actualizamos el texto del contador con lo que recuperamos
    contadorCarrito.innerText = cantidad;

    // A cada botón le agregamos un "oído" (listener) para el clic.
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', () => {
            
            // Aumentamos la variable
            cantidad++;
            
            // Actualizamos el contador en la pantalla (DOM)
            contadorCarrito.innerText = cantidad;
            
            // Guardamos el nuevo valor en la memoria del navegador
            localStorage.setItem('cantidadCarrito', cantidad);
            
            // Opcional: Una pequeña alerta visual
            alert("¡Objeto añadido al inventario!");
        });
    });
});