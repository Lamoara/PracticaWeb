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

    if (!/^[A-Z]/.test(nombre)) {
        check = false;
        content.innerHTML += `
            <p class="alert"><i class="bi bi-exclamation-circle"></i> Nombre debe empezar con una letra mayúscula.</p>`;
    }

    if (descripcion === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> Descripción no puede estar vacía.</p>`;
    }

    if (descripcion.length < 50 || descripcion.length > 500) {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> El campo descripción debe tener entre 50 y 500 caracteres.</p>`;
    }

    if (imagenURL === '') {
        check = false;
        content.innerHTML += `
        <p class="alert"><i class="bi bi-exclamation-circle"></i> URL Imagen no puede estar vacía.</p>`;
    }

    else if (!/^https?:\/\/\S+\.(jpg|png)$/.test(imagenURL)) {
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

    if (valorNombre.length > 0 && valorNombre[0] !== valorNombre[0].toUpperCase()) {
        nombreInput.classList.add('is-invalid');
    } else {
        nombreInput.classList.remove('is-invalid');
    }
}

function verificarURLImagen() {
    var imageInput = document.getElementById('image');
    var imageURL = imageInput.value;

    if (!/^https?:\/\/\S+\.(jpg|png)$/.test(imageURL)){
        imageInput.classList.add('is-invalid');
    } else {
        imageInput.classList.remove('is-invalid');
    }
}

function verificarURLTrailer() {
    var trailerInput = document.getElementById('trailer');
    var trailerURL = trailerInput.value;

    if (!/^https?:\/\/\S+$/.test(trailerURL)){
        trailerInput.classList.add('is-invalid');
    } else {
        trailerInput.classList.remove('is-invalid');
    }
}

function verificarDescripcion() {
    var descriptionInput = document.getElementById('description');
    var descripcion = descriptionInput.value;

    // Verifica si la longitud de la descripción está dentro del rango permitido o si está vacía
    if (descripcion.length < 50 || descripcion.length > 500) {
        descriptionInput.classList.add('is-invalid'); // Agrega la clase de Bootstrap para resaltar el error
    } else {
        descriptionInput.classList.remove('is-invalid'); // Elimina la clase de Bootstrap
    }
}