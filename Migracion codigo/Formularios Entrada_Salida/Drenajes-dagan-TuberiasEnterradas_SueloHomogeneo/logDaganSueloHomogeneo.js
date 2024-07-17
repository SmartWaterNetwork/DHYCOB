document.addEventListener("DOMContentLoaded", function() {
    const elements = {
        tbhabmet1: document.getElementById('tbhabmet1'),
        tbdotmet1: document.getElementById('tbdotmet1'),
        tbntanquesmet1: document.getElementById('tbntanquesmet1'),
        tbaltsedmet1: document.getElementById('tbaltsedmet1'),
        tbaltbordlibmet1: document.getElementById('tbaltbordlibmet1'),
        tbaltbordlibmet2: document.getElementById('tbaltbordlibmet2'),
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
            elements.tbhabmet1.value !== '' && elements.tbdotmet1.value !== '' && elements.tbaltbordlibmet2.value !== '') {

            // Reset background colors
            elements.tbhabmet1.style.backgroundColor = 'white';
            elements.tbdotmet1.style.backgroundColor = 'white';
            elements.tbntanquesmet1.style.backgroundColor = 'white';
            elements.tbaltsedmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet2.style.backgroundColor = 'white';

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

            let Vcompmet1 = dotmeto1 - Ntanquesmet1 + altbordlibmet2;
            let perim = 3.14159 * altbordlibmet2;
            let Vemermet1 = dotmeto1 - (altsedmet1 + (dotmeto1 - Ntanquesmet1 + altbordlibmet2));

            let relpD = perim / Vcompmet1;
            let coshx = (Math.exp(relpD) + Math.exp(-relpD)) / 2;
            let beta = (2 / 3.14159) * Math.log((2 * coshx) - 2);

            let Qprommet1 = ((habmet1 * beta) + Math.sqrt(Math.pow(habmet1 * beta, 2) + (8 * habmet1 * Vemermet1 * altbordlibmet1 / Vcompmet1))) / (habmet1 / Vcompmet1);

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
        elements.tbaltbordlibmet2.value = 0.2;
    }

    function Button10_Click() {
        elements.tbhabmet1.style.backgroundColor = 'white';
        elements.tbdotmet1.style.backgroundColor = 'white';
        elements.tbntanquesmet1.style.backgroundColor = 'white';
        elements.tbaltsedmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet1.style.backgroundColor = 'white';
        elements.tbaltbordlibmet2.style.backgroundColor = 'white';

        elements.tbhabmet1.value = '';
        elements.tbdotmet1.value = '';
        elements.tbntanquesmet1.value = '';
        elements.tbaltsedmet1.value = '';
        elements.tbaltbordlibmet1.value = '';
        elements.tbaltbordlibmet2.value = '';

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
