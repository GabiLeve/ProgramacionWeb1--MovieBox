/* Registrarse */

document.addEventListener('DOMContentLoaded', function () {
    const enviarBtn = document.getElementById('enviar');
    const inputs = document.querySelectorAll('.input_field');
    const radios = document.getElementsByName('medio_pago');
    const facil = document.getElementById('facil');
    const rapi = document.getElementById('rapi');
    const nroTarjeta = document.getElementById('nro_tarjeta');
    const codigo = document.getElementById('codigo');

    function validarCampos() {
        let todosCompletos = true;
        for (let input of inputs) {
            if (input.value.trim() === '' && !input.disabled) {
                todosCompletos = false;
                break;
            }
        }

        let metodoPagoSeleccionado = false;
        for (let radio of radios) {
            if (radio.checked) {
                metodoPagoSeleccionado = true;
                if (radio.value === 'tarjeta' && (nroTarjeta.value.trim() === '' || codigo.value.trim() === '')) {
                    todosCompletos = false;
                }
                if (radio.value === 'cupon' && !facil.checked && !rapi.checked) {
                    todosCompletos = false;
                }
            }
        }

        enviarBtn.disabled = !(todosCompletos && metodoPagoSeleccionado);
    }

    for (let input of inputs) {
        input.addEventListener('input', validarCampos);
    }

    for (let radio of radios) {
        radio.addEventListener('change', function () {
            nroTarjeta.disabled = radio.value !== 'tarjeta';
            codigo.disabled = radio.value !== 'tarjeta';
            facil.disabled = radio.value !== 'cupon';
            rapi.disabled = radio.value !== 'cupon';

            nroTarjeta.value = '';
            codigo.value = '';
            facil.checked = false;
            rapi.checked = false;

            validarCampos();
        });
    }

    facil.addEventListener('change', function () {
        if (facil.checked) {
            rapi.checked = false;
        }
        validarCampos();
    });

    rapi.addEventListener('change', function () {
        if (rapi.checked) {
            facil.checked = false;
        }
        validarCampos();
    });

    facil.addEventListener('change', validarCampos);
    rapi.addEventListener('change', validarCampos);
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const nombre_usuario = document.getElementById("nombre_usuario").value.trim();
    const contrasenia = document.getElementById("contrasenia").value.trim();
    const rep_contrasenia = document.getElementById("rep_contrasenia").value.trim();
    const codigo = document.getElementById("codigo").value.trim();
    const nro_tarjeta = document.getElementById("nro_tarjeta").value.trim();
    const opcion_de_pago = document.getElementsByName("medio_pago");
    let radio_seleccionado = false;

    const errores = [];

    if (!/^[a-zA-Z]+$/.test(nombre)) {
        errores.push("El nombre solo debe contener letras.");
    }

    if (!/^[a-zA-Z]+$/.test(apellido)) {
        errores.push("El apellido solo debe contener letras.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errores.push("El email no es válido.");
    }

    if (!/^[a-zA-Z0-9]+$/.test(nombre_usuario)) {
        errores.push("El nombre de usuario solo debe contener letras y números.");
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(contrasenia)) {
        errores.push("La contraseña debe tener al menos 8 caracteres, incluyendo 2 letras, 2 números y 2 caracteres especiales.");
    }

    if (contrasenia !== rep_contrasenia) {
        errores.push("Las contraseñas no coinciden.");
    }

    opcion_de_pago.forEach((item) => {
        if (item.checked) {
            radio_seleccionado = true;
        }
    });

    if (!radio_seleccionado) {
        errores.push("Tenés que seleccionar un medio de pago.");
    }

    opcion_de_pago.forEach((item) => {
        if (item.checked && item.value === 'tarjeta') {
            if (nro_tarjeta.length < 16 || nro_tarjeta.length > 19) {
                errores.push("El número de tarjeta debe tener entre 16 y 19 dígitos.");
            }else {
                const numeros = nro_tarjeta.slice(0, -1).split('').map(Number);
                const ultimoNumero = parseInt(nro_tarjeta.slice(-1));
                const sumaNumeros = numeros.reduce((acc, curr) => acc + curr, 0);
        
                if ((sumaNumeros % 2 === 0 && ultimoNumero % 2 === 0) || (sumaNumeros % 2 !== 0 && ultimoNumero % 2 !== 0)) {
                    errores.push("El último dígito de la tarjeta es inválido.");
                }
            }
            if (!/^[1-9]{3}$/.test(codigo)) {
                errores.push("El código de seguridad debe ser de 3 dígitos distintos de cero.");
            }
        } else if (item.checked && item.value === 'cupon') {
            if (!document.getElementById('facil').checked && !document.getElementById('rapi').checked) {
                errores.push("Debes seleccionar al menos un tipo de cupón de pago.");
            }
        }
    });

    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        window.location.href = "../index.html";
    }
}

function cancelarRegistro() {
    window.location.href = "../index.html";
}
