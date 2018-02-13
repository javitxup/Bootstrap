function cambiaImagen(imagen){
    document.getElementById('imagen-activa').src = (imagen.src).replace('min', 'big');
    document.getElementById('imagen-activa').alt = imagen.alt;
    document.getElementById('imagen-activa').setAttribute('style', 'animation: image 1s');
    var imagenes = $('#galery img');
    for (var i = 0; i < imagenes.length; i++){
        imagenes[i].setAttribute('class', '');
    }
    imagen.setAttribute('class', 'current-image');
    setTimeout("document.getElementById('imagen-activa').setAttribute('style', '')",1000);
    ;
}

