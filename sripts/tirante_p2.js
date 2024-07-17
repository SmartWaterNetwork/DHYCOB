const resultadosInterfaz2 = document.getElementById('e2_contenedor_resultados');

function calcular2() {
  function Procedimiento3() {
    AP = 4 * Math.sqrt(2 * KP) * Math.pow(YP, 3 / 2) / 3;
    TP = Math.sqrt(8 * KP * YP);
    if (YP / TP < 0.25 || YP / TP === 0.25) {
      PP = Math.sqrt(8 * KP) * (Math.sqrt(YP) + Math.pow(YP, 3 / 2) / (3 * KP));
    } else {
      var R1P = Math.sqrt(1 + 2 * YP / KP);
      PP = Math.sqrt(2 * KP * YP) * (R1P + Math.sqrt(KP / (2 * YP)) * Math.log(Math.sqrt(2 * YP / KP) + R1P));
    }
    FP = Math.pow(AP, 5 / 3) / Math.pow(PP, 2 / 3) - CP;
  }

  function Procedimiento3b() {
    AP = 2 * TP * YP / 3;
    if (YP / TP < 0.25 || YP / TP === 0.25) {
      PP = TP + 8 * Math.pow(YP, 2) / (3 * TP);
    } else {
      var R1P = Math.sqrt(1 + 16 * Math.pow(YP, 2) / Math.pow(TP, 2));
      PP = (TP / 2) * (R1P + (TP / (4 * YP)) * Math.log(4 * YP / TP + R1P));
    }
    KP = Math.pow(TP, 2) / (8 * YP);
    FP = Math.pow(AP, 5 / 3) / Math.pow(PP, 2 / 3) - CP;
  }
  var QP = parseFloat(document.getElementById('e2_caudal').value);
  var nP = parseFloat(document.getElementById('e2_rugosidad').value);
  var SP = parseFloat(document.getElementById('e2_pendiente').value);
  var KP, TP, AP, PP, YP = 0.3, FP, CP;
  var XP;






  //////////////
  const SECPAR = document.getElementById("SECPAR").selectedIndex;
  switch (SECPAR) {
    case 0:
      XP = 1;
      KP = parseFloat(document.getElementById('e2_tipo').value);
      break;
    case 1:
      XP = 2;
      TP = parseFloat(document.getElementById('e2_tipo').value);
      break;
  }


  ////////////////


  if (XP === 1) {
    CP = (QP * nP) / Math.sqrt(SP);
    while (true) {
      Procedimiento3();
      F1P = FP;
      YP = YP + 0.0001;
      Procedimiento3();
      Y1P = YP - FP * 0.0001 / (FP - F1P);
      if (Math.abs(Y1P - YP) < 0.0001 || Math.abs(Y1P - YP) === 0.0001) {
        YP = Y1P;
        Procedimiento3();
        break;
      } else {
        YP = Y1P;
      }
    }
  } else if (XP === 2) {
    CP = (QP * nP) / Math.sqrt(SP);
    while (true) {
      Procedimiento3b();
      F1P = FP;
      YP = YP + 0.0000001;
      Procedimiento3b();
      Y1P = YP - FP * 0.0000001 / (FP - F1P);
      if (Math.abs(Y1P - YP) < 0.000001 || Math.abs(Y1P - YP) === 0.000001) {
        YP = Y1P;
        Procedimiento3b();
        break;
      } else {
        YP = Y1P;
      }
    }
  }
  const VP = QP / AP;
  const F2P = VP / Math.sqrt(9.81 * 2 * YP / 3);
  const EP = YP + Math.pow(VP, 2) / 19.62;





  document.getElementById('e2_tiranteNormal').value = YP.toFixed(4);;
  document.getElementById('e2_perimetro').value = PP.toFixed(4);
  document.getElementById('e2_areaHidraulica').value = AP.toFixed(4);
  document.getElementById('e2_radioHidraulico').value = (AP / PP).toFixed(4);
  document.getElementById('e2_espejoAgua').value = TP.toFixed(4);
  document.getElementById('e2_velocidad').value = VP.toFixed(4);
  document.getElementById('e2_numeroFroude').value = F2P.toFixed(4);
  document.getElementById('e2_energia').value = EP.toFixed(4);
  document.getElementById('e2_tipoFlujo').value = (F2P < 1 ? "Flujo subcrítico" : F2P > 1 ? "Flujo supercrítico" : "Flujo crítico");
  document.getElementById('e2_focoParabola').value = KP.toFixed(4);
}
// Procedimiento3b function



function limpiarCampos2() {
  document.getElementById('e2_caudal').value = null
  document.getElementById('e2_rugosidad').value = null
  document.getElementById('e2_pendiente').value = null
  document.getElementById('e2_tipo').value = null
  document.getElementById('e2_tiranteNormal').value = null
  document.getElementById('e2_perimetro').value = null
  document.getElementById('e2_areaHidraulica').value = null
  document.getElementById('e2_radioHidraulico').value = null
  document.getElementById('e2_espejoAgua').value = null
  document.getElementById('e2_velocidad').value = null
  document.getElementById('e2_numeroFroude').value = null
  document.getElementById('e2_energia').value = null
  document.getElementById('e2_tipoFlujo').value = null
  document.getElementById('e2_focoParabola').value = null
}

function ejemploCalculo2() {
  document.getElementById("SECPAR").selectedIndex = 0;
  document.getElementById('e2_caudal').value = 1.8;
  document.getElementById('e2_tipo').value = 0.5;
  document.getElementById('e2_rugosidad').value = 0.025;
  document.getElementById('e2_pendiente').value = 0.001;
}



document.getElementById('e2_ejemploCalculo').addEventListener('click', () => {
  ejemploCalculo2();
})

document.getElementById('e2_limpiar').addEventListener('click', () => {
  limpiarCampos2();
})

document.getElementById('e2_calcular').addEventListener('click', () => {
  calcular2();
  resultadosInterfaz2.style.opacity = '100';
  resultadosInterfaz2.style.animation = 'opacity 0.6s ease-out';
  resultadosInterfaz2.style.animation = 'moveFadeOut3 0.6s forwards';
})



