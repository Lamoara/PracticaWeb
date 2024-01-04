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

    