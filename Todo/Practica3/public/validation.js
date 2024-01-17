async function validateForm(){
    var nombre = document.getElementById('name').value;
    var imagenURL = document.getElementById('image').value;
    var trailerURL = document.getElementById('trailer').value;
    var descripcion = document.getElementById('description').value;
    
    const content = document.getElementById("content");

    content.innerHTML = '';

    let check = true;

    if (nombre === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> Nombre no puede estar vacío.</p>`;
    }

    else if (!/^[A-Z]/.test(nombre)) {
        check = false;
        content.innerHTML += `
            <p class="alert"><i class="bi bi-exclamation-circle"></i> Nombre debe empezar con una letra mayúscula.</p>`;
    }

    if (descripcion === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> Descripción no puede estar vacía.</p>`;
    }

    else if (descripcion.length < 50 || descripcion.length > 500) {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> El campo descripción debe tener entre 50 y 500 caracteres.</p>`;
    }

    if (imagenURL === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> URL Imagen no puede estar vacía.</p>`;
    }

    else if (!/^https?:\/\/\S+\.(jpg|png|webp|gif|bmp|jpeg|svg)$/.test(imagenURL)) {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> El campo URL Imagen debe ser una URL válida.</p>`;
    }

    if (trailerURL === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> URL Trailer no puede estar vacía.</p>`;
    }

    else if (!/^https?:\/\/\S+$/.test(trailerURL)) {
        check = false;
        content.innerHTML += `
            <p class="alert"><i class="bi bi-exclamation-circle"></i> El campo URL Trailer debe ser una URL válida.</p>`;
    }

    if (check){
        document.querySelector('form').submit();
    }

    console.log(check);
    return check;
}

    
function verificarNombre() {
    var nombreInput = document.getElementById('name');
    var valorNombre = nombreInput.value;
    var error = document.getElementById('errorName');

    if (valorNombre === '' || valorNombre[0] == valorNombre[0].toUpperCase()) {
        nombreInput.classList.remove('is-invalid');
        error.innerHTML = '';
    } else {
        nombreInput.classList.add('is-invalid');
        error.innerHTML = `<p class="alertred"><i class="bi bi-exclamation-circle"></i> Nombre debe empezar con una letra mayúscula.</p>`;
    }
}

function verificarURLImagen() {
    var imageInput = document.getElementById('image');
    var imageURL = imageInput.value;
    var error = document.getElementById('errorURLImagen');

    if (imageURL === '' || /^https?:\/\/\S+\.(jpg|png)$/.test(imageURL)) {
        imageInput.classList.remove('is-invalid');
        error.innerHTML = '';
    }

    else {
        imageInput.classList.add('is-invalid');
        error.innerHTML = `<p class="alertred"><i class="bi bi-exclamation-circle"></i> El campo URL Imagen debe ser una URL válida.</p>`;
    }
}

function verificarURLTrailer() {
    var trailerInput = document.getElementById('trailer');
    var trailerURL = trailerInput.value;
    var error = document.getElementById('errorURLTrailer');

    
    if (trailerURL === '' || /^https?:\/\/\S+$/.test(trailerURL)){
        trailerInput.classList.remove('is-invalid');
        error.innerHTML = '';
        
    } else {
        trailerInput.classList.add('is-invalid');
        error.innerHTML = `<p class="alertred"><i class="bi bi-exclamation-circle"></i> El campo URL Trailer debe ser una URL válida.</p>`;
    }
}

function verificarDescripcion() {
    var descriptionInput = document.getElementById('description');
    var descripcion = descriptionInput.value;
    var error = document.getElementById('errorDescription');

    if (descripcion === '' || (descripcion.length > 50 && descripcion.length < 500)) {
        descriptionInput.classList.remove('is-invalid');
        error.innerHTML = '';
    } else {
        descriptionInput.classList.add('is-invalid');
        error.innerHTML = `<p class="alertred"><i class="bi bi-exclamation-circle"></i> El campo descripción debe tener entre 50 y 500 caracteres.</p>`;
    }
}