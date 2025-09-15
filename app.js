// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let titulo = document.querySelector('.main-title');
titulo.innerHTML = "Challenge Amigo Secreto";

let textoBoton = "Agregar";
let boton = document.querySelector('.button-add');
boton.innerHTML = textoBoton;

let seccionTitulo = document.querySelector('.section-title');
seccionTitulo.innerHTML = `Escribe el nombre de tus amigos y presiona '${textoBoton}'`;

let placeholderInput = "Escribe un nombre, no algo raro";
let input = document.getElementById('amigo');
input.setAttribute('placeholder', placeholderInput);

listaAmigos = [];

function agregarAmigo() {
    nombre = document.getElementById('amigo').value;

    // Verificando que el nombre sea una cadena de texto y no esté vacío
    if (typeof nombre !== 'string' || nombre.trim().length === 0) {
        alert("Obviamente el nombre no puede ser vacío o ser solo espacios en blanco, caso básico");
        return;
    }

    nombre = nombre.trim();

    // Verificando que el nombre no contenga caracteres raros o números
    for (let char of nombre) {
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= 'Á' && char <= 'Ú') || (char >= 'á' && char <= 'ú') || char === ' ' || char === 'ñ' || char === 'Ñ')) {
            alert("El nombre contiene caracteres inválidos, te dije que no pongas cosas raras 👊");
            return;
        }
    }

    // Verificando que el amigo no esté ya en la lista
    if (listaAmigos.includes(nombre)) {
        alert("Ese(a) amigo(a) ya está en la lista, si tienen el mismo nombre, ponle un apellido o algo 👊");
        return;
    }

    // Agregando el nombre a la lista de amigos
    listaAmigos.push(nombre);
    limpiarCaja();
    mostrarAmigos();
    console.log("Amigo agregado, urra!");
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear, ¿qué no tienes amigos? 😢');
        return;
    }
    
    // Seleccionando aleatoriamente un elemento de la lista de amigos
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    console.log(`Es un secreto para ${amigoSorteado}, asi que no se lo digas a nadie! 🤫`);
}