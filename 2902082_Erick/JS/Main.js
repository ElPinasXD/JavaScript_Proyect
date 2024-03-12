const modalContainer = document.getElementById('modalContainer');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');
const modalContent = document.getElementById('modalContent');

function mostrarModal(resultado) {
    modalContent.textContent = resultado;
    modalContainer.style.display = 'block'; // Muestra el modal
    overlay.style.display = 'block'; // Muestra el fondo gris
    close.addEventListener('click', cerrarModal);
}

function cerrarModal() {
    modalContainer.style.display = 'none'; // Oculta el modal
    overlay.style.display = 'none'; // Oculta el fondo gris
    close.removeEventListener('click', cerrarModal);
}


function validarCamposNumericos(campos) {
    for (let campo of campos) {
        if (isNaN(parseFloat(document.getElementById(campo).value)) || parseFloat(document.getElementById(campo).value) <= 0) {
            return false;
        }
    }
    return true;
}

function showSection(sectionId) {
    var sections = document.getElementById('section');;
    sections.forEach(function(section) {
        section.classList.add('replace');
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('replace');
    }
}