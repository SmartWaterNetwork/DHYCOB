const resultadosInterfaz19 = document.getElementById("e19_contenedor_resultados");

const elements5 = {
    Tbhb: document.getElementById("e19_i_1"),
    Tbcostorevest: document.getElementById("e19_i_2"),
    TbCaudal: document.getElementById("e19_i_3"),
    Tbn: document.getElementById("e19_i_4"),
    TbS: document.getElementById("e19_i_5"),
    Tbz: document.getElementById("e19_i_6"),
    Tbrevest: document.getElementById("e19_i_7"),
    Tbcosto: document.getElementById("e19_i_8"),
  };

function calcular19() {
    let costo, costorevest, revest, QT, nT, ST, ErrT;
    let Kq, k4, k1, k2, k3, D, Y1, r;
    let E1, VT, L1, F1, relhb, P1, R1;
    let AT, TT, FT, BT, ZT, YT;
    let PT, CT, LT;
  
    function Procedimiento() {
      AT = (BT + ZT * YT) * YT;
      PT = BT + 2 * YT * LT;
      TT = BT + 2 * ZT * YT;
      FT = Math.pow(AT, 5) / Math.pow(PT, 2) - CT;
    }
  
    if (
      elements5.Tbcostorevest.value !== "" &&
      elements5.Tbhb.value !== "" &&
      elements5.Tbcosto.value !== "" &&
      elements5.TbCaudal.value !== "" &&
      elements5.Tbn.value !== "" &&
      elements5.TbS.value !== "" &&
      elements5.Tbz.value !== "" &&
      elements5.Tbrevest.value !== ""
    ) {
  
      relhb = parseFloat(elements5.Tbhb.value);
      costorevest = parseFloat(elements5.Tbcostorevest.value);
      QT = parseFloat(elements5.TbCaudal.value);
      nT = parseFloat(elements5.Tbn.value);
      ZT = parseFloat(elements5.Tbz.value);
      ST = parseFloat(elements5.TbS.value);
      revest = parseFloat(elements5.Tbrevest.value);
      Kq = QT / Math.sqrt(ST);
      costo = parseFloat(elements5.Tbcosto.value);
  
      var Ndec = parseInt(4);
  

      if (relhb < 1.5) {
        k4 = 3.0278 * relhb - 1.0659 * Math.pow(relhb, 2) - 1.4948;
        k1 = 2.7713 * relhb - 0.7874 * Math.pow(relhb, 2) - 0.9908;
      } else {
        k4 = 3.8031 * relhb - 0.982 * Math.pow(relhb, 2) - 2.7246;
        k1 = 0.6249 * relhb - 0.1322 * Math.pow(relhb, 2) - 0.1592;
      }
  
      let anchtunel = Math.pow((Kq * nT) / k4, 3 / 8);
      let hseg = ZT * anchtunel;
      let altotunel = hseg;
  
      if (QT < 0.9) {
        ErrT = 0.000000000001;
        YT = 0.000001;
      } else {
        YT = 0.001;
        ErrT = 0.001;
      }
      CT = Math.pow(QT * (nT / Math.sqrt(ST)), 3);
      LT = Math.sqrt(1 + Math.pow(ZT, 2));
      Procedimiento();
  
      let loopCounter = 0;
      while (Math.abs(FT) > ErrT || Math.abs(FT) === ErrT) {
        loopCounter++;
        D = (Math.pow(AT, 4) * (5 * PT * TT - 4 * AT * LT)) / Math.pow(PT, 3);
        Y1 = YT - FT / D;
        YT = Y1;
        Procedimiento();
        if (loopCounter > 100) break;
      }
  
      VT = QT / AT;
      L1 = AT / TT;
      F1 = VT / Math.sqrt(9.81 * L1);
      E1 = YT + Math.pow(VT, 2) / 19.62;
  
      P1 = BT + 2 * YT * Math.sqrt(1 + Math.pow(ZT, 2));
      R1 = AT / P1;
  
      YT = relhb * anchtunel;
      altotunel = ZT * anchtunel;
      hseg = altotunel - YT;
  
      AT = k1 * Math.pow(anchtunel, 2);
      VT = QT / AT;
      PT = k2 * anchtunel;
      R1 = k3 * anchtunel;
  
      let areaexv = k1 * Math.pow(anchtunel + revest / 50, 2);
      let costoexcav = areaexv * costo;
      let areaint = k1 * Math.pow(anchtunel, 2);
      let arearevest = areaexv - areaint;
      let costorevestim = arearevest * costorevest;
  
      document.getElementById("e19_r1").value = hseg.toFixed(Ndec);
      document.getElementById("e19_r2").value =
        anchtunel.toFixed(Ndec);
      document.getElementById("e19_r3").value = VT.toFixed(Ndec);
      document.getElementById("e19_r4").value = YT.toFixed(Ndec);
      document.getElementById("e19_r5").value = areaint.toFixed(Ndec);
      document.getElementById("e19_r6").value =
        altotunel.toFixed(Ndec);
      document.getElementById("e19_r7").value = areaexv.toFixed(Ndec);
      document.getElementById("e19_r8").value =
        costoexcav.toFixed(Ndec);
      document.getElementById("e19_r9").value =
        costorevestim.toFixed(Ndec);
      document.getElementById("e19_r10").value = (
        costoexcav + costorevestim
      ).toFixed(Ndec);
      document.getElementById("e19_r11").value =
        arearevest.toFixed(Ndec);
      document.getElementById("e19_r12").value = AT.toFixed(Ndec);
  
    } else {
      alert("rellena todos los campos para continuar");
    }
  }
  
  function ejemploCalculo19() {
    elements5.Tbhb.value = 1.25;
    elements5.Tbcostorevest.value = 10;
    elements5.TbCaudal.value = 2.8;
    elements5.Tbn.value = 0.015;
    elements5.TbS.value = 0.0012;
    elements5.Tbz.value = 1.5;
    elements5.Tbrevest.value = 20;
    elements5.Tbcosto.value = 30;
  }
  
  function limpiarCampos19() {
    elements5.Tbhb.value = null;
    elements5.Tbcostorevest.value = null;
    elements5.TbCaudal.value = null;
    elements5.Tbn.value = null;
    elements5.TbS.value = null;
    elements5.Tbz.value = null;
    elements5.Tbrevest.value = null;
    elements5.Tbcosto.value = null;
  }
  
  document.getElementById("e19_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo19();
  });
  
  document.getElementById("e19_limpiar").addEventListener("click", () => {
    limpiarCampos19();
  });
  
  document.getElementById("e19_calcular").addEventListener("click", () => {
    calcular19();
    resultadosInterfaz19.style.opacity = "100";
    resultadosInterfaz19.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz19.style.animation = "moveFadeOut3 0.6s forwards";
  });



















