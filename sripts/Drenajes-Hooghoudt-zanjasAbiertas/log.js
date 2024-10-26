const resultadosInterfaz20 = document.getElementById("e20_contenedor_resultados");

const elements6 = {
    tbhabmet1: document.getElementById('e20_i1'),
    tbdotmet1: document.getElementById('e20_i2'),
    tbntanquesmet1: document.getElementById('e20_i3'),
    tbaltsedmet1: document.getElementById('e20_i4'),
    tbaltbordlibmet1: document.getElementById('e20_i5'),
    tbaltbordlibmet2: document.getElementById('e20_i6'),
    tbaltbordlibmet3: document.getElementById('e20_i7'),
    tbaltbordlibmet4: document.getElementById('e20_i8'),
    tbaltbordlibmet5: document.getElementById('e20_i9'),
    tbQprommet1: document.getElementById('e20_r1'),
    tbVcompmet1: document.getElementById('e20_r2'),
    tbVemermet1: document.getElementById('e20_r3'),
    tbVemermet2: document.getElementById('e20_r4'),
};

function calcular20() {
    if (elements6.tbaltsedmet1.value !== '' && elements6.tbaltbordlibmet1.value !== '' && elements6.tbntanquesmet1.value !== '' &&
        elements6.tbhabmet1.value !== '' && elements6.tbdotmet1.value !== '' && elements6.tbaltbordlibmet2.value !== '' &&
        elements6.tbaltbordlibmet3.value !== '' && elements6.tbaltbordlibmet4.value !== '' && elements6.tbaltbordlibmet5.value !== '') {

        var Ndec = 4

        let Recarg = parseFloat(elements6.tbhabmet1.value);
        let PEI = parseFloat(elements6.tbdotmet1.value);
        let PD = parseFloat(elements6.tbntanquesmet1.value);
        let PTA = parseFloat(elements6.tbaltsedmet1.value);
        let K1 = parseFloat(elements6.tbaltbordlibmet1.value);
        let y = parseFloat(elements6.tbaltbordlibmet2.value);
        let b = parseFloat(elements6.tbaltbordlibmet3.value);
        let z = parseFloat(elements6.tbaltbordlibmet4.value);
        let K2 = parseFloat(elements6.tbaltbordlibmet5.value);

        let Dest = PEI - (PD - y);
        let h = PEI - PTA - Dest;
        let per = b + (2 * y * Math.sqrt(1 + Math.pow(z, 2)));

        let d = 1, Lest, Lcal;

        for (d = 0; d <= 100; d += 0.01) {
            Lest = Math.sqrt(((8 * K2 * h * d) / Recarg) + ((4 * K1 * Math.pow(h, 2)) / Recarg));
            d = Dest / (((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per)) + 1);
            Lcal = Math.sqrt(((8 * K2 * h * d) / Recarg) + ((4 * K1 * Math.pow(h, 2)) / Recarg));
            if ((Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) || (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99))) {
                break;
            }
        }

        elements6.tbQprommet1.value = Lcal.toFixed(Ndec);

        elements6.tbVcompmet1.value = Dest.toFixed(Ndec);

        elements6.tbVemermet1.value = h.toFixed(Ndec);

        elements6.tbVemermet2.value = d.toFixed(Ndec);

    } else {
        alert("rellena todos los campos Por favor");
    }
}

function ejemploCalculo20() {
    elements6.tbhabmet1.value = 0.01;
    elements6.tbdotmet1.value = 4.8;
    elements6.tbntanquesmet1.value = 1.5;
    elements6.tbaltsedmet1.value = 1;
    elements6.tbaltbordlibmet1.value = 1.2;
    elements6.tbaltbordlibmet2.value = 0.2;
    elements6.tbaltbordlibmet3.value = 0.5;
    elements6.tbaltbordlibmet4.value = 1;
    elements6.tbaltbordlibmet5.value = 1.2;
}

function limpiarCampos20() {
    elements6.tbhabmet1.value = null;
    elements6.tbdotmet1.value = null;
    elements6.tbntanquesmet1.value = null;
    elements6.tbaltsedmet1.value = null;
    elements6.tbaltbordlibmet1.value = null;
    elements6.tbaltbordlibmet2.value = null;
    elements6.tbaltbordlibmet3.value = null;
    elements6.tbaltbordlibmet4.value = null;
    elements6.tbaltbordlibmet5.value = null;
}

  document.getElementById("e20_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo20();
  });
  
  document.getElementById("e20_limpiar").addEventListener("click", () => {
    limpiarCampos20();
  });
  
  document.getElementById("e20_calcular").addEventListener("click", () => {
    calcular20();
    resultadosInterfaz20.style.opacity = "100";
    resultadosInterfaz20.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz20.style.animation = "moveFadeOut3 0.6s forwards";
  });










