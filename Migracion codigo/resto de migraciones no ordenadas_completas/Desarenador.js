document.getElementById("BtnCaptacionConvencionalDesarenador").addEventListener("click", function () {
    let m, ad, vd, T, d, Bd, w;
    let hc, ctfd, dc, carga_Hvr, P4, Long_Lvert, b;
    let ctpv, hvert, Ltc, alfa, cttri, Hseccion;
    let ctsc, Htotal, r, vf, k1, bc, Qd, jc, Rl;
    let i;
    let ctad, ctvr, cota4, Lpr, Vvr, bvr, Lactiv, Ltr, hs;

    const tbcaudaldesarenador = document.getElementById("tbcaudaldesarenador");
    const Tbvd = document.getElementById("Tbvd");
    const tbm = document.getElementById("tbm");
    const Tbjc = document.getElementById("Tbjc");
    const tbbc = document.getElementById("tbbc");
    const tbdc = document.getElementById("tbdc");
    const Tbxc1 = document.getElementById("Tbxc1");
    const Tbxc2 = document.getElementById("Tbxc2");
    const Tbyc1 = document.getElementById("Tbyc1");
    const Tbyc2 = document.getElementById("Tbyc2");
    const tbadesarenador = document.getElementById("tbadesarenador");
    const ConDesCombo = document.getElementById("ConDesCombo");
    const ConDesPendiente = document.getElementById("ConDesPendiente");

    if (Tbxc1.value !== "" && Tbxc2.value !== "" && Tbyc1.value !== "" && Tbyc2.value !== "" &&
        tbcaudaldesarenador.value !== "" && Tbvd.value !== "" && tbm.value !== "" &&
        Tbjc.value !== "" && tbbc.value !== "" && tbdc.value !== "" && tbadesarenador.value !== "") {

        tbcaudaldesarenador.style.backgroundColor = "white";
        Tbvd.style.backgroundColor = "white";
        tbm.style.backgroundColor = "white";
        Tbjc.style.backgroundColor = "white";
        tbbc.style.backgroundColor = "white";
        tbdc.style.backgroundColor = "white";
        Tbxc1.style.backgroundColor = "white";
        Tbyc1.style.backgroundColor = "white";
        Tbxc2.style.backgroundColor = "white";
        Tbyc2.style.backgroundColor = "white";
        tbadesarenador.style.backgroundColor = "white";

        // lectura de datos
        vd = parseFloat(Tbvd.value);
        jc = parseFloat(Tbjc.value) / 100;
        Qd = parseFloat(tbcaudaldesarenador.value);
        bc = parseFloat(tbbc.value);
        dc = parseFloat(tbdc.value);

        let vv = [
            0.178, 0.692, 1.56, 2.16, 2.7, 3.24, 3.78, 4.32, 4.86, 5.4, 5.94,
            6.48, 7.32, 8.07, 9.44, 15.29, 19.25, 24.9
        ];

        i = ConDesCombo.selectedIndex;

        switch (ConDesPendiente.selectedIndex) {
            case 0:
                Rl = 1;
                break;
            case 1:
                Rl = 2;
                break;
            case 2:
                Rl = 3;
                break;
            case 3:
                Rl = 4;
                break;
            case 4:
                Rl = 5;
                break;
        }

        m = parseFloat(tbm.value);
        w = vv[i] / 100; // en metros

        // sección en la cámara desarenadora
        ad = Qd / vd;

        // calado a la entrada del desarenador
        d = Math.sqrt(ad / (Rl + m));

        if ((d - Math.floor(d)) < 0.05) {
            d = Math.floor(d) + 0.05;
        } else if ((d - Math.floor(d)) > 0.05 && (d - Math.floor(d)) < 0.1) {
            d = Math.floor(d) + 0.1;
        } else if ((d - Math.floor(d)) > 0.1 && (d - Math.floor(d)) < 0.15) {
            d = Math.floor(d) + 0.15;
        } else if ((d - Math.floor(d)) > 0.15 && (d - Math.floor(d)) < 0.2) {
            d = Math.floor(d) + 0.2;
        } else if ((d - Math.floor(d)) > 0.2 && (d - Math.floor(d)) < 0.25) {
            d = Math.floor(d) + 0.25;
        } else if ((d - Math.floor(d)) > 0.25 && (d - Math.floor(d)) < 0.3) {
            d = Math.floor(d) + 0.3;
        } else if ((d - Math.floor(d)) > 0.3 && (d - Math.floor(d)) < 0.35) {
            d = Math.floor(d) + 0.35;
        } else if ((d - Math.floor(d)) > 0.35 && (d - Math.floor(d)) < 0.4) {
            d = Math.floor(d) + 0.4;
        } else if ((d - Math.floor(d)) > 0.4 && (d - Math.floor(d)) < 0.45) {
            d = Math.floor(d) + 0.45;
        } else if ((d - Math.floor(d)) > 0.45 && (d - Math.floor(d)) < 0.5) {
            d = Math.floor(d) + 0.5;
        } else if ((d - Math.floor(d)) > 0.5 && (d - Math.floor(d)) < 0.55) {
            d = Math.floor(d) + 0.55;
        } else if ((d - Math.floor(d)) > 0.55 && (d - Math.floor(d)) < 0.6) {
            d = Math.floor(d) + 0.6;
        } else if ((d - Math.floor(d)) > 0.6 && (d - Math.floor(d)) < 0.65) {
            d = Math.floor(d) + 0.65;
        } else if ((d - Math.floor(d)) > 0.65 && (d - Math.floor(d)) < 0.7) {
            d = Math.floor(d) + 0.7;
        } else if ((d - Math.floor(d)) > 0.7 && (d - Math.floor(d)) < 0.75) {
            d = Math.floor(d) + 0.75;
        } else if ((d - Math.floor(d)) > 0.75 && (d - Math.floor(d)) < 0.8) {
            d = Math.floor(d) + 0.8;
        } else if ((d - Math.floor(d)) > 0.8 && (d - Math.floor(d)) < 0.85) {
            d = Math.floor(d) + 0.85;
        } else if ((d - Math.floor(d)) > 0.85 && (d - Math.floor(d)) < 0.9) {
            d = Math.floor(d) + 0.9;
        } else if ((d - Math.floor(d)) > 0.9 && (d - Math.floor(d)) < 0.95) {
            d = Math.floor(d) + 0.95;
        } else {
            d = Math.floor(d) + 1;
        }
    }
// Calado a la entrada del desarenador
    d = Math.round(Math.sqrt(ad / (Rl + m)) * 100) / 100;


    // Ancho del fondo de la cámara desarenadora
    b = Rl * d;

    // Altura de seguridad
    hs = 0.2;

    // Altura de seccion
    Hseccion = d + hs;

    if ((Hseccion - Math.floor(Hseccion)) < 0.05) {
        Hseccion = Math.floor(Hseccion) + 0.05;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.05 && (Hseccion - Math.floor(Hseccion)) < 0.1) {
        Hseccion = Math.floor(Hseccion) + 0.1;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.1 && (Hseccion - Math.floor(Hseccion)) < 0.15) {
        Hseccion = Math.floor(Hseccion) + 0.15;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.15 && (Hseccion - Math.floor(Hseccion)) < 0.2) {
        Hseccion = Math.floor(Hseccion) + 0.2;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.2 && (Hseccion - Math.floor(Hseccion)) < 0.25) {
        Hseccion = Math.floor(Hseccion) + 0.25;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.25 && (Hseccion - Math.floor(Hseccion)) < 0.3) {
        Hseccion = Math.floor(Hseccion) + 0.3;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.3 && (Hseccion - Math.floor(Hseccion)) < 0.35) {
        Hseccion = Math.floor(Hseccion) + 0.35;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.35 && (Hseccion - Math.floor(Hseccion)) < 0.4) {
        Hseccion = Math.floor(Hseccion) + 0.4;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.4 && (Hseccion - Math.floor(Hseccion)) < 0.45) {
        Hseccion = Math.floor(Hseccion) + 0.45;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.45 && (Hseccion - Math.floor(Hseccion)) < 0.5) {
        Hseccion = Math.floor(Hseccion) + 0.5;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.5 && (Hseccion - Math.floor(Hseccion)) < 0.55) {
        Hseccion = Math.floor(Hseccion) + 0.55;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.55 && (Hseccion - Math.floor(Hseccion)) < 0.6) {
        Hseccion = Math.floor(Hseccion) + 0.6;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.6 && (Hseccion - Math.floor(Hseccion)) < 0.65) {
        Hseccion = Math.floor(Hseccion) + 0.65;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.65 && (Hseccion - Math.floor(Hseccion)) < 0.7) {
        Hseccion = Math.floor(Hseccion) + 0.7;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.7 && (Hseccion - Math.floor(Hseccion)) < 0.75) {
        Hseccion = Math.floor(Hseccion) + 0.75;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.75 && (Hseccion - Math.floor(Hseccion)) < 0.8) {
        Hseccion = Math.floor(Hseccion) + 0.8;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.8 && (Hseccion - Math.floor(Hseccion)) < 0.85) {
        Hseccion = Math.floor(Hseccion) + 0.85;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.85 && (Hseccion - Math.floor(Hseccion)) < 0.9) {
        Hseccion = Math.floor(Hseccion) + 0.9;
    } else if ((Hseccion - Math.floor(Hseccion)) > 0.9 && (Hseccion - Math.floor(Hseccion)) < 0.95) {
        Hseccion = Math.floor(Hseccion) + 0.95;
    } else {
        Hseccion = Math.floor(Hseccion) + 1;
    }

    // Ancho de la superficie libre en la cámara desarenadora
    Bd = b + 2 * m * d;

    // Ancho libre de la cámara desarenadora
    T = Bd + 2 * m * Hseccion;

    // Longitud de la transición
    Ltr = (T - bc) / (2 * Math.tan((12.5 * Math.PI) / 180));

    // Longitud activa del desarenador
    Lactiv = 1.3 * vd * d / w;
    carga_Hvr = document.getElementById('tbdc').value;

    // Ancho del vertedero
    let bvr1 = Qd / (2 * Math.pow(0.25, 3 / 2));
    let bvr2 = Qd / (2 * Math.pow(carga_Hvr, 3 / 2));

    // Calcular Vvr
Vvr = 2 * Math.pow(carga_Hvr,0.5);

// Condición para Lpr
if (bvr2 < T) {
    Lpr = 0;
    // Salir del resto del código en lugar de usar GoTo
} else {
    // Cálculo y diseño del vertedero de paso
    let k1 = 180 * bvr2 / (Math.PI * T);
    let alfa = 0;
    let vf = 0;

    while (true) {
        alfa += 0.001;
        vf = alfa / (1 - Math.cos(3.14159 * alfa / 180)) - k1;
        
        if (alfa > 90) {
            alfa = 90;
            break; // Salir del bucle
        }
    
        if (vf < 0.001) {
            break; // Salir del bucle si vf es menor que 0.001
        }
    }
    

    // Radio de la curva
    let r = (180 * bvr2) / (Math.PI * alfa);

    // Longitud de la proyección del vertedero circular
    Lpr = r * Math.sin(alfa * Math.PI / 180);
    Lpr = (bvr2 + Lpr) / 2;

    // Longitud total de la cámara
    let Ltc = Ltr + Lactiv + Lpr;

    // Calculo de dzfondo
    let dzfondo = Ltc * jc;

    let tbdeltaz = document.getElementById('tbdeltaz');
    tbdeltaz.style.display = 'block';
    tbdeltaz.style.color = 'red';
    tbdeltaz.value = dzfondo.toFixed(4);

    let tblongcaid = document.getElementById('tblongcaid');
    tblongcaid.style.display = 'block';
    tblongcaid.style.color = 'red';
    tblongcaid.value = (Lactiv + Lpr).toFixed(4);

    // Profundidad total en la cámara respecto del borde
    let Htotal = d + dzfondo;
    let tbprofdes = document.getElementById('tbprofdes');
    tbprofdes.style.display = 'block';
    tbprofdes.style.color = 'red';
    tbprofdes.value = Htotal.toFixed(4);

    // Altura desde el fondo hasta el vertedero
    let tbaltagua = document.getElementById('tbaltagua');
    tbaltagua.style.display = 'block';
    tbaltagua.style.color = 'red';
    tbaltagua.value = (Htotal - carga_Hvr).toFixed(4);
    // Asignar valores a las variables
let ctvr = ctfd + hvert;
let ctsc = ctfd + Htotal;
let ctad = cttri + d;
let ctpv = cttri;

// Mostrar valores en los campos de entrada y cambiar el color del texto
document.getElementById('Tbw').value = w.toFixed(4);
document.getElementById('Tbw').style.color = 'red';

document.getElementById('Tbbvr').value = bvr2.toFixed(4);
document.getElementById('Tbbvr').style.color = 'red';




// Asignar valores a los campos de entrada y aplicar color rojo al texto
document.getElementById('TbLtr').value = Ltr.toFixed(4);
document.getElementById('TbLtr').style.color = 'red';

document.getElementById('TbLactiv').value = Lactiv.toFixed(4);
document.getElementById('TbLactiv').style.color = 'red';

document.getElementById('TbLpr').value = Lpr.toFixed(4);
document.getElementById('TbLpr').style.color = 'red';

document.getElementById('TbLtc').value = Ltc.toFixed(4);
document.getElementById('TbLtc').style.color = 'red';
let tbadesarenador = document.getElementById('tbadesarenador').value;

// Convierte el valor a un número (si es necesario)
let adesarenador = parseFloat(tbadesarenador);
// Calcular valores adicionales
let ao = bc * adesarenador;
let HcargH = (Htotal) - (adesarenador / 2);
let Qps = 0.6 * ao * Math.pow((2 * 9.81 * HcargH),0.5);

// Actualizar los campos con los valores calculados
document.getElementById('tbcargaagua').style.display = 'block';
document.getElementById('tbcargaagua').value = HcargH.toFixed(4);
document.getElementById('tbcargaagua').style.color = 'red';

let vs = Qps / ao;

document.getElementById('tbqcompuerta').style.display = 'block';
document.getElementById('tbqcompuerta').value = Qps.toFixed(4);
document.getElementById('tbqcompuerta').style.color = 'red';

// Verificar condición y actualizar la etiqueta
if (Qps > (2 * Qd)) {
    document.getElementById('Label134').textContent = 'Cumple Qps>2*Qd';
} else {
    document.getElementById('Label134').textContent = 'No Cumple Qps>2*Qd';
}
document.getElementById('Label134').style.display = 'block';
document.getElementById('Label134').style.color = 'red';

document.getElementById('tbvsdesarenador').style.display = 'block';
document.getElementById('tbvsdesarenador').value = vs.toFixed(4);
document.getElementById('tbvsdesarenador').style.color = 'red';

document.getElementById('tbvelsedim').style.display = 'block';
document.getElementById('tbvelsedim').value = w.toFixed(4);
document.getElementById('tbvelsedim').style.color = 'red';

document.getElementById('tbvelpasovert').style.display = 'block';
document.getElementById('tbvelpasovert').value = Vvr.toFixed(4);
document.getElementById('tbvelpasovert').style.color = 'red';

document.getElementById('tbradiocurv').style.display = 'block';
document.getElementById('tbradiocurv').value = r.toFixed(4);
document.getElementById('tbradiocurv').style.color = 'red';

document.getElementById('tbangcurva').style.display = 'block';
document.getElementById('tbangcurva').value = alfa.toFixed(4);
document.getElementById('tbangcurva').style.color = 'red';

document.getElementById('tbsecccamar').style.display = 'block';
document.getElementById('tbsecccamar').value = ad.toFixed(4);
document.getElementById('tbsecccamar').style.color = 'red';

document.getElementById('tbcaladcamara').style.display = 'block';
document.getElementById('tbcaladcamara').value = d.toFixed(4);
document.getElementById('tbcaladcamara').style.color = 'red';

document.getElementById('tbanchcamara').style.display = 'block';
document.getElementById('tbanchcamara').value = b.toFixed(4);
document.getElementById('tbanchcamara').style.color = 'red';

document.getElementById('tbanchsupcamar').style.display = 'block';
document.getElementById('tbanchsupcamar').value = Bd.toFixed(4);
document.getElementById('tbanchsupcamar').style.color = 'red';

document.getElementById('tbaltseccion').style.display = 'block';
document.getElementById('tbaltseccion').value = Hseccion.toFixed(4);
document.getElementById('tbaltseccion').style.color = 'red';
}
const xc1 = parseFloat(document.getElementById('Tbxc1').value);
const xc2 = parseFloat(document.getElementById('Tbxc2').value);
const yc1 = parseFloat(document.getElementById('Tbyc1').value);
const yc2 = parseFloat(document.getElementById('Tbyc2').value);


// Calcular R1, R2, Y1, Y2
const R1 = ((xc1 ** 2) + (yc1 ** 2)) / (2 * xc1);
const R2 = ((xc2 ** 2) + (yc2 ** 2)) / (2 * xc2);
const Y1 = Math.sqrt(2 * R1 * xc1 - (xc1 ** 2));
const Y2 = Math.sqrt(2 * R2 * xc2 - (xc2 ** 2));

// Mostrar el GridView
const table = document.getElementById('GridView1');
table.style.display = 'table';

// Obtener el cuerpo de la tabla
const tableBody = document.getElementById('tableBody');
tableBody.innerHTML = ''; // Limpiar tabla

// Array para almacenar los datos
let numLineasFileInput = 0;
const arrDatosInputFileX = [];
const arrDatosInputFileY = [];

// Calcular y llenar la tabla
for (let jj = 0.1; jj <= Ltr / 2; jj += 0.1) {
    const coordy = Math.sqrt(2 * R1 * jj - (jj ** 2));
    
    // Redondear
    const filaX = jj.toFixed(4);
    const filaY = coordy.toFixed(4);

    // Almacenar datos para el gráfico
    arrDatosInputFileX[numLineasFileInput] = jj;
    arrDatosInputFileY[numLineasFileInput] = coordy;
    numLineasFileInput++;

    // Crear nueva fila en la tabla
    const row = document.createElement('tr');
    const cellX = document.createElement('td');
    const cellY = document.createElement('td');
    cellX.textContent = filaX;
    cellY.textContent = filaY;
    row.appendChild(cellX);
    row.appendChild(cellY);
    tableBody.appendChild(row);
}

});

function presetValues() {
    document.getElementById("tbcaudaldesarenador").value = 3.1;
    document.getElementById("Tbvd").value = 0.31;
    document.getElementById("tbm").value = 0.5;
    document.getElementById("tbbc").value = 1.5;
    document.getElementById("Tbjc").value = 3;
    document.getElementById("tbdc").value = 0.25;
    document.getElementById("tbadesarenador").value = 0.8;
    document.getElementById("Tbxc1").value = 1.5;
    document.getElementById("Tbxc2").value = 0.83;
    document.getElementById("Tbyc1").value = 6.5;
    document.getElementById("Tbyc2").value = 4.35;

    document.getElementById("ConDesCombo").value = 9;
    document.getElementById("ConDesPendiente").value = 1;
}
function clearFields() {
    // Limpiar y restablecer los campos de texto
    document.getElementById('tbcaudaldesarenador').value = '';
    document.getElementById('Tbvd').value = '';
    document.getElementById('tbm').value = '';
    document.getElementById('Tbjc').value = '';
    document.getElementById('tbbc').value = '';
    document.getElementById('tbdc').value = '';
    document.getElementById('tbadesarenador').value = '';
    document.getElementById('Tbxc1').value = '';
    document.getElementById('Tbyc1').value = '';
    document.getElementById('Tbxc2').value = '';
    document.getElementById('Tbyc2').value = '';

    // Restablecer valores de los select
    document.getElementById('ConDesCombo').value = '0';
    document.getElementById('ConDesPendiente').value = '0';

    // Ocultar elementos
    const elementsToHide = [
        'tbbpaso', 'Tbw', 'Tbad', 'Tbbvr', 'Tbalfa', 'Tbr', 'Label3333280', 'GridView1',
        'Label3333267', 'Label3333268', 'Label3333269', 'Label3333270', 'Label3333271',
        'tblongcaid', 'tbprofdes', 'tbaltagua', 'tbdeltaz', 'Tbvvr', 'Tbd', 'Tbb', 
        'Tbbd', 'TbHseccion', 'tbzcanaldesr', 'Label11', 'Label131', 'Image6', 
        'Label3333266', 'TbLtr', 'TbLactiv', 'TbLpr', 'TbLtc', 'tbcargaagua', 
        'tbqcompuerta', 'tbvsdesarenador', 'tbvelsedim', 'tbvelpasovert', 'tbradiocurv', 
        'tbangcurva', 'tbsecccamar', 'tbcaladcamara', 'tbanchcamara', 
        'tbanchsupcamar', 'tbaltseccion', 'Label111', 'Label136', 'Label137', 
        'Label12', 'Label4', 'Label5', 'Label6', 'Label17', 'Label140', 
        'Label141', 'Label142', 'Label143', 'Label144', 'Label145', 'Label146',
        'Label138', 'Label132', 'Label135', 'Label134'
    ];

    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none';
        }
    });
}


// Añadir un evento para llamar a esta función
document.getElementById("Button7").addEventListener("click", presetValues);
