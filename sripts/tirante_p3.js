const resultadosInterfaz6 = document.getElementById('e6_contenedor_resultados');

function calcular6() {
  var QC = parseFloat(document.getElementById('e6_caudal').value);
  var DC = parseFloat(document.getElementById('e6_diametro').value);
  var nC = parseFloat(document.getElementById('e6_rugosidad').value);
  var SC = parseFloat(document.getElementById('e6_pendiente').value);

  var CC = (QC * nC) / Math.sqrt(SC);
  var YC = 0.3 + 0.001;

  while (true) {
    var WC = 1 - 2 * (YC / DC);
    var ARCOCOSWC = 1.570796 - Math.atan(WC / Math.sqrt(1 - WC * WC));
    var XC = 2 * ARCOCOSWC;
    var AC = (XC - Math.sin(XC)) * Math.pow(DC, 2) / 8;
    var PC = XC * DC / 2;
    var FC = Math.pow(AC, 5 / 3) / Math.pow(PC, 2 / 3) - CC;

    if (Math.abs(FC) < 0.0001) {
      var VC = QC / AC;
      var TC = DC * Math.sin(XC / 2);
      var F2 = VC / Math.sqrt(9.81 * DC);

      var tiranteNormal = YC.toFixed(3);
      var perimetro = PC.toFixed(3);
      var areaHidraulica = AC.toFixed(3);
      var radioHidraulico = (AC / PC).toFixed(3);
      var espejoAgua = VC.toFixed(3);
      var velocidad = TC.toFixed(3);
      var numeroFroude = F2.toFixed(3);
      var energia = (YC + Math.pow(VC, 2) / (2 * 9.81)).toFixed(3);
      var tipoFlujo = F2 < 1 ? "Flujo subcrítico" : (F2 > 1 ? "Flujo supercrítico" : "Flujo crítico");

      document.getElementById('e6_tiranteNormal').value = tiranteNormal;
      document.getElementById('e6_perimetro').value = perimetro;
      document.getElementById('e6_areaHidraulica').value = areaHidraulica;
      document.getElementById('e6_radioHidraulico').value = radioHidraulico;
      document.getElementById('e6_espejoAgua').value = espejoAgua;
      document.getElementById('e6_velocidad').value = velocidad;
      document.getElementById('e6_numeroFroude').value = numeroFroude;
      document.getElementById('e6_energia').value = energia;
      document.getElementById('e6_tipoFlujo').value = tipoFlujo;
      break;
    }

    YC += 0.0001;

    if (YC > DC) {
      alert("No se puede calcular el flujo con los valores proporcionados.");
      break;
    }
  }
}

function limpiarCampos6() {
  document.getElementById('e6_caudal').value = null;
  document.getElementById('e6_diametro').value = null;
  document.getElementById('e6_rugosidad').value = null;
  document.getElementById('e6_pendiente').value = null;
  document.getElementById('e6_tiranteNormal').value = null;
  document.getElementById('e6_perimetro').value = null;
  document.getElementById('e6_areaHidraulica').value = null;
  document.getElementById('e6_radioHidraulico').value = null;
  document.getElementById('e6_espejoAgua').value = null;
  document.getElementById('e6_velocidad').value = null;
  document.getElementById('e6_numeroFroude').value = null;
  document.getElementById('e6_energia').value = null;
  document.getElementById('e6_tipoFlujo').value = null;
}

function ejemploCalculo6() {
  document.getElementById('e6_caudal').value = "1";
  document.getElementById('e6_diametro').value = "3";
  document.getElementById('e6_rugosidad').value = "0.015";
  document.getElementById('e6_pendiente').value = "0.0005";
}

document.getElementById('e6_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo6();
})

document.getElementById('e6_limpiar').addEventListener('click', () => {
  limpiarCampos6();
})

document.getElementById('e6_calcular').addEventListener('click', () => {
  calcular6();
  resultadosInterfaz6.style.opacity = '100';
  resultadosInterfaz6.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz6.style.animation = 'moveFadeOut3 0.6s forwards';
})
