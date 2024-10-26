const resultadosInterfaz15 = document.getElementById("e15_contenedor_resultados");

const elements2 = {
    tbdotmet1: document.getElementById('e15_estrato'),
    tbntanquesmet1: document.getElementById('e15_profundidad'),
    tbaltsedmet1: document.getElementById('e15_riego'),
    tbaltbordlibmet1: document.getElementById('e15_tabla'),
    tbaltbordlibmet2: document.getElementById('e15_dreprimir'),
    tbaltbordlibmet3: document.getElementById('e15_conductividad'),
    tbaltbordlibmet4: document.getElementById('e15_tirante_dren'),
    tbaltbordlibmet5: document.getElementById('e15_anchoS'),
    tbaltbordlibmet6: document.getElementById('e15_talud'),
    tbaltbordlibmet7: document.getElementById('e15_poroso'),
    tbQprommet1: document.getElementById('e15_espaciamiento'),
    tbQprommet2: document.getElementById('e15_inicial'),
    tbVcompmet1: document.getElementById('e15_agua'),
    tbVcompmet2: document.getElementById('e15_flujo'),
    tbVemermet1: document.getElementById('e15_equivalente'),
};

function calcular15() {
    let Ndec = 4;
    if (elements2.tbaltsedmet1.value !== '' && elements2.tbaltbordlibmet1.value !== '' && elements2.tbntanquesmet1.value !== '' &&
        elements2.tbdotmet1.value !== '' && elements2.tbaltbordlibmet2.value !== '' && elements2.tbaltbordlibmet3.value !== '' &&
        elements2.tbaltbordlibmet4.value !== '' && elements2.tbaltbordlibmet5.value !== '' && elements2.tbaltbordlibmet6.value !== '' &&
        elements2.tbaltbordlibmet7.value !== '') {

        let PEI = parseFloat(elements2.tbdotmet1.value);
        let PD = parseFloat(elements2.tbntanquesmet1.value);
        let PTAho = parseFloat(elements2.tbaltsedmet1.value);
        let PTAht = parseFloat(elements2.tbaltbordlibmet1.value);
        let tiempo = parseFloat(elements2.tbaltbordlibmet2.value);
        let k = parseFloat(elements2.tbaltbordlibmet3.value);
        let y = parseFloat(elements2.tbaltbordlibmet4.value);
        let b = parseFloat(elements2.tbaltbordlibmet5.value);
        let z = parseFloat(elements2.tbaltbordlibmet6.value);
        let fi = parseFloat(elements2.tbaltbordlibmet7.value);

        let ho = (PEI - (PEI - PD + y)) - PTAho;
        let ht = (PEI - (PEI - PD + y)) - PTAht;
        let phi = (k / 100) ** 0.5;
        phi = fi / 100;
        let Dest = PEI - PD + y;
        let per = b + (2 * y * ((1 + (z ** 2)) ** 0.5));

        let d = 0.01;
        let Lest, Lcal;
        for (; d <= 100; d += 0.01) {
            Lest = (((Math.PI ** 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht)))) ** 0.5;
            d = Dest / ((((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per))) + 1);
            Lcal = (((Math.PI ** 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht)))) ** 0.5;
            if (Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) break;
            if (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99)) break;
        }

        elements2.tbQprommet1.value = Lest.toFixed(Ndec);
        elements2.tbQprommet2.value = ho.toFixed(Ndec);
        elements2.tbVcompmet1.value = ht.toFixed(Ndec);
        elements2.tbVcompmet2.value = Dest.toFixed(Ndec);
        elements2.tbVemermet1.value = d.toFixed(Ndec);
    } else {
        alert("elementos vacios asegurate de llenar todos")
    }
}

function ejemploCalculo15() {
    elements2.tbdotmet1.value = 4.9;
    elements2.tbntanquesmet1.value = 1.9;
    elements2.tbaltsedmet1.value = 0.65;
    elements2.tbaltbordlibmet1.value = 1.1;
    elements2.tbaltbordlibmet2.value = 3;
    elements2.tbaltbordlibmet3.value = 0.9;
    elements2.tbaltbordlibmet4.value = 0.2;
    elements2.tbaltbordlibmet5.value = 0.4;
    elements2.tbaltbordlibmet6.value = 1;
    elements2.tbaltbordlibmet7.value = 5;
}

function limpiarCampos15() {
    elements2.tbdotmet1.value = null;
    elements2.tbntanquesmet1.value = null;
    elements2.tbaltsedmet1.value = null;
    elements2.tbaltbordlibmet1.value = null;
    elements2.tbaltbordlibmet2.value = null;
    elements2.tbaltbordlibmet3.value = null;
    elements2.tbaltbordlibmet4.value = null;
    elements2.tbaltbordlibmet5.value = null;
    elements2.tbaltbordlibmet6.value = null;
    elements2.tbaltbordlibmet7.value = null;
}
  document.getElementById("e15_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo15();
  });
  
  document.getElementById("e15_limpiar").addEventListener("click", () => {
    limpiarCampos15();
  });
  
  document.getElementById("e15_calcular").addEventListener("click", () => {
    calcular15();
    resultadosInterfaz15.style.opacity = "100";
    resultadosInterfaz15.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz15.style.animation = "moveFadeOut3 0.6s forwards";
  });
