function cambiaImagen(imagen){
    document.getElementById('imagen-activa').src = imagen.src;
    document.getElementById('imagen-activa').alt = imagen.alt;
    var imagenes = $('#galery img');
    for (var i = 0; i < imagenes.length; i++){
        imagenes[i].class = '';
    }
    imagen.class = 'current-image';
    console.log(imagen.class);
}