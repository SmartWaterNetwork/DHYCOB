const resultadosInterfaz8 = document.getElementById('e8_contenedor_resultados');

function calcular8() {
  var QC = parseFloat(document.getElementById('e8_caudal').value);
  var DC = parseFloat(document.getElementById('e8_diametro').value);
  var nC = 1;
  var SC = 1;

  var CC = QC / Math.sqrt(9.81);
  var YC = 0.00001;

  while (true) {
    var WC = 1 - 2 * (YC / DC);
    var ARCOCOSWC = 1.570796 - Math.atan(WC / Math.sqrt(1 - WC * WC));
    var XC = 2 * ARCOCOSWC;
    var AC = (XC - Math.sin(XC)) * Math.pow(DC, 2) / 8;
    var PC = XC * DC / 2;
    var FC = Math.pow(AC, 3 / 2) / Math.sqrt(DC * Math.sin(XC / 2)) - CC;

    if (Math.abs(FC) < 0.0001) {
      var VC = QC / AC;
      var TC = DC * Math.sin(XC / 2);
      var F2 = VC / Math.sqrt(9.81 * DC);

      var tiranteCritico = YC.toFixed(4);
      var perimetro = PC.toFixed(4);
      var areaHidraulica = AC.toFixed(4);
      var radioHidraulico = (AC / PC).toFixed(4);
      var espejoAgua = (DC * Math.sin(XC / 2)).toFixed(4);
      var velocidad = (QC / AC).toFixed(4);
      var numeroFroude = "1";
      var energia = (YC + Math.pow((QC / AC), 2) / (2 * 9.81)).toFixed(4);

      document.getElementById('e8_tiranteCritico').value = tiranteCritico;
      document.getElementById('e8_perimetro').value = perimetro;
      document.getElementById('e8_areaHidraulica').value = areaHidraulica;
      document.getElementById('e8_radioHidraulico').value = radioHidraulico;
      document.getElementById('e8_espejoAgua').value = espejoAgua;
      document.getElementById('e8_velocidad').value = velocidad;
      document.getElementById('e8_numeroFroude').value = numeroFroude;
      document.getElementById('e8_energia').value = energia;
      break;
    }
    YC += 0.00001;
    if (YC > DC) {
      document.getElementById('resultados').style.display = "none";
      alert("No se puede calcular el tirante crítico con los valores proporcionados.");
      break;
    }
  }
}

function limpiarCampos8() {
  document.getElementById('e8_caudal').value = null;
  document.getElementById('e8_diametro').value = null;
  document.getElementById('e8_tiranteCritico').value = null;
  document.getElementById('e8_perimetro').value = null;
  document.getElementById('e8_areaHidraulica').value = null;
  document.getElementById('e8_radioHidraulico').value = null;
  document.getElementById('e8_espejoAgua').value = null;
  document.getElementById('e8_velocidad').value = null;
  document.getElementById('e8_numeroFroude').value = null;
  document.getElementById('e8_energia').value = null;
}

function ejemploCalculo8() {
  document.getElementById('e8_caudal').value = "1.5";
  document.getElementById('e8_diametro').value = "1.4";
}


document.getElementById('e8_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo8();
})

document.getElementById('e8_limpiar').addEventListener('click', () => {
  limpiarCampos8();
})

document.getElementById('e8_calcular').addEventListener('click', () => {
  calcular8();
  resultadosInterfaz8.style.opacity = '100';
  resultadosInterfaz8.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz8.style.animation = 'moveFadeOut3 0.6s forwards';
})