const resultadosInterfaz13 = document.getElementById(
  "e13_contenedor_resultados"
);

function calcular13() {
  let habmet1_3 = parseFloat(document.getElementById("e13_recarga").value);
  let dotmeto1_3 = parseFloat(document.getElementById("e13_profundidad").value);
  let Ntanquesmet1_3 = parseFloat(document.getElementById("e13_dren").value);
  let altsedmet1_3 = parseFloat(document.getElementById("e13_tabla").value);
  let altbordlibmet1_3 = parseFloat(
    document.getElementById("e13_conductividad").value
  );
  let altbordlibmet2_3 = parseFloat(
    document.getElementById("e13_tirante_dren").value
  );
  let altbordlibmet3_3 = parseFloat(
    document.getElementById("e13_anchoS").value
  );
  let altbordlibmet4_3 = parseFloat(document.getElementById("e13_talud").value);
  let valid = validateInputs();

  if (valid) return;

  let Ndec = 4;

  let Vcompmet1_3 = dotmeto1_3 - Ntanquesmet1_3 + altbordlibmet2_3;
  let perim =
    altbordlibmet3_3 +
    2 * altbordlibmet2_3 * Math.sqrt(1 + Math.pow(altbordlibmet4_3, 2));
  let Vemermet1_3 =
    dotmeto1_3 -
    (altsedmet1_3 + (dotmeto1_3 - Ntanquesmet1_3 + altbordlibmet2_3));

  let relpD = perim / Vcompmet1_3;
  let coshx = (Math.exp(relpD) + Math.exp(-relpD)) / 2;
  let beta = (2 / Math.PI) * Math.log(2 * coshx - 2);

  let Qprommet1_3 =
    (habmet1_3 * beta +
      Math.sqrt(
        Math.pow(habmet1_3 * beta, 2) +
          (8 * habmet1_3 * Vemermet1_3 * altbordlibmet1_3) / Vcompmet1_3
      )) /
    (habmet1_3 / Vcompmet1_3);

  document.getElementById("e13_espaciamiento").value =
    Qprommet1_3.toFixed(Ndec);
  document.getElementById("e13_capa").value = Vcompmet1_3.toFixed(Ndec);
  document.getElementById("e13_agua").value = Vemermet1_3.toFixed(Ndec);
}

function validateInputs() {
  let inputs = document.querySelectorAll("input[type='text']");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value || isNaN(input.value) || parseFloat(input.value) <= 0) {
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });

  return valid;
}

function limpiarCampos13() {
  document.getElementById("e13_recarga").value = null;
  document.getElementById("e13_profundidad").value = null;
  document.getElementById("e13_dren").value = null;
  document.getElementById("e13_tabla").value = null;
  document.getElementById("e13_conductividad").value = null;
  document.getElementById("e13_tirante_dren").value = null;
  document.getElementById("e13_anchoS").value = null;
  document.getElementById("e13_talud").value = null;
  document.getElementById("e13_espaciamiento").value = null;
  document.getElementById("e13_capa").value = null;
  document.getElementById("e13_agua").value = null;
}

function ejemploCalculo13() {
  document.getElementById("e13_recarga").value = 0.01;
  document.getElementById("e13_profundidad").value = 4.8;
  document.getElementById("e13_dren").value = 1.5;
  document.getElementById("e13_tabla").value = 1;
  document.getElementById("e13_conductividad").value = 1.2;
  document.getElementById("e13_tirante_dren").value = 0.2;
  document.getElementById("e13_anchoS").value = 0.5;
  document.getElementById("e13_talud").value = 1;
}

document.getElementById("e13_ejemploCalculo").addEventListener("click", () => {
  ejemploCalculo13();
});

document.getElementById("e13_limpiar").addEventListener("click", () => {
  limpiarCampos13();
});

document.getElementById("e13_calcular").addEventListener("click", () => {
  calcular13();
  resultadosInterfaz13.style.opacity = "100";
  resultadosInterfaz13.style.animation = "opacity 0.6s ease-out";
  resultadosInterfaz13.style.animation = "moveFadeOut3 0.6s forwards";
});
