const resultadosInterfaz_4 = document.getElementById('e4_contenedor_resultados');

function calcularBresse() {
    const Qbresse = parseFloat(
        document.getElementById("tbcaudalbresse").value
    );
    const Bbresse = parseFloat(document.getElementById("tbBbresse").value);
    const Sbresse = parseFloat(document.getElementById("tbSbresse").value);
    const nbresse = parseFloat(document.getElementById("tbnbresse").value);
    const ynbresse = parseFloat(
        document.getElementById("tbynbresse").value
    );
    const y1bresse = parseFloat(
        document.getElementById("tby1bresse").value
    );
    const y2bresse = parseFloat(
        document.getElementById("tby2bresse").value
    );
    const iteraciones = parseInt(
        document.getElementById("tbybresse").value
    );

    const deltaY = (y2bresse - y1bresse) / iteraciones;

    let resultados = [];
    let arrDatosX = [];
    let arrDatosY = [];
    let longitudAcumulada = 0;

    const YCbresse = Math.pow(Math.pow(Qbresse / Bbresse, 2) / 9.81, 1 / 3);
    const Cbresse = Math.pow((y1bresse + y2bresse) / 2, 1 / 6) / nbresse;

    let dxinicbresse = 0;

    for (let i = 0; i <= iteraciones; i++) {
        const Y = y1bresse + i * deltaY;
        const Zbresse = Y / ynbresse;
        const X1bresse = (ynbresse / Sbresse) * Zbresse;
        const FZbresse = calcularFZbresse(Zbresse);
        const X2bresse =
            ynbresse * (1 / Sbresse - Math.pow(Cbresse, 2) / 9.81) * FZbresse;
        const DELTAXbresse = X1bresse - X2bresse;

        if (i > 0) {
            longitudAcumulada += Math.abs(DELTAXbresse - dxinicbresse);
        }

        dxinicbresse = DELTAXbresse;

        resultados.push([
            Y,
            Zbresse,
            X1bresse,
            FZbresse,
            X2bresse,
            DELTAXbresse,
            longitudAcumulada,
        ]);
        arrDatosX.push(Y);
        arrDatosY.push(longitudAcumulada);
    }

    mostrarResultados(resultados);
    graficarResultados(arrDatosX, arrDatosY);
}


function calcularFZbresse(Zbresse) {
    const Abresse =
        (1 / 6) *
        Math.log(
            (Math.pow(Zbresse, 2) + Zbresse + 1) / Math.pow(Zbresse - 1, 2)
        );
    const Bgosubbresse =
        (1 / Math.sqrt(3)) * Math.atan(Math.sqrt(3) / (2 * Zbresse + 1));
    let FZbresse = Abresse - Bgosubbresse;

    if (Zbresse >= 0) {
        if (Zbresse < 0.999) {
            FZbresse += 0.6046;
        }
    } else {
        if (Zbresse > 0.45) {
            FZbresse += 1.8138;
        }
    }

    return FZbresse;
}

function mostrarResultados(resultados) {
    const tbody = document.getElementById('dataBody_2');
    tbody.innerHTML = "";

    resultados.forEach((fila) => {
        const tr = document.createElement("tr");
        fila.forEach((dato) => {
            const td = document.createElement("td");
            td.textContent = dato.toFixed(4);
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function graficarResultados(arrDatosX, arrDatosY) {
    const ctx = document.getElementById("myChart_2").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: arrDatosX,
            datasets: [
                {
                    label: "Longitud (m)",
                    data: arrDatosY,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Tirantes (m)",
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: "Longitud (m)",
                    },
                },
            },
        },
    });
}


function limpiarCampos4() {
    document.getElementById("tbcaudalbresse").value = null;
    document.getElementById("tbBbresse").value = null;
    document.getElementById("tbSbresse").value = null;
    document.getElementById("tbnbresse").value = null;
    document.getElementById("tbynbresse").value = null;
    document.getElementById("tby1bresse").value = null;
    document.getElementById("tby2bresse").value = null;
    document.getElementById("tbybresse").value = null;
}

function ejemploCalculo4() {
    document.getElementById("tbcaudalbresse").value = 10;
    document.getElementById("tbBbresse").value = 10;
    document.getElementById("tbSbresse").value = 0.0004;
    document.getElementById("tbnbresse").value = 0.03;
    document.getElementById("tbynbresse").value = 1.409;
    document.getElementById("tby1bresse").value = 3;
    document.getElementById("tby2bresse").value = 1.4;
    document.getElementById("tbybresse").value = 16;
}

document.getElementById('e4_ejemploCalculo').addEventListener('click', () => {
    ejemploCalculo4();
})

document.getElementById('e4_limpiar').addEventListener('click', () => {
    limpiarCampos4();
})

document.getElementById('e4_calcular').addEventListener('click', () => {
    calcularBresse();
    resultadosInterfaz_4.style.opacity = '100';
    resultadosInterfaz_4.style.animation = 'opacity 0.6s ease-out';
    resultadosInterfaz_4.style.animation = 'moveFadeOut3 0.6s forwards';
})




















