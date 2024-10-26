const resultadosInterfaz9 = document.getElementById('e9_contenedor_resultados');
function calcular9() {
  var QTrapezio = parseFloat(document.getElementById('e9_caudal').value);
  var BTrapezio = parseFloat(document.getElementById('e9_anchoSolera').value);
  var zTrapezio = 0;
  var YTrapezio = parseFloat(document.getElementById('e9_titanteConocido').value);
  var JTrapezio = 6;
  var ATrapezio, RTrapezio, ENERGIATrapezio, TTrapezio, K1, K2, K3, K4, FTrapezio, DTrapezio;
  var Y1Trapezio, Y2Trapezio, E1Trapezio, A2Trapezio, E2Trapezio, E3Trapezio, Y3Trapezio;

  ATrapezio = (BTrapezio + (zTrapezio * YTrapezio)) * YTrapezio;
  RTrapezio = Math.pow(QTrapezio, 2) / (19.62 * YTrapezio * Math.pow(ATrapezio, 2));
  ENERGIATrapezio = YTrapezio + RTrapezio;

  if (zTrapezio === 0) {
    zTrapezio = 0.001;
  }

  TTrapezio = BTrapezio / (zTrapezio * YTrapezio);
  K1 = (2.5 * TTrapezio) + 1;
  K2 = (1.5 * TTrapezio + 1) * (TTrapezio + 1);
  K3 = (0.5 * Math.pow(TTrapezio, 2)) + (TTrapezio - 6 * RTrapezio) * (TTrapezio + 1);
  K4 = 6 * RTrapezio * Math.pow(TTrapezio + 1, 2);
  FTrapezio = Math.pow(JTrapezio, 4) + K1 * Math.pow(JTrapezio, 3) + K2 * Math.pow(JTrapezio, 2) + K3 * JTrapezio - K4;

  while (Math.abs(FTrapezio) > 0.0001 || Math.abs(FTrapezio) === 0.0001) {
    DTrapezio = 4 * Math.pow(JTrapezio, 3) + 3 * K1 * Math.pow(JTrapezio, 2) + 2 * K2 * JTrapezio + K3;
    JTrapezio = JTrapezio - (FTrapezio / DTrapezio);
    FTrapezio = Math.pow(JTrapezio, 4) + K1 * Math.pow(JTrapezio, 3) + K2 * Math.pow(JTrapezio, 2) + K3 * JTrapezio - K4;
  }

  Y1Trapezio = YTrapezio;
  Y2Trapezio = JTrapezio * Y1Trapezio;
  E1Trapezio = Y1Trapezio + Math.pow(QTrapezio, 2) / (19.62 * Math.pow(ATrapezio, 2));
  A2Trapezio = (BTrapezio + zTrapezio * Y2Trapezio) * Y2Trapezio;
  E2Trapezio = Y2Trapezio + Math.pow(QTrapezio, 2) / (19.62 * Math.pow(A2Trapezio, 2));
  E3Trapezio = Math.abs(E2Trapezio - E1Trapezio);
  Y3Trapezio = Math.abs(Y1Trapezio - Y2Trapezio);

  document.getElementById('e9_tiranteConjugado').value = Y2Trapezio.toFixed(4);
  document.getElementById('e9_froudeConjugado').value = ((QTrapezio / A2Trapezio) / Math.sqrt(9.81 * Y2Trapezio)).toFixed(3);
  document.getElementById('e9_alturaSalto').value = Y3Trapezio.toFixed(4);
  document.getElementById('e9_longitudSalto').value = (Y3Trapezio * 5).toFixed(4);
  document.getElementById('e9_perdida').value = (E2Trapezio - E1Trapezio).toFixed(4);
  document.getElementById('e9_pendienteCanal').value = JTrapezio.toFixed(4);

}


function limpiarCampos9() {
  document.getElementById('e9_caudal').value = null;
  document.getElementById('e9_anchoSolera').value = null;
  document.getElementById('e9_titanteConocido').value = null;
  document.getElementById('e9_tiranteConjugado').value = null;
  document.getElementById('e9_froudeConjugado').value = null;
  document.getElementById('e9_alturaSalto').value = null;
  document.getElementById('e9_longitudSalto').value = null;
  document.getElementById('e9_perdida').value = null;
  document.getElementById('e9_pendienteCanal').value = null;
}

function ejemploCalculo9() {
  document.getElementById('e9_caudal').value = '2';
  document.getElementById('e9_anchoSolera').value = '1.5';
  document.getElementById('e9_titanteConocido').value = '0.85';
}

document.getElementById('e9_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo9();
})

document.getElementById('e9_limpiar').addEventListener('click', () => {
  limpiarCampos9();
})

document.getElementById('e9_calcular').addEventListener('click', () => {
  calcular9();
  resultadosInterfaz9.style.opacity = '100';
  resultadosInterfaz9.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz9.style.animation = 'moveFadeOut3 0.6s forwards';
})



