function calc() {
let anio = document.getElementById("anio").value;
let mes = document.getElementById("mes").value;
let dia = document.getElementById("dia").value;

let fecha = new Date(anio, mes, dia);
let res = fecha.getDay();
let diaSemana;
switch (res){
    case 0:
        diaSemana = "Domingo no es laboral";
        break;
    case 1:
        diaSemana = "Lunes sí es laboral";
        break;
    case 2:
        diaSemana = "Martes sí es laboral";
        break;
    case 3:
        diaSemana = "Miercoles sí es laboral";
            break;
    case 4:
        diaSemana = "Jueves sí es laboral";
        break;
    case 5:
        diaSemana = "Viernes sí es laboral";
        break;
    case 6:
        diaSemana = "Sábado no es laboral";
        break;
}

document.getElementById("resultado").value = diaSemana;
console.log(anio, mes, dia)
}