const resultadosInterfaz10 = document.getElementById('e10_contenedor_resultados');

function calcular10() {
  let QTrapezio = Number(document.getElementById("e10_caudal").value);
  let BTrapezio = Number(document.getElementById("e10_base").value);
  let zTrapezio = Number(document.getElementById("e10_talud").value);
  let YTrapezio = Number(document.getElementById("e10_tirantec").value);
  let JTrapezio = 6;

  let ATrapezio = (BTrapezio + (zTrapezio * YTrapezio)) * YTrapezio;
  let RTrapezio = (Math.pow(QTrapezio, 2) / (19.62 * YTrapezio * Math.pow(ATrapezio, 2)));
  let ENERGIATrapezio = YTrapezio + RTrapezio;
  let TTrapezio = zTrapezio === 0
    ? (BTrapezio / (0.001 * YTrapezio))
    : (BTrapezio / (zTrapezio * YTrapezio));

  let K1 = (2.5 * TTrapezio) + 1;
  let K2 = (1.5 * TTrapezio + 1) * (TTrapezio + 1);
  let K3 = (0.5 * Math.pow(TTrapezio, 2)) + (TTrapezio - 6 * RTrapezio) * (TTrapezio + 1);
  let K4 = 6 * RTrapezio * Math.pow(TTrapezio + 1, 2);
  let FTrapezio = Math.pow(JTrapezio, 4) + (K1 * Math.pow(JTrapezio, 3)) + (K2 * Math.pow(JTrapezio, 2)) + (K3 * JTrapezio) - K4;
  let DTrapezio;

  while (Math.abs(FTrapezio) > 0.0001 || Math.abs(FTrapezio) === 0.0001) {
    DTrapezio = (4 * Math.pow(JTrapezio, 3)) + (3 * K1 * Math.pow(JTrapezio, 2)) + (2 * K2 * JTrapezio) + K3;
    JTrapezio = JTrapezio - (FTrapezio / DTrapezio);
    FTrapezio = Math.pow(JTrapezio, 4) + (K1 * Math.pow(JTrapezio, 3)) + (K2 * Math.pow(JTrapezio, 2)) + (K3 * JTrapezio) - K4;
  }

  let Y1Trapezio = YTrapezio;
  let Y2Trapezio = JTrapezio * Y1Trapezio;
  let E1Trapezio = Y1Trapezio + (Math.pow(QTrapezio, 2) / (19.62 * Math.pow(ATrapezio, 2)));
  let A2Trapezio = (BTrapezio + zTrapezio * Y2Trapezio) * Y2Trapezio;
  let E2Trapezio = Y2Trapezio + (Math.pow(QTrapezio, 2) / (19.62 * Math.pow(A2Trapezio, 2)));
  let E3Trapezio = Math.abs(E2Trapezio - E1Trapezio);
  let Y3Trapezio = Math.abs(Y1Trapezio - Y2Trapezio);

  var pendienteCanal = JTrapezio.toFixed(4);
  var tiranteConjugado = Y2Trapezio.toFixed(4);
  var perdidaEnergia = E3Trapezio.toFixed(4);
  var AlturaSalto = Y3Trapezio.toFixed(4);
  var numeroFroude = ((QTrapezio / A2Trapezio) / (Math.pow(9.81 * Y2Trapezio, 0.5))).toFixed(4);
  var longitudSalto = (Math.abs(5 * (Y2Trapezio - YTrapezio))).toFixed(4);
  // Actualiza los valores en la interfaz del usuario
  document.getElementById('e10_pc').value = pendienteCanal;
  document.getElementById('e10_tc').value = tiranteConjugado;
  document.getElementById('e10_perdidaE').value = perdidaEnergia;
  document.getElementById('e10_alturaS').value = AlturaSalto;
  document.getElementById('e10_nfc').value = numeroFroude;
  document.getElementById('e10_lS').value = longitudSalto;

  if ((QTrapezio / A2Trapezio) / (Math.pow(9.81 * Y2Trapezio, 0.5)) < 1) {
    document.getElementById('e10_tirante_su').value = "tirante subcrítico";
  } else {
    document.getElementById('e10_tirante_su').value = "tirante supercrítico";
  }

}

function limpiarCampos10() {
  document.getElementById('e10_pc').value = null;
  document.getElementById('e10_tc').value = null;
  document.getElementById('e10_perdidaE').value = null;
  document.getElementById('e10_alturaS').value = null;
  document.getElementById('e10_nfc').value = null;
  document.getElementById('e10_lS').value = null;
  document.getElementById('e10_caudal').value = null;
  document.getElementById('e10_base').value = null;
  document.getElementById('e10_talud').value = null;
  document.getElementById('e10_tirantec').value = null;
  document.getElementById('e10_tirante_su').value = null;
}

function ejemploCalculo10() {
  document.getElementById('e10_caudal').value = 2;
  document.getElementById('e10_base').value = 1.5;
  document.getElementById('e10_talud').value = 1.5;
  document.getElementById('e10_tirantec').value = 0.85;
}


document.getElementById('e10_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo10();
})

document.getElementById('e10_limpiar').addEventListener('click', () => {
  limpiarCampos10();
})

document.getElementById('e10_calcular').addEventListener('click', () => {
  calcular10();
  resultadosInterfaz10.style.opacity = '100';
  resultadosInterfaz10.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz10.style.animation = 'moveFadeOut3 0.6s forwards';
})
