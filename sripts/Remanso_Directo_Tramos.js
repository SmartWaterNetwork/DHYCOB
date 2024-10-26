const resultadosInterfaz_3 = document.getElementById('e3_contenedor_resultados');

function generarGraficoYTabla() {
    const Qtramo = parseFloat(
        document.getElementById("tbcaudaltramo").value
    );
    const Btramo = parseFloat(document.getElementById("tbBtramo").value);
    const ztramo = parseFloat(document.getElementById("tbztramo").value);
    const Stramo = parseFloat(document.getElementById("tbStramo").value);
    const ntramo = parseFloat(document.getElementById("tbntramo").value);
    const X1tramo = parseFloat(document.getElementById("tbX1tramo").value);
    const dxtramo = parseFloat(document.getElementById("tbdxtramo").value);
    const y1tramo = parseFloat(document.getElementById("tby1tramo").value);
    const nttramo = parseInt(document.getElementById("tbnttramo").value);

    let Mtramo = Math.sqrt(1 + ztramo * ztramo);

    let dataX = [];
    let dataY = [];

    let X = X1tramo;
    let y = y1tramo;

    dataX.push(0);
    dataY.push(0.423);

    for (let i = 1; i <= nttramo; i++) {
        let A1tramo = (Btramo + ztramo * y) * y;
        let P1tramo = Btramo + 2 * y * Mtramo;
        let R1tramo = A1tramo / P1tramo;
        let V1tramo = Qtramo / A1tramo;
        let Ctramo =
            Stramo * dxtramo +
            y +
            Math.pow(V1tramo, 2) / 19.62 -
            (dxtramo * Math.pow(V1tramo * ntramo, 2)) /
            (2 * Math.pow(R1tramo, 4 / 3));

        let Y2tramo = y;
        let Ftramo, Dtramo, Y3tramo;

        do {
            let Atramo = (Btramo + ztramo * Y2tramo) * Y2tramo;
            let Ptramo = Btramo + 2 * Y2tramo * Mtramo;
            let Rtramo = Atramo / Ptramo;
            let Ttramo = Btramo + 2 * ztramo * Y2tramo;
            let Q1tramo = Math.pow(Qtramo, 2) / Math.pow(Atramo, 3);
            Ftramo =
                Y2tramo +
                (Q1tramo * Atramo) / 19.62 +
                (dxtramo * Q1tramo * Ptramo * Math.pow(ntramo, 2)) /
                (2 * Math.pow(Rtramo, 1 / 3)) -
                Ctramo;

            Dtramo =
                1 -
                (Q1tramo * Ttramo) / 9.81 +
                (dxtramo *
                    Q1tramo *
                    Math.pow(ntramo, 2) *
                    (4 * Mtramo - (5 * Ttramo) / Rtramo)) /
                (3 * Math.pow(Rtramo, 1 / 3));
            Y3tramo = Y2tramo - Ftramo / Dtramo;
            Y2tramo = Y3tramo;
        } while (Math.abs(Ftramo) > 0.0001);

        y = Y2tramo;
        X += dxtramo;

        dataX.push(parseFloat(X.toFixed(4))); // Redondeo y conversión a flotante
        dataY.push(parseFloat(y.toFixed(4))); // Redondeo y conversión a flotante
    }

    renderChart(dataX, dataY);
    renderTable(dataX, dataY);
}
function renderChart(dataX, dataY) {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: dataX,
            datasets: [
                {
                    label: "Tirante (m)",
                    data: dataY,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: "Perfil de la Curva Remanso",
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Distancia (m)",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Tirante (m)",
                    },
                },
            },
        },
    });
}

function renderTable(listaX, listaY) {
    const tbody = document.getElementById('dataBody');
    tbody.innerHTML = ''; // Limpiar el contenido previo

    for (let i = 0; i < listaX.length; i++) {
        const row = document.createElement('tr');

        const cellX = document.createElement('td');
        cellX.textContent = listaX[i];
        row.appendChild(cellX);

        const cellY = document.createElement('td');
        cellY.textContent = listaY[i];
        row.appendChild(cellY);

        tbody.appendChild(row);
    }
}




function limpiarCampos3() {
    document.getElementById("tbcaudaltramo").value = null;
    document.getElementById("tbBtramo").value = null;
    document.getElementById("tbztramo").value = null;
    document.getElementById("tbStramo").value = null;
    document.getElementById("tbntramo").value = null;
    document.getElementById("tbX1tramo").value = null;
    document.getElementById("tby1tramo").value = null;
    document.getElementById("tbnttramo").value = null;
    document.getElementById("tbdxtramo").value = null;
}

function ejemploCalculo3() {
    document.getElementById("tbcaudaltramo").value = 1.5;
    document.getElementById("tbBtramo").value = 1.5;
    document.getElementById("tbztramo").value = 1;
    document.getElementById("tbStramo").value = 0.0005;
    document.getElementById("tbntramo").value = 0.015;
    document.getElementById("tbX1tramo").value = 0;
    document.getElementById("tby1tramo").value = 0.423;
    document.getElementById("tbnttramo").value = 10;
    document.getElementById("tbdxtramo").value = -20;
}

document.getElementById('e3_ejemploCalculo').addEventListener('click', () => {
    ejemploCalculo3();
})

document.getElementById('e3_limpiar').addEventListener('click', () => {
    limpiarCampos3();
})

document.getElementById('e3_calcular').addEventListener('click', () => {
    generarGraficoYTabla();
    resultadosInterfaz_3.style.opacity = '100';
    resultadosInterfaz_3.style.animation = 'opacity 0.6s ease-out';
    resultadosInterfaz_3.style.animation = 'moveFadeOut3 0.6s forwards';
})
