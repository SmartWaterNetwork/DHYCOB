// Variables globales
let AT, TT, FT, BT, ZT, YT;
let PT, CT, LT;
let WC, ARCOCOSWC, YC, DC, XC, AC, PC, FC, CC;
let YCC, TCC;
let CP, FP, AP, PP, KP, YP, TP, R1P;
let Ndec;

// Función para el evento click del botón
function button1_Click() {
    let costo, costorevest, revest, QT, nT, ErrT;
    let anchtunel, Kq, k4, k1, k2, k3, D, Y1, r;
    let altotunel, E1, VT, L1, F1, relhr, P1, R1;

    if (document.getElementById("DropDownList1").value !== "0" && document.getElementById("TbCaudal").value !== "" && document.getElementById("Tbz").value !== "") {
        document.getElementById("DropDownList1").style.backgroundColor = "white";
        document.getElementById("TbCaudal").style.backgroundColor = "white";
        document.getElementById("Tbz").style.backgroundColor = "white";

        Ndec = document.getElementById("DropDownList2").value === "0" ? 4 : parseInt(document.getElementById("DropDownList2").value);

        anchtunel = parseFloat(document.getElementById("TbCaudal").value);
        altotunel = parseFloat(document.getElementById("Tbz").value);

        if (document.getElementById("DropDownList1").value === "1") {
            k1 = 20;
            k2 = 3;
            k3 = 87;
        } else if (document.getElementById("DropDownList1").value === "2") {
            k1 = 10.5;
            k2 = 2.6;
            k3 = 85;
        } else if (document.getElementById("DropDownList1").value === "3") {
            k1 = 8;
            k2 = 2.7;
            k3 = 80;
        } else if (document.getElementById("DropDownList1").value === "4") {
            k1 = 4;
            k2 = 2.8;
            k3 = 70;
        } else if (document.getElementById("DropDownList1").value === "5") {
            k1 = 1.5;
            k2 = 2;
            k3 = 60;
        } else if (document.getElementById("DropDownList1").value === "6") {
            k1 = 1;
            k2 = 2;
            k3 = 45;
        } else if (document.getElementById("DropDownList1").value === "7") {
            k1 = 0.5;
            k2 = 1.5;
            k3 = 30;
        } else if (document.getElementById("DropDownList1").value === "8") {
            k1 = 0.3;
            k2 = 1.4;
            k3 = 20;
        }

        // Continuación del código
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

        if (F1 < 1) {
            document.getElementById("tbtipoflujo").textContent = "Flujo subcrítico";
            document.getElementById("tbtipoflujo").style.color = "red";
        } else if (F1 > 1) {
            document.getElementById("tbtipoflujo").textContent = "Flujo supercrítico";
            document.getElementById("tbtipoflujo").style.color = "red";
        } else {
            document.getElementById("tbtipoflujo").textContent = "Flujo crítico";
            document.getElementById("tbtipoflujo").style.color = "red";
        }

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



        console.log(Pv.toFixed(Ndec))
        console.log(Ph.toFixed(Ndec))
        console.log(qhH.toFixed(Ndec))
        console.log(pvB.toFixed(Ndec))
        console.log(h.toFixed(Ndec))
        console.log(Mc.toFixed(Ndec))
        console.log(revest.toFixed(Ndec))
        console.log(Sc.toFixed(Ndec))
        console.log(St.toFixed(Ndec))




    } else {
        if (document.getElementById("TbCaudal").value === "") {
            document.getElementById("TbCaudal").style.backgroundColor = "red";
        }
        if (document.getElementById("Tbz").value === "") {
            document.getElementById("Tbz").style.backgroundColor = "red";
        }
    }
}
function Procedimiento() {
    AT = (BT + ZT * YT) * YT;
    PT = BT + 2 * YT * LT;
    TT = BT + 2 * ZT * YT;
    FT = ((AT ** 5) / (PT ** 2)) - CT;
}


// Función para el evento click del botón "Ejemplo de cálculo"
function button4_Click() {
    document.getElementById("TbCaudal").value = "4";
    document.getElementById("Tbz").value = "4";
    document.getElementById("DropDownList1").value = "2";
}

// Función para el evento click del botón "Borrar"
function button9_Click() {
    document.getElementById("DropDownList1").style.backgroundColor = "white";
    document.getElementById("TbCaudal").style.backgroundColor = "white";
    document.getElementById("Tbz").style.backgroundColor = "white";
    document.getElementById("TbCaudal").value = "";
    document.getElementById("Tbz").value = "";
    document.getElementById("DropDownList1").value = "0";

    document.getElementById("TbY").style.display = "none";
    document.getElementById("tbareahid").style.display = "none";
    document.getElementById("tbespejoagua").style.display = "none";
    document.getElementById("TbF1").style.display = "none";
    document.getElementById("Label37").style.display = "none";
    document.getElementById("Label38").style.display = "none";
    document.getElementById("Label39").style.display = "none";
    document.getElementById("tbtipoflujo").style.display = "none";
    document.getElementById("TbV").style.display = "none";
    document.getElementById("tbperimetrohid").style.display = "none";
    document.getElementById("tbradiohid").style.display = "none";
    document.getElementById("TbE1").style.display = "none";

    document.getElementById("Label7").style.display = "none";
    document.getElementById("Label8").style.display = "none";
    document.getElementById("Label9").style.display = "none";
    document.getElementById("Label10").style.display = "none";
    document.getElementById("Label35").style.display = "none";
    document.getElementById("Label36").style.display = "none";
    document.getElementById("Label40").style.display = "none";
}

document.getElementById("Button4").addEventListener("click", button4_Click);
document.getElementById("Button9").addEventListener("click", button9_Click);
document.getElementById("Button1").addEventListener("click", button1_Click);


