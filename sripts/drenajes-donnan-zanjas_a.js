const resultadosInterfaz11 = document.getElementById(
  "e11_contenedor_resultados"
);

function calcular11() {
  let recarga = parseFloat(document.getElementById("e11_recarga").value);
  let profundidadEstrato = parseFloat(
    document.getElementById("e11_profundidad").value
  );
  let profundidadDren = parseFloat(document.getElementById("e11_dren").value);
  let profundidadTablaAgua = parseFloat(
    document.getElementById("e11_tabla").value
  );
  let conductividadHidraulica = parseFloat(
    document.getElementById("e11_conductividad").value
  );
  let tiranteDren = parseFloat(
    document.getElementById("e11_tirante_dren").value
  );
  let anchoSolera = parseFloat(document.getElementById("e11_anchoS").value);
  let taludDren = parseFloat(document.getElementById("e11_talud").value);

  let valid = validateInputs();

  if (valid) return;

  let Ndec = 4;

  let Qprommet1 = Math.sqrt(
    (4 *
      conductividadHidraulica *
      (Math.pow(profundidadEstrato - profundidadTablaAgua, 2) -
        Math.pow(profundidadEstrato - profundidadDren + tiranteDren, 2))) /
      recarga
  );
  let Vcompmet1 = profundidadEstrato - profundidadDren + tiranteDren;
  let Vemermet1 = profundidadEstrato - profundidadTablaAgua;

  document.getElementById("e11_espaciamiento").value = Qprommet1.toFixed(Ndec);
  document.getElementById("e11_capa").value = Vcompmet1.toFixed(Ndec);
  document.getElementById("e11_agua").value = Vemermet1.toFixed(Ndec);
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

function limpiarCampos11() {
  document.getElementById("e11_recarga").value = null;
  document.getElementById("e11_profundidad").value = null;
  document.getElementById("e11_dren").value = null;
  document.getElementById("e11_tabla").value = null;
  document.getElementById("e11_conductividad").value = null;
  document.getElementById("e11_tirante_dren").value = null;
  document.getElementById("e11_anchoS").value = null;
  document.getElementById("e11_talud").value = null;
  document.getElementById("e11_espaciamiento").value = null;
  document.getElementById("e11_capa").value = null;
  document.getElementById("e11_agua").value = null;
}

function ejemploCalculo11() {
  document.getElementById("e11_recarga").value = 0.01;
  document.getElementById("e11_profundidad").value = 4.8;
  document.getElementById("e11_dren").value = 1.5;
  document.getElementById("e11_tabla").value = 1;
  document.getElementById("e11_conductividad").value = 1.2;
  document.getElementById("e11_tirante_dren").value = 0.2;
  document.getElementById("e11_anchoS").value = 0.5;
  document.getElementById("e11_talud").value = 1;
}

document.getElementById("e11_ejemploCalculo").addEventListener("click", () => {
  ejemploCalculo11();
});

document.getElementById("e11_limpiar").addEventListener("click", () => {
  limpiarCampos11();
});

document.getElementById("e11_calcular").addEventListener("click", () => {
  calcular11();
  resultadosInterfaz11.style.opacity = "100";
  resultadosInterfaz11.style.animation = "opacity 0.6s ease-out";
  resultadosInterfaz11.style.animation = "moveFadeOut3 0.6s forwards";
});
