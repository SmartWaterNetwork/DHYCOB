let Alturmet1 = (Vtotalmet1 / 300) + Ktanmet1;

    if (Ddformamet1 == "1") {
        Alturmet1 = Math.pow(Vtotalmet1, 1 / 3);
    } else if (Ddformamet1 == "2") {
        Alturmet1 = Math.pow(Vtotalmet1 / 2.25, 1 / 3);
    } else if (Ddformamet1 == "3") {
        Alturmet1 = Math.pow(Vtotalmet1 * 4 / 3.14159, 1 / 3);
    }

    const altbordlibmet1 = 0.5;
    const altsedmet1 = 0.3;

    let Areatanmet1 = Vtotalmet1 / Alturmet1;
    let Basemet1, Diammet1;

    if (Ddformamet1 == "1") {
        Basemet1 = Math.pow(Areatanmet1,0.5);
    } else if (Ddformamet1 == "2") {
        Basemet1 = Math.pow((Areatanmet1 / 2),0.5);
    } else if (Ddformamet1 == "3") {
        Diammet1 = Math.pow((Areatanmet1 * 4 / 3.14159),0.5);
    }

    Alturmet1 = Alturmet1 + altbordlibmet1 + altsedmet1;

    let intAlturmet1 = Math.floor(Alturmet1);
    let decAlturmet1 = Alturmet1 - intAlturmet1;

    if (decAlturmet1 < 0.1) {
        Alturmet1 = intAlturmet1 + 0.1;
    } else if (decAlturmet1 > 0.1 && decAlturmet1 < 0.2) {
        Alturmet1 = intAlturmet1 + 0.2;
    } else if (decAlturmet1 > 0.2 && decAlturmet1 < 0.3) {
        Alturmet1 = intAlturmet1 + 0.3;
    } else if (decAlturmet1 > 0.3 && decAlturmet1 < 0.4) {
        Alturmet1 = intAlturmet1 + 0.4;
    } else if (decAlturmet1 > 0.4 && decAlturmet1 < 0.5) {
        Alturmet1 = intAlturmet1 + 0.5;
    } else if (decAlturmet1 > 0.5 && decAlturmet1 < 0.6) {
        Alturmet1 = intAlturmet1 + 0.6;
    } else if (decAlturmet1 > 0.6 && decAlturmet1 < 0.7) {
        Alturmet1 = intAlturmet1 + 0.7;
    } else if (decAlturmet1 > 0.7 && decAlturmet1 < 0.8) {
        Alturmet1 = intAlturmet1 + 0.8;
    } else if (decAlturmet1 > 0.8 && decAlturmet1 < 0.9) {
        Alturmet1 = intAlturmet1 + 0.9;
    } else if (decAlturmet1 > 0.9) {
        Alturmet1 = intAlturmet1 + 1;
    }