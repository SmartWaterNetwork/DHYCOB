const resultadosInterfaz12 = document.getElementById(
  "e12_contenedor_resultados"
);
let Ndec = 4;
function calcular12() {
  let habmet1,
    altsedmet1,
    dotmeto1,
    Ntanquesmet1,
    altbordlibmet1,
    altbordlibmet2;
  let Qprommet1_2, Vcompmet1_2, Vemermet1_2;
  habmet1 = parseFloat(document.getElementById("e12_recarga").value);
  dotmeto1 = parseFloat(document.getElementById("e12_profundidad").value);
  Ntanquesmet1 = parseFloat(document.getElementById("e12_dren").value);
  altsedmet1 = parseFloat(document.getElementById("e12_tabla").value);
  altbordlibmet1 = parseFloat(
    document.getElementById("e12_conductividad").value
  );
  altbordlibmet2 = parseFloat(
    document.getElementById("e12_tirante_dren").value
  );

  if (
    habmet1 !== "" &&
    dotmeto1 !== "" &&
    Ntanquesmet1 !== "" &&
    altsedmet1 !== "" &&
    altbordlibmet1 !== "" &&
    altbordlibmet2 !== ""
  ) {
    Qprommet1_2 = Math.sqrt(
      (4 *
        altbordlibmet1 *
        (Math.pow(dotmeto1 - altsedmet1, 2) -
          Math.pow(dotmeto1 - Ntanquesmet1 + altbordlibmet2, 2))) /
        habmet1
    );
    Vcompmet1_2 = dotmeto1 - Ntanquesmet1 + altbordlibmet2;
    Vemermet1_2 = dotmeto1 - altsedmet1;

    document.getElementById("e12_espaciamiento").value =
      Qprommet1_2.toFixed(Ndec);
    document.getElementById("e12_capa").value = Vcompmet1_2.toFixed(Ndec);
    document.getElementById("e12_agua").value = Vemermet1_2.toFixed(Ndec);
  } else {
    alert('error no ha ingresado todos los datos correctamente');
  }
}

function ejemploCalculo12() {
  document.getElementById("e12_recarga").value = 0.01;
  document.getElementById("e12_profundidad").value = 4.8;
  document.getElementById("e12_dren").value = 1.5;
  document.getElementById("e12_tabla").value = 1;
  document.getElementById("e12_conductividad").value = 1.2;
  document.getElementById("e12_tirante_dren").value = 0.1;
}

function limpiarCampos12() {
  document.getElementById("e12_recarga").value = null;
  document.getElementById("e12_profundidad").value = null;
  document.getElementById("e12_dren").value = null;
  document.getElementById("e12_tabla").value = null;
  document.getElementById("e12_conductividad").value = null;
  document.getElementById("e12_tirante_dren").value = null;
  document.getElementById("e12_espaciamiento").value = null;
  document.getElementById("e12_capa").value = null;
  document.getElementById("e12_agua").value = null;
}

document.getElementById("e12_ejemploCalculo").addEventListener("click", () => {
  ejemploCalculo12();
});

document.getElementById("e12_limpiar").addEventListener("click", () => {
  limpiarCampos12();
});

document.getElementById("e12_calcular").addEventListener("click", () => {
  calcular12();
  resultadosInterfaz12.style.opacity = "100";
  resultadosInterfaz12.style.animation = "opacity 0.6s ease-out";
  resultadosInterfaz12.style.animation = "moveFadeOut3 0.6s forwards";
});
