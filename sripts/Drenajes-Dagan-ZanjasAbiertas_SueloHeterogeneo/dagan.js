const resultadosInterfaz14 = document.getElementById("e14_contenedor_resultados");
  const elements = {
    tbhabmet1: document.getElementById('e14_recarga'),
    tbdotmet1: document.getElementById('e14_profundidad'),
    tbntanquesmet1: document.getElementById('e14_dren'),
    tbaltsedmet1: document.getElementById('e14_tabla'),
    tbaltbordlibmet1: document.getElementById('e14_conductividad'),
    tbaltbordlibmet2: document.getElementById('e14_conductividadI'),
    tbaltbordlibmet3: document.getElementById('e14_tirante_dren'),
    tbaltbordlibmet4: document.getElementById('e14_anchoS'),
    tbaltbordlibmet5: document.getElementById('e14_talud'),


    tbQprommet1: document.getElementById('e14_espaciamiento'),
    tbVcompmet1: document.getElementById('e14_capa'),
    tbVemermet1: document.getElementById('e14_agua'),
};

let Nc;
function calcular14() {
    if (elements.tbaltsedmet1.value !== '' && elements.tbaltbordlibmet1.value !== '' && elements.tbntanquesmet1.value !== '' &&
        elements.tbhabmet1.value !== '' && elements.tbdotmet1.value !== '' && elements.tbaltbordlibmet2.value !== '' &&
        elements.tbaltbordlibmet3.value !== '' && elements.tbaltbordlibmet4.value !== '' && elements.tbaltbordlibmet5.value !== '') {
        Nc = 4;    
        let habmet1 = parseFloat(elements.tbhabmet1.value);
        let dotmeto1 = parseFloat(elements.tbdotmet1.value);
        let Ntanquesmet1 = parseFloat(elements.tbntanquesmet1.value);
        let altsedmet1 = parseFloat(elements.tbaltsedmet1.value);
        let altbordlibmet1 = parseFloat(elements.tbaltbordlibmet1.value);
        let altbordlibmet2 = parseFloat(elements.tbaltbordlibmet2.value);
        let altbordlibmet3 = parseFloat(elements.tbaltbordlibmet3.value);
        let altbordlibmet4 = parseFloat(elements.tbaltbordlibmet4.value);
        let altbordlibmet5 = parseFloat(elements.tbaltbordlibmet5.value);

        let Vcompmet1 = dotmeto1 - Ntanquesmet1 + altbordlibmet2;
        let perim = altbordlibmet3 + (2 * altbordlibmet2 * Math.sqrt(1 + Math.pow(altbordlibmet4, 2)));
        let Vemermet1 = dotmeto1 - (altsedmet1 + (dotmeto1 - Ntanquesmet1 + altbordlibmet2));

        let relpD = perim / Vcompmet1;
        let coshx = (Math.exp(relpD) + Math.exp(-relpD)) / 2;
        let beta = (2 / Math.PI) * Math.log((2 * coshx) - 2);
        let coefC = 1 / (1 - (habmet1 / altbordlibmet1));

        let Qprommet1 = ((coefC * habmet1 * beta) + Math.sqrt(Math.pow(coefC * habmet1 * beta, 2) + (8 * habmet1 * coefC * Vemermet1 * altbordlibmet5 / Vcompmet1))) / (coefC * habmet1 / Vcompmet1);

        elements.tbQprommet1.value = Qprommet1.toFixed(Nc);
        elements.tbVcompmet1.value = Vcompmet1.toFixed(Nc);
        elements.tbVemermet1.value = Vemermet1.toFixed(Nc);


    } else {
        console.log("aqui alerta ")
    }
}

function ejemploCalculo14() {
    elements.tbhabmet1.value = 0.006;
    elements.tbdotmet1.value = 4.3;
    elements.tbntanquesmet1.value = 1.5;
    elements.tbaltsedmet1.value = 1;
    elements.tbaltbordlibmet1.value = 1.3;
    elements.tbaltbordlibmet2.value = 0.2;
    elements.tbaltbordlibmet3.value = 0.5;
    elements.tbaltbordlibmet4.value = 1;
    elements.tbaltbordlibmet5.value = 2.1;
}

function limpiarCampos14() {
    elements.tbhabmet1.value = null;
    elements.tbdotmet1.value = null;
    elements.tbntanquesmet1.value = null;
    elements.tbaltsedmet1.value = null;
    elements.tbaltbordlibmet1.value = null;
    elements.tbaltbordlibmet2.value = null;
    elements.tbaltbordlibmet3.value = null;
    elements.tbaltbordlibmet4.value = null;
    elements.tbaltbordlibmet5.value = null;
}
  
  document.getElementById("e14_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo14();
  });
  
  document.getElementById("e14_limpiar").addEventListener("click", () => {
    limpiarCampos14();
  });
  
  document.getElementById("e14_calcular").addEventListener("click", () => {
    calcular14();
    resultadosInterfaz14.style.opacity = "100";
    resultadosInterfaz14.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz14.style.animation = "moveFadeOut3 0.6s forwards";
  });
  