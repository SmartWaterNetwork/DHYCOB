let Ndec;

document.getElementById("button1").addEventListener("click", function () {
    let habmet1, altsedmet1, dotmeto1, Ntanquesmet1, altbordlibmet1;
    let Qprommet1, Areatanmet1, Vcompmet1, Vemermet1, Vplanttrantmet1, Vcontincmet1, Vtotalmet1;
    let Diammet1, Alturmet1, Basemet1, Ktanmet1;

    habmet1 = parseFloat(document.getElementById("tbhabmet1").value);
    dotmeto1 = parseFloat(document.getElementById("tbdotmet1").value);
    Ntanquesmet1 = parseFloat(document.getElementById("tbntanquesmet1").value);
    altsedmet1 = parseFloat(document.getElementById("tbaltsedmet1").value);
    altbordlibmet1 = parseFloat(document.getElementById("tbaltbordlibmet1").value);

    if (document.getElementById("DropDownList2").value == 0) {
        Ndec = 4;
    } else if (document.getElementById("DropDownList2").value == 1) {
        Ndec = 0;
    } else if (document.getElementById("DropDownList2").value == 2) {
        Ndec = 1;
    } else if (document.getElementById("DropDownList2").value == 3) {
        Ndec = 2;
    } else if (document.getElementById("DropDownList2").value == 4) {
        Ndec = 3;
    } else if (document.getElementById("DropDownList2").value == 5) {
        Ndec = 4;
    }

    Qprommet1 = habmet1 * dotmeto1 / 1000;

    if (habmet1 < 20000) {
        Vcompmet1 = 0.25 * Qprommet1;
    } else {
        Vcompmet1 = 0.3 * Qprommet1;
    }

    Vemermet1 = 0.15 * Qprommet1;
    Vplanttrantmet1 = 0.1 * Vcompmet1;

    if (habmet1 < 5000) {
        Vcontincmet1 = 0;
    } else if (habmet1 > 5000 && habmet1 < 10000) {
        Vcontincmet1 = 9 * 2 * 360 / 1000;
    } else if (habmet1 > 10000 && habmet1 < 20000) {
        Vcontincmet1 = 16 * 2 * 360 / 1000;
    } else {
        Vcontincmet1 = 31 * 2 * 360 / 1000;
    }

    if (habmet1 == 22000) {
        Vcontincmet1 = 72;
    }

    Vtotalmet1 = Vcompmet1 + Vemermet1 + Vplanttrantmet1 + Vcontincmet1;

    if ((Vtotalmet1 / 1000 / Ntanquesmet1) < 3) {
        Ktanmet1 = 2;
    } else if ((Vtotalmet1 / 1000 / Ntanquesmet1) >= 3 && (Vtotalmet1 / 1000 / Ntanquesmet1) < 6) {
        Ktanmet1 = 1.8;
    } else if ((Vtotalmet1 / 1000 / Ntanquesmet1) >= 6 && (Vtotalmet1 / 1000 / Ntanquesmet1) < 9) {
        Ktanmet1 = 1.5;
    } else if ((Vtotalmet1 / 1000 / Ntanquesmet1) >= 9 && (Vtotalmet1 / 1000 / Ntanquesmet1) < 13) {
        Ktanmet1 = 1.3;
    } else if ((Vtotalmet1 / 1000 / Ntanquesmet1) >= 13 && (Vtotalmet1 / 1000 / Ntanquesmet1) < 16) {
        Ktanmet1 = 1;
    } else if ((Vtotalmet1 / 1000 / Ntanquesmet1) >= 17) {
        Ktanmet1 = 0.7;
    }

    Alturmet1 = (Vtotalmet1 / 300) + Ktanmet1;

    if (document.getElementById("Ddformamet1").selectedIndex == 1) {
        // No action required
    } else if (document.getElementById("Ddformamet1").selectedIndex == 2) {
        // No action required
    } else if (document.getElementById("Ddformamet1").selectedIndex == 3) {
        Alturmet1 = Math.pow((Vtotalmet1 * 4 / 3.14159), (1 / 3));
    }

    altbordlibmet1 = 0.5;
    altsedmet1 = 0.3;

    Areatanmet1 = Vtotalmet1 / Alturmet1;

    if (document.getElementById("Ddformamet1").selectedIndex == 1) {
        Basemet1 = Math.pow(Areatanmet1, 0.5);
    } else if (document.getElementById("Ddformamet1").selectedIndex == 2) {
        Basemet1 = Math.pow((Areatanmet1 / 2), 0.5);
    } else if (document.getElementById("Ddformamet1").selectedIndex == 3) {
        Diammet1 = Math.pow((4 * Vtotalmet1 / 3.14159), 1 / 3);
    }

    document.getElementById("Label147").classList.remove("hidden");
    document.getElementById("Label8").classList.remove("hidden");
    document.getElementById("Label91").classList.remove("hidden");
    document.getElementById("Label92").classList.remove("hidden");
    document.getElementById("Label93").classList.remove("hidden");
    document.getElementById("Label94").classList.remove("hidden");
    document.getElementById("Label95").classList.remove("hidden");
    document.getElementById("tbQprommet1").classList.remove("hidden");
    document.getElementById("tbVcompmet1").classList.remove("hidden");
    document.getElementById("tbVemermet1").classList.remove("hidden");
    document.getElementById("tbVcontincmet1").classList.remove("hidden");
    document.getElementById("tbVplanttrantmet1").classList.remove("hidden");
    document.getElementById("tbVtotalmet1").classList.remove("hidden");

    if (document.getElementById("Ddformamet1").selectedIndex == 1) {
        document.getElementById("Label97").classList.remove("hidden");
        document.getElementById("Label96").classList.remove("hidden");
        document.getElementById("Label98").classList.remove("hidden");
        document.getElementById("tbr1met1").classList.remove("hidden");
        document.getElementById("tbr2met1").classList.remove("hidden");

        document.getElementById("Label96").innerText = "Lado:";
        document.getElementById("Label98").innerText = "Altura:";
        document.getElementById("tbr1met1").value = Basemet1.toFixed(Ndec);
        document.getElementById("tbr2met1").value = Alturmet1.toFixed(Ndec);
    } else if (document.getElementById("Ddformamet1").selectedIndex == 2) {
        document.getElementById("Label97").classList.remove("hidden");
        document.getElementById("Label96").classList.remove("hidden");
        document.getElementById("Label98").classList.remove("hidden");
        document.getElementById("tbr1met1").classList.remove("hidden");
        document.getElementById("tbr2met1").classList.remove("hidden");

        document.getElementById("Label96").innerText = "Lado 1:";
        document.getElementById("Label98").innerText = "Lado 2:";
        document.getElementById("tbr1met1").value = Basemet1.toFixed(Ndec);
        document.getElementById("tbr2met1").value = (2 * Basemet1).toFixed(Ndec);
    } else if (document.getElementById("Ddformamet1").selectedIndex == 3) {

        document.getElementById("Label3333375").classList.remove("hidden");
        document.getElementById("tbr3met1").classList.remove("hidden");

        document.getElementById("Label3333375").innerText = "Diámetro:";
        document.getElementById("tbr3met1").value = Diammet1.toFixed(Ndec);
    }

    document.getElementById("tbQprommet1").value = Qprommet1.toFixed(Ndec);
    document.getElementById("tbVcompmet1").value = Vcompmet1.toFixed(Ndec);
    document.getElementById("tbVemermet1").value = Vemermet1.toFixed(Ndec);
    document.getElementById("tbVcontincmet1").value = Vcontincmet1.toFixed(Ndec);
    document.getElementById("tbVplanttrantmet1").value = Vplanttrantmet1.toFixed(Ndec);
    document.getElementById("tbVtotalmet1").value = Vtotalmet1.toFixed(Ndec);
});
document.getElementById("button6").addEventListener("click", function () {
    document.getElementById("tbhabmet1").value = "1600";
    document.getElementById("tbdotmet1").value = "115";
    document.getElementById("tbntanquesmet1").value = "1";
    document.getElementById("Ddformamet1").selectedIndex = "0.3";
    document.getElementById("tbaltsedmet1").value = "0.3";
    document.getElementById("tbaltbordlibmet1").value = "0.5";
});

document.getElementById("button10").addEventListener("click", function () {
    document.getElementById("tbhabmet1").value = "";
    document.getElementById("tbdotmet1").value = "";
    document.getElementById("tbntanquesmet1").value = "";
    document.getElementById("Ddformamet1").selectedIndex = 0;
    document.getElementById("tbaltsedmet1").value = "";
    document.getElementById("tbaltbordlibmet1").value = "";

    let hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => {
        el.classList.add("hidden");
        if (el.tagName === "INPUT") {
            el.value = "";
        }
    });
});

