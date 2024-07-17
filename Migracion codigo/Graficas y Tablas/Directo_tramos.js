let legendBox;
const intAnchoGraficas = 500;
const intAltoGraficas = 420;
const intColorFondo = 0xEFEFFF;
const colores = [0xFF0000, 0x22AAFF, 0x336622, 0x44CCAA, 0x551188, 0x66EE44, 0x77FF77, 0x8899AA, 0x9944BB, 0xAA8822, 0xDD8866, 0x22EEEE, 0xDDAABB, 0x0];
const intAddLegend_Coord_x = 400;
const intAddLegend_Coord_y = 120;
const bolAddLegend_Bool = false;
const strAddLegend_Font = "Arial Rounded MT Bold";
const intAddLegend_FontSize = 8;

let XYChartDT_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChartI_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChartbresse_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYCharttramo_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);
let XYChartback_GraficaTest = new XYChart(intAnchoGraficas, intAltoGraficas, intColorFondo, intColorFondo, 0);

// Arreglos para almacenamiento del archivo
let arrDatosInputFileXDT = new Array(5).fill(0);
let arrDatosInputFileYDT = new Array(5).fill(0);
let arrDatosInputFileXI = new Array(5).fill(0);
let arrDatosInputFileYI = new Array(5).fill(0);
let arrDatosInputFileXbresse = new Array(5).fill(0);
let arrDatosInputFileYbresse = new Array(5).fill(0);
let arrDatosInputFileXtramo = new Array(5).fill(0);
let arrDatosInputFileYtramo = new Array(5).fill(0);
let arrDatosInputFileXback = new Array(5).fill(0);
let arrDatosInputFileYback = new Array(5).fill(0);

let numLineasFileInputDT = 0;
let numLineasFileInputI = 0;
let numLineasFileInputbresse = 0;
let numLineasFileInputtramo = 0;
let numLineasFileInputback = 0;

// Variables adicionales
let Q, B, Z, S, N, X1, Y2, Y3, Y1, X, A1, P1, M, R1, V, C, D, F, NT;
let fila = new Array(10).fill(0);
let i, A, P, R, T, Y, Q1, iii;

let Qbresse, Bbresse, Sbresse, nbresse, ynbresse, y1bresse, y2bresse, y3bresse;
let YCbresse, Cbresse, Zbresse, X1bresse, X2bresse, Dxinicbresse;
let Abresse, Bgosubbresse, FZbresse, CTEbresse, DELTAXbresse, Lbresse;

let Qtramo, Btramo, ztramo, Stramo, ntramo, y1tramo, nttramo, dxtramo;
let Mtramo, A1tramo, P1tramo, R1tramo, V1tramo, Ctramo, Y2tramo, Dtramo, Y3tramo;
let Atramo, Ptramo, Rtramo, Ttramo, Q1tramo, Ftramo;
let X1tramo, Dinicback;

let Qback, Bback, zback, Sback, ycback, y1back, y3back, y2back, ynback;
let YMback, BZ2back, BZback, ZRback, Nback, Mback, Jback, Uback, FBAKback, X1back, Vback;
let DEFFNBback, Hback, SUMA1back, Kback, FAback, AREA1back, AREA2back, SUMA2back, FBback, AREA3back;
let X2back, DELTAXback, Lback;
let FUNback, FVJback;
let UNfun = Array.from({length: 100}, () => new Array(100).fill(0));
let SE, SE1, SE2;
let DELTAE, DELTAX, F1, F2;
let Ndec;
let YO, FO, S1, N1, D1, DELTX;

// Tablas de datos (usando arrays en lugar de DataTable)
let Tabla = [];
let Tabla2 = [];
let Tabla3 = [];
let Tabla4 = [];
let Tabla5 = [];
function Button1_Click() {
    var TbCaudal = document.getElementById("TbCaudal").value;
    var TbB = document.getElementById("TbB").value;
    var Tbz = document.getElementById("Tbz").value;
    var TbS = document.getElementById("TbS").value;
    var Tbn = document.getElementById("Tbn").value;
    var TbX = document.getElementById("TbX").value;
    var TbY1 = document.getElementById("TbY1").value;
    var TbY2 = document.getElementById("TbY2").value;
    var TbY3 = document.getElementById("TbY3").value;

    if (TbCaudal !== "" && TbB !== "" && Tbz !== "" && TbS !== "" && Tbn !== "" && TbX !== "" && TbY1 !== "" && TbY2 !== "" && TbY3 !== "") {
        document.getElementById("WebChartViewerTestDT").style.display = "block";
        document.getElementById("TbCaudal").style.backgroundColor = "white";
        document.getElementById("TbB").style.backgroundColor = "white";
        document.getElementById("Tbz").style.backgroundColor = "white";
        document.getElementById("TbS").style.backgroundColor = "white";
        document.getElementById("Tbn").style.backgroundColor = "white";
        document.getElementById("TbX").style.backgroundColor = "white";
        document.getElementById("TbY1").style.backgroundColor = "white";
        document.getElementById("TbY2").style.backgroundColor = "white";
        document.getElementById("TbY3").style.backgroundColor = "white";

        var Ndec;
        switch (document.getElementById("DropDownList2").value) {
            case "0":
                Ndec = 4;
                break;
            case "1":
                Ndec = 0;
                break;
            case "2":
                Ndec = 1;
                break;
            case "3":
                Ndec = 2;
                break;
            case "4":
                Ndec = 3;
                break;
            case "5":
                Ndec = 4;
                break;
            default:
                break;
        }

        var Q = TbCaudal;
        var B = TbB;
        var Z = Tbz;
        var S = TbS;
        var N = Tbn;
        var X = TbX;
        var Y3 = TbY3;
        var Y2 = TbY2;
        var Y1 = TbY1;

        document.getElementById("GridView1").style.display = "block";

        // Add gridview titles
        var Tabla = document.getElementById("Tabla");
        Tabla.innerHTML = "<tr><th>Tirante (m)</th><th>Área (m²)</th><th>Radio Hidráulico (m)</th><th>Velocidad (m/s)</th><th>F</th><th>F2</th><th>DELTAE</th><th>SE</th><th>SE2</th><th>DELTAX</th><th>Longitud (m)</th></tr>";

        // Calculate Y3
        Y3 = (Y2 - Y1) / Y3;
        // Further calculations and grid population would follow here
        var M = Math.sqrt(1 + Math.pow(Z, 2));
        var Tabla = document.getElementById("Tabla");
        var i = 0;
        var arrDatosInputFileXDT = [];
        var arrDatosInputFileYDT = [];
        for (var Y = TbY1; Y <= TbY2 + TbY3; Y += TbY3) {
            var A = (B + Z * Y) * Y;
            var P = B + 2 * Y * M;
            var R = A / P;
            var T = B + 2 * Z * Y;
            var V = Q / A;
            var F = V / Math.sqrt(9.81 * A / T);
            var SE = Math.pow((V * N / Math.pow(R, 2 / 3)), 2);
            i=i+1
            if (i=1){
                var fila = [];
                fila[0] = Y.toFixed(Ndec);
            fila[1] = A.toFixed(Ndec);
            fila[2] = R.toFixed(Ndec);
            fila[3] = V.toFixed(Ndec);
            fila[4] = F.toFixed(Ndec);
            fila[5] = 0; // Assuming F2 is always 0
            fila[6] = 0; // Assuming DELTAE is always 0
            fila[7] = SE.toFixed(Ndec);
            fila[8] = 0; // Assuming SE2 is always 0
            fila[9] = 0; // Assuming DELTAX is always 0
            fila[10] = X.toFixed(Ndec);
            }else {
                var SE1 = 0; // Assuming SE1 is defined somewhere earlier
                var SE2 = (SE + SE1) / 2;
                var F2 = (F + F1) / 2;
                var DELTAE = TbY3 * (1 - Math.pow(F2, 2));
                var DELTAX = DELTAE / (TbS - SE2);
                TbX = TbX + Math.abs(DELTAX);
            
                var fila = [];
                fila[0] = TbY.toFixed(Ndec);
                fila[1] = A.toFixed(Ndec);
                fila[2] = R.toFixed(Ndec);
                fila[3] = V.toFixed(Ndec);
                fila[4] = F.toFixed(Ndec);
                fila[5] = F2.toFixed(Ndec);
                fila[6] = DELTAE.toFixed(Ndec);
                fila[7] = SE.toFixed(Ndec);
                fila[8] = SE2.toFixed(Ndec);
                fila[9] = DELTAX.toFixed(Ndec);
                fila[10] = TbX.toFixed(Ndec);
            
                // Store data for ChartDirector
                arrDatosInputFileXDT.push(X);
                arrDatosInputFileYDT.push(Y);
                i++;
            
                // Populate table row
                var filaTabla = Tabla.insertRow();
                filaTabla.insertCell().textContent = fila[0];
                filaTabla.insertCell().textContent = fila[1];
                filaTabla.insertCell().textContent = fila[2];
                filaTabla.insertCell().textContent = fila[3];
                filaTabla.insertCell().textContent = fila[4];
                filaTabla.insertCell().textContent = fila[5];
                filaTabla.insertCell().textContent = fila[6];
                filaTabla.insertCell().textContent = fila[7];
                filaTabla.insertCell().textContent = fila[8];
                filaTabla.insertCell().textContent = fila[9];
                filaTabla.insertCell().textContent = fila[10];
            }
            F1 = F;
            SE1 = SE
            Tabla.appendChild(filaTabla);
            if (i - 1 === parseFloat(TbY3)) {
                break; // Sale del bucle for
            }
        }
    document.getElementById("Label41").style.display = "block";

    // Call function to draw chart (subGraficarDT function)
    subGraficarDT(XYChartDT_GraficaTest);
            
    } else {
        if (TbCaudal === "") {
            document.getElementById("TbCaudal").style.backgroundColor = "red";
        }
        if (TbB === "") {
            document.getElementById("TbB").style.backgroundColor = "red";
        }
        if (Tbz === "") {
            document.getElementById("Tbz").style.backgroundColor = "red";
        }
        if (TbS === "") {
            document.getElementById("TbS").style.backgroundColor = "red";
        }
        if (Tbn === "") {
            document.getElementById("Tbn").style.backgroundColor = "red";
        }
        if (TbX === "") {
            document.getElementById("TbX").style.backgroundColor = "red";
        }
        if (TbY1 === "") {
            document.getElementById("TbY1").style.backgroundColor = "red";
        }
        if (TbY2 === "") {
            document.getElementById("TbY2").style.backgroundColor = "red";
        }
        if (TbY3 === "") {
            document.getElementById("TbY3").style.backgroundColor = "red";
        }
    }
}


