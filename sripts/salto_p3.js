function calcular11() {
    var TbCaudalP = parseFloat(document.getElementById("TbCaudalP").value);
    var TbEspejoAgua = parseFloat(document.getElementById("TbEspejoAgua").value);
    var TbTirante = parseFloat(document.getElementById("TbTirante").value);
    var Ndec = 4;

    var Q = TbCaudalP;
    var K = TbEspejoAgua;
    var Y = TbTirante;
    var J = 5;
    // T = Math.Sqrt(8 * K * Y);
    var T = K;
    K = Math.pow(T, 2) / (8 * Y);
    var A = (2 / 3) * Y * Math.sqrt(2 * 9.81 * K);
    var V = Q / A;
    var F1 = V / Math.sqrt((2 / 3) * 9.81 * Y);
    var F2 = Math.pow(F1, 2);
    var F = Math.pow(J, 3.5) + Math.pow(J, 3) + Math.pow(J, 2.5) + Math.pow(J, 2) + Math.pow(J, 1.5) - (5 / 3) * F2 * J - (5 / 3) * F2 * Math.sqrt(J) - (5 / 3) * F2;

    const epsilon = 0.0001;
    while (Math.abs(F) > epsilon || Math.abs(F) === epsilon) {
        var D = 3.5 * Math.pow(J, 2.5) + 3 * Math.pow(J, 2) + 2.5 * Math.pow(J, 1.5) + 2 * J + 1.5 * Math.sqrt(J) - (5 / 3) * F2 - (5 / 6) * F2 / Math.sqrt(J);
        J = J - F / D;
        F = Math.pow(J, 3.5) + Math.pow(J, 3) + Math.pow(J, 2.5) + Math.pow(J, 2) + Math.pow(J, 1.5) - (5 / 3) * F2 * J - (5 / 3) * F2 * Math.sqrt(J) - (5 / 3) * F2;
    }

    var Y1 = Y;
    var Y2 = J * Y1;
    var E1 = Y1 + Math.pow(Q, 2) / (19.62 * Math.pow(A, 2));
    var T2 = Math.sqrt(8 * K * Y2);
    var A2 = (2 / 3) * Y2 * T2;
    var E2 = Y2 + Math.pow(Q, 2) / (19.62 * Math.pow(A2, 2));
    var E3 = Math.abs(E2 - E1);
    var Y3 = Math.abs(Y2 - Y1);

    document.getElementById("TbTiranteConjugado").innerText = Y2.toFixed(Ndec);
    document.getElementById("TbFroudeConjugado").innerText = ((Q / A2) / Math.pow((9.81 * Y2), 5)).toFixed(Ndec);
    document.getElementById("TbAlturaSalto").innerText = Y3.toFixed(Ndec);
    document.getElementById("TbPerdidaEnergia").innerText = E3.toFixed(Ndec);
    document.getElementById("TbFocoParabola").innerText = (T2 / 2).toFixed(Ndec);
    document.getElementById("TbPendienteCanal").innerText = (2 * Y2 / T2).toFixed(Ndec);
}

function ejemploCalculo11() {
    document.getElementById('e10_caudal').value = 2;
    document.getElementById('e10_base').value = 1.5;
    document.getElementById('e10_talud').value = 1.5;
    document.getElementById('e10_tirantec').value = 0.85;
}
