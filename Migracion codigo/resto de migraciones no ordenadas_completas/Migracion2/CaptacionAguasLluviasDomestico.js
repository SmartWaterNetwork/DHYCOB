function calculate() {
    // Retrieve values from form inputs
    const Ddformamet1 = document.getElementById('Ddformamet1').value;
    const Tbhab = parseFloat(document.getElementById('Tbhab').value) || 0;
    const Tbdot = parseFloat(document.getElementById('Tbdot').value) || 0;
    const Tbniu = parseFloat(document.getElementById('Tbniu').value) || 0;
    const Tblong = parseFloat(document.getElementById('Tblong').value) || 0;
    const Tblluvia = parseFloat(document.getElementById('Tblluvia').value) || 0;
    const Tbhl = parseFloat(document.getElementById('Tbhl').value) || 0;
    const TbDprec = parseFloat(document.getElementById('TbDprec').value) || 0;
    const Tbsupcap = parseFloat(document.getElementById('Tbsupcap').value) || 0;
    const Tbprecmax = parseFloat(document.getElementById('Tbprecmax').value) || 0;
    const Tbbcondrec = parseFloat(document.getElementById('Tbbcondrec').value) || 0;

    // Precipitation values
    const tbconshor = Array.from({ length: 12 }, (_, i) => parseFloat(document.getElementById(`tbconshor${i + 1}`).value) || 0);

    // Validate input values
    if (!Ddformamet1 || !Tbhab || !Tbdot || !Tbniu || !Tblong || !Tblluvia || !Tbhl || !TbDprec || !Tbsupcap || !Tbprecmax || !Tbbcondrec || tbconshor.includes(NaN)) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const Ndec = parseInt(Ddformamet1) === 0 ? 4 : parseInt(Ddformamet1) - 1;

    // Calculate demand mens (demandmens) and annual (demanual)
    const demandmens = (Tbhab * Tbdot * 30.4) / 1000;
    const demanual = demandmens * 12;

    document.getElementById('tbdemanmens').textContent = `Demanda Mensual: ${demandmens.toFixed(Ndec)}`;
    document.getElementById('tbdemananual').textContent = `Demanda Anual: ${demanual.toFixed(Ndec)}`;

    // Populate table with precipitation data
    const tbody = document.querySelector('#GridView15 tbody');
    tbody.innerHTML = ''; // Clear existing rows

    let sumpj = 0, sumpnj = 0;

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < 12; i++) {
        const prec = tbconshor[i];
        const precNet = prec * Tbniu;
        if (precNet > 40) {
            if (parseInt(Ddformamet1) === 2) {
                sumpj += prec;
                sumpnj += precNet;
            }
        }

        const row = `<tr>
            <td>${months[i]}</td>
            <td>${prec.toFixed(Ndec)}</td>
            <td>${precNet.toFixed(Ndec)}</td>
        </tr>`;
        tbody.innerHTML += row;
    }

    // Total annual row
    const totalRow = `<tr>
        <td>Total anual</td>
        <td>${sumpj.toFixed(Ndec)}</td>
        <td>${sumpnj.toFixed(Ndec)}</td>
    </tr>`;
    tbody.innerHTML += totalRow;

    // Calculate additional parameters
    const areacap = demanual / (sumpnj / 1000);
    document.getElementById('tbareacap').textContent = `Área Capacidad: ${areacap.toFixed(Ndec)}`;

    const Spend = Math.abs(Tbhl - Tblluvia) / Tblong;
    const tconc = 0.000325 * ((Tblong ** 0.77) / (Spend ** 0.385));
    const tp = 2 * Math.sqrt(tconc) + (0.6 * tconc);
    const tp2 = (0.5 * TbDprec) + (0.5 * tconc);

    document.getElementById('tbtcon').textContent = `Tiempo de Concentración: ${tconc.toFixed(Ndec)}`;
    const tb = 2.67 * tp;
    const tb2 = 2.67 * tp2;
    const Qp = (0.278 * Tbprecmax * (Tbsupcap / 1000000)) / tp;
    const Qp2 = (0.278 * Tbprecmax * (Tbsupcap / 1000000)) / tp2;

    if (Qp2 > Qp) {
        // Update the results if Qp2 > Qp
        document.getElementById
        if (Qp2 > Qp) {
            // Update the results if Qp2 > Qp
            document.getElementById('tbbcondrec').textContent = `Qp2: ${Qp2.toFixed(Ndec)}`;
        } else {
            document.getElementById('tbbcondrec').textContent = `Qp: ${Qp.toFixed(Ndec)}`;
        }
    
        // Update additional results
        const tbresult = 0.013 * (Math.pow(Tbhl, 2) / (Tblong + 1));
        document.getElementById('tbbresult').textContent = `Resultado TB: ${tbresult.toFixed(Ndec)}`;
    }
    
    document.getElementById('canalForm').addEventListener('input', function (e) {
        const input = e.target;
        if (input.value === '') {
            input.classList.remove('input-valid');
            input.classList.add('input-error');
        } else {
            input.classList.remove('input-error');
            input.classList.add('input-valid');
        }
    });
}