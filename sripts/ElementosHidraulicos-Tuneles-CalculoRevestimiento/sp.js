const resultadosInterfaz21 = document.getElementById("e21_contenedor_resultados");

function calcular21() {
    let AT, TT, FT, BT, ZT, YT;
    let PT, CT, LT;
    let WC, ARCOCOSWC, YC, DC, XC, AC, PC, FC, CC;
    let Ndec = 4;
    let costo, costorevest, revest, QT, nT, ErrT;
    let anchtunel, Kq, k4, k1, k2, k3, D, Y1, r;
    let altotunel, E1, VT, L1, F1, relhr, P1, R1;

    function Procedimiento() {
        AT = (BT + ZT * YT) * YT;
        PT = BT + 2 * YT * LT;
        TT = BT + 2 * ZT * YT;
        FT = ((AT ** 5) / (PT ** 2)) - CT;
    }
    if (document.getElementById("e21_i1").value !== "" && document.getElementById("e21_i2").value !== "") {

        anchtunel = parseFloat(document.getElementById("e21_i1").value);
        altotunel = parseFloat(document.getElementById("e21_i2").value);

        if (document.getElementById("e21_list").value === "1") {
            k1 = 20;
            k2 = 3;
            k3 = 87;
        } else if (document.getElementById("e21_list").value === "2") {
            k1 = 10.5;
            k2 = 2.6;
            k3 = 85;
        } else if (document.getElementById("e21_list").value === "3") {
            k1 = 8;
            k2 = 2.7;
            k3 = 80;
        } else if (document.getElementById("e21_list").value === "4") {
            k1 = 4;
            k2 = 2.8;
            k3 = 70;
        } else if (document.getElementById("e21_list").value === "5") {
            k1 = 1.5;
            k2 = 2;
            k3 = 60;
        } else if (document.getElementById("e21_list").value === "6") {
            k1 = 1;
            k2 = 2;
            k3 = 45;
        } else if (document.getElementById("e21_list").value === "7") {
            k1 = 0.5;
            k2 = 1.5;
            k3 = 30;
        } else if (document.getElementById("e21_list").value === "8") {
            k1 = 0.3;
            k2 = 1.4;
            k3 = 20;
        }

        let Pv, Sc, St, h, Ph, PhPv, Mc, Mh, qhH, pvB, t;

        Pv = 0.35 * (anchtunel / k1) * k2;
        h = (2 / (3 * k1)) * (anchtunel + (altotunel * (Math.tan((45 - (0.5 * k3)) * Math.PI / 180))));
        Ph = k2 * (h + (0.5 * altotunel)) * (Math.tan((45 - (0.5 * k3)) * Math.PI / 180)) ** 2;
        PhPv = Ph / Pv;
        Mc = 0.0625 * (1 - PhPv) * Pv * anchtunel ** 2;
        qhH = Ph * altotunel;
        pvB = Pv * anchtunel;
        revest = ((((qhH ** 2) + (4 * 50 * (6 * Mc))) ** 0.5) - qhH) / 100;

        Mh = (Ph * (altotunel ** 2)) / 12;
        Sc = (pvB / revest) + ((6 * Mh) / (revest ** 2));
        St = (pvB / revest) - ((6 * Mh) / (revest ** 2));

        if (QT < 0.9) {
            ErrT = 0.000000000001;
            YT = 0.000001;
        } else {
            YT = 0.001;
            ErrT = 0.001;
        }
        CT = (QT * (nT / Math.sqrt(St))) ** 3;
        LT = Math.sqrt(1 + ZT ** 2);
        Procedimiento();

        D = (AT ** 4 * (5 * PT * TT - 4 * AT * LT)) / PT ** 3;
        Y1 = YT - FT / D;
        YT = Y1;
        Procedimiento();
        while (Math.abs(FT) > ErrT || Math.abs(FT) === ErrT) {
            D = (AT ** 4 * (5 * PT * TT - 4 * AT * LT)) / PT ** 3;
            Y1 = YT - FT / D;
            YT = Y1;
            Procedimiento();
        }

        VT = QT / AT;
        L1 = AT / TT;
        F1 = VT / Math.sqrt(9.81 * L1);
        E1 = YT + (VT ** 2) / 19.62;

        P1 = BT + 2 * YT * ((1 + ZT ** 2) ** 0.5);
        R1 = AT / P1;

        YT = relhr * r;

        AT = k1 * r ** 2;
        VT = QT / AT;
        PT = k2 * r;
        R1 = k3 * r;

        let costorevestim, costoexcav, areaexv, areaint, arearevest;
        areaexv = ((Math.PI * ((r + (revest / 100)) ** 2)) / 2) + ((2 * (r + (revest / 100))) * (r + (revest / 100)));
        costoexcav = areaexv * costo;
        areaint = ((Math.PI * (r ** 2)) / 2) + ((2 * r) * r);
        arearevest = areaexv - areaint;
        costorevestim = arearevest * costorevest;

        document.getElementById("e21_r1").value = Pv.toFixed(Ndec);
        document.getElementById("e21_r2").value = Ph.toFixed(Ndec);
        document.getElementById("e21_r3").value = qhH.toFixed(Ndec);
        document.getElementById("e21_r4").value = pvB.toFixed(Ndec);
        document.getElementById("e21_r5").value = h.toFixed(Ndec);
        document.getElementById("e21_r6").value = Mc.toFixed(Ndec);
        document.getElementById("e21_r7").value = revest.toFixed(Ndec);
        document.getElementById("e21_r8").value = Sc.toFixed(Ndec);
        document.getElementById("e21_r9").value = St.toFixed(Ndec);

    } else {
        alert("por favor rellene todos los campos para continuar");
    }
}


function ejemploCalculo21() {
    document.getElementById("e21_i1").value = "4";
    document.getElementById("e21_i2").value = "4";
    document.getElementById("e21_list").value = "2";
}

function limpiarCampos21() {
    document.getElementById("e21_i1").value = null;
    document.getElementById("e21_i2").value = null;
    document.getElementById("e21_list").value = "1";
}
  
  document.getElementById("e21_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo21();
  });
  
  document.getElementById("e21_limpiar").addEventListener("click", () => {
    limpiarCampos21();
  });
  
  document.getElementById("e21_calcular").addEventListener("click", () => {
    calcular21();
    resultadosInterfaz21.style.opacity = "100";
    resultadosInterfaz21.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz21.style.animation = "moveFadeOut3 0.6s forwards";
  });