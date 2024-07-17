document.addEventListener("DOMContentLoaded", function() {
    const elements = {
        tbhabmet1: document.getElementById('tbhabmet1'),
        tbdotmet1: document.getElementById('tbdotmet1'),
        tbntanquesmet1: document.getElementById('tbntanquesmet1'),
        tbaltsedmet1: document.getElementById('tbaltsedmet1'),
        tbaltbordlibmet1: document.getElementById('tbaltbordlibmet1'),
        tbaltbordlibmet2: document.getElementById('tbaltbordlibmet2'),
        tbaltbordlibmet3: document.getElementById('tbaltbordlibmet3'),
        tbaltbordlibmet4: document.getElementById('tbaltbordlibmet4'),
        tbaltbordlibmet5: document.getElementById('tbaltbordlibmet5'),
        tbQprommet1: document.getElementById('tbQprommet1'),
        tbVcompmet1: document.getElementById('tbVcompmet1'),
        tbVemermet1: document.getElementById('tbVemermet1'),
        Label8: document.getElementById('Label8'),
        Label91: document.getElementById('Label91'),
        Label92: document.getElementById('Label92'),
        DropDownList2: document.getElementById('DropDownList2'),
        resultadosTitulo: document.getElementById('resultadosTitulo')
    };

    let Ndec;

    function Button1_Click() {
        if (elements.tbaltsedmet1.value !== '' && elements.tbaltbordlibmet1.value !== '' && elements.tbntanquesmet1.value !== '' &&
            elements.tbhabmet1.value !== '' && elements.tbdotmet1.value !== '' && elements.tbaltbordlibmet2.value !== '' &&
            elements.tbaltbordlibmet3.value !== '' && elements.tbaltbordlibmet4.value !== '' && elements.tbaltbordlibmet5.value !== '') {

            // Reset background colors
            elements.tbhabmet1.style.backgroundColor = 'white';
            elements.tbdotmet1.style.backgroundColor = 'white';
            elements.tbntanquesmet1.style.backgroundColor = 'white';
            elements.tbaltsedmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet2.style.backgroundColor = 'white';
            elements.tbaltbordlibmet3.style.backgroundColor = 'white';
            elements.tbaltbordlibmet4.style.backgroundColor = 'white';
            elements.tbaltbordlibmet5.style.backgroundColor = 'white';

            switch (elements.DropDownList2.value) {
                case '0': Ndec = 4; break;
                case '1': Ndec = 0; break;
                case '2': Ndec = 1; break;
                case '3': Ndec = 2; break;
                case '4': Ndec = 3; break;
                default: Ndec = 4;
            }

            let habmet1 = parseFloat(elements.tbhabmet1.value);
            let dotmeto1 = parseFloat(elements.tbdotmet1.value);
            let Ntanquesmet1 = parseFloat(elements.tbntanquesmet1.value);
            let altsedmet1 = parseFloat(elements.tbaltsedmet1.value);
            let altbordlibmet1 = parseFloat(elements.tbaltbordlibmet1.value);
            let altbordlibmet2 = parseFloat(elements.tbaltbordlibmet2.value);
            let altbordlibmet3 = parseFloat(elements.tbaltbordlibmet3.value);
            let altbordlibmet4 = parseFloat(elements.tbaltbordlibmet4.value);
            let altbordlibmet5 = parseFloat(elements.tbaltbordlibmet5.value);

            let Vcompmet1 = dotmeto1 - Ntanquesmet1 + altbordlibmet2;
            let perim = altbordlibmet3 + (2 * altbordlibmet2 * Math.sqrt(1 + Math.pow(altbordlibmet4, 2)));
            let Vemermet1 = dotmeto1 - (altsedmet1 + (dotmeto1 - Ntanquesmet1 + altbordlibmet2));

            let relpD = perim / Vcompmet1;
            let coshx = (Math.exp(relpD) + Math.exp(-relpD)) / 2;
            let beta = (2 / Math.PI) * Math.log((2 * coshx) - 2);
            let coefC = 1 / (1 - (habmet1 / altbordlibmet1));

            let Qprommet1 = ((coefC * habmet1 * beta) + Math.sqrt(Math.pow(coefC * habmet1 * beta, 2) + (8 * habmet1 * coefC * Vemermet1 * altbordlibmet5 / Vcompmet1))) / (coefC * habmet1 / Vcompmet1);

            elements.tbQprommet1.value = Qprommet1.toFixed(Ndec);
            elements.tbQprommet1.classList.remove('hidden');
            elements.tbQprommet1.classList.add('results');

            elements.tbVcompmet1.value = Vcompmet1.toFixed(Ndec);
            elements.tbVcompmet1.classList.remove('hidden');
            elements.tbVcompmet1.classList.add('results');

            elements.tbVemermet1.value = Vemermet1.toFixed(Ndec);
            elements.tbVemermet1.classList.remove('hidden');
            elements.tbVemermet1.classList.add('results');

            elements.resultadosTitulo.classList.remove('hidden');
            elements.Label8.classList.remove('hidden');
            elements.Label91.classList.remove('hidden');
            elements.Label92.classList.remove('hidden');
        } else {
            // Highlight empty fields in red
            if (elements.tbaltsedmet1.value === '') elements.tbaltsedmet1.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet1.value === '') elements.tbaltbordlibmet1.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet2.value === '') elements.tbaltbordlibmet2.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet3.value === '') elements.tbaltbordlibmet3.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet4.value === '') elements.tbaltbordlibmet4.style.backgroundColor = 'red';
            if (elements.tbaltbordlibmet5.value === '') elements.tbaltbordlibmet5.style.backgroundColor = 'red';
            if (elements.tbntanquesmet1.value === '') elements.tbntanquesmet1.style.backgroundColor = 'red';
            if (elements.tbhabmet1.value === '') elements.tbhabmet1.style.backgroundColor = 'red';
            if (elements.tbdotmet1.value === '') elements.tbdotmet1.style.backgroundColor = 'red';
        }
    }

    function Button6_Click() {
        elements.tbhabmet1.value = 0.006;
        elements.tbdotmet1.value = 4.3;
        elements.tbntanquesmet1.value = 1.5;
        elements.tbaltsedmet1.value = 1;
        elements.tbaltbordlibmet1.value = 1.3;
        elements.tbaltbordlibmet2.value = 0.2;
        elements.tbaltbordlibmet3.value = 0.5;
        elements.tbaltbordlibmet4.value = 1;
        elements.tbaltbordlibmet5.value = 2.1;
    }

    function Button10_Click() {
        elements.tbhabmet1.style.backgroundColor = 'white';
        elements.tbdotmet1.style.backgroundColor = 'white';
        elements.tbntanquesmet1.style.backgroundColor = 'white';
        elements.tbaltsedmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet2.style.backgroundColor = 'white';
        elements.tbaltbordlibmet3.style.backgroundColor = 'white';
        elements.tbaltbordlibmet4.style.backgroundColor = 'white';
        elements.tbaltbordlibmet5.style.backgroundColor = 'white';

        elements.tbhabmet1.value = '';
        elements.tbdotmet1.value = '';
        elements.tbntanquesmet1.value = '';
        elements.tbaltsedmet1.value = '';
        elements.tbaltbordlibmet1.value = '';
        elements.tbaltbordlibmet2.value = '';
        elements.tbaltbordlibmet3.value = '';
        elements.tbaltbordlibmet4.value = '';
        elements.tbaltbordlibmet5.value = '';

        elements.resultadosTitulo.classList.add('hidden');
        elements.Label8.classList.add('hidden');
        elements.Label91.classList.add('hidden');
        elements.Label92.classList.add('hidden');

        elements.tbQprommet1.classList.add('hidden');
        elements.tbVcompmet1.classList.add('hidden');
        elements.tbVemermet1.classList.add('hidden');
    }

    document.getElementById("button1").addEventListener("click", Button1_Click);
    document.getElementById("button6").addEventListener("click", Button6_Click);
    document.getElementById("button10").addEventListener("click", Button10_Click);
});
