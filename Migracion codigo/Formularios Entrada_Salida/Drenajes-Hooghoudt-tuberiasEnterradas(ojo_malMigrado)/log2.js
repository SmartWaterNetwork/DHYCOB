document.addEventListener("DOMContentLoaded", function () {
    const elements = {
        tbhabmet1: document.getElementById('tbhabmet1'),
        tbdotmet1: document.getElementById('tbdotmet1'),
        tbntanquesmet1: document.getElementById('tbntanquesmet1'),
        tbaltsedmet1: document.getElementById('tbaltsedmet1'),
        tbaltbordlibmet1: document.getElementById('tbaltbordlibmet1'),
        tbaltbordlibmet2: document.getElementById('tbaltbordlibmet2'),
        tbaltbordlibmet5: document.getElementById('tbaltbordlibmet5'),
        tbQprommet1: document.getElementById('tbQprommet1'),
        tbVcompmet1: document.getElementById('tbVcompmet1'),
        tbVemermet1: document.getElementById('tbVemermet1'),
        tbVemermet2: document.getElementById('tbVemermet2'),
        Label8: document.getElementById('Label8'),
        Label91: document.getElementById('Label91'),
        Label92: document.getElementById('Label92'),
        Label3333378: document.getElementById('Label3333378'),
        Label3333379: document.getElementById('Label3333379'),
        Label3333381: document.getElementById('Label3333381'),
        DropDownList2: document.getElementById('DropDownList2'),
        resultadosTitulo: document.getElementById('resultadosTitulo')
    };

    let Ndec;

    function Button1_Click() {
        if (elements.tbaltsedmet1.value !== '' && elements.tbaltbordlibmet1.value !== '' && elements.tbntanquesmet1.value !== '' &&
            elements.tbhabmet1.value !== '' && elements.tbdotmet1.value !== '' && elements.tbaltbordlibmet2.value !== '' &&
            elements.tbaltbordlibmet5.value !== '') {

            // Reset background colors
            elements.tbhabmet1.style.backgroundColor = 'white';
            elements.tbdotmet1.style.backgroundColor = 'white';
            elements.tbntanquesmet1.style.backgroundColor = 'white';
            elements.tbaltsedmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet2.style.backgroundColor = 'white';
            elements.tbaltbordlibmet5.style.backgroundColor = 'white';

            let Recarg = parseFloat(elements.tbhabmet1.value);
            let PEI = parseFloat(elements.tbdotmet1.value);
            let PD = parseFloat(elements.tbntanquesmet1.value);
            let PTA = parseFloat(elements.tbaltsedmet1.value);
            let K1 = parseFloat(elements.tbaltbordlibmet1.value);
            let y = parseFloat(elements.tbaltbordlibmet2.value);
            let K2 = parseFloat(elements.tbaltbordlibmet5.value);

            switch (elements.DropDownList2.value) {
                case '0': Ndec = 4; break;
                case '1': Ndec = 0; break;
                case '2': Ndec = 1; break;
                case '3': Ndec = 2; break;
                case '4': Ndec = 3; break;
                default: Ndec = 4;
            }

            let Dest = PEI - (PD - y);
            let h = PEI - PTA - Dest;
            let per = 3.14159 * y;

            let d = 1, Lest, Lcal;

            for (d = 0; d <= 100; d += 0.01) {
                Lest = Math.sqrt(((8 * K2 * h * d) / Recarg) + ((4 * K1 * Math.pow(h, 2)) / Recarg));
                d = Dest / (((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per)) + 1);
                Lcal = Math.sqrt(((8 * K2 * h * d) / Recarg) + ((4 * K1 * Math.pow(h, 2)) / Recarg));
                if ((Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) || (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99))) {
                    break;
                }
            }

            elements.tbQprommet1.value = Lcal.toFixed(Ndec);
            elements.tbQprommet1.classList.remove('hidden');
            elements.tbQprommet1.classList.add('results');

            elements.tbVcompmet1.value = Dest.toFixed(Ndec);
            elements.tbVcompmet1.classList.remove('hidden');
            elements.tbVcompmet1.classList.add('results');

            elements.tbVemermet1.value = h.toFixed(Ndec);
            elements.tbVemermet1.classList.remove('hidden');
            elements.tbVemermet1.classList.add('results');

            elements.tbVemermet2.value = d.toFixed(Ndec);
            elements.tbVemermet2.classList.remove('hidden');
            elements.tbVemermet2.classList.add('results');

            elements.resultadosTitulo.classList.remove('hidden');
            elements.Label8.classList.remove('hidden');
            elements.Label91.classList.remove('hidden');
            elements.Label92.classList.remove('hidden');
            elements.Label3333378.classList.remove('hidden');
            elements.Label3333379.classList.remove('hidden');
            elements.Label3333381.classList.remove('hidden');

        } else {
            if (elements.tbaltsedmet1.value === '') elements.tbaltsedmet1.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet1.value === '') elements.tbaltbordlibmet1.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet2.value === '') elements.tbaltbordlibmet2.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet5.value === '') elements.tbaltbordlibmet5.style.backgroundColor = 'red';
            if (elements.tbntanquesmet1.value === '') elements.tbntanquesmet1.style.backgroundColor = 'red';
            if (elements.tbhabmet1.value === '') elements.tbhabmet1.style.backgroundColor = 'red';
            if (elements.tbdotmet1.value === '') elements.tbdotmet1.style.backgroundColor = 'red';
        }
    }

    function Button6_Click() {
        elements.tbhabmet1.value = 0.01;
        elements.tbdotmet1.value = 4.8;
        elements.tbntanquesmet1.value = 1.5;
        elements.tbaltsedmet1.value = 1;
        elements.tbaltbordlibmet1.value = 1.2;
        elements.tbaltbordlibmet2.value = 0.1;
        elements.tbaltbordlibmet5.value = 1.2;
    }

    function Button10_Click() {
        elements.tbhabmet1.style.backgroundColor = 'white';
        elements.tbdotmet1.style.backgroundColor = 'white';
        elements.tbntanquesmet1.style.backgroundColor = 'white';
        elements.tbaltsedmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet2.style.backgroundColor = 'white';
        elements.tbaltbordlibmet5.style.backgroundColor = 'white';

        elements.tbhabmet1.value = '';
        elements.tbdotmet1.value = '';
        elements.tbntanquesmet1.value = '';
        elements.tbaltsedmet1.value = '';
        elements.tbaltbordlibmet1.value = '';
        elements.tbaltbordlibmet2.value = '';
        elements.tbaltbordlibmet5.value = '';

        elements.resultadosTitulo.classList.add('hidden');
        elements.Label8.classList.add('hidden');
        elements.Label91.classList.add('hidden');
        elements.Label92.classList.add('hidden');
        elements.Label3333378.classList.add('hidden');
        elements.Label3333379.classList.add('hidden');
        elements.Label3333381.classList.add('hidden');

        elements.tbQprommet1.classList.add('hidden');
        elements.tbVcompmet1.classList.add('hidden');
        elements.tbVemermet1.classList.add('hidden');
        elements.tbVemermet2.classList.add('hidden');
    }

    document.getElementById("button1").addEventListener("click", Button1_Click);
    document.getElementById("button6").addEventListener("click", Button6_Click);
    document.getElementById("button10").addEventListener("click", Button10_Click);
});
