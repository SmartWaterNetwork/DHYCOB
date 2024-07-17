const resultadosInterfaz7 = document.getElementById('e7_contenedor_resultados');

function calcular7() {
  var caudal = parseFloat(document.getElementById('e7_caudal').value);
  var anchoSolera = parseFloat(document.getElementById('e7_anchoSolera').value);
  var pendienteTalud = parseFloat(document.getElementById('e7_pendienteTalud').value);

  var QT = caudal;
  var ZT = pendienteTalud;
  var BT = anchoSolera;
  var YT = 0.0000001;
  var ErrT = 0.0001;

  var CT, LT, AT, PT, TT, FT, VT, L1, F1, E1, P1, R1;

  CT = Math.pow(QT, 2) / 9.810001;
  LT = Math.sqrt(1 + Math.pow(ZT, 2));

  while (true) {
    AT = (BT + ZT * YT) * YT;
    PT = BT + 2 * YT * LT;
    TT = BT + 2 * ZT * YT;
    FT = Math.pow(AT, 3) / TT - CT;

    var D = 3 * Math.pow(AT, 2) - (2 * ZT * Math.pow(AT, 3)) / Math.pow(TT, 2);
    var Y1 = YT - FT / D;

    if (Math.abs(FT) <= ErrT) {
      YT = Y1;
      break;
    }

    YT = Y1;
  }

  VT = QT / AT;
  L1 = AT / TT;
  F1 = VT / Math.sqrt(9.81 * L1);
  E1 = YT + Math.pow(VT, 2) / 19.62;

  P1 = BT + 2 * YT * Math.sqrt(1 + Math.pow(ZT, 2));
  R1 = AT / P1;


  document.getElementById('e7_tiranteCritico').value = YT.toFixed(4);
  document.getElementById('e7_perimetro').value = P1.toFixed(4);
  document.getElementById('e7_areaHidraulica').value = AT.toFixed(4);
  document.getElementById('e7_radioHidraulico').value = R1.toFixed(4);
  document.getElementById('e7_espejoAgua').value = TT.toFixed(4);
  document.getElementById('e7_velocidad').value = VT.toFixed(4);
  document.getElementById('e7_numeroFroude').value = F1.toFixed(4);
  document.getElementById('e7_energia').value = E1.toFixed(4);
}

function limpiarCampos7() {
  document.getElementById('e7_caudal').value = null
  document.getElementById('e7_anchoSolera').value = null
  document.getElementById('e7_pendienteTalud').value = null;
  document.getElementById('e7_tiranteCritico').value = null
  document.getElementById('e7_perimetro').value = null
  document.getElementById('e7_areaHidraulica').value = null
  document.getElementById('e7_radioHidraulico').value = null
  document.getElementById('e7_espejoAgua').value = null
  document.getElementById('e7_velocidad').value = null
  document.getElementById('e7_numeroFroude').value = null
  document.getElementById('e7_energia').value = null
}

function ejemploCalculo7() {
  document.getElementById('e7_caudal').value = '2.3';
  document.getElementById('e7_anchoSolera').value = '1.5';
  document.getElementById('e7_pendienteTalud').value = '1.5';
}




document.getElementById('e7_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo7();
})

document.getElementById('e7_limpiar').addEventListener('click', () => {
  limpiarCampos7();
})

document.getElementById('e7_calcular').addEventListener('click', () => {
  calcular7();
  resultadosInterfaz7.style.opacity = '100';
  resultadosInterfaz7.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz7.style.animation = 'moveFadeOut3 0.6s forwards';
})