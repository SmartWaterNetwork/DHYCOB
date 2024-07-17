let AT, TT, FT, BT, ZT, YT;
let PT, CT, LT;
let WC, ARCOCOSWC, YC, DC, XC, AC, PC, FC, CC;
let YCC, TCC;
let CP, FP, AP, PP, KP, YP, TP, R1P;
let Ndec;

function Procedimiento() {
    AT = (BT + ZT * YT) * YT;
    PT = BT + 2 * YT * LT;
    TT = BT + 2 * ZT * YT;
    FT = ((Math.pow(AT, 5)) / (Math.pow(PT, 2))) - CT;
}

function Button1_Click() {
    let costo, costorevest, revest, QT, nT, ST, ErrT;
    let Kq, k4, k1, k2, k3, D, Y1, r;
    let E1, VT, L1, F1, relhb, P1, R1;

    if (Tbcostorevest.value !== "" && Tbhb.value !== "" && Tbcosto.value !== "" && TbCaudal.value !== "" && Tbn.value !== "" && TbS.value !== "" && Tbz.value !== "" && Tbrevest.value !== "") {
        Tbhb.style.backgroundColor = "white";
        TbCaudal.style.backgroundColor = "white";
        Tbn.style.backgroundColor = "white";
        TbS.style.backgroundColor = "white";
        Tbz.style.backgroundColor = "white";
        Tbrevest.style.backgroundColor = "white";
        Tbcosto.style.backgroundColor = "white";
        Tbcostorevest.style.backgroundColor = "white";

        relhb = parseFloat(Tbhb.value);
        costorevest = parseFloat(Tbcostorevest.value);
        QT = parseFloat(TbCaudal.value);
        nT = parseFloat(Tbn.value);
        ST = parseFloat(TbS.value);
        ZT = parseFloat(Tbz.value);
        revest = parseFloat(Tbrevest.value);
        Kq = QT / Math.sqrt(ST);
        costo = parseFloat(Tbcosto.value);

        Ndec = parseInt(4);

        if (relhb < 1.5) {
            k4 = (3.0278 * relhb) - (1.0659 * Math.pow(relhb, 2)) - 1.4948;
            k1 = (2.7713 * relhb) - (0.7874 * Math.pow(relhb, 2)) - 0.9908;
        } else {
            k4 = (3.8031 * relhb) - (0.982 * Math.pow(relhb, 2)) - 2.7246;
            k1 = (0.6249 * relhb) - (0.1322 * Math.pow(relhb, 2)) - 0.1592;
        }

        let anchtunel = Math.pow((Kq * nT) / k4, 3 / 8);
        let hseg = ZT * anchtunel;
        let altotunel = hseg;

        if (QT < 0.9) {
            ErrT = 0.000000000001;
            YT = 0.000001;
        } else {
            YT = 0.001;
            ErrT = 0.001;
        }
        CT = Math.pow(QT * (nT / Math.sqrt(ST)), 3);
        LT = Math.sqrt(1 + Math.pow(ZT, 2));
        Procedimiento();

        let loopCounter = 0;
        while (Math.abs(FT) > ErrT || Math.abs(FT) === ErrT) {
            loopCounter++;
            D = (Math.pow(AT, 4) * (5 * PT * TT - 4 * AT * LT)) / Math.pow(PT, 3);
            Y1 = YT - FT / D;
            YT = Y1;
            Procedimiento();
            if (loopCounter > 100) break; // Evitar bucles infinitos
        }

        VT = QT / AT;
        L1 = AT / TT;
        F1 = VT / Math.sqrt(9.81 * L1);
        E1 = YT + Math.pow(VT, 2) / 19.62;



        P1 = BT + 2 * YT * (Math.sqrt(1 + Math.pow(ZT, 2)));
        R1 = AT / P1;

        YT = relhb * anchtunel;
        altotunel = ZT * anchtunel;
        hseg = altotunel - YT;

        AT = k1 * Math.pow(anchtunel, 2);
        VT = QT / AT;
        PT = k2 * anchtunel;
        R1 = k3 * anchtunel;

        let areaexv = k1 * Math.pow(anchtunel + (revest / 50), 2);
        let costoexcav = areaexv * costo;
        let areaint = k1 * Math.pow(anchtunel, 2);
        let arearevest = areaexv - areaint;
        let costorevestim = arearevest * costorevest;

        console.log(hseg.toFixed(Ndec))
        console.log(anchtunel.toFixed(Ndec))
        console.log(VT.toFixed(Ndec))
        console.log(YT.toFixed(Ndec))
        console.log(AT.toFixed(Ndec))
        console.log(altotunel.toFixed(Ndec))
        console.log(areaexv.toFixed(Ndec))
        console.log(costoexcav.toFixed(Ndec))
        console.log(costorevestim.toFixed(Ndec))
        console.log((costoexcav + costorevestim).toFixed(Ndec))
        console.log(arearevest.toFixed(Ndec))
        console.log(areaint.toFixed(Ndec))

    } else {
        if (TbCaudal.value === "") {
            TbCaudal.style.backgroundColor = "red";
        }
        if (Tbn.value === "") {
            Tbn.style.backgroundColor = "red";
        }
        if (TbS.value === "") {
            TbS.style.backgroundColor = "red";
        }
        if (Tbz.value === "") {
            Tbz.style.backgroundColor = "red";
        }
        if (Tbrevest.value === "") {
            Tbrevest.style.backgroundColor = "red";
        }
        if (Tbcosto.value === "") {
            Tbcosto.style.backgroundColor = "red";
        }
        if (Tbcostorevest.value === "") {
            Tbcostorevest.style.backgroundColor = "red";
        }
        if (Tbhb.value === "") {
            Tbhb.style.backgroundColor = "red";
        }
    }
}

function Button4_Click() {
    Tbcostorevest.value = 10;
    TbCaudal.value = 2.8;
    Tbn.value = 0.015;
    TbS.value = 0.0012;
    Tbz.value = 1.5;
    Tbrevest.value = 20;
    Tbcosto.value = 30;
    Tbhb.value = 1.25;
}

function Button9_Click() {
    Tbhb.style.backgroundColor = "white";
    TbCaudal.style.backgroundColor = "white";
    Tbn.style.backgroundColor = "white";
    TbS.style.backgroundColor = "white";
    Tbz.style.backgroundColor = "white";
    Tbrevest.style.backgroundColor = "white";
    Tbcosto.style.backgroundColor = "white";
    Tbcostorevest.style.backgroundColor = "white";

    TbCaudal.value = "";
    Tbn.value = "";
    TbS.value = "";
    Tbz.value = "";
    Tbrevest.value = "";
    Tbcosto.value = "";
    Tbhb.value = "";
    Tbcostorevest.value = "";
    tbtipoflujo0.style.display = "none";
    tbtipoflujo1.style.display = "none";
    TbE2.style.display = "none";
    TbE3.style.display = "none";
    Label54.style.display = "none";
    Label55.style.display = "none";
    Label56.style.display = "none";
    Label57.style.display = "none";
    Label58.style.display = "none";

    TbV.style.display = "none";
    TbF1.style.display = "none";
    TbE1.style.display = "none";
    tbareahid.style.display = "none";
    tbespejoagua.style.display = "none";
    tbtipoflujo.style.display = "none";
    tbperimetrohid.style.display = "none";
    tbradiohid.style.display = "none";

    Label50.style.display = "none";

    Label8.style.display = "none";
    Label9.style.display = "none";
    Label10.style.display = "none";

    Label35.style.display = "none";
    Label36.style.display = "none";
    Label37.style.display = "none";
    Label38.style.display = "none";
    Label39.style.display = "none";
    Label40.style.display = "none";
}


document.getElementById("Button4").addEventListener("click", Button4_Click);
document.getElementById("Button9").addEventListener("click", Button9_Click);
document.getElementById("Button1").addEventListener("click", Button1_Click);
