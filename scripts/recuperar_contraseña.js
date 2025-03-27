/* boton deshabilitado*/ 
document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('enviar_recuperar_contrasenia');
    const inputs = document.querySelectorAll('.input_field');

    function validarCampos() {
        for (let input of inputs) {
            if (input.value.trim() === '') {
                enviarBtn.disabled = true;
                return;
            }
        }
        enviarBtn.disabled = false;
    }

    for (let input of inputs) {
        input.addEventListener('input', validarCampos);
    }
});



const form_recuperarContrasenia = document.getElementById('form_recuperar_contrasenia');
const botonesForm = document.getElementsByClassName("boton_recu_contraseña");

for(let boton of botonesForm){
    let botonEnviar = null;
    let botonCancelar = null;

    if(boton.innerHTML.toLowerCase().includes("enviar")){
        botonEnviar = boton;
        botonEnviar.addEventListener("click", function(){
            recuperar_contrasenia();
        })
    }

    if(boton.innerHTML.toLowerCase().includes("cancelar")){
        botonCancelar = boton;
        botonCancelar.addEventListener("click", function(){
            form_recuperarContrasenia.submit();

        })
    }


}

function recuperar_contrasenia() {
    const email_recuperarContrasenia = document.getElementById('email_recuperar_contrasenia');
    const usuario_recuperarContrasenia = document.getElementById('usuario_recuperar_contrasenia');

    // Corroboro que el email esté completo
    if (email_recuperarContrasenia.value.trim() === '') {
        alert("Complete el e-mail");
        return;
    }

    // Corroboro que el usuario esté completo
    if (usuario_recuperarContrasenia.value.trim() === '') {
        alert("Complete el usuario");
        return;
    }

    // Si ambos campos están completos, se envía el formulario
    form_recuperarContrasenia.submit();
}

form_recuperarContrasenia.addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario
});


