// Import statements (if needed, not directly equivalent in JavaScript)

// Initialize arrays and DataTable-like structures
let fila2 = new Array(2);
let Tabla2 = [];

let fila3 = new Array(8);
let Tabla3 = [];

let fila4 = new Array(6);
let Tabla4 = [];

let fila5 = new Array(9);
let Tabla5 = [];

let fila6 = new Array(9);
let Tabla6 = [];

let fila7 = new Array(9);
let Tabla7 = [];

let fila8 = new Array(8);
let Tabla8 = [];

let fila9 = new Array(6);
let Tabla9 = [];

let fila10 = new Array(7);
let Tabla10 = [];

let fila11 = new Array(11);
let Tabla11 = [];

let fila12 = new Array(11);
let Tabla12 = [];

let fila13 = new Array(10);
let Tabla13 = [];

let fila14 = new Array(19);
let Tabla14 = [];

let filaanclaj = new Array(8);
let Tablaanclaj = [];

let filaaltvol = new Array(8);
let Tablaaltvol = [];
// Declaración de variables globales
let legendBox;  // Variable para la leyenda (puede ser un objeto en JavaScript dependiendo de la implementación)
let intAnchoGraficas = 500;
let intAltoGraficas = 420;
let intColorFondo = 0xEFEFFF;  // Color en formato hexadecimal

let colores = [0xFF0000, 0x22AAFF, 0x336622, 0x44CCAA, 0x551188, 0x66EE44, 0x77FF77, 0x8899AA, 0x9944BB, 0xAA8822, 0xDD8866, 0x22EEEE, 0xDDAABB, 0x0];  // Arreglo de colores en formato hexadecimal

let intAddLegend_Coord_x = 400;
let intAddLegend_Coord_y = 120;
let bolAddLegend_Bool = false;
let strAddLegend_Font = "Arial Rounded MT Bold";
let intAddLegend_FontSize = 8;

// Declaración de objetos XYChart (similares a clases en JavaScript)
let XYChart_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChart2_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChart3_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChartalt_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChartvol_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);

// Arreglos para almacenamiento de datos (JavaScript usa arreglos dinámicos)
let arrDatosInputFileX = new Array(6);
let arrDatosInputFileY = new Array(6);

let arrDatosInputFileXalt = new Array(46);
let arrDatosInputFileYalt = new Array(46);
let arrDatosInputFileXvol = new Array(46);
let arrDatosInputFileYvol = new Array(46);

let arrDatosInputFileX2 = new Array(6);
let arrDatosInputFileY2 = new Array(6);

let arrDatosInputFileX3 = new Array(6);
let arrDatosInputFileY3 = new Array(6);

let numLineasFileInput;  // Declaración de variables, se inicializarán dinámicamente según la lógica del programa
let numLineasFileInput2;
let numLineasFileInput3;
let numLineasFileInput4;
let numLineasFileInputalt;
let numLineasFileInputvol;

// Declaración de otras variables (JavaScript no necesita la palabra clave 'Dim')
let Bsifon, CTDiseñoCauce, LTDiseñoCauce, Zsifon, YNormalsifon;
let PTDiseñoCauce, TTDiseñoCauce, ATDiseñoCauce, FTDiseñoCauce;

let Qsifon;
let Ssifon;
let Nsifon;
let expb, coefk, expbvol, coefkvol;

let X1, Y2, Y3, Y1, X, A1, P1, M, R1, V, C, D, F, NT;
let fila = new Array(10);  // Arreglo para fila de datos

let i, A, P, R, T, Y, Q1;
let SE, SE1, SE2;
let Tramo, L, Dist, Longitudtubo, alfa, Kd, Hcd, Hcdacum, Hfr, Hfracum;
let DELTAE, DELTAX, F1, F2;
let Ndec;
let YO, FO, S1, N1, D1, DELTX;

let Tabla = [];  // Objeto para simular una tabla de datos (puede ser un arreglo de objetos según la necesidad)
let filaTabla;

let Y1bocatoma, Ybocatoma, Xbocatoma;

let altparament, zbocatoma, altcargagarrib, zfbocatoma;
let ltaasumido, H3bocatoma, cargsobcresta, cargsobcresta2;

let xcreaguer = new Array(51);
let ycreaguer = new Array(51);

let numtramos;

// Función para manejar el evento click del botón Button1
// cuneta.js

// cuneta.js

function Button1_Click() {
    var prof = parseFloat(document.getElementById("Tbprof").value);
    var taliz = parseFloat(document.getElementById("Tbtalizq").value);
    var talder = parseFloat(document.getElementById("Tbtalder").value);
    var bordlib = parseFloat(document.getElementById("Tbbordlibre").value);
    var pendlong = parseFloat(document.getElementById("Tbpend").value);
    var rugos = parseFloat(document.getElementById("Tbcoefrug").value);
    var supdren = parseFloat(document.getElementById("Tbsupdren").value);
    var intens = parseFloat(document.getElementById("Tbintensidad").value);
    var coefC = parseFloat(document.getElementById("TbcoefC").value);

    var Ndec = 4; // Valor por defecto, ajustar según tu lógica
    var TablasC = []; // Aquí podrías definir o cargar tu tabla de coeficientes C

    if (!isNaN(prof) && !isNaN(taliz) && !isNaN(talder) && !isNaN(bordlib) && !isNaN(pendlong) &&
        !isNaN(rugos) && !isNaN(supdren) && !isNaN(intens) && !isNaN(coefC)) {

        // Restablecer el color de fondo de los campos
        var inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(function (input) {
            input.style.backgroundColor = 'white';
        });

        // Lógica para determinar Ndec y coefC según tus requerimientos

        var secccuneta = ((taliz + talder) * (Math.pow(prof, 2))) / 2;
        var perimcuneta = (Math.sqrt(1 + Math.pow(taliz, 2)) + Math.sqrt(1 + Math.pow(talder, 2)));
        var radhidra = secccuneta / perimcuneta;
        var Qcuneta = (secccuneta * Math.pow(radhidra, 2 / 3) * Math.sqrt(pendlong / 100)) / rugos;
        var Vcuneta = Qcuneta / secccuneta;

        // Mostrar los resultados en los campos de texto
        document.getElementById("secccuneta").value = secccuneta.toFixed(Ndec);
        document.getElementById("perimcuneta").value = perimcuneta.toFixed(Ndec);
        document.getElementById("radhidra").value = radhidra.toFixed(Ndec);
        document.getElementById("Qcunetarac").value = Qcuneta.toFixed(Ndec);
        document.getElementById("Vcuneta").value = Vcuneta.toFixed(Ndec);

        var Qcunetarac = coefC * intens * supdren / 360;

        document.getElementById("tbqmetrac").value = Qcunetarac.toFixed(Ndec);



        // Lógica para comparar y mostrar mensajes según los resultados
        var Label10 = document.getElementById("Label10");
        var Label95 = document.getElementById("Label95");

        if (Qcuneta > Qcunetarac) {
            Label10.textContent = "Ya que el caudal requerido es menor al diseñado, entonces la cuneta";
            Label95.textContent = "se encuentra bien diseñada";
        } else {
            Label10.textContent = "Ya que el caudal requerido es mayor al diseñado, entonces la cuneta";
            Label95.textContent = "no se encuentra bien diseñada";
        }

        // Mensaje adicional de conclusión
        var conclusion = "El caudal que se requiere transportar es de (mét. racional) (m³/s) = " + Qcuneta.toFixed(Ndec);
        var conclusionElement = document.createElement('p');
        conclusionElement.textContent = conclusion;
        conclusionElement.style.color = 'blue'; // Puedes ajustar estilos según tu diseño
        console.log("La cuneta está diseñada para un caudal de (m³/s) =  " + Qcuneta.toFixed(Ndec))
        console.log("El caudal que se requiere transportar es de (mét. racional) (m³/s) = " + Qcunetarac.toFixed(Ndec))

        // Insertar el mensaje después de los resultados
        var resultsDiv = document.querySelector('.result');
        resultsDiv.appendChild(conclusionElement);





    } else {
        // Resaltar los campos requeridos que no han sido llenados
        var inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(function (input) {
            if (input.value === "") {
                input.style.backgroundColor = 'red';
            }
        });
    }
}



// Función para manejar el evento click del botón Button6 (resetear valores)
function button6Click() {
    // Asignación de valores predeterminados a los controles
    document.getElementById('Tbprof').value = 0.4;
    document.getElementById('Tbtalizq').value = 0.5;
    document.getElementById('Tbtalder').value = 2;
    document.getElementById('Tbbordlibre').value = 0.1;
    document.getElementById('Tbpend').value = 6.5;
    document.getElementById('Tbcoefrug').value = 0.016;
    document.getElementById('Tbsupdren').value = 2;
    document.getElementById('Tbintensidad').value = 110.99;
    document.getElementById('TbcoefC').value = 0.55;
}

// Función para limpiar los colores de fondo de los campos de entrada
function clearInputBackgrounds() {
    document.getElementById('Tbcoefrug').style.backgroundColor = 'white';
    document.getElementById('Tbprof').style.backgroundColor = 'white';
    document.getElementById('Tbtalizq').style.backgroundColor = 'white';
    document.getElementById('Tbtalder').style.backgroundColor = 'white';
    document.getElementById('Tbbordlibre').style.backgroundColor = 'white';
    document.getElementById('Tbpend').style.backgroundColor = 'white';
    document.getElementById('Tbsupdren').style.backgroundColor = 'white';
    document.getElementById('Tbintensidad').style.backgroundColor = 'white';
    document.getElementById('TbcoefC').style.backgroundColor = 'white';
}

// Función para resaltar en rojo los campos vacíos
function highlightEmptyFields() {
    if (document.getElementById('Tbcoefrug').value === "") {
        document.getElementById('Tbcoefrug').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbprof').value === "") {
        document.getElementById('Tbprof').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbtalizq').value === "") {
        document.getElementById('Tbtalizq').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbtalder').value === "") {
        document.getElementById('Tbtalder').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbbordlibre').value === "") {
        document.getElementById('Tbbordlibre').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbpend').value === "") {
        document.getElementById('Tbpend').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbsupdren').value === "") {
        document.getElementById('Tbsupdren').style.backgroundColor = 'red';
    }
    if (document.getElementById('Tbintensidad').value === "") {
        document.getElementById('Tbintensidad').style.backgroundColor = 'red';
    }
    if (document.getElementById('TbcoefC').value === "") {
        document.getElementById('TbcoefC').style.backgroundColor = 'red';
    }
}

// Función para mostrar resultados en los campos correspondientes
function showResultFields(secccuneta, perimcuneta, radhidra, Qcuneta, Vcuneta) {
    document.getElementById('tbsecccunet').textContent = secccuneta.toFixed(Ndec);
    document.getElementById('tbpermoj').textContent = perimcuneta.toFixed(Ndec);
    document.getElementById('tbradhid').textContent = radhidra.toFixed(Ndec);
    document.getElementById('tbqcuneta').textContent = Qcuneta.toFixed(Ndec);
    document.getElementById('tbVcuneta').textContent = Vcuneta.toFixed(Ndec);
}

// Función para mostrar Qcunetarac en el campo correspondiente
function showQcunetarac(Qcunetarac) {
    document.getElementById('tbqmetrac').textContent = Qcunetarac.toFixed(Ndec);
}

// Función para evaluar el diseño de la cuneta y mostrar el resultado
function evaluateCunetaDesign(Qcuneta, Qcunetarac) {
    let label10 = document.getElementById('Label10');
    let label95 = document.getElementById('Label95');
    let TbQcun = document.getElementById('TbQcun');
    let TbQcun2 = document.getElementById('TbQcun2');

    if (Qcuneta > Qcunetarac) {
        label10.textContent = "Ya que el caudal requerido es menor al diseñado, entonces la cuneta";
        label95.textContent = "se encuentra bien diseñada";
    } else {
        label10.textContent = "Ya que el caudal requerido es mayor al diseñado, entonces la cuneta";
        label95.textContent = "no se encuentra bien diseñada";
    }

    // Mostrar elementos visibles
    label10.style.display = 'block';
    label95.style.display = 'block';
    TbQcun.style.display = 'block';
    TbQcun2.style.display = 'block';
}
// Función para limpiar el formulario y restablecer estilos
function clearForm() {
    document.getElementById("Tbprof").value = "";
    document.getElementById("Tbtalizq").value = "";
    document.getElementById("Tbtalder").value = "";
    document.getElementById("Tbbordlibre").value = "";
    document.getElementById("Tbpend").value = "";
    document.getElementById("Tbcoefrug").value = "";
    document.getElementById("Tbsupdren").value = "";
    document.getElementById("Tbintensidad").value = "";
    document.getElementById("TbcoefC").value = "";

    document.getElementById("Tbprof").style.backgroundColor = "white";
    document.getElementById("Tbtalizq").style.backgroundColor = "white";
    document.getElementById("Tbtalder").style.backgroundColor = "white";
    document.getElementById("Tbbordlibre").style.backgroundColor = "white";
    document.getElementById("Tbpend").style.backgroundColor = "white";
    document.getElementById("Tbcoefrug").style.backgroundColor = "white";
    document.getElementById("Tbsupdren").style.backgroundColor = "white";
    document.getElementById("Tbintensidad").style.backgroundColor = "white";
    document.getElementById("TbcoefC").style.backgroundColor = "white";

    // Ocultar elementos
    hideElements();
}

// Función para ocultar elementos visuales
function hideElements() {
    document.getElementById("tbsecccunet").style.display = "none";
    document.getElementById("tbpermoj").style.display = "none";
    document.getElementById("tbradhid").style.display = "none";
    document.getElementById("tbqcuneta").style.display = "none";
    document.getElementById("tbVcuneta").style.display = "none";
    document.getElementById("tbqmetrac").style.display = "none";
    document.getElementById("TbQcun").style.display = "none";
    document.getElementById("TbQcun2").style.display = "none";

    document.getElementById("Label7").style.display = "none";
    document.getElementById("Label3333304").style.display = "none";
    document.getElementById("Label10").style.display = "none";
    document.getElementById("Label95").style.display = "none";
    document.getElementById("Label3333309").style.display = "none";
    document.getElementById("Label3333310").style.display = "none";
    document.getElementById("Label3333311").style.display = "none";
    document.getElementById("Label3333312").style.display = "none";
    document.getElementById("Label3333313").style.display = "none";
    document.getElementById("Label3333314").style.display = "none";
    document.getElementById("Label3333315").style.display = "none";
    document.getElementById("Label3333316").style.display = "none";
}

// Asignar evento al botón Limpiar Formulario
document.getElementById("Button10").addEventListener("click", function () {
    clearForm();
});

