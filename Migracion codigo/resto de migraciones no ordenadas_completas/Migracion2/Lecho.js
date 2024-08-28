let Tabla = {
    Columns: ["Diám. material (pulg)", "Diám. del material (cm)", "Espesor de la capa (cm)", "Pérdidas hf (cm)"],
    Rows: []
};


function calculate() {
    // Variables
    let qdlech, alvertazud, grava, qmxlech, inflech, azudlech;
    let diamcondprinc, longcondprinc, diamcondlateral;
    let laminaagua, numcond, Areasistfilt, Basesistinflt;
    let arearec, areaorif, sumareaorif, vrec, areacond, caudalcond, velcond;
    let numanillos, longcondlat, sepcondlat, numorificios;
    let accesorio1, accesorio2;
    let Ndec;

    // Obtención de valores
    qdlech = parseFloat(document.getElementById('tbqdlech').value) / 1000;
    qmxlech = parseFloat(document.getElementById('tbqmxlech').value);
    diamcondlateral = parseFloat(document.getElementById('tbdiamcondlateral').value);
    diamcondprinc = parseFloat(document.getElementById('tbdiamcondprinc').value);
    inflech = parseFloat(document.getElementById('tbinflech').value);
    azudlech = parseFloat(document.getElementById('tbazudlech').value);
    alvertazud = parseFloat(document.getElementById('tbaltvertazud').value);
    grava = parseFloat(document.getElementById('tbgrava').value);
    numcond = parseFloat(document.getElementById('tbnumcond').value);
    longcondlat = parseFloat(document.getElementById('tblongcondlat').value);
    sepcondlat = parseFloat(document.getElementById('tbsepcondlat').value);
    numorificios = parseFloat(document.getElementById('tbnumorifilat').value);
    longcondprinc = parseFloat(document.getElementById('tblongcondprinc').value);

    // Validar campos
    if (
        isNaN(qdlech) || isNaN(qmxlech) || isNaN(diamcondlateral) || 
        isNaN(diamcondprinc) || isNaN(inflech) || isNaN(azudlech) || 
        isNaN(alvertazud) || isNaN(grava) || isNaN(numcond) || 
        isNaN(longcondlat) || isNaN(sepcondlat) || isNaN(numorificios) || 
        isNaN(longcondprinc)
    ) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
    }

    switch (parseInt(document.getElementById('DropDownList1').value)) {
        case 0:
            accesorio1 = 12;
            break;
        case 1:
            accesorio1 = 45;
            break;
        case 2:
            accesorio1 = 30;
            break;
        case 3:
            accesorio1 = 20;
            break;
        case 4:
            accesorio1 = 15;
            break;
        case 5:
            accesorio1 = 17;
        break;
        case 6:
            accesorio1 = 35;
        break;
        case 7:
            accesorio1 = 30;
        break;
        case 8:
            accesorio1 = 6;
        break;
        case 9:
            accesorio1 = 8;
        break;
        case 10:
            accesorio1 = 350;
        break;
        case 11:
            accesorio1 = 170;
        break;
        case 12:
            accesorio1 = 35;
        break;
        case 13:
            accesorio1 = 20;
        break;
        case 14:
            accesorio1 = 65;
        break;
        case 15:
            accesorio1 = 250;
        break;
        case 16:
            accesorio1 = 100;
        break;
        default:
        break;
    }
    switch (parseInt(document.getElementById('DropDownList1').value)) {
        case 0:
            accesorio2 = 12;
            break;
        case 1:
            accesorio2 = 12;
            break;
        case 2:
            accesorio2 = 12;
            break;
        case 3:
            accesorio2 = 12;
            break;
        case 4:
            accesorio2 = 12;
            break;
        case 5:
            accesorio2 = 12;
        break;
        case 6:
            accesorio2 = 12;
        break;
        case 7:
            accesorio2 = 12;
        break;
        case 8:
            accesorio2 = 12;
        break;
        case 9:
            accesorio2 = 12;
        break;
        case 10:
            accesorio2 = 12;
        break;
        case 11:
            accesorio2 = 12;
        break;
        case 12:
            accesorio2 = 12;
        break;
        case 13:
            accesorio2 = 12;
        break;
        case 14:
            accesorio2 = 12;
        break;
        case 15:
            accesorio2 = 12;
        break;
        case 16:
            accesorio2 = 12;
        break;
        default:
        break;
    } switch (parseInt(document.getElementById('DropDownList3').value)) {
        case 0:
            accesorio2 = 12;
            break;
        case 1:
            accesorio2 = 45;
            break;
        case 2:
            accesorio2 = 30;
            break;
        case 3:
            accesorio2 = 20;
            break;
        case 4:
            accesorio2 = 15;
            break;
        case 5:
            accesorio2 = 17;
        break;
        case 6:
            accesorio2 = 35;
        break;
        case 7:
            accesorio2 = 30;
        break;
        case 8:
            accesorio2 = 6;
        break;
        case 9:
            accesorio2 = 8;
        break;
        case 10:
            accesorio2 = 350;
        break;
        case 11:
            accesorio2 = 170;
        break;
        case 12:
            accesorio2 = 35;
        break;
        case 13:
            accesorio2 = 20;
        break;
        case 14:
            accesorio2 = 65;
        break;
        case 15:
            accesorio2 = 250;
        break;
        case 16:
            accesorio2 = 100;
        break;
        default:
        break;
    }


    // Configuración de accesorios
    const accesorioValues = [12, 45, 30, 20, 15, 17, 35, 30, 6, 8, 350, 170, 35, 20, 65, 250, 100];
    accesorio1 = accesorioValues[parseInt(document.getElementById('DropDownList1').value) - 1] || 0;
    accesorio2 = accesorioValues[parseInt(document.getElementById('DropDownList3').value) - 1] || 0;

    // Cálculos
    Areasistfilt = qdlech / (inflech / 3600);
    Basesistinflt = Areasistfilt / azudlech;
    laminaagua = alvertazud - grava;

    arearec = (Math.PI * Math.pow(diamcondprinc * 2.54 / 100, 2)) / 4;
    vrec = qdlech / arearec;

    areacond = (Math.PI * Math.pow(diamcondlateral / 1000, 2)) / 4;
    caudalcond = qdlech / numcond;
    velcond = caudalcond / areacond;

    numanillos = Math.floor(longcondlat / sepcondlat) + 1;
    numorificios = numanillos * numorificios;

    // Cálculo del área por orificio
    let diametroOrificio = 0.003; // Suponiendo diámetro en metros
    areaorif = (Math.pow(diametroOrificio, 2) * Math.PI) / 4; // Área en m²
    let areaorifFormatted = areaorif.toExponential(2);
    sumareaorif = numorificios * areaorif;

    hflechfilt = (0.00608 * (inflech * 100 / 3600) * 20) / Math.pow(1.27, 2);

    // Actualizar resultados
    document.getElementById('tbareasistfilt').innerText = Areasistfilt.toFixed(4);
    document.getElementById('tbbsistfilt').innerText = Basesistinflt.toFixed(4);
    document.getElementById('tblamagua').innerText = laminaagua.toFixed(4);
    document.getElementById('tbarearec').innerText = arearec.toFixed(4);
    document.getElementById('tbvelreco').innerText = vrec.toFixed(4);
    document.getElementById('tbareacond').innerText = areacond.toFixed(4);
    document.getElementById('tbcaudalcond').innerText = caudalcond.toFixed(4);
    document.getElementById('tbvelcond').innerText = velcond.toFixed(4);
    document.getElementById('tbanillos').innerText = numanillos.toFixed(4);
    document.getElementById('tborificios').innerText = numorificios.toFixed(4);
    document.getElementById('tbareaorif').innerText = areaorifFormatted; // Área en notación científica
    document.getElementById('tbsumareaorif').innerText = sumareaorif.toFixed(4);


    // Cálculo y actualización de la tabla
    let sumhflechfilt = 0;

    Tabla.Rows = []; // Limpiar filas anteriores

    for (let i = 0; i < 5; i++) {
        let A, R, P, T;
        let filaTabla = {};

        if (i === 0) {
            A = 1 / 2;
            R = 20;
        } else if (i === 1) {
            A = 3 / 8;
            R = 30;
        } else if (i === 2) {
            A = 1 / 4;
            R = 30;
        } else if (i === 3) {
            A = 1;
            R = 10;
        } else if (i === 4) {
            let pp = "TOTAL hf";
            let tt = "";

            filaTabla["Diám. material (pulg)"] = pp;
            filaTabla["Diám. del material (cm)"] = tt;
            filaTabla["Espesor de la capa (cm)"] = tt;
            filaTabla["Pérdidas hf (cm)"] = sumhflechfilt.toFixed(4);

            Tabla.Rows.push(filaTabla);
            break;
        }

        P = A * 2.54;
        T = (0.00608 * (inflech * 100 / 3600) * R) / (Math.pow(P, 2));

        filaTabla["Diám. material (pulg)"] = A.toFixed(4);
        filaTabla["Diám. del material (cm)"] = P.toFixed(4);
        filaTabla["Espesor de la capa (cm)"] = R.toFixed(4);
        filaTabla["Pérdidas hf (cm)"] = T.toFixed(4);

        Tabla.Rows.push(filaTabla);
        sumhflechfilt += T;
    }

    updateTable();
    let Sm = Math.pow((qdlech * 0.009) / (arearec * Math.pow((arearec / ((diamcondprinc * 2.54 / 100) * 3.14159)), (2 / 3))), 2); // Asumiendo algún valor para Sm, por favor verifica
    let hp = (longcondprinc * Sm) / 3;
    document.getElementById('tbhfcondprinc').innerText = hp.toFixed(4);

    let Slat = Math.pow((qdlech * 0.02) / (areacond * Math.pow((areacond / ((diamcondlateral / 1000) * 3.14159)), (2 / 3))), 2); // Asumiendo algún valor para Slat, por favor verifica
    let h1 = (longcondlat * Slat) / 3;
    document.getElementById('tbhfcondlat').innerText = h1.toFixed(4);

    let hm = hp + h1;
    document.getElementById('tbhfmultrec').innerText = hm.toFixed(4);



    let ha = ((accesorio1 * (diamcondprinc * (2.54 / 100))) + (accesorio2* (diamcondprinc * (2.54 / 100)))) * Sm;    ;
    document.getElementById('tbhaacces').innerText = ha.toFixed(4);

    let hs = Math.pow(vrec, 2) / (2 * 9.81);
    document.getElementById('tbhs').innerText = hs.toFixed(4);

    let he =0.5* Math.pow(velcond, 2) / (2 * 9.81);
    document.getElementById('tbheentrada').innerText = he.toFixed(4);
    
//
    let hf = sumhflechfilt + ha + hs+ hm+ he;
    document.getElementById('tbhflechfilt').innerText = hf.toFixed(4);
}

function updateTable() {
    let tablaBody = document.getElementById('tablaBody');
    tablaBody.innerHTML = ''; // Limpiar contenido existente

    Tabla.Rows.forEach(fila => {
        let tr = document.createElement('tr');
        Tabla.Columns.forEach(columna => {
            let td = document.createElement('td');
            td.textContent = fila[columna];
            tr.appendChild(td);
        });
        tablaBody.appendChild(tr);
    });
}


// Asignar el evento click al botón de cálculo
document.getElementById('btnCalculate').addEventListener('click', calculate);

// Asignar el evento click al botón de cálculo
document.getElementById('btnCalculate').addEventListener('click', calculate);
document.getElementById('btnSetValues').addEventListener('click', function() {
    document.getElementById('tbqdlech').value = 8;
    document.getElementById('tbqmxlech').value = 0.59;
    document.getElementById('tbinflech').value = 3.6;
    document.getElementById('tbazudlech').value = 1.8;
    document.getElementById('tbdiamcondprinc').value = 4;
    document.getElementById('tblongcondprinc').value = 3.6;
    document.getElementById('tbdiamcondlateral').value = 65;
    document.getElementById('tbaltvertazud').value = 1.2;
    document.getElementById('tbgrava').value = 0.9;
    document.getElementById('tbnumcond').value = 10;
    document.getElementById('tblongcondlat').value = 1.7;
    document.getElementById('tbnumorifilat').value = 3;
    document.getElementById('tbsepcondlat').value = 0.008;

    document.getElementById('DropDownList1').value = 10;
    document.getElementById('DropDownList3').value = 15;
});
