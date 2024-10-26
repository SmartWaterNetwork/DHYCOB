const resultadosInterfaz18 = document.getElementById("e18_contenedor_resultados");

function  calcular18() {
    let tbaltsedmet1 = document.getElementById("e18_imper");
    let tbaltbordlibmet1 = document.getElementById("e18_dren");
    let tbntanquesmet1 = document.getElementById("e18_agua");
    let tbdotmet1 = document.getElementById("e18_despues");
    let tbaltbordlibmet2 = document.getElementById("e18_dreprimir");
    let tbaltbordlibmet3 = document.getElementById("e18_hidraulica");
    let tbaltbordlibmet4 = document.getElementById("e18_radio");
    let tbaltbordlibmet7 = document.getElementById("e18_poroso");
  
    if (
      tbaltsedmet1.value !== "" &&
      tbaltbordlibmet1.value !== "" &&
      tbntanquesmet1.value !== "" &&
      tbdotmet1.value !== "" &&
      tbaltbordlibmet2.value !== "" &&
      tbaltbordlibmet3.value !== "" &&
      tbaltbordlibmet4.value !== "" &&
      tbaltbordlibmet7.value !== ""
    ) {
      let PEI = parseFloat(tbdotmet1.value);
      let PD = parseFloat(tbntanquesmet1.value);
      let PTAho = parseFloat(tbaltsedmet1.value);
      let PTAht = parseFloat(tbaltbordlibmet1.value);
      let tiempo = parseFloat(tbaltbordlibmet2.value);
      let k = parseFloat(tbaltbordlibmet3.value);
      let y = parseFloat(tbaltbordlibmet4.value);
      let fi = parseFloat(tbaltbordlibmet7.value);
  
      let ho = PEI - (PEI - PD + y) - PTAho;
      let ht = PEI - (PEI - PD + y) - PTAht;
      let phi = (k / 100) ** 0.5;
      phi = fi / 100;
      let Dest = PEI - PD + y;
      let per = y * 3.14159;
  
      let relhtho = ht / ho;
      let coefC;
  
      if (relhtho > 1) {
        coefC = 0.01;
      } else if (relhtho === 1) {
        coefC = 0.1;
      } else if (relhtho > 0.99) {
        coefC = 0.2;
      } else if (relhtho > 0.95) {
        coefC = (((1 - relhtho) / (1 - 0.95)) * (0.2 - 0.3) - 0.2) * -1;
      } else if (relhtho > 0.2) {
        coefC = (((0.95 - relhtho) / (0.95 - 0.2)) * (0.3 - 0.8) - 0.3) * -1;
      } else if (relhtho > 0) {
        coefC = (((0.2 - relhtho) / (0.2 - 0)) * (0.8 - 0.98) - 0.8) * -1;
      }
  
      let d, Lest, Lcal;
  
      for (d = 0.01; d <= 100; d += 0.01) {
        Lest =
          (1 / coefC) * (((4 * tiempo * k) / phi) * (d + (ho + ht) / 4)) ** 0.5;
        d = Dest / ((8 / 3.141592654) * (Dest / Lest) * Math.log(Dest / per) + 1);
        Lcal =
          (1 / coefC) * (((4 * tiempo * k) / phi) * (d + (ho + ht) / 4)) ** 0.5;
  
        if (Lcal < Lest * 1.01 && Lcal > Lest * 0.99) {
          break;
        }
        if (Lest < Lcal * 1.01 && Lest > Lcal * 0.99) {
          break;
        }
      }
  
      document.getElementById("e18_espaciamiento").value = Lest.toFixed(4);
      document.getElementById("e18_inicial").value = ho.toFixed(4);
      document.getElementById("e18_agu").value = ht.toFixed(4);
      document.getElementById("e18_radi").value = Dest.toFixed(4);
      document.getElementById("e18_poro").value = d.toFixed(4);
    }
  }
  
  function ejemploCalculo18() {
    document.getElementById("e18_imper").value = 0.65;
    document.getElementById("e18_dren").value = 1.1;
    document.getElementById("e18_agua").value = 1.9;
    document.getElementById("e18_despues").value = 4.9;
    document.getElementById("e18_dreprimir").value = 3;
    document.getElementById("e18_hidraulica").value = 0.9;
    document.getElementById("e18_radio").value = 0.1;
    document.getElementById("e18_poroso").value = 5;
  }
  
  function limpiarCampos18() {
    document.getElementById("e18_imper").value = null;
    document.getElementById("e18_dren").value = null;
    document.getElementById("e18_agua").value = null;
    document.getElementById("e18_despues").value = null;
    document.getElementById("e18_dreprimir").value = null;
    document.getElementById("e18_hidraulica").value = null;
    document.getElementById("e18_radio").value = null;
    document.getElementById("e18_poroso").value = null;
  }

  document.getElementById("e18_ejemploCalculo").addEventListener("click", () => {
    ejemploCalculo18();
  });
  
  document.getElementById("e18_limpiar").addEventListener("click", () => {
    limpiarCampos18();
  });
  
  document.getElementById("e18_calcular").addEventListener("click", () => {
    calcular18();
    resultadosInterfaz18.style.opacity = "100";
    resultadosInterfaz18.style.animation = "opacity 0.6s ease-out";
    resultadosInterfaz18.style.animation = "moveFadeOut3 0.6s forwards";
  });