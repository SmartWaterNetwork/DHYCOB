function ejemplo() {
    document.getElementById('tbQanclajesifon').value = 3;
    document.getElementById('tbdiamanclajesifon').value = 1;
    document.getElementById('tbesftrabajacero').value = 0.013;
    document.getElementById('tbpresjuntagarrib').value = 5;
    document.getElementById('tbPanclaj').value = 2.2;
    document.getElementById('tbpreshidrostanclaj').value = 0.51;
    document.getElementById('tbpresjuntagabajo').value = 50;
    document.getElementById('tblonghorl1').value = 120;
    document.getElementById('tblonghorl2').value = 10;
    document.getElementById('tbbeta1').value = 20;
    document.getElementById('tbbeta2').value = 35;
    document.getElementById('tbfanclaje').value = 0.4;
    document.getElementById('tbBanclaj').value = 0.3;
    document.getElementById('tbHanclaj').value = 30;
    document.getElementById('tbespminanclaj').value = 0.02;
    document.getElementById('tblongancl').value = 5;
    document.getElementById('tbrecubrimiento').value = 0.3;
}

function anclajes() {
    let Qsifon, recubr, longancl, Panclaj, pesotub, esftrabajacer, presjuntagabajo, presjuntagarriba, fanclacje, diamanclaje, L1anclaj, L2anclaj, Beta1, Beta2, espminusad;
    let areaanclaj, velanclaj, DEX;

    // Validar que todos los campos tengan valores
    if (
        document.getElementById('tbrecubrimiento').value &&
        document.getElementById('tblongancl').value &&
        document.getElementById('tbPanclaj').value &&
        document.getElementById('tbQanclajesifon').value &&
        document.getElementById('tbesftrabajacero').value &&
        document.getElementById('tbBanclaj').value &&
        document.getElementById('tbHanclaj').value &&
        document.getElementById('tbpresjuntagabajo').value &&
        document.getElementById('tbpresjuntagarrib').value &&
        document.getElementById('tbpreshidrostanclaj').value &&
        document.getElementById('tbfanclaje').value &&
        document.getElementById('tbdiamanclajesifon').value &&
        document.getElementById('tblonghorl1').value &&
        document.getElementById('tblonghorl2').value &&
        document.getElementById('tbbeta1').value &&
        document.getElementById('tbbeta2').value &&
        document.getElementById('tbespminanclaj').value
    ) {
        // Limpiar los colores de fondo de los campos de entrada
        document.querySelectorAll('.input-field input').forEach(input => input.style.backgroundColor = "white");

        // Obtener los valores de los campos de entrada
        let ndec = parseInt(document.getElementById('DropDownList2').value);

        nmanning = parseFloat(document.getElementById('tbesftrabajacero').value);
        Qsifon = parseFloat(document.getElementById('tbQanclajesifon').value);
        recubr = parseFloat(document.getElementById('tbrecubrimiento').value);
        longancl = parseFloat(document.getElementById('tblongancl').value);
        Panclaj = parseFloat(document.getElementById('tbPanclaj').value);
        pesotub = parseFloat(document.getElementById('tbpreshidrostanclaj').value);
        esftrabajacer = parseFloat(document.getElementById('tbesftrabajacero').value);
        presjuntagabajo = parseFloat(document.getElementById('tbpresjuntagabajo').value);
        presjuntagarriba = parseFloat(document.getElementById('tbpresjuntagarrib').value);
        fanclacje = parseFloat(document.getElementById('tbfanclaje').value);
        diamanclaje = parseFloat(document.getElementById('tbdiamanclajesifon').value);
        L1anclaj = parseFloat(document.getElementById('tblonghorl1').value);
        L2anclaj = parseFloat(document.getElementById('tblonghorl2').value);
        Beta1 = parseFloat(document.getElementById('tbbeta1').value);
        Beta2 = parseFloat(document.getElementById('tbbeta2').value);
        espminusad = parseFloat(document.getElementById('tbespminanclaj').value);

        // Realizar los cálculos
        areaanclaj = (Math.PI * Math.pow(diamanclaje, 2)) / 4;
        velanclaj = Qsifon / areaanclaj;
        DEX = diamanclaje + espminusad * 2;

        let WTUBO1 = pesotub;
        let WAGUA1 = (Math.PI * Math.pow(diamanclaje, 2)) / 4;
        let W1 = WAGUA1 * Math.sin(Beta1 * Math.PI / 180);
        let WTUBO2 = (Math.PI / 4) * (Math.pow(DEX, 2) - Math.pow(diamanclaje, 2)) * L2anclaj * pesotub;
        let WAGUA2 = (Math.PI * Math.pow(diamanclaje, 2) * L2anclaj) / 4;
        let W2 = WAGUA2 * Math.sin(Beta2 * Math.PI / 180);
        let f1anclaj = (WTUBO1 + WAGUA1) * (L2anclaj / 2) * Math.cos(Beta1 * Math.PI / 180);
        let f2anclaj = pesotub * L1anclaj * Math.sin(Beta1 * 3.14159 / 180);
        let PI = Math.PI;
        let f3anclaj = fanclacje * L1anclaj + (WTUBO1 + WAGUA1) * Math.cos(Beta1 * Math.PI / 180);
        let f4anclaj = 0.745 * PI * DEX;
        let f5anclaj = 0.25 * PI * (Math.pow(DEX, 2) - Math.pow(diamanclaje, 2)) * presjuntagarriba;
        let f6anclaj = 0.25 * PI * Math.pow(diamanclaje, 2) * 1.25 * presjuntagabajo;
        let hfmanning1 = (10.34 * Math.pow(nmanning, 2) * Math.pow(Qsifon, 2) * L1anclaj) / Math.pow(diamanclaje, 5.33);
        let f7anclaj = 0.25 * PI * Math.pow(diamanclaje, 2) * hfmanning1;
        let f8anclaj = (WTUBO1 + WAGUA1) * (L2anclaj / 2) * Math.cos(Beta2 * PI / 180);
    let f9anclaj = WTUBO1 * L2anclaj * Math.sin(Beta2 * PI / 180);
    let f10anclaj = fanclacje * L2anclaj * (WTUBO1 + WAGUA1) * Math.cos(Beta2 * PI / 180);
    let f11anclaj = 0.745 * PI * DEX;
    let f12anclaj = 0.25 * PI * (Math.pow(DEX, 2) - Math.pow(diamanclaje, 2)) * presjuntagabajo;
    let hfmanning2 = (10.34 * Math.pow(nmanning, 2) * Math.pow(Qsifon, 2) * L2anclaj) / Math.pow(diamanclaje, 5.33);
    let f13anclaj = f6anclaj;
    let f14anclaj = 0.25 * PI * Math.pow(diamanclaje, 2) * hfmanning2;
    let f15anclaj = Qsifon * velanclaj / 9.81;
    let f16anclaj = f15anclaj;
        // Mostrar el resultado
        document.getElementById("tbf1anclaj").textContent = f1anclaj.toFixed(4);
        document.getElementById("tbf2anclaj").textContent = f2anclaj.toFixed(4);
        document.getElementById('tf3anclaj').textContent = f3anclaj.toFixed(4);
        document.getElementById('tf4anclaj').textContent = f4anclaj.toFixed(4);
        document.getElementById('tf5anclaj').textContent = f5anclaj.toFixed(4);
        document.getElementById('tf6anclaj').textContent = f6anclaj.toFixed(4);
        document.getElementById('tf7anclaj').textContent = f7anclaj.toFixed(4);
        document.getElementById('tf8anclaj').textContent = f8anclaj.toFixed(4);
    document.getElementById('tf9anclaj').textContent = f9anclaj.toFixed(4);
    document.getElementById('tf10anclaj').textContent = f10anclaj.toFixed(4);
    document.getElementById('tf11anclaj').textContent = f11anclaj.toFixed(4);
    document.getElementById('tf12anclaj').textContent = f12anclaj.toFixed(4);
    document.getElementById('tf13anclaj').textContent = f13anclaj.toFixed(4);
    document.getElementById('tf14anclaj').textContent = f14anclaj.toFixed(4);
    document.getElementById('tf15anclaj').textContent = f15anclaj.toFixed(4);
    document.getElementById('tf16anclaj').textContent = f16anclaj.toFixed(4);

    let SFH = -f1anclaj * Math.sin(Beta1 * PI / 180) + Math.cos(Beta1 * PI / 180) * (f2anclaj + f3anclaj + f4anclaj + f5anclaj + f6anclaj + f7anclaj + f15anclaj) - f8anclaj * Math.sin(Beta2 * PI / 180) + Math.cos(Beta2 * PI / 180) * (f9anclaj + f10anclaj + f11anclaj - f12anclaj - f13anclaj + f14anclaj - f16anclaj);
    let SFHdis = -f1anclaj * Math.sin(Beta1 * PI / 180) + Math.cos(Beta1 * PI / 180) * (f2anclaj - f3anclaj - f4anclaj + f5anclaj + f6anclaj + f7anclaj + f15anclaj) - f8anclaj * Math.sin(Beta2 * PI / 180) + Math.cos(Beta2 * PI / 180) * (f9anclaj - f10anclaj - f11anclaj - f12anclaj - f13anclaj + f14anclaj - f16anclaj);
    let SFV = -f1anclaj * Math.cos(Beta1 * PI / 180) - Math.sin(Beta1 * PI / 180) * (f2anclaj + f3anclaj + f4anclaj + f5anclaj + f6anclaj + f7anclaj + f15anclaj) - f8anclaj * Math.cos(Beta2 * PI / 180) - Math.sin(Beta2 * PI / 180) * (f9anclaj + f10anclaj + f11anclaj - f12anclaj - f13anclaj + f14anclaj - f16anclaj);
    let SFVdis = -f1anclaj * Math.cos(Beta1 * PI / 180) - Math.sin(Beta1 * PI / 180) * (f2anclaj - f3anclaj - f4anclaj + f5anclaj + f6anclaj + f7anclaj + f15anclaj) - f8anclaj * Math.cos(Beta2 * PI / 180) - Math.sin(Beta2 * PI / 180) * (f9anclaj - f10anclaj - f11anclaj - f12anclaj - f13anclaj + f14anclaj - f16anclaj);
    document.getElementById('SFH').textContent = SFH.toFixed(4);
    document.getElementById('SFHdis').textContent = SFHdis.toFixed(4);
    document.getElementById('SFV').textContent = SFV.toFixed(4);
    document.getElementById('SFVdis').textContent = SFVdis.toFixed(4);
    let Banclaj = document.getElementById('tbBanclaj').value;
    let Hanclaj = document.getElementById('tbHanclaj').value;

    let WAN = (SFH / Banclaj) + SFV;
    let VC = WAN / Panclaj * 1.2;
    let Ybloque = (longancl / 2) * (((Math.tan(Beta1 * PI / 180)) + (Math.tan(Beta2 * PI / 180))) + (diamanclaje / 2) * (1 / Math.cos(Beta1 * PI / 180)) * (1 / Math.cos(Beta2 * PI / 180))) + (2 * recubr);
    let VT = (3.14159 / 4) * Math.pow(DEX, 2) * (longancl / 2 / Math.cos(Beta1 * Math.PI / 180)) + (longancl / 2 / Math.cos(Beta2 * Math.PI / 180));
    let FEW = (VT + VC) / (longancl * Ybloque);
    let Wb = Panclaj * ((longancl * Ybloque * FEW) - VT);
    let SFverticales = Wb + Math.abs(SFV);
    let CPS = SFverticales / (FEW * longancl);

    document.getElementById('WAN').textContent = WAN.toFixed(4);
    document.getElementById('VC').textContent = VC.toFixed(4);
    document.getElementById('Ybloque').textContent = Ybloque.toFixed(4);
    document.getElementById('VT').textContent = VT.toFixed(4);
    document.getElementById('VT1').textContent = (VT+VC).toFixed(4);
    document.getElementById('FEW').textContent = FEW.toFixed(4);
    document.getElementById('Wb').textContent = Wb.toFixed(4);
    document.getElementById('SFverticales').textContent = SFverticales.toFixed(4);
    document.getElementById('CPS').textContent = CPS.toFixed(4);

    let momento = (SFverticales * longancl / 2) - (SFH * (((longancl / 2) * Math.tan(Beta2 * Math.PI / 180)) + recubr + (((diamanclaje / 2) + espminusad) / (Math.cos(Beta2 * Math.PI / 180)))));
    let RM = momento / SFverticales;

    document.getElementById('tbrmanclaj0').textContent = momento.toFixed(4);
    document.getElementById('tbrmanclaj').textContent = RM.toFixed(4);

    if (CPS < Hanclaj) {
        document.getElementById("Label3333319").innerText = "Cumple < Resistencia portante del suelo";
    } else {
        document.getElementById("Label3333319").innerText = "No Cumple > Resistencia portante del suelo";
    }

    if (RM > longancl / 3 || RM < longancl * 2 / 3) {
        document.getElementById("Label3333334").innerText = "El diseño está correcto";
    } else {
        document.getElementById("Label3333334").innerText = "La resultante no se encuentra en el tercio medio de la base, debe rediseñar";
    }
    } else {
        alert("Por favor, complete todos los campos.");
    }
    document.getElementById("Label3333319").style.display = "block";
    document.getElementById("Label3333319").style.color = "red";
    
    document.getElementById("Label3333334").style.display = "block";
    document.getElementById("Label3333334").style.color = "red";

}
