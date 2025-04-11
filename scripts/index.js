/* Index */

function iniciar_sesion() {
    
    const nombreUsuario = document.getElementById("nombres").value;
    const contrasenia = document.getElementById("contrasenia").value;
    
    if (nombreUsuario.length == 0) {
        alert("Tiene que escribir su nombre de usuario");
        document.getElementById("nombres").focus();
        return 0; 
    }

    if (contrasenia.length == 0) {
        alert("Tiene que escribir su contraseña");
        document.getElementById("contrasenia").focus();
        return 0; 
    }

     localStorage.setItem("nombreUsuario", nombreUsuario);
    
    document.getElementById("form").submit();
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    iniciar_sesion(); 
});