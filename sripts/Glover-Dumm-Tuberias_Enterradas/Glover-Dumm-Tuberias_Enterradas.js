const resultadosInterfaz16 = document.getElementById("e16_contenedor_resultados");


const elements3 = {
    tbdotmet1: document.getElementById('e16_imper'),
    tbntanquesmet1: document.getElementById('e16_dren'),
    tbaltsedmet1: document.getElementById('e16_agua'),
    tbaltbordlibmet1: document.getElementById('e16_despues'),
    tbaltbordlibmet2: document.getElementById('e16_dreprimir'),
    tbaltbordlibmet3: document.getElementById('e16_hidraulica'),
    tbaltbordlibmet4: document.getElementById('e16_radio'),
    tbaltbordlibmet7: document.getElementById('e16_poroso'),
    r1: document.getElementById('e16_espaciamiento'),
    r2: document.getElementById('e16_inicial'),
    r3: document.getElementById('e16_agu'),
    r4: document.getElementById('e16_flujo'),
    r5: document.getElementById('e16_equivalente'),
};

function calcular16() {
    let Ndec = 4;
    if (elements3.tbaltsedmet1.value !== '' && elements3.tbaltbordlibmet1.value !== '' && elements3.tbntanquesmet1.value !== '' &&
        elements3.tbdotmet1.value !== '' && elements3.tbaltbordlibmet2.value !== '' && elements3.tbaltbordlibmet3.value !== '' &&
        elements3.tbaltbordlibmet4.value !== '' && elements3.tbaltbordlibmet7.value !== '') {

        let PEI = parseFloat(elements3.tbdotmet1.value);
        let PD = parseFloat(elements3.tbntanquesmet1.value);
        let PTAho = parseFloat(elements3.tbaltsedmet1.value);
        let PTAht = parseFloat(elements3.tbaltbordlibmet1.value);
        let tiempo = parseFloat(elements3.tbaltbordlibmet2.value);
        let k = parseFloat(elements3.tbaltbordlibmet3.value);
        let y = parseFloat(elements3.tbaltbordlibmet4.value);
        let fi = parseFloat(elements3.tbaltbordlibmet7.value);

        let ho = (PEI - (PEI - PD + y)) - PTAho;
        let ht = (PEI - (PEI - PD + y)) - PTAht;
        let phi = Math.sqrt(k / 100);
        phi = fi / 100;
        let Dest = PEI - PD + y;
        let per = Math.PI * y;

        let d = 0.01;
        let Lest, Lcal;
        while (d <= 100) {
            Lest = Math.sqrt((Math.pow(Math.PI, 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht))));
            d = Dest / (((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per)) + 1);
            Lcal = Math.sqrt((Math.pow(Math.PI, 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht))));
            if (Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) break;
            if (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99)) break;
            d += 0.01;
        }

        elements3.r1.value = Lest.toFixed(Ndec);
        elements3.r2.value = ho.toFixed(Ndec);
        elements3.r3.value = ht.toFixed(Ndec);
        elements3.r4.value = Dest.toFixed(Ndec);
        elements3.r5.value = d.toFixed(Ndec);
    } else {
        alert("por favor lleno todos los apartados")
    }
}

function ejemploCalculo16() {
    elements3.tbdotmet1.value = 4.9;
    elements3.tbntanquesmet1.value = 1.9;
    elements3.tbaltsedmet1.value = 0.65;
    elements3.tbaltbordlibmet1.value = 1.1;
    elements3.tbaltbordlibmet2.value = 3;
    elements3.tbaltbordlibmet3.value = 0.9;
    elements3.tbaltbordlibmet4.value = 0.1;
    elements3.tbaltbordlibmet7.value = 5;
}

function limpiarCampos16() {
    elements3.tbdotmet1.value = null;
    elements3.tbntanquesmet1.value = null;
    elements3.tbaltsedmet1.value = null;
    elements3.tbaltbordlibmet1.value = null;
    elements3.tbaltbordlibmet2.value = null;
    elements3.tbaltbordlibmet3.value = null;
    elements3.tbaltbordlibmet4.value = null;
    elements3.tbaltbordlibmet7.value = null;
}

  document.getElementById("e16_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo16();
  });
  
  document.getElementById("e16_limpiar").addEventListener("click", () => {
    limpiarCampos16();
  });
  
  document.getElementById("e16_calcular").addEventListener("click", () => {
    calcular16();
    resultadosInterfaz16.style.opacity = "100";
    resultadosInterfaz16.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz16.style.animation = "moveFadeOut3 0.6s forwards";
  });
