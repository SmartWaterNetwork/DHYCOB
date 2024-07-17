document.addEventListener("DOMContentLoaded", function() {
    let Ndec;

    document.getElementById("Button2").addEventListener("click", function() {
        let dest, alfa, Vo, epsilon, EE;
        let Z, X, CR, a, S, Y, caudal;
        let n, m, B, p, Alopez;

        const Tbvelmed = document.getElementById("Tbvelmed");
        const Tbcoefk1 = document.getElementById("Tbcoefk1");
        const Tbdiampart = document.getElementById("Tbdiampart");
        const DropDownList2 = document.getElementById("DropDownList2");
        const DropDownList3 = document.getElementById("DropDownList3");
        const DropDownList4 = document.getElementById("DropDownList4");
        const DropDownList1 = document.getElementById("DropDownList1");

        if (Tbvelmed.value !== "" && Tbcoefk1.value !== "" && Tbdiampart.value !== "") {
            Tbvelmed.style.backgroundColor = "white";
            Tbdiampart.style.backgroundColor = "white";
            Tbcoefk1.style.backgroundColor = "white";

            switch (DropDownList2.selectedIndex) {
                case 0:
                case 5:
                    Ndec = 4;
                    break;
                case 1:
                    Ndec = 0;
                    break;
                case 2:
                    Ndec = 1;
                    break;
                case 3:
                    Ndec = 2;
                    break;
                case 4:
                    Ndec = 3;
                    break;
                default:
                    Ndec = 4;
            }

            m = parseFloat(Tbcoefk1.value);
            caudal = parseFloat(Tbdiampart.value);
            dest = parseFloat(Tbvelmed.value);

            if (dest < 1.5) {
                alfa = 1 / 3;
            } else if (dest < 2.5) {
                alfa = 1 / 4;
            } else {
                alfa = 1 / 5;
            }

            Vo = [0.6, 0.75, 0.8, 0.83, 0.86, 0.9, 0.98, 1.04, 1.11, 1.17, 1.24, 1.29, 1.35, 1.38, 1.41, 1.44, 1.47, 1.5, 1.55, 1.56, 1.59, 1.62, 1.65, 1.69, 1.73, 1.76, 1.8, 1.84, 1.88, 1.91, 1.95, 2.4, 2.6][DropDownList3.selectedIndex];

            Z = 1 / 2;
            X = 1 / 3;
            CR = 11;
            epsilon = (0.2 * (Z - alfa)) + (X * (1 + alfa));
            EE = 1 / Math.sqrt(Vo);

            a = DropDownList4.selectedIndex === 0 ? 1 : 1.15;

            S = Math.pow((Math.pow(EE, (Z - alfa)) * Math.pow((a * Vo), (1 + Z))) / (Math.pow(CR, (1 + alfa)) * Math.pow(caudal, ((Z - alfa) / 2))), 1 / epsilon);
            Y = Math.pow((a * Vo) / (CR * Math.pow(S, X)), 1 / (Z - alfa));

            if ((Y < 1.5 && dest < 1.5) || (Y < 2.5 && dest < 2.5) || (Y > 2.5 && dest > 2.5)) {
                p = 5.75;
                Alopez = 3.57;
                n = Math.pow(Y, (1 / 6)) / (p * Math.sqrt(9.81) * Math.log10(Alopez * Y / 0.09));

                const coefK = [3, 10, 16][DropDownList1.selectedIndex];

                B = Math.pow((n * caudal * Math.pow(coefK, (5 / 3))) / Math.sqrt(S), 3 / (3 + (5 * m)));

                document.getElementById("Label3333320").style.display = "block";
                document.getElementById("Label3333356").style.display = "block";
                document.getElementById("Label3333357").style.display = "block";
                document.getElementById("Label3333358").style.display = "block";
                document.getElementById("Label14").style.display = "block";

                document.getElementById("Tbveloccaid").style.display = "block";
                document.getElementById("Tbveloccaid").value = B.toFixed(Ndec);
                document.getElementById("Tbveloccaid").style.color = "red";

                document.getElementById("Tbveloccaid0").style.display = "block";
                document.getElementById("Tbveloccaid0").value = Y.toFixed(Ndec);
                document.getElementById("Tbveloccaid0").style.color = "red";

                document.getElementById("Tbveloccaid1").style.display = "block";
                document.getElementById("Tbveloccaid1").value = (S * 100).toFixed(Ndec);
                document.getElementById("Tbveloccaid1").style.color = "red";

                document.getElementById("Tbveloccaid2").style.display = "block";
                document.getElementById("Tbveloccaid2").value = n.toFixed(Ndec);
                document.getElementById("Tbveloccaid2").style.color = "red";
            } else {
                if (Y < 1.5) {
                    alfa = 1 / 3;
                } else if (Y < 2.5) {
                    alfa = 1 / 4;
                } else {
                    alfa = 1 / 5;
                }
                epsilon = (0.2 * (Z - alfa)) + (X * (1 + alfa));
                EE = 1 / Math.sqrt(Vo);

                S = Math.pow((Math.pow(EE, (Z - alfa)) * Math.pow((a * Vo), (1 + Z))) / (Math.pow(CR, (1 + alfa)) * Math.pow(caudal, ((Z - alfa) / 2))), 1 / epsilon);
                Y = Math.pow((a * Vo) / (CR * Math.pow(S, X)), 1 / (Z - alfa));
            }
        } else {
            if (Tbvelmed.value === "") {
                Tbvelmed.style.backgroundColor = "red";
            }
            if (Tbdiampart.value === "") {
                Tbdiampart.style.backgroundColor = "red";
            }
            if (Tbcoefk1.value === "") {
                Tbcoefk1.style.backgroundColor = "red";
            }
        }
    });

    document.getElementById("Button10").addEventListener("click", function() {
        document.getElementById("Tbvelmed").value = 2;
        document.getElementById("DropDownList3").selectedIndex = 22;
        document.getElementById("DropDownList4").selectedIndex = 0;
        document.getElementById("Tbdiampart").value = 22.73;
        document.getElementById("DropDownList1").selectedIndex = 1;
        document.getElementById("Tbcoefk1").value = 1;

        document.getElementById("Label3333320").style.display = "none";
        document.getElementById("Label3333356").style.display = "none";
        document.getElementById("Label3333357").style.display = "none";
        document.getElementById("Label3333358").style.display = "none";
        document.getElementById("Label14").style.display = "none";

        document.getElementById("Tbveloccaid").style.display = "none";
        document.getElementById("Tbveloccaid0").style.display = "none";
        document.getElementById("Tbveloccaid1").style.display = "none";
        document.getElementById("Tbveloccaid2").style.display = "none";
    });

    document.getElementById("Button9").addEventListener("click", function() {
        document.getElementById("Tbvelmed").style.backgroundColor = "white";
        document.getElementById("Tbdiampart").style.backgroundColor = "white";
        document.getElementById("Tbcoefk1").style.backgroundColor = "white";

        document.getElementById("Tbvelmed").value = "";
        document.getElementById("DropDownList3").selectedIndex = 0;
        document.getElementById("DropDownList4").selectedIndex = 0;
        document.getElementById("Tbdiampart").value = "";
        document.getElementById("DropDownList1").selectedIndex = 0;
        document.getElementById("Tbcoefk1").value = "";

        document.getElementById("Label3333320").style.display = "none";
        document.getElementById("Label3333356").style.display = "none";
        document.getElementById("Label3333357").style.display = "none";
        document.getElementById("Label3333358").style.display = "none";
        document.getElementById("Label14").style.display = "none";

        document.getElementById("Tbveloccaid").style.display = "none";
        document.getElementById("Tbveloccaid0").style.display = "none";
        document.getElementById("Tbveloccaid1").style.display = "none";
        document.getElementById("Tbveloccaid2").style.display = "none";
    });
});
