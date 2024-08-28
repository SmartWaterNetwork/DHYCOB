document.getElementById("Button4").addEventListener("click", function() {
    let Qsifon, nsifon, Ssifon;
    let DDiseñoCauce, Y1DiseñoCauce;
    let Velocidadsifon, L1DiseñoCauce, FroudDiseñoCauce;
    let velanclajesifon, dintsifon, Cotasifon, areaanclajesifon;
    let L1anclaj, L2anclaj, Beta1, Beta2, numtramos, diamanclaje;

    const tbQanclajesifon = document.getElementById("tbQanclajesifon");
    const tbpesesptubo = document.getElementById("tbpesesptubo");
    const tbesftrabajacero = document.getElementById("tbesftrabajacero");
    const tbpreshidrostanclaj = document.getElementById("tbpreshidrostanclaj");
    const tbpresjuntagabajo = document.getElementById("tbpresjuntagabajo");
    const tbpresjuntagarrib = document.getElementById("tbpresjuntagarrib");
    const tbfanclaje = document.getElementById("tbfanclaje");
    const tbdiamanclajesifon = document.getElementById("tbdiamanclajesifon");
    const tblonghorl1 = document.getElementById("tblonghorl1");
    const tblonghorl2 = document.getElementById("tblonghorl2");
    const tbbeta1 = document.getElementById("tbbeta1");
    const tbbeta2 = document.getElementById("tbbeta2");
    const tbBanclaj = document.getElementById("tbBanclaj");
    const tbHanclaj = document.getElementById("tbHanclaj");
    const DropDownList2 = document.getElementById("DropDownList2");
    const DropDownList5 = document.getElementById("DropDownList5");
    const DropDownList6 = document.getElementById("DropDownList6");
    const tbespminanclaj = document.getElementById("tbespminanclaj");
    const label145 = document.getElementById("label145");
    const label3333289 = document.getElementById("label3333289");
    const tbespusadanclaj = document.getElementById("tbespusadanclaj");
    const Button42 = document.getElementById("Button42");

    if (tbBanclaj.value !== "" && tbHanclaj.value !== "" && tbQanclajesifon.value !== "" && tbpesesptubo.value !== "" && tbesftrabajacero.value !== "" && tbpresjuntagabajo.value !== "" && tbpresjuntagarrib.value !== "" && tbpreshidrostanclaj.value !== "" && tbfanclaje.value !== "" && tbdiamanclajesifon.value !== "" && tblonghorl1.value !== "" && tblonghorl2.value !== "" && tbbeta1.value !== "" && tbbeta2.value !== "" && DropDownList5.value !== "0" && DropDownList6.value !== "0") {

        // Reset background colors
        tbQanclajesifon.style.backgroundColor = "white";
        tbpesesptubo.style.backgroundColor = "white";
        tbesftrabajacero.style.backgroundColor = "white";
        tbpreshidrostanclaj.style.backgroundColor = "white";
        tbpresjuntagabajo.style.backgroundColor = "white";
        tbpresjuntagarrib.style.backgroundColor = "white";
        tbfanclaje.style.backgroundColor = "white";
        tbdiamanclajesifon.style.backgroundColor = "white";
        tblonghorl1.style.backgroundColor = "white";
        tblonghorl2.style.backgroundColor = "white";
        tbbeta1.style.backgroundColor = "white";
        tbbeta2.style.backgroundColor = "white";
        tbBanclaj.style.backgroundColor = "white";
        tbHanclaj.style.backgroundColor = "white";

        let ndec;
        switch (DropDownList2.value) {
            case "0":
                ndec = 4;
                break;
            case "1":
                ndec = 0;
                break;
            case "2":
                ndec = 1;
                break;
            case "3":
                ndec = 2;
                break;
            case "4":
                ndec = 3;
                break;
            case "5":
                ndec = 4;
                break;
            default:
                ndec = 4;
        }

        Qsifon = parseFloat(tbQanclajesifon.value);
        const pesoesptubo = parseFloat(tbpesesptubo.value);
        const esftrabajacer = parseFloat(tbesftrabajacero.value);
        const presjuntagabajo = parseFloat(tbpresjuntagabajo.value);
        const presjuntagarriba = parseFloat(tbpresjuntagarrib.value);
        const preshidrostanlclaje = parseFloat(tbpreshidrostanclaj.value);
        const fanclacje = parseFloat(tbfanclaje.value);
        diamanclaje = parseFloat(tbdiamanclajesifon.value);
        L1anclaj = parseFloat(tblonghorl1.value);
        L2anclaj = parseFloat(tblonghorl2.value);
        Beta1 = parseFloat(tbbeta1.value);
        Beta2 = parseFloat(tbbeta2.value);

        const areaanclaj = (Math.PI * Math.pow(diamanclaje, 2)) / 4;
        const velanclaj = Qsifon / areaanclaj;

        const f1anclaj = areaanclaj * 1.25 * preshidrostanlclaje;
        const f2anclaj = Qsifon * velanclaj / 9.81;

        const espminreq = 1.25 * preshidrostanlclaje * diamanclaje / (2 * esftrabajacer) + (((diamanclaje / 0.0254 + 20) / 400) * 0.0254);

        label145.style.display = "block";
        tbespminanclaj.style.display = "block";
        tbespminanclaj.value = espminreq.toFixed(ndec);
        tbespminanclaj.style.color = "red";

        label3333289.style.display = "block";
        tbespusadanclaj.style.display = "block";
        Button42.style.display = "block";

    } else {
        const inputs = [tbQanclajesifon, tbpesesptubo, tbesftrabajacero, tbpreshidrostanclaj, tbpresjuntagabajo, tbpresjuntagarrib, tbfanclaje, tbdiamanclajesifon, tblonghorl1, tblonghorl2, tbbeta1, tbbeta2, tbBanclaj, tbHanclaj];
        inputs.forEach(input => {
            if (input.value === "") {
                input.style.backgroundColor = "red";
            }
        });
    }
});
