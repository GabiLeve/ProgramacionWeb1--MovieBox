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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_recuperar_contrasenia");
    const emailInput = document.getElementById("email_recuperar_contrasenia");
    const userInput = document.getElementById("usuario_recuperar_contrasenia");
    const enviarBtn = document.getElementById("enviar_recuperar_contrasenia");
   
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
  
      const email = emailInput.value.trim();
      const user = userInput.value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const passValida = user.length >= 6;
  
      let errores = [];  

      if (!emailValido) {
        errores.push("El email es incorrecto"); 
      }
  
      if (!passValida) {
        errores.push("La contraseña es incorrecta");
      }
      if (errores.length == 1) {
        alert(errores.join("\n")); 
      }
      if (errores.length == 2) {
        alert("Los datos ingresados son incorrectos"); 
      }
      if (errores.length == 0){
      alert("Verifique su bandeja de entrada para recuperar la contraseña");
      window.location.href = "../index.html";
    }
      });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const botonCancelar = document.querySelector('.boton_recu_contraseña:not(#enviar_recuperar_contrasenia)');
    
    botonCancelar.addEventListener('click', function() {
        
        window.location.href = "../index.html";
    });
});


