function calcularCaptacion() {
    const tbrugosidadCP = document.getElementById('tbrugosidadCP');
    const Tbbc = document.getElementById('Tbbc');
    const TbJ = document.getElementById('TbJ');
    const Tbbv = document.getElementById('Tbbv');
    const Tbm = document.getElementById('Tbm');
    const TbQ = document.getElementById('TbQ');
    const DropDownList2 = document.getElementById('DropDownList2');
    const ConCanPasoN1 = document.getElementById('ConCanPasoN1');

    if (Tbm.value && tbrugosidadCP.value && Tbbc.value && TbJ.value && Tbbv.value && TbQ.value) {
        tbrugosidadCP.style.backgroundColor = 'white';
        Tbbc.style.backgroundColor = 'white';
        TbJ.style.backgroundColor = 'white';
        Tbbv.style.backgroundColor = 'white';
        TbQ.style.backgroundColor = 'white';
        Tbm.style.backgroundColor = 'white';

        let Ndec;
        switch (DropDownList2.selectedIndex) {
            case 0: Ndec = 4; break;
            case 1: Ndec = 0; break;
            case 2: Ndec = 1; break;
            case 3: Ndec = 2; break;
            case 4: Ndec = 3; break;
            case 5: Ndec = 4; break;
        }

        let bc = parseFloat(Tbbc.value);
        const jc = parseFloat(TbJ.value) / 100;
        let n;

        switch (ConCanPasoN1.selectedIndex) {
            case 0: n = 0.012; tbrugosidadCP.value = 0.012; break;
            case 1: n = 0.014; tbrugosidadCP.value = 0.014; break;
            case 2: n = 0.015; tbrugosidadCP.value = 0.015; break;
            case 3: n = 0.02; tbrugosidadCP.value = 0.02; break;
        }

        if (tbrugosidadCP.value) {
            n = parseFloat(tbrugosidadCP.value);
        }

        const Qd = parseFloat(TbQ.value);
        const bv = parseFloat(Tbbv.value);
        const g = 9.81;
        const m = parseFloat(Tbm.value);

        let Y = Math.pow((n * Qd * Math.pow(2, 2 / 3)) / (Math.pow(jc, 1 / 2) * (2 * Math.pow(Math.pow(m, 2) + 1, 1 / 2) - m)), 3 / 8);

        if (bv < bc) {
            if (bv > (2 * Y)) {
                bc = (2 * Y);
            }
        }

        const Ah = (bc * Y + m * Math.pow(Y, 2));
        const Ph = (bc + 2 * Y * Math.sqrt(1 + Math.pow(m, 2)));
        const T = (bc + 2 * m * Y);
        const Rh = (Ah / Ph);
        const v = (1 / n) * Math.pow(Rh, 2 / 3) * Math.sqrt(jc);
        const f = v / Math.sqrt(g * Y);

        document.getElementById('tbcaudalvertido').innerText = Qd.toFixed(Ndec);
        document.getElementById('tbcaudalvertido').style.display = 'block';
        document.getElementById('TbV').innerText = v.toFixed(Ndec);
        document.getElementById('TbV').style.display = 'block';
        document.getElementById('TbAh').innerText = Ah.toFixed(Ndec);
        document.getElementById('TbAh').style.display = 'block';
        document.getElementById('TbPh').innerText = Ph.toFixed(Ndec);
        document.getElementById('TbPh').style.display = 'block';
        document.getElementById('TbRh').innerText = Rh.toFixed(Ndec);
        document.getElementById('TbRh').style.display = 'block';
        document.getElementById('tbanchsuperficial').innerText = T.toFixed(Ndec);
        document.getElementById('tbanchsuperficial').style.display = 'block';
        document.getElementById('tbnfroudpaso').innerText = f.toFixed(Ndec);
        document.getElementById('tbnfroudpaso').style.display = 'block';

        let Yc = Math.pow(((Math.pow(Qd, 2) / Math.pow((bc + T) / 2, 2)) / g), 1 / 3);
        let Emin = (3 / 2) * Yc;
        let Qmax = 1.704 * Math.pow(Emin, 3 / 2);
        let Vc = Math.sqrt(g * Yc);
        let hvc = Math.pow(Vc, 2) / (2 * g);
        // franco de seguridad, no menor a 0.15 m

        let fs = (0.3) * Y;
        document.getElementById('Tbfs').innerText = fs.toFixed(Ndec);
        document.getElementById('Tbfs').style.color = 'red';
        document.getElementById('Tbfs').style.display = 'block';
        document.getElementById('tbvcpaso').innerText = Vc.toFixed(Ndec);
        document.getElementById('tbvcpaso').style.color = 'red';
        document.getElementById('tbvcpaso').style.display = 'block';
        document.getElementById('tbeminpaso').innerText = Emin.toFixed(Ndec);
        document.getElementById('tbeminpaso').style.color = 'red';
        document.getElementById('tbeminpaso').style.display = 'block';

    let hc = Y + fs;

    // Calcular longitud de la transición
    let Ltrn = Math.abs((bv - bc) / (2 * Math.tan(12.5 * Math.PI / 180)));

    if (Ltrn - Math.floor(Ltrn) < 0.1) {
        Ltrn = Math.floor(Ltrn) + 0.1;
    } else if (Ltrn - Math.floor(Ltrn) > 0.1 && Ltrn - Math.floor(Ltrn) < 0.2) {
        Ltrn = Math.floor(Ltrn) + 0.2;
    } else if (Ltrn - Math.floor(Ltrn) > 0.2 && Ltrn - Math.floor(Ltrn) < 0.3) {
        Ltrn = Math.floor(Ltrn) + 0.3;
    } else if (Ltrn - Math.floor(Ltrn) > 0.3 && Ltrn - Math.floor(Ltrn) < 0.4) {
        Ltrn = Math.floor(Ltrn) + 0.4;
    } else if (Ltrn - Math.floor(Ltrn) > 0.4 && Ltrn - Math.floor(Ltrn) < 0.5) {
        Ltrn = Math.floor(Ltrn) + 0.5;
    } else if (Ltrn - Math.floor(Ltrn) > 0.5 && Ltrn - Math.floor(Ltrn) < 0.6) {
        Ltrn = Math.floor(Ltrn) + 0.6;
    } else if (Ltrn - Math.floor(Ltrn) > 0.6 && Ltrn - Math.floor(Ltrn) < 0.7) {
        Ltrn = Math.floor(Ltrn) + 0.7;
    } else if (Ltrn - Math.floor(Ltrn) > 0.7 && Ltrn - Math.floor(Ltrn) < 0.8) {
        Ltrn = Math.floor(Ltrn) + 0.8;
    } else if (Ltrn - Math.floor(Ltrn) > 0.8 && Ltrn - Math.floor(Ltrn) < 0.9) {
        Ltrn = Math.floor(Ltrn) + 0.9;
    } else {
        Ltrn = Math.floor(Ltrn) + 1;
    }

    // Sumersión
    let dc = Y;

    document.getElementById('Tbdc').innerText = dc.toFixed(Ndec);
    document.getElementById('Tbdc').style.color = 'red';
    document.getElementById('TbYc').innerText = Yc.toFixed(Ndec);
    document.getElementById('TbYc').style.color = 'red';
    document.getElementById('TbQm').innerText = Qmax.toFixed(Ndec);
    document.getElementById('TbQm').style.color = 'red';
    document.getElementById('Tbhc').innerText = hc.toFixed(Ndec);
    document.getElementById('Tbhc').style.color = 'red';
    document.getElementById('TbLtrcp').innerText = Ltrn.toFixed(Ndec);
    document.getElementById('TbLtrcp').style.color = 'red';

    document.getElementById('Tbdc').style.display = 'block';
    document.getElementById('TbYc').style.display = 'block';
    document.getElementById('TbQm').style.display = 'block';
    document.getElementById('Tbhc').style.display = 'block';
    document.getElementById('TbLtrcp').style.display = 'block';

    document.getElementById('tb33').innerText = dc.toFixed(Ndec);
    document.getElementById('tb33').style.color = 'red';
    document.getElementById('tb34').innerText = fs.toFixed(Ndec);
    document.getElementById('tb34').style.color = 'red';
    document.getElementById('tb35').innerText = hc.toFixed(Ndec);
    document.getElementById('tb35').style.color = 'red';
    document.getElementById('tb36').innerText = bc.toFixed(Ndec);
    document.getElementById('tb36').style.color = 'red';
    document.getElementById('tb37').innerText = jc.toFixed(Ndec);
    document.getElementById('tb37').style.color = 'red';
    document.getElementById('tb38').innerText = bc.toFixed(Ndec);
    document.getElementById('tb38').style.color = 'red';
    document.getElementById('tb39').innerText = "Transición recta";
    document.getElementById('tb40').innerText = bv.toFixed(Ndec);
    document.getElementById('tb40').style.color = 'red';
    document.getElementById('tb41').innerText = Ltrn.toFixed(Ndec);
    document.getElementById('tb41').style.color = 'red';

    document.getElementById('tb33').style.display = 'block';
    document.getElementById('tb34').style.display = 'block';
    document.getElementById('tb35').style.display = 'block';
    document.getElementById('tb36').style.display = 'block';
    document.getElementById('tb37').style.display = 'block';
    document.getElementById('tb38').style.display = 'block';
    document.getElementById('tb39').style.display = 'block';
    document.getElementById('tb40').style.display = 'block';
    document.getElementById('tb41').style.display = 'block';
    }
}
document.getElementById('BtnCaptacionConvencionalCP1').addEventListener('click', function () {
    const elementsToReset = ['TbQ', 'Tbbv', 'tbrugosidadCP', 'Tbbc', 'TbJ', 'Tbm'];
    const elementsToHide = ['tbcaudalvertido','TbLtrcp','TbYc','Tbdc', 'TbV', 'TbAh', 'TbPh', 'TbRh', 'tbanchsuperficial', 'tbnfroudpaso', 
                            'Tbfs', 'tbvcpaso','Tbhc',
                            'tbeminpaso', 'Tbdc', 'TbYc','tbeminpaso', 'Tbhc', 'TbQm', 'TbLtrcp', 'tb33', 'tb34', 'tb35', 
                            'tb36', 'tb37', 'tb38', 'tb39', 'tb40', 'tb41'];

    // Reset background color and value for input fields
    elementsToReset.forEach(function(id) {
        const element = document.getElementById(id);
        element.style.backgroundColor = 'white';
        element.value = '';
    });

    // Reset dropdown selection
    document.getElementById('DropDownList2').selectedIndex = 0;

    // Hide elements
    elementsToHide.forEach(function(id) {
        document.getElementById(id).style.display = 'none';
    });
});

document.getElementById('BtnCaptacionConvencionalCP0').addEventListener('click', function () {
    document.getElementById('TbQ').value = 10;
    document.getElementById('Tbbv').value = 7.05;
    document.getElementById('tbrugosidadCP').value = 0.01;
    document.getElementById('Tbbc').value = 4;
    document.getElementById('TbJ').value = 0.1;
    document.getElementById('Tbm').value = 0;
    document.getElementById('DropDownList2').selectedIndex = 5;
});