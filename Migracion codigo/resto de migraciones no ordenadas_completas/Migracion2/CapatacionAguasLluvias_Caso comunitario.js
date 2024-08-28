$(document).ready(function () {
    $('#Button2').on('click', function () {
        // Obtener y parsear valores de los campos de entrada
        let hab = parseFloat($('#Tbhab').val());
        let dot = parseFloat($('#Tbdot').val());
        let niu = parseFloat($('#Tbniu').val());
        let longitud = parseFloat($('#Tblong').val());
        let lluvia = parseFloat($('#Tblluvia').val()) / 1000;
        let hl = parseFloat($('#Tbhl').val());
        let b = parseFloat($('#Tbb').val());
        let x = parseFloat($('#Tbx').val());
        let h = parseFloat($('#Tbh').val());
        let b0 = parseFloat($('#Tbb0').val());
        let x0 = parseFloat($('#Tbx0').val());
        let h0 = parseFloat($('#Tbh0').val());
        let prec1 = parseFloat($('#tbconshor1').val());
        let prec2 = parseFloat($('#tbconshor2').val());
        let prec3 = parseFloat($('#tbconshor3').val());
        let prec4 = parseFloat($('#tbconshor4').val());
        let prec5 = parseFloat($('#tbconshor5').val());
        let prec6 = parseFloat($('#tbconshor6').val());
        let prec7 = parseFloat($('#tbconshor7').val());
        let prec8 = parseFloat($('#tbconshor8').val());
        let prec9 = parseFloat($('#tbconshor9').val());
        let prec10 = parseFloat($('#tbconshor10').val());
        let prec11 = parseFloat($('#tbconshor11').val());
        let prec12 = parseFloat($('#tbconshor12').val());
        
        let inputs = ['#Tbx0', '#Tbb0', '#Tbh0', '#Tbx', '#Tbb', '#Tbh', '#Tblong', '#Tblluvia', '#Tbhl', '#Ddformamet1', '#Tbhab', '#Tbdot', '#Tbniu', '#tbconshor1', '#tbconshor2', '#tbconshor3', '#tbconshor4', '#tbconshor5', '#tbconshor6', '#tbconshor7', '#tbconshor8', '#tbconshor9', '#tbconshor10', '#tbconshor11', '#tbconshor12'];

        let allFilled = true;
        inputs.forEach(function (id) {
            if ($(id).val() === "") {
                $(id).addClass('error');
                allFilled = false;
            } else {
                $(id).removeClass('error');
            }
        });

        if (!allFilled) {
            return;
        }

        // Calcula la demanda mensual y anual
        let demandmens = (hab * dot * 30) / 1000;
        $('#Label3333320').show();
        $('#Label22').show();
        $('#tbdemanmens').val(demandmens.toFixed(4)).addClass('success').show();

        let demanual = demandmens * 12;
        $('#Label3333384').show();
        $('#tbdemananual').val(demanual.toFixed(4)).addClass('success').show();

        $('#Label3333383').show();
        $('#GridView15').show();

        let precipitationCase = parseInt($('#precipitationCase').val());
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let precs = [prec1, prec2, prec3, prec4, prec5, prec6, prec7, prec8, prec9, prec10, prec11, prec12];
        let gridView15Body = $('#GridView15 tbody');
        gridView15Body.empty();

        let totalAnualPrec = 0;
        let totalAnualPrecNet = 0;

        for (let i = 0; i < 12; i++) {
            let row = $('<tr></tr>');
            let cellMonth = $('<td></td>').text(months[i]);
            let cellPrec = $('<td></td>').text(precs[i].toFixed(4));
            let cellPrecNet = $('<td></td>').text((precs[i] * niu).toFixed(4)); // Multiplica por Tbniu

            // Caso 1: Sumar todos los meses
            if (precipitationCase === 1) {
                totalAnualPrec += precs[i];
                totalAnualPrecNet += precs[i] * niu;
            }

            row.append(cellMonth);
            row.append(cellPrec);
            row.append(cellPrecNet);
            gridView15Body.append(row);
        }

        // Caso 2: Sumar desde noviembre hasta abril
        if (precipitationCase === 2) {
            let monthsToSum = [10, 11, 0, 1, 2, 3]; // Índices de los meses noviembre (10) hasta abril (3)
            totalAnualPrec = monthsToSum.reduce((sum, index) => sum + precs[index], 0);
            totalAnualPrecNet = monthsToSum.reduce((sum, index) => sum + (precs[index] * niu), 0);
        }

        // Caso 3: Sumar desde mayo hasta octubre
        if (precipitationCase === 3) {
            let monthsToSum = [4, 5, 6, 7, 8, 9]; // Índices de los meses mayo (4) hasta octubre (9)
            totalAnualPrec = monthsToSum.reduce((sum, index) => sum + precs[index], 0);
            totalAnualPrecNet = monthsToSum.reduce((sum, index) => sum + (precs[index] * niu), 0);
        }

        // Añadir la fila del total anual al final de la tabla
        let totalRow = $('<tr></tr>');
        totalRow.append($('<td></td>').text('Total Anual'));
        totalRow.append($('<td></td>').text(totalAnualPrec.toFixed(4)));
        totalRow.append($('<td></td>').text(totalAnualPrecNet.toFixed(4)));
        gridView15Body.append(totalRow);

        // Cálculo de areacap y mostrar resultado
        let sumpnj = totalAnualPrecNet; // Suponiendo que es la suma de precipitación neta anual
        let areacap = demanual / (sumpnj / 1000);
        $('#Label91').show();
        $('#tbareacap').val(areacap.toFixed(4)).addClass('success').show().css('color', 'red');

        // Cálculo de Qc, Dc, D y mostrar resultado
        let Qc = ((5 / 18) * (areacap * lluvia)) / 1000;
        let Dc = Math.sqrt((4 * Qc) / (Math.PI * 0.8));
        let D = 0.66 * Math.pow(
            (Math.pow(0.0000015, 1.25) * Math.pow(
                (longitud * Math.pow(Qc, 2)) / (9.81 * ((hl / 100) * longitud)),
                4.75
            )) +
            (0.00001 * Math.pow(Qc, 9.4) * Math.pow(
                longitud / (9.81 * ((hl / 100) * longitud)),
                5.2
            )),
            0.04
        );

        // Mostrar resultados
        $('#Label92').show();
        if (Dc > D) {
            $('#tbdiamcap').val((Dc / 0.0254).toFixed(4)).addClass('success').show().css('color', 'red');
        } else {
            $('#tbdiamcap').val((D / 0.0254).toFixed(4)).addClass('success').show().css('color', 'red');
        }


        // Cálculo de Vsedim y Vol
        let Vsedim = areacap * lluvia;
        let Vol = h * (Math.pow(b, 2) + (2 * b * x) + (4 * Math.pow(x, 2) / 3));
        Vol = Vol.toFixed(4);

        // Mostrar resultados de Vsedim y Vol
        if (Vol > Vsedim) {
            $('#Label93').show();
            $('#tbvolcap').val(Vsedim.toFixed(4)).addClass('success').show().css('color', 'red');
            $('#Label3333393').show();
            $('#tbvolcap0').val(Vol).addClass('success').show().css('color', 'red');
        } else {
            $('#Label93').show();
                $('#tbvolcap').val(Vsedim.toFixed(4)).addClass('success').show().css('color', 'red');
                $('#Label3333393').show();
                $('#tbvolcap0').val(Vol + " Incremente dimensiones").addClass('success').show().css('color', 'red');
                return;
            }
    
            // Cálculo de Vcist y Vol0
            let Vcist = demandmens * 8;
            let Vol0 = h0 * (Math.pow(b0, 2) + 2 * b0 * x0 + 4 * Math.pow(x0, 2) / 3);
    
            // Mostrar resultados de Vcist y Vol0
            if (Vol0 > Vcist) {
                $('#Label94').show();
                $('#tbvolcist').val(Vcist.toFixed(4)).addClass('success').show().css('color', 'red');
                $('#Label3333398').show();
                $('#tbvolcist0').val(Vol0.toFixed(4)).addClass('success').show().css('color', 'red');
            } else {
                $('#Label94').show();
                $('#tbvolcist').val(Vcist.toFixed(4)).addClass('success').show().css('color', 'red');
                $('#Label3333398').show();
                $('#tbvolcist0').val("Incremente dimensiones").addClass('success').show().css('color', 'red');
                return;
            }
        });
    });
    
$(document).ready(function () {
    // Función para establecer los valores predeterminados
    function setDefaultValues() {
        $('#Tbhab').val(2600);
        $('#Tbdot').val(2.4);
        $('#Tbniu').val(0.765);
        $('#Tblong').val(6);
        $('#Tblluvia').val(50);
        $('#Tbhl').val(10);
        $('#Tbb').val(10);
        $('#Tbx').val(0.5);
        $('#Tbh').val(2.2);
        $('#Tbb0').val(18);
        $('#Tbx0').val(3);
        $('#Tbh0').val(3.4);
        $('#Ddformamet1').val(1);
        $('#tbconshor1').val(17.3);
        $('#tbconshor2').val(11.8);
        $('#tbconshor3').val(7.9);
        $('#tbconshor4').val(24.5);
        $('#tbconshor5').val(59.1);
        $('#tbconshor6').val(137.7);
        $('#tbconshor7').val(162.9);
        $('#tbconshor8').val(158.3);
        $('#tbconshor9').val(132.1);
        $('#tbconshor10').val(71.9);
        $('#tbconshor11').val(14.8);
        $('#tbconshor12').val(14.4);
    }

    // Asocia la función al botón correspondiente
    $('#Button8').on('click', function () {
        setDefaultValues();
    });
});
function button9Click() {
    // Obtener los elementos por su ID
    const elementIds = [
        'Ddformamet1', 'Tbhab', 'Tbdot', 'Tbniu', 'Tblong', 'Tblluvia',
        'Tbhl', 'Tbb', 'Tbx', 'Tbh', 'Tbb0', 'Tbx0', 'Tbh0',
        'tbconshor1', 'tbconshor2', 'tbconshor3', 'tbconshor4', 'tbconshor5',
        'tbconshor6', 'tbconshor7', 'tbconshor8', 'tbconshor9', 'tbconshor10',
        'tbconshor11', 'tbconshor12', 'Label3333383', 'GridView15', 'Label3333320',
        'Label22', 'Label3333384', 'tbdemananual', 'Label91', 'Label92',
        'Label93', 'Label94', 'Label95', 'Label3333393', 'tbvolcap0', 'tbdemanmens',
        'tbareacap', 'tbdiamcap', 'tbvolcap', 'tbvolcist', 'tbVtotalmet1',
        'tbr1met1', 'Label97', 'Label96', 'Label98', 'tbr2met1', 'tbr3met1',
        'Label3333375', 'Label3333398', 'tbvolcist0', 'Tbx', 'Tbb', 'Tbh',
        'Tbx0', 'Tbb0', 'Tbh0', 'tbconshor1', 'tbconshor2', 'tbconshor3',
        'tbconshor4', 'tbconshor5', 'tbconshor6', 'tbconshor7', 'tbconshor8',
        'tbconshor9', 'tbconshor10', 'tbconshor11', 'tbconshor12'
    ];

    // Iterar sobre los IDs y restablecer los valores y estilos
    elementIds.forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            if (element.tagName === 'SELECT') {
                element.selectedIndex = 0; // Para los elementos select (dropdowns)
            } else if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
                element.value = ""; // Para los campos de texto
            }

            element.style.backgroundColor = 'white'; // Cambiar el color de fondo

            // Ocultar elementos
            if (element.tagName === 'LABEL' || element.tagName === 'DIV') {
                element.style.display = 'none';
            } else if (element.tagName === 'GRIDVIEW') { // Asumiendo que GridView es una tabla
                element.style.display = 'none';
            }
        }
    });
}


