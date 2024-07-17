

const resultadosInterfaz = document.getElementById('e1_contenedor_resultados');

function calcular() {
  var QT = parseFloat(document.getElementById("e1_caudal").value);
  var BT = parseFloat(document.getElementById("e1_anchoSolera").value);
  var ZT = parseFloat(document.getElementById("e1_pendiente talud").value);
  var nT = parseFloat(document.getElementById("e1_rugosidad").value);
  var ST = parseFloat(document.getElementById("e1_pendiente").value);
  var decimales = 4;

  var AT, PT, TT, FT, YT, CT, LT;

  var ErrT, D, Y1, E1, VT, L1, F1;

  if (QT < 0.9) {
    ErrT = 0.000000000001;
    YT = 0.000001;
  } else {
    YT = 0.001;
    ErrT = 0.001;
  }

  CT = Math.pow(QT * (nT / Math.sqrt(ST)), 3);
  LT = Math.sqrt(1 + ZT * ZT);

  do {
    AT = (BT + ZT * YT) * YT;
    PT = BT + 2 * YT * LT;
    TT = BT + 2 * ZT * YT;
    FT = Math.pow(AT, 5) / Math.pow(PT, 2) - CT;

    D = (Math.pow(AT, 4) * (5 * PT * TT - 4 * AT * LT)) / Math.pow(PT, 3);
    Y1 = YT - FT / D;
    YT = Y1;
  } while (Math.abs(FT) > ErrT || Math.abs(FT) === ErrT);

  VT = QT / AT;
  L1 = AT / TT;
  F1 = VT / Math.sqrt(9.81 * L1);
  E1 = YT + (VT * VT) / 19.62;

  var tiranteNormal = YT.toFixed(decimales).replace(",", ".");
  var perimetro = PT.toFixed(decimales).replace(",", ".");
  var areaHidraulica = AT.toFixed(decimales).replace(",", ".");
  var radioHidraulico = (AT / PT).toFixed(decimales).replace(",", ".");
  var espejoAgua = TT.toFixed(decimales).replace(",", ".");
  var velocidad = VT.toFixed(decimales).replace(",", ".");
  var numeroFroude = F1.toFixed(decimales).replace(",", ".");
  var energia = E1.toFixed(decimales).replace(",", ".");
  var tipoFlujo = F1 < 1 ? "Flujo subcrítico" : F1 > 1 ? "Flujo supercrítico" : "Flujo crítico";

  document.getElementById('e1_tiranteNormal').value = tiranteNormal;
  document.getElementById('e1_perimetro').value = perimetro;
  document.getElementById('e1_areaHidraulica').value = areaHidraulica;
  document.getElementById('e1_radioHidraulico').value = radioHidraulico;
  document.getElementById('e1_espejoAgua').value = espejoAgua;
  document.getElementById('e1_velocidad').value = velocidad;
  document.getElementById('e1_numeroFroude').value = numeroFroude;
  document.getElementById('e1_energia').value = energia;
  document.getElementById('e1_tipoFlujo').value = tipoFlujo;

}

function limpiarCampos() {
  document.getElementById("e1_caudal").value = null;
  document.getElementById("e1_anchoSolera").value = null;
  document.getElementById("e1_pendiente talud").value = null;
  document.getElementById("e1_rugosidad").value = null;
  document.getElementById("e1_pendiente").value = null;
  document.getElementById('e1_tiranteNormal').value = null;
  document.getElementById('e1_perimetro').value = null;
  document.getElementById('e1_areaHidraulica').value = null;
  document.getElementById('e1_radioHidraulico').value = null;
  document.getElementById('e1_espejoAgua').value = null;
  document.getElementById('e1_velocidad').value = null;
  document.getElementById('e1_numeroFroude').value = null;
  document.getElementById('e1_energia').value = null;
  document.getElementById('e1_tipoFlujo').value = null;
}

function ejemploCalculo() {
  document.getElementById("e1_caudal").value = 2.3;
  document.getElementById("e1_anchoSolera").value = 1.5;
  document.getElementById("e1_pendiente talud").value = 1.5;
  document.getElementById("e1_rugosidad").value = 0.014;
  document.getElementById("e1_pendiente").value = 0.0005;
}

document.getElementById('e1_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo();
})

document.getElementById('e1_limpiar').addEventListener('click', () => {
  limpiarCampos();
})

document.getElementById('e1_calcular').addEventListener('click', () => {
  calcular();
  resultadosInterfaz.style.opacity = '100';
  resultadosInterfaz.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz.style.animation = 'moveFadeOut3 0.6s forwards';
})
