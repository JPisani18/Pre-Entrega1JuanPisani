alert('Hola, este es mi simulador interactivo');

let timensual = 0.90;
let tianual = 1.15;
let nombreUsuario;

while (true) {
    nombreUsuario = prompt('Ingrese su nombre:');
    let capitalIngresado = parseInt(prompt('Ingrese su capital'));
    let tasa = parseInt(prompt('Eliga el tipo de tasa: 0-Mensual 1-Anual'));

    console.log(tasa);

    if (tasa === 0) {
        alert('Plazo fijo mensual');
        alert(`Nombre: ${nombreUsuario}
        Capital ingresado: ${capitalIngresado}
        Tasa de interés: ${timensual}
        Saldo final: ${capitalIngresado + capitalIngresado * timensual}`);
    } else if (tasa === 1) {
        alert('Plazo fijo anual');
        alert(`Nombre: ${nombreUsuario}
        Capital ingresado: ${capitalIngresado}
        Tasa de interés: ${tianual}
        Saldo final: ${capitalIngresado + capitalIngresado * tianual}`);
    } else {
        alert('Opción inválida');
    }

    if (!confirm('¿Desea realizar otro plazo fijo?')) {
        break; 
    }
}

alert(`¡Muchas gracias ${nombreUsuario} por usar mi simulador!`);

