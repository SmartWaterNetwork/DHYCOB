const resultadosInterfaz17 = document.getElementById("e17_contenedor_resultados");


const elements4 = {
    tbdotmet1: document.getElementById('e17_estrato'),
    tbntanquesmet1: document.getElementById('e17_profundidad'),
    tbaltsedmet1: document.getElementById('e17_riego'),
    tbaltbordlibmet1: document.getElementById('e17_tabla'),
    tbaltbordlibmet2: document.getElementById('e17_dreprimir'),
    tbaltbordlibmet3: document.getElementById('e17_conductividad'),
    tbaltbordlibmet4: document.getElementById('e17_tirante_dren'),
    tbaltbordlibmet5: document.getElementById('e17_anchoS'),
    tbaltbordlibmet6: document.getElementById('e17_talud'),
    tbaltbordlibmet7: document.getElementById('e17_poroso'),
    tbQprommet1: document.getElementById('e17_espaciamiento'),
    tbQprommet2: document.getElementById('e17_inicial'),
    tbVcompmet1: document.getElementById('e17_agua'),
    tbVcompmet2: document.getElementById('e17_flujo'),
    tbVemermet1: document.getElementById('e17_equivalente'),
};

function calcular17() {
    let Ndec = 4;
    if (elements4.tbaltsedmet1.value !== '' && elements4.tbaltbordlibmet1.value !== '' && elements4.tbntanquesmet1.value !== '' &&
        elements4.tbdotmet1.value !== '' && elements4.tbaltbordlibmet2.value !== '' && elements4.tbaltbordlibmet3.value !== '' &&
        elements4.tbaltbordlibmet4.value !== '' && elements4.tbaltbordlibmet5.value !== '' && elements4.tbaltbordlibmet6.value !== '' &&
        elements4.tbaltbordlibmet7.value !== '') {


        let PEI = parseFloat(elements4.tbdotmet1.value);
        let PD = parseFloat(elements4.tbntanquesmet1.value);
        let PTAho = parseFloat(elements4.tbaltsedmet1.value);
        let PTAht = parseFloat(elements4.tbaltbordlibmet1.value);
        let tiempo = parseFloat(elements4.tbaltbordlibmet2.value);
        let k = parseFloat(elements4.tbaltbordlibmet3.value);
        let y = parseFloat(elements4.tbaltbordlibmet4.value);
        let b = parseFloat(elements4.tbaltbordlibmet5.value);
        let z = parseFloat(elements4.tbaltbordlibmet6.value);
        let fi = parseFloat(elements4.tbaltbordlibmet7.value);

        let ho = (PEI - (PEI - PD + y)) - PTAho;
        let ht = (PEI - (PEI - PD + y)) - PTAht;
        let phi = Math.sqrt(k / 100);
        phi = fi / 100;
        let Dest = PEI - PD + y;
        let per = b + (2 * y * Math.sqrt(1 + (z * z)));

        let relhtho = ht / ho;
        let coefC;
        if (relhtho > 1) {
            coefC = 0.01;
        } else if (relhtho === 1) {
            coefC = 0.1;
        } else if (relhtho > 0.99) {
            coefC = 0.2;
        } else if (relhtho > 0.95) {
            coefC = ((((1 - relhtho) / (1 - 0.95)) * (0.2 - 0.3)) - 0.2) * (-1);
        } else if (relhtho > 0.2) {
            coefC = ((((0.95 - relhtho) / (0.95 - 0.2)) * (0.3 - 0.8)) - 0.3) * (-1);
        } else if (relhtho > 0) {
            coefC = ((((0.2 - relhtho) / (0.2 - 0)) * (0.8 - 0.98)) - 0.8) * (-1);
        }

        let Lest, Lcal, d;
        for (d = 0.01; d <= 100; d += 0.01) {
            Lest = (1 / coefC) * Math.sqrt(((4 * tiempo * k) / phi) * (d + ((ho + ht) / 4)));
            d = Dest / (((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per)) + 1);
            Lcal = (1 / coefC) * Math.sqrt(((4 * tiempo * k) / phi) * (d + ((ho + ht) / 4)));
            if ((Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) || (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99))) {
                break;
            }
        }

        elements4.tbQprommet1.value = Lest.toFixed(Ndec);
        elements4.tbQprommet2.value = ho.toFixed(Ndec);
        elements4.tbVcompmet1.value = ht.toFixed(Ndec);
        elements4.tbVcompmet2.value = Dest.toFixed(Ndec);
        elements4.tbVemermet1.value = d.toFixed(Ndec);

    } else {
        alert("rellena todos los campos para continuar");
    }
}

function ejemploCalculo17() {
    elements4.tbdotmet1.value = 4.9;
    elements4.tbntanquesmet1.value = 1.9;
    elements4.tbaltsedmet1.value = 0.65;
    elements4.tbaltbordlibmet1.value = 1.1;
    elements4.tbaltbordlibmet2.value = 3;
    elements4.tbaltbordlibmet3.value = 0.9;
    elements4.tbaltbordlibmet4.value = 0.2;
    elements4.tbaltbordlibmet5.value = 0.4;
    elements4.tbaltbordlibmet6.value = 1;
    elements4.tbaltbordlibmet7.value = 5;
}

function limpiarCampos17(){
    elements4.tbdotmet1.value = null;
    elements4.tbntanquesmet1.value = null;
    elements4.tbaltsedmet1.value = null;
    elements4.tbaltbordlibmet1.value = null;
    elements4.tbaltbordlibmet2.value = null;
    elements4.tbaltbordlibmet3.value = null;
    elements4.tbaltbordlibmet4.value = null;
    elements4.tbaltbordlibmet5.value = null;
    elements4.tbaltbordlibmet6.value = null;
    elements4.tbaltbordlibmet7.value = null;
}


  document.getElementById("e17_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo17();
  });
  
  document.getElementById("e17_limpiar").addEventListener("click", () => {
    limpiarCampos17();
  });
  
  document.getElementById("e17_calcular").addEventListener("click", () => {
    calcular17();
    resultadosInterfaz17.style.opacity = "100";
    resultadosInterfaz17.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz17.style.animation = "moveFadeOut3 0.6s forwards";
  });







































