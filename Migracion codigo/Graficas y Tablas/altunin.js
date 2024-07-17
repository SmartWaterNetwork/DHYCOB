function calcular() {
    var qrap = parseFloat(document.getElementById('TbCaudal').value);
    var srap = parseFloat(document.getElementById('Tbpend').value);
    var velmaxrap = parseFloat(document.getElementById('Tbvel').value);

    var Ndec = parseInt(document.getElementById('DropDownList2').value);

    var brap = 0.765 * Math.pow(qrap, 2 / 5);

    if ((brap - Math.floor(brap)) < 0.1) {
        brap = Math.floor(brap) + 0.1;
    } else if ((brap - Math.floor(brap)) > 0.1 && (brap - Math.floor(brap)) < 0.2) {
        brap = Math.floor(brap) + 0.2;
    } else if ((brap - Math.floor(brap)) > 0.2 && (brap - Math.floor(brap)) < 0.3) {
        brap = Math.floor(brap) + 0.3;
    } else if ((brap - Math.floor(brap)) > 0.3 && (brap - Math.floor(brap)) < 0.4) {
        brap = Math.floor(brap) + 0.4;
    } else if ((brap - Math.floor(brap)) > 0.4 && (brap - Math.floor(brap)) < 0.5) {
        brap = Math.floor(brap) + 0.5;
    } else if ((brap - Math.floor(brap)) > 0.5 && (brap - Math.floor(brap)) < 0.6) {
        brap = Math.floor(brap) + 0.6;
    } else if ((brap - Math.floor(brap)) > 0.6 && (brap - Math.floor(brap)) < 0.7) {
        brap = Math.floor(brap) + 0.7;
    } else if ((brap - Math.floor(brap)) > 0.7 && (brap - Math.floor(brap)) < 0.8) {
        brap = Math.floor(brap) + 0.8;
    } else if ((brap - Math.floor(brap)) > 0.8 && (brap - Math.floor(brap)) < 0.9) {
        brap = Math.floor(brap) + 0.9;
    } else {
        brap = Math.floor(brap) + 1;
    }

    var area = qrap / velmaxrap;
    var calado = area / brap;
    var perim = brap + (2 * calado);
    var radhid = area / perim;
    var chezy = velmaxrap / (Math.sqrt(radhid * (srap / 100)));
    chezy = Math.round(chezy * 100) / 100; // rounding to 2 decimal places

    alert("Chezy value: " + chezy)
    // Definición de las matrices
let rugosidada = [];
let rugosidadb = [];
let rugosidadc = [];

// Llenado de la matriz rugosidada
rugosidada[5] = [];
rugosidada[6] = [];
rugosidada[7] = [];
rugosidada[8] = [];
rugosidada[9] = [];
rugosidada[10] = [];
rugosidada[11] = [];
rugosidada[12] = [];

rugosidada[5][1] = 11.85;
rugosidada[5][2] = 12;
rugosidada[5][3] = 12.2;
rugosidada[5][4] = 12.38;
rugosidada[5][5] = 12.56;
rugosidada[5][6] = 12.76;
rugosidada[5][7] = 12.95;
rugosidada[5][8] = 13.16;
rugosidada[5][9] = 13.37;
rugosidada[5][10] = 13.59;
rugosidada[5][11] = 13.87;
rugosidada[5][12] = 14.04;
rugosidada[6][1] = 12.79;
rugosidada[6][2] = 12.97;
rugosidada[6][3] = 13.2;
rugosidada[6][4] = 13.39;
rugosidada[6][5] = 13.61;
rugosidada[6][6] = 13.83;
rugosidada[6][7] = 14.06;
rugosidada[6][8] = 14.31;
rugosidada[6][9] = 14.56;
rugosidada[6][10] = 14.81;
rugosidada[6][11] = 15.08;
rugosidada[6][12] = 15.36;
rugosidada[7][1] = 13.85;
rugosidada[7][2] = 14.08;
rugosidada[7][3] = 14.33;
rugosidada[7][4] = 14.58;
rugosidada[7][5] = 14.84;
rugosidada[7][6] = 15.11;
rugosidada[7][7] = 15.38;
rugosidada[7][8] = 15.67;
rugosidada[7][9] = 15.97;
rugosidada[7][10] = 16.29;
rugosidada[7][11] = 16.61;
rugosidada[7][12] = 16.96;
rugosidada[8][1] = 15.13;
rugosidada[8][2] = 15.4;
rugosidada[8][3] = 15.7;
rugosidada[8][4] = 16;
rugosidada[8][5] = 16.31;
rugosidada[8][6] = 16.64;
rugosidada[8][7] = 16.98;
rugosidada[8][8] = 17.33;
rugosidada[8][9] = 17.7;
rugosidada[8][10] = 18.08;
rugosidada[8][11] = 18.48;
rugosidada[8][12] = 18.9;
rugosidada[9][1] = 16.67;
rugosidada[9][2] = 17.01;
rugosidada[9][3] = 16.36;
rugosidada[9][4] = 17.73;
rugosidada[9][5] = 18.12;
rugosidada[9][6] = 18.52;
rugosidada[9][7] = 18.94;
rugosidada[9][8] = 19.38;
rugosidada[9][9] = 19.84;
rugosidada[9][10] = 20.33;
rugosidada[9][11] = 20.83;
rugosidada[9][12] = 21.37;
rugosidada[10][1] = 18.55;
rugosidada[10][2] = 18.98;
rugosidada[10][3] = 19.42;
rugosidada[10][4] = 19.88;
rugosidada[10][5] = 20.37;
rugosidada[10][6] = 20.88;
rugosidada[10][7] = 21.41;
rugosidada[10][8] = 21.98;
rugosidada[10][9] = 22.57;
rugosidada[10][10] = 23.2;
rugosidada[10][11] = 23.87;
rugosidada[10][12] = 24.57;
rugosidada[11][1] = 20.92;
rugosidada[11][2] = 21.46;
rugosidada[11][3] = 22.03;
rugosidada[11][4] = 22.62;
rugosidada[11][5] = 23.26;
rugosidada[11][6] = 23.92;
rugosidada[11][7] = 24.63;
rugosidada[11][8] = 25.38;
rugosidada[11][9] = 26.18;
rugosidada[11][10] = 27.03;
rugosidada[11][11] = 27.93;
rugosidada[11][12] = 28.9;
rugosidada[12][1] = 23.98;
rugosidada[12][2] = 24.69;
rugosidada[12][3] = 25.45;
rugosidada[12][4] = 26.25;
rugosidada[12][5] = 27.1;
rugosidada[12][6] = 28.01;
rugosidada[12][7] = 28.99;
rugosidada[12][8] = 30.03;
rugosidada[12][9] = 31.15;
rugosidada[12][10] = 32.36;
rugosidada[12][11] = 33.67;
rugosidada[12][12] = 35.09;

// Llenado de la matriz rugosidadb
rugosidadb[3.5] = [];
rugosidadb[4] = [];
rugosidadb[5] = [];
rugosidadb[6] = [];
rugosidadb[6.5] = [];
rugosidadb[7] = [];
rugosidadb[8] = [];

rugosidadb[3.5][1] = 13.9;
rugosidadb[3.5][2] = 14.14;
rugosidadb[3.5][3] = 14.31;
rugosidadb[3.5][4] = 14.47;
rugosidadb[3.5][5] = 14.64;
rugosidadb[3.5][6] = 14.81;
rugosidadb[4][1] = 14.37;
rugosidadb[4][2] = 14.58;
rugosidadb[4][3] = 14.71;
rugosidadb[4][4] = 14.88;
rugosidadb[4][5] = 15.06;
rugosidadb[4][6] = 15.24;
rugosidadb[5][1] = 15.22;
rugosidadb[5][2] = 15.43;
rugosidadb[5][3] = 15.6;
rugosidadb[5][4] = 15.8;
rugosidadb[5][5] = 16;
rugosidadb[5][6] = 16.2;
rugosidadb[6][1] = 16.16;
rugosidadb[6][2] = 16.37;
rugosidadb[6][3] = 16.58;
rugosidadb[6][4] = 16.81;
rugosidadb[6][5] = 17.07;
rugosidadb[6][6] = 17.27;
rugosidadb[6.5][1] = 16.7;
rugosidadb[6.5][2] = 16.92;
rugosidadb[6.5][3] = 17.12;
rugosidadb[6.5][4] = 17.36;
rugosidadb[6.5][5] = 17.61;
rugosidadb[6.5][6] = 17.86;
rugosidadb[7][1] = 17.24;
rugosidadb[7][2] = 17.57;
rugosidadb[7][3] = 17.73;
rugosidadb[7][4] = 17.99;
rugosidadb[7][5] = 18.25;
rugosidadb[7][6] = 18.52;
rugosidadb[8][1] = 18.48;
rugosidadb[8][2] = 18.76;
rugosidadb[8][3] = 19.05;
rugosidadb[8][4] = 19.34;
rugosidadb[8][5] = 19.65;
rugosidadb[8][6] = 19.96;

// Llenado de la matriz rugosidadc
rugosidadc[3] = [];
rugosidadc[4] = [];
rugosidadc[5] = [];
rugosidadc[6] = [];
rugosidadc[7] = [];
rugosidadc[8] = [];

rugosidadc[3][1] = 20.7;
rugosidadc[3][2] = 20.58;
rugosidadc[3][3] = 20.45;
rugosidadc[3][4] = 20.33;
rugosidadc[3][5] = 20.16;
rugosidadc[3][6] = 20.04;
rugosidadc[3][7] = 19.92;
rugosidadc[3][8] = 19.72;
rugosidadc[3][9] = 19.61;
rugosidadc[3][10] = 19.53;
rugosidadc[3][11] = 19.42;
rugosidadc[3][12] = 19.27;
rugosidadc[4][1] = 21.65;
rugosidadc[4][2] = 21.54;
rugosidadc[4][3] = 21.37;
rugosidadc[4][4] = 21.23;
rugosidadc[4][5] = 21.05;
rugosidadc[4][6] = 20.92;
rugosidadc[4][7] = 20.79;
rugosidadc[4][8] = 20.62;
rugosidadc[4][9] = 20.49;
rugosidadc[4][10] = 20.37;
rugosidadc[4][11] = 20.2;
rugosidadc[4][12] = 20.08;
rugosidadc[5][1] = 22.68;
rugosidadc[5][2] = 22.52;
rugosidadc[5][3] = 22.37;
rugosidadc[5][4] = 22.22;
rugosidadc[5][5] = 22.08;
rugosidadc[5][6] = 21.88;
rugosidadc[5][7] = 21.74;
rugosidadc[5][8] = 21.55;
rugosidadc[5][9] = 21.41;
rugosidadc[5][10] = 21.28;
rugosidadc[5][11] = 21.1;
rugosidadc[5][12] = 20.96;
rugosidadc[6][1] = 23.91;
rugosidadc[6][2] = 23.64;
rugosidadc[6][3] = 23.47;
rugosidadc[6][4] = 23.31;
rugosidadc[6][5] = 23.09;
rugosidadc[6][6] = 22.94;
rugosidadc[6][7] = 22.73;
rugosidadc[6][8] = 22.57;
rugosidadc[6][9] = 22.42;
rugosidadc[6][10] = 22.27;
rugosidadc[6][11] = 22.08;
rugosidadc[6][12] = 21.93;
rugosidadc[7][1] = 25.25;
rugosidadc[7][2] = 24.88;
rugosidadc[7][3] = 24.69;
rugosidadc[7][4] = 24.51;
rugosidadc[7][5] = 24.33;
rugosidadc[7][6] = 24.1;
rugosidadc[7][7] = 23.92;
rugosidadc[7][8] = 23.7;
rugosidadc[7][9] = 23.53;
rugosidadc[7][10] = 23.36;
rugosidadc[7][11] = 23.15;
rugosidadc[7][12] = 22.99;
rugosidadc[8][1] = 26.46;
rugosidadc[8][2] = 26.25;
rugosidadc[8][3] = 26.04;
rugosidadc[8][4] = 25.84;
rugosidadc[8][5] = 25.58;
rugosidadc[8][6] = 25.38;
rugosidadc[8][7] = 25.19;
rugosidadc[8][8] = 25;
rugosidadc[8][9] = 24.75;
rugosidadc[8][10] = 24.57;
rugosidadc[8][11] = 24.33;
rugosidadc[8][12] = 24.15;
// Definición de las matrices para rugosidade, rugosidadd, y rugosidadf
let rugosidade = [];
let rugosidadd = [];
let rugosidadf = [];

// Llenado de la matriz rugosidade
rugosidade[1.5] = [];
rugosidade[2] = [];
rugosidade[3] = [];
rugosidade[4] = [];
rugosidade[5] = [];
rugosidade[6] = [];
rugosidade[7] = [];

rugosidade[1.5][1] = 21.88;
rugosidade[1.5][2] = 21.74;
rugosidade[1.5][3] = 21.65;
rugosidade[1.5][4] = 21.55;
rugosidade[1.5][5] = 21.41;
rugosidade[1.5][6] = 21.32;
rugosidade[1.5][7] = 21.23;
rugosidade[1.5][8] = 21.17;
rugosidade[1.5][9] = 21.85;
rugosidade[1.5][10] = 20.96;
rugosidade[1.5][11] = 20.88;
rugosidade[1.5][12] = 20.79;

rugosidade[2][1] = 22.77;
rugosidade[2][2] = 22.57;
rugosidade[2][3] = 22.42;
rugosidade[2][4] = 22.32;
rugosidade[2][5] = 22.22;
rugosidade[2][6] = 22.12;
rugosidade[2][7] = 22.09;
rugosidade[2][8] = 21.88;
rugosidade[2][9] = 21.79;
rugosidade[2][10] = 21.69;
rugosidade[2][11] = 21.59;
rugosidade[2][12] = 21.51;

rugosidade[3][1] = 24.45;
rugosidade[3][2] = 24.33;
rugosidade[3][3] = 24.27;
rugosidade[3][4] = 24.07;
rugosidade[3][5] = 23.92;
rugosidade[3][6] = 23.81;
rugosidade[3][7] = 23.7;
rugosidade[3][8] = 23.58;
rugosidade[3][9] = 23.47;
rugosidade[3][10] = 23.36;
rugosidade[3][11] = 23.26;
rugosidade[3][12] = 23.15;

rugosidade[4][1] = 26.56;
rugosidade[4][2] = 26.4;
rugosidade[4][3] = 26.25;
rugosidade[4][4] = 22.11;
rugosidade[4][5] = 25.97;
rugosidade[4][6] = 25.84;
rugosidade[4][7] = 25.71;
rugosidade[4][8] = 25.58;
rugosidade[4][9] = 25.45;
rugosidade[4][10] = 25.25;
rugosidade[4][11] = 25.13;
rugosidade[4][12] = 25.0;

rugosidade[5][1] = 29.07;
rugosidade[5][2] = 28.91;
rugosidade[5][3] = 28.74;
rugosidade[5][4] = 28.57;
rugosidade[5][5] = 28.41;
rugosidade[5][6] = 28.17;
rugosidade[5][7] = 28.01;
rugosidade[5][8] = 27.86;
rugosidade[5][9] = 27.7;
rugosidade[5][10] = 27.55;
rugosidade[5][11] = 27.4;
rugosidade[5][12] = 27.55;

rugosidade[6][1] = 32.15;
rugosidade[6][2] = 31.81;
rugosidade[6][3] = 31.65;
rugosidade[6][4] = 31.45;
rugosidade[6][5] = 31.25;
rugosidade[6][6] = 31.06;
rugosidade[6][7] = 30.86;
rugosidade[6][8] = 30.67;
rugosidade[6][9] = 30.41;
rugosidade[6][10] = 30.3;
rugosidade[6][11] = 30.12;
rugosidade[6][12] = 29.85;

rugosidade[7][1] = 35.84;
rugosidade[7][2] = 35.6;
rugosidade[7][3] = 35.34;
rugosidade[7][4] = 35.09;
rugosidade[7][5] = 34.84;
rugosidade[7][6] = 34.59;
rugosidade[7][7] = 34.36;
rugosidade[7][8] = 34.01;
rugosidade[7][9] = 33.78;
rugosidade[7][10] = 33.56;
rugosidade[7][11] = 33.33;
rugosidade[7][12] = 33.09;

// Llenado de la matriz rugosidadd
rugosidadd[2.5] = [];
rugosidadd[3] = [];
rugosidadd[3.5] = [];
rugosidadd[4] = [];
rugosidadd[5] = [];

rugosidadd[2.5][1] = 26.04;
rugosidadd[2.5][2] = 26.2;
rugosidadd[2.5][3] = 27.17;
rugosidadd[2.5][4] = 27.78;
rugosidadd[2.5][5] = 28.41;
rugosidadd[2.5][6] = 29.07;
rugosidadd[2.5][7] = 29.76;
rugosidadd[2.5][8] = 30.49;

rugosidadd[3][1] = 27.86;
rugosidadd[3][2] = 28.49;
rugosidadd[3][3] = 29.15;
rugosidadd[3][4] = 29.85;
rugosidadd[3][5] = 30.58;
rugosidadd[3][6] = 31.55;
rugosidadd[3][7] = 32.15;
rugosidadd[3][8] = 33.0;

rugosidadd[3.5][1] = 30.03;
rugosidadd[3.5][2] = 30.77;
rugosidadd[3.5][3] = 31.55;
rugosidadd[3.5][4] = 32.26;
rugosidadd[3.5][5] = 33.22;
rugosidadd[3.5][6] = 34.13;
rugosidadd[3.5][7] = 35.09;
rugosidadd[3.5][8] = 36.1;

rugosidadd[4][1] = 32.47;
rugosidadd[4][2] = 33.33;
rugosidadd[4][3] = 34.25;
rugosidadd[4][4] = 35.21;
rugosidadd[4][5] = 36.23;
rugosidadd[4][6] = 37.31;
rugosidadd[4][7] = 38.46;
rugosidadd[4][8] = 39.68;

rugosidadd[5][1] = 38.91;
rugosidadd[5][2] = 40.16;
rugosidadd[5][3] = 41.49;
rugosidadd[5][4] = 42.92;
rugosidadd[5][5] = 44.44;
rugosidadd[5][6] = 46.08;
rugosidadd[5][7] = 47.85;
rugosidadd[5][8] = 49.75;

// Llenado de la matriz rugosidadf
rugosidadf[2.5] = [];
rugosidadf[3] = [];
rugosidadf[4] = [];
rugosidadf[5] = [];
rugosidadf[6] = [];
rugosidadf[7] = [];

rugosidadf[2.5][1] = 22.42;
rugosidadf[2.5][2] = 22.37;
rugosidadf[2.5][3] = 22.32;
rugosidadf[2.5][4] = 22.27;
rugosidadf[2.5][5] = 22.27;
rugosidadf[2.5][6] = 22.22;
rugosidadf[2.5][7] = 22.17;
rugosidadf[2.5][8] = 22.12;
rugosidadf[2.5][9] = 22.1;
rugosidadf[2.5][10] = 22.06;
rugosidadf[2.5][11] = 22.02;
rugosidadf[2.5][12] = 21.98;

rugosidadf[3][1] = 22.68;
rugosidadf[3][2] = 22.68;
rugosidadf[3][3] = 22.62;
rugosidadf[3][4] = 22.59;
rugosidadf[3][5] = 22.52;
rugosidadf[3][6] = 22.52;
rugosidadf[3][7] = 22.47;
rugosidadf[3][8] = 22.47;
rugosidadf[3][9] = 22.37;
rugosidadf[3][10] = 22.37;
rugosidadf[3][11] = 22.32;
rugosidadf[3][12] = 22.3;

rugosidadf[4][1] = 23.31;
rugosidadf[4][2] = 23.26;
rugosidadf[4][3] = 23.26;
rugosidadf[4][4] = 23.2;
rugosidadf[4][5] = 23.15;
rugosidadf[4][6] = 23.13;
rugosidadf[4][7] = 23.09;
rugosidadf[4][8] = 23.04;
rugosidadf[4][9] = 22.99;
rugosidadf[4][10] = 22.94;
rugosidadf[4][11] = 22.94;
rugosidadf[4][12] = 22.9;

rugosidadf[5][1] = 23.98;
rugosidadf[5][2] = 23.92;
rugosidadf[5][3] = 23.87;
rugosidadf[5][4] = 23.81;
rugosidadf[5][5] = 23.81;
rugosidadf[5][6] = 23.75;
rugosidadf[5][7] = 23.71;
rugosidadf[5][8] = 23.64;
rugosidadf[5][9] = 23.64;
rugosidadf[5][10] = 23.59;
rugosidadf[5][11] = 23.53;
rugosidadf[5][12] = 23.47;

rugosidadf[6][1] = 24.63;
rugosidadf[6][2] = 24.63;
rugosidadf[6][3] = 24.57;
rugosidadf[6][4] = 24.51;
rugosidadf[6][5] = 24.45;
rugosidadf[6][6] = 24.45;
rugosidadf[6][7] = 24.38;
rugosidadf[6][8] = 24.38;
rugosidadf[6][9] = 24.32;
rugosidadf[6][10] = 24.27;
rugosidadf[6][11] = 24.21;
rugosidadf[6][12] = 24.15;

rugosidadf[7][1] = 25.38;
rugosidadf[7][2] = 25.32;
rugosidadf[7][3] = 25.25;
rugosidadf[7][4] = 25.25;
rugosidadf[7][5] = 25.19;
rugosidadf[7][6] = 25.13;
rugosidadf[7][7] = 25.06;
rugosidadf[7][8] = 25.03;
rugosidadf[7][9] = 24.0;
rugosidadf[7][10] = 24.97;
rugosidadf[7][11] = 24.88;
rugosidadf[7][12] = 24.85;
let i, j;
for (i = 1; i <= 13; i++) {
    for (j = 1; j <= 13; j++) {
        if (rugosidada[i][j] > (chezy - 0.03) && rugosidada[i][j] < (chezy + 0.03)) {
            document.getElementById("Tbyrap0").value = i;
            document.getElementById("Tbyrap1").value = j;
            tiprug = 1;
            break;
        }
    }
    if (i > 12 || j > 12) break;
}

if (!(i <= 12 && j <= 12)) {
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 13; j++) {
            if (rugosidadb[i][j] > (chezy - 0.03) && rugosidadb[i][j] < (chezy + 0.03)) {
                document.getElementById("Tbyrap0").value = i;
                document.getElementById("Tbyrap1").value = j;
                tiprug = 2;
                break;
            }
        }
        if (i > 12 || j > 12) break;
    }
}

if (!(i <= 12 && j <= 12)) {
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 13; j++) {
            if (rugosidadc[i][j] > (chezy - 0.03) && rugosidadc[i][j] < (chezy + 0.03)) {
                document.getElementById("Tbyrap0").value = i;
                document.getElementById("Tbyrap1").value = j;
                tiprug = 3;
                break;
            }
        }
        if (i > 12 || j > 12) break;
    }
}

if (!(i <= 12 && j <= 12)) {
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 13; j++) {
            if (rugosidade[i][j] > (chezy - 0.03) && rugosidade[i][j] < (chezy + 0.03)) {
                document.getElementById("Tbyrap0").value = i;
                document.getElementById("Tbyrap1").value = j;
                tiprug = 5;
                break;
            }
        }
        if (i > 12 || j > 12) break;
    }
}

if (!(i <= 12 && j <= 12)) {
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 13; j++) {
            if (rugosidadf[i][j] > (chezy - 0.03) && rugosidadf[i][j] < (chezy + 0.03)) {
                document.getElementById("Tbyrap0").value = i;
                document.getElementById("Tbyrap1").value = j;
                tiprug = 6;
                break;
            }
        }
        if (i > 12 || j > 12) break;
    }
}

if (!(i <= 12 && j <= 12)) {
    for (i = 1; i <= 13; i++) {
        for (j = 1; j <= 13; j++) {
            if (rugosidadd[i][j] > (chezy - 1) && rugosidadd[i][j] < (chezy + 1)) {
                document.getElementById("Tbyrap0").value = i;
                document.getElementById("Tbyrap1").value = j;
                tiprug = 4;
                break;
            }
        }
        if (i > 12 || j > 12) break;
    }
}

document.getElementById("Tbyrap2").style.display = "block";
document.getElementById("Tbyrap2").value = ((brap / j)).toFixed(Ndec);
document.getElementById("Tbyrap2").style.color = "red";

document.getElementById("Tbyrap3").style.display = "block";
document.getElementById("Tbyrap3").value = (((brap / j) / 8)).toFixed(Ndec);
document.getElementById("Tbyrap3").style.color = "red";

document.getElementById("Tbyrap4").style.display = "block";
document.getElementById("Tbyrap4").value = (((brap / j) + ((brap / j) / 8))).toFixed(Ndec);
document.getElementById("Tbyrap4").style.color = "red";

document.getElementById("Tbyrap5").style.display = "block";
document.getElementById("Tbyrap5").value = ((((brap / j) + ((brap / j) / 8)) * brap)).toFixed(Ndec);
document.getElementById("Tbyrap5").style.color = "red";

document.getElementById("Tbyrap6").style.display = "block";
document.getElementById("Tbyrap6").value = ((qrap / ((((brap / j) + ((brap / j) / 8)) * brap)))).toFixed(Ndec);
document.getElementById("Tbyrap6").style.color = "red";

if (parseFloat(document.getElementById("Tbyrap6").value) > velmaxrap) {
    document.getElementById("Label74").innerHTML = "Velocidad>velmax";
    document.getElementById("Label74").style.color = "red";
} else {
    document.getElementById("Label74").innerHTML = "Velocidad<velmax";
    document.getElementById("Label74").style.color = "red";
}

document.getElementById("Label32").style.display = "block";
document.getElementById("Label33").style.display = "block";
document.getElementById("Label34").style.display = "block";
document.getElementById("Label35").style.display = "block";
document.getElementById("Label36").style.display = "block";
document.getElementById("Label37").style.display = "block";
document.getElementById("Label38").style.display = "block";
document.getElementById("Label63").style.display = "block";
document.getElementById("Label64").style.display = "block";
document.getElementById("Label65").style.display = "block";
document.getElementById("Label66").style.display = "block";
document.getElementById("Label67").style.display = "block";
document.getElementById("Label68").style.display = "block";
document.getElementById("Label69").style.display = "block";
document.getElementById("Label74").style.display = "block";

document.getElementById("Tbyrap0").style.display = "block";
document.getElementById("Tbyrap1").style.display = "block";

document.getElementById("Tbancho").style.display = "block";
document.getElementById("Tbancho").value = (brap).toFixed(Ndec);
document.getElementById("Tbancho").style.color = "red";

document.getElementById("Tbarea").style.display = "block";
document.getElementById("Tbarea").value = (area).toFixed(Ndec);
document.getElementById("Tbarea").style.color = "red";

document.getElementById("Tbyrap").style.display = "block";
document.getElementById("Tbyrap").value = (calado).toFixed(Ndec);
document.getElementById("Tbyrap").style.color = "red";

document.getElementById("tbperim").style.display = "block";
document.getElementById("tbperim").value = (perim).toFixed(Ndec);
document.getElementById("tbperim").style.color = "red";

document.getElementById("tbradhid").style.display = "block";
document.getElementById("tbradhid").value = (radhid).toFixed(Ndec);
document.getElementById("tbradhid").style.color = "red";

document.getElementById("TbChezy").style.display = "block";
document.getElementById("TbChezy").value = (chezy).toFixed(Ndec);
document.getElementById("TbChezy").style.color = "red";

document.getElementById("Label75").style.display = "block";
document.getElementById("Label71").style.display = "block";
document.getElementById("Label72").style.display = "block";
document.getElementById("Label73").style.display = "block";

let hrug = 8 * calado / 9;
let srug = hrug / i;

document.getElementById("Tbyrap10").style.display = "block";
document.getElementById("Tbyrap10").value = (srug).toFixed(Ndec);
document.getElementById("Tbyrap10").style.color = "red";

if ((srug * 100) < 5) {
    srug = 0.05;
} else if ((srug * 100) > 5 && (srug * 100) < 10) {
    srug = 0.1;
} else if ((srug * 10) > 1 && (srug * 10) < 2) {
    srug = 0.2;
} else if ((srug * 10) > 2 && (srug * 10) < 3) {
    srug = 0.3;
} else if ((srug * 10) > 3 && (srug * 10) < 4) {
    srug = 0.4;
} else if ((srug * 10) > 4 && (srug * 10) < 5) {
    srug = 0.5;
} else if ((srug * 10) > 5 && (srug * 10) < 6) {
    srug = 0.6;
} else if ((srug * 10) > 6 && (srug * 10) < 7) {
    srug = 0.7;
} else if ((srug * 10) > 7 && (srug * 10) < 8) {
    srug = 0.8;
} else if ((srug * 10) > 8 && (srug * 10) < 9) {
    srug = 0.9;
} else {
    srug = 1;
}
var hrug = parseFloat(document.getElementById("hrug").value); // Valor de hrug obtenido de un input
var srug = parseFloat(document.getElementById("srug").value); // Valor de srug obtenido de un input
var brap = parseFloat(document.getElementById("brap").value); // Valor de brap obtenido de un input
var srap = parseFloat(document.getElementById("srap").value); // Valor de srap obtenido de un input

// Variables y estructuras de datos para manejar la tabla (similar a DataTable en VB.NET)
var tabla = []; // Array para almacenar filas de la tabla
var fila;
var C0 = "h (m)", C1 = "Coeficiente (C)", C2 = "d (m)", C3 = "Área (m²)", 
    C4 = "Perimetro (m)", C5 = "Radio hidráulico (m²/m)", C6 = "Velocidad (m/s)", 
    C7 = "Caudal (m³/s)";

// Títulos de la tabla (simulando la creación de columnas)
tabla.push([C0, C1, C2, C3, C4, C5, C6, C7]);

// Variables de cálculo
var V, F, qq, rep;
var Y = 0.2;
var i = 0;
rep = 1;

// Bucle principal equivalente al bucle "While" de VB.NET
while (Y < hrug) {
    var A = Y;
    var P;

    // Switch-case para el equivalente de las condiciones "If-Else" de VB.NET
    switch (tiprug) {
        case 1:
            P = 1000 / (116.1 - (6.1 * (A / srug)) - (1.2 * (brap / A)));
            break;
        case 2:
            P = 1000 / (85.8 - (3.9 * (A / srug)) - (0.8 * (brap / A)));
            break;
        case 3:
            P = 1000 / (54.2 - (2.1 * (A / srug)) - (0.33 * (brap / A)));
            break;
        case 4:
            P = 1000 / (52 - (5.1 * (A / srug)) - (0.8 * (brap / A)));
            break;
        case 5:
            P = 1000 / (47.5 - (1.2 * (A / srug)) - (0.1 * (brap / A)));
            break;
        default:
            P = 0;
    }

    var R = A + srug;
    var T = (brap * R);
    var V = brap + (2 * R);
    var F = T / V;
    var SE = P * Math.sqrt(F * (srap / 100));
    var qq = SE * T;

    // Formato de las filas para la tabla
    fila = [Y.toFixed(4), P.toFixed(4), R.toFixed(4), T.toFixed(4),
            V.toFixed(4), F.toFixed(4), SE.toFixed(4), qq.toFixed(4)];

    // Agregar fila a la tabla
    tabla.push(fila);

    Y += 0.1;

    if (Y >= hrug) {
        Y = hrug;
        rep++;

        if (rep === 3) {
            break;
        }
    }
}

// Lógica para actualizar la tabla en la interfaz de usuario (ejemplo básico)
var tablaHtml = document.getElementById("miTabla");
tablaHtml.innerHTML = ''; // Limpiar tabla antes de actualizar

// Generar el HTML de la tabla a partir de los datos calculados
for (var j = 0; j < tabla.length; j++) {
    var filaHtml = '<tr>';

    for (var k = 0; k < tabla[j].length; k++) {
        filaHtml += '<td>' + tabla[j][k] + '</td>';
    }

    filaHtml += '</tr>';
    tablaHtml.innerHTML += filaHtml;
}

}