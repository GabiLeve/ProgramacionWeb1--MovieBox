/* Index */

function iniciar_sesion() {
    
    const nombreUsuario = document.getElementById("nombres").value;
    const contrasenia = document.getElementById("contrasenia").value;

    
    if (nombreUsuario.length == 0) {
        alert("Tiene que escribir su nombre de usuario");
        document.getElementById("nombres").focus();
        return 0; // Previene el envío del formulario
    }

    
    if (contrasenia.length == 0) {
        alert("Tiene que escribir su contraseña");
        document.getElementById("contrasenia").focus();
        return 0; // Previene el envío del formulario
    }

     
    
     localStorage.setItem("nombreUsuario", nombreUsuario);
    
     

    
    document.getElementById("formulario").submit();

}


document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    iniciar_sesion(); 
});