document.addEventListener("DOMContentLoaded", function () {
    const elements = {
        tbdotmet1: document.getElementById('tbdotmet1'),
        tbntanquesmet1: document.getElementById('tbntanquesmet1'),
        tbaltsedmet1: document.getElementById('tbaltsedmet1'),
        tbaltbordlibmet1: document.getElementById('tbaltbordlibmet1'),
        tbaltbordlibmet2: document.getElementById('tbaltbordlibmet2'),
        tbaltbordlibmet3: document.getElementById('tbaltbordlibmet3'),
        tbaltbordlibmet4: document.getElementById('tbaltbordlibmet4'),
        tbaltbordlibmet7: document.getElementById('tbaltbordlibmet7'),
        tbQprommet1: document.getElementById('tbQprommet1'),
        tbQprommet2: document.getElementById('tbQprommet2'),
        tbVcompmet1: document.getElementById('tbVcompmet1'),
        tbVcompmet2: document.getElementById('tbVcompmet2'),
        tbVemermet1: document.getElementById('tbVemermet1'),
        Label8: document.getElementById('Label8'),
        Label91: document.getElementById('Label91'),
        Label92: document.getElementById('Label92'),
        Label3333378: document.getElementById('Label3333378'),
        Label3333379: document.getElementById('Label3333379'),
        DropDownList2: document.getElementById('DropDownList2'),
        resultadosTitulo: document.getElementById('resultadosTitulo')
    };

    let Ndec;

    function Button1_Click() {
        if (elements.tbaltsedmet1.value !== '' && elements.tbaltbordlibmet1.value !== '' && elements.tbntanquesmet1.value !== '' &&
            elements.tbdotmet1.value !== '' && elements.tbaltbordlibmet2.value !== '' && elements.tbaltbordlibmet3.value !== '' &&
            elements.tbaltbordlibmet4.value !== '' && elements.tbaltbordlibmet7.value !== '') {

            elements.tbdotmet1.style.backgroundColor = 'white';
            elements.tbntanquesmet1.style.backgroundColor = 'white';
            elements.tbaltsedmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet1.style.backgroundColor = 'white';
            elements.tbaltbordlibmet2.style.backgroundColor = 'white';
            elements.tbaltbordlibmet3.style.backgroundColor = 'white';
            elements.tbaltbordlibmet4.style.backgroundColor = 'white';
            elements.tbaltbordlibmet7.style.backgroundColor = 'white';

            switch (elements.DropDownList2.value) {
                case '0': Ndec = 0; break;
                case '1': Ndec = 1; break;
                case '2': Ndec = 2; break;
                case '3': Ndec = 3; break;
                case '4': Ndec = 4; break;
                default: Ndec = 4;
            }

            let PEI = parseFloat(elements.tbdotmet1.value);
            let PD = parseFloat(elements.tbntanquesmet1.value);
            let PTAho = parseFloat(elements.tbaltsedmet1.value);
            let PTAht = parseFloat(elements.tbaltbordlibmet1.value);
            let tiempo = parseFloat(elements.tbaltbordlibmet2.value);
            let k = parseFloat(elements.tbaltbordlibmet3.value);
            let y = parseFloat(elements.tbaltbordlibmet4.value);
            let fi = parseFloat(elements.tbaltbordlibmet7.value);

            let ho = (PEI - (PEI - PD + y)) - PTAho;
            let ht = (PEI - (PEI - PD + y)) - PTAht;
            let phi = Math.sqrt(k / 100);
            phi = fi / 100;
            let Dest = PEI - PD + y;
            let per = Math.PI * y;

            let d = 0.01;
            let Lest, Lcal;
            while (d <= 100) {
                Lest = Math.sqrt((Math.pow(Math.PI, 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht))));
                d = Dest / (((8 / Math.PI) * (Dest / Lest) * Math.log(Dest / per)) + 1);
                Lcal = Math.sqrt((Math.pow(Math.PI, 2) * k * (d + ((ho + ht) / 4)) * tiempo) / (phi * Math.log(1.16 * (ho / ht))));
                if (Lcal < (Lest * 1.01) && Lcal > (Lest * 0.99)) break;
                if (Lest < (Lcal * 1.01) && Lest > (Lcal * 0.99)) break;
                d += 0.01;
            }

            elements.tbQprommet1.value = Lest.toFixed(Ndec);
            elements.tbQprommet2.value = ho.toFixed(Ndec);
            elements.tbVcompmet1.value = ht.toFixed(Ndec);
            elements.tbVcompmet2.value = Dest.toFixed(Ndec);
            elements.tbVemermet1.value = d.toFixed(Ndec);

            elements.resultadosTitulo.classList.remove('hidden');
            elements.Label8.classList.remove('hidden');
            elements.Label91.classList.remove('hidden');
            elements.Label92.classList.remove('hidden');
            elements.Label3333378.classList.remove('hidden');
            elements.Label3333379.classList.remove('hidden');
            elements.tbQprommet1.classList.remove('hidden');
            elements.tbQprommet2.classList.remove('hidden');
            elements.tbVcompmet1.classList.remove('hidden');
            elements.tbVcompmet2.classList.remove('hidden');
            elements.tbVemermet1.classList.remove('hidden');
        } else {
            const fields = ['tbaltsedmet1', 'tbaltbordlibmet1', 'tbaltbordlibmet2', 'tbaltbordlibmet3', 'tbaltbordlibmet4', 'tbaltbordlibmet7', 'tbntanquesmet1', 'tbdotmet1'];
            fields.forEach(field => {
                if (elements[field].value === '') {
                    elements[field].style.backgroundColor = 'red';
                }
            });
        }
    }

    function Button6_Click() {
        elements.tbdotmet1.value = 4.9;
        elements.tbntanquesmet1.value = 1.9;
        elements.tbaltsedmet1.value = 0.65;
        elements.tbaltbordlibmet1.value = 1.1;
        elements.tbaltbordlibmet2.value = 3;
        elements.tbaltbordlibmet3.value = 0.9;
        elements.tbaltbordlibmet4.value = 0.1;
        elements.tbaltbordlibmet7.value = 5;
    }

    function Button10_Click() {
        const fields = ['tbdotmet1', 'tbntanquesmet1', 'tbaltsedmet1', 'tbaltbordlibmet1', 'tbaltbordlibmet2', 'tbaltbordlibmet3', 'tbaltbordlibmet4', 'tbaltbordlibmet7'];
        fields.forEach(field => {
            elements[field].style.backgroundColor = 'white';
            elements[field].value = '';
        });

        elements.resultadosTitulo.classList.add('hidden');
        elements.Label8.classList.add('hidden');
        elements.Label91.classList.add('hidden');
        elements.Label92.classList.add('hidden');
        elements.Label3333378.classList.add('hidden');
        elements.Label3333379.classList.add('hidden');
        elements.tbQprommet1.classList.add('hidden');
        elements.tbQprommet2.classList.add('hidden');
        elements.tbVcompmet1.classList.add('hidden');
        elements.tbVcompmet2.classList.add('hidden');
        elements.tbVemermet1.classList.add('hidden');
    }

    document.getElementById("button1").addEventListener("click", Button1_Click);
    document.getElementById("button6").addEventListener("click", Button6_Click);
    document.getElementById("button10").addEventListener("click", Button10_Click);
});
