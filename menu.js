const ocult = document.getElementById("bs");
const c2 = document.getElementById("c2");
const image = document.getElementById("image");
const image_2 = document.getElementById("image-2");
const image_3 = document.getElementById("image-3");
const image_4 = document.getElementById("image-4");
const tn = document.getElementById("Tn");
const str = document.querySelectorAll(".Str");
const sp = document.querySelectorAll(".Sp");
const sl = document.getElementById("Sl");
const dt = document.querySelectorAll(".Dt");
const br = document.querySelectorAll(".Br");
const ig = document.querySelectorAll(".Ig");
const sc = document.querySelectorAll(".Sc");
const t_str = document.querySelectorAll(".t_str");
const t_Sc = document.querySelectorAll(".t_Sc");
const s_Sr = document.querySelectorAll(".s_Sr");
const s_T = document.querySelectorAll(".s_T");
const d_Dza = document.querySelectorAll(".d_dza");
const d_Dte = document.querySelectorAll(".d_dte");
const d_Dagan_sh = document.querySelectorAll(".d_dagan_sh");
const cF_Off = document.getElementById("contenedorFinal");
const Experimento_Str = document.getElementById("Experimento_Str");
const Experimento_Sp = document.getElementById("Experimento_Sp");
const Experimento_Dt = document.getElementById("Experimento_Dt");
const Experimento_Br = document.getElementById("Experimento_Br");
const Experimento_Ig = document.getElementById("Experimento_Ig");
const Experimento_Sc = document.getElementById("Experimento_Sc");
const Experimento_tirante_str = document.getElementById("Experimento_tirante_str");
const Experimento_tirante_Sc = document.getElementById("Experimento_tirante_Sc");
const Experimento_salto_Sr = document.getElementById("Experimento_salto_Sr");
const Experimento_drenajes_dZa = document.getElementById("Experimento_drenajes_dZa");
const Experimento_drenajes_dTe = document.getElementById("Experimento_drenajes_dTe");
const Experimento_drenajes_dagan_sh = document.getElementById("Experimento_drenajes_dagan_sh");
const img_Experimento_Str = document.getElementById("img_Experimento_Str");
const img_Experimento_Sp = document.getElementById("img_Experimento_Sp");
const img_Experimento_Dt = document.getElementById("img_Experimento_Dt");
const img2_Experimento_Dt = document.getElementById("img2_Experimento_Dt");
const img3_Experimento_Dt = document.getElementById("img3_Experimento_Dt");
const img_Experimento_Br = document.getElementById("img_Experimento_Br");
const img2_Experimento_Br = document.getElementById("img2_Experimento_Br");
const img3_Experimento_Br = document.getElementById("img3_Experimento_Br");
const img_Experimento_Ig = document.getElementById("img_Experimento_Ig");
const img2_Experimento_Ig = document.getElementById("img2_Experimento_Ig");
const img3_Experimento_Ig = document.getElementById("img3_Experimento_Ig");
const img_Experimento_Sc = document.getElementById("img_Experimento_Sc");
const img_Experimento_tirante_str = document.getElementById(
  "img_Experimento_tirante_str"
);
const img_Experimento_tirante_Sc = document.getElementById(
  "img_Experimento_tirante_Sc"
);
const img_Experimento_salto_Sr = document.getElementById(
  "img_Experimento_salto_Sr"
);
const Experimento_salto_t = document.getElementById("Experimento_salto_t");
const img_Experimento_salto_t = document.getElementById(
  "img_Experimento_salto_t"
);
const img_Experimento_drenajes_dZa = document.getElementById(
  "img_Experimento_drenajes_dZa"
);

const img_Experimento_drenajes_dTe = document.getElementById(
  "img_Experimento_drenajes_dTe"
);

const img_Experimento_drenajes_dagan_sh = document.getElementById(
  "img_Experimento_drenajes_dagan_sh"
);

ocult.addEventListener("click", () => {
  ocult.style.visibility = "hidden";
  document.getElementById("conte").style.left = "0";
  setTimeout(() => {
    c2.style.visibility = "visible";
    document.getElementById("id_x").style.opacity = "1";
    document.getElementById("id_x").style.cursor = "pointer";
  }, 280);
});
document.getElementById("id_x").addEventListener("click", () => {
  document.getElementById("conte").style.left = "-450px";
  c2.style.visibility = "hidden";
  document.getElementById("id_x").style.opacity = "0";
  document.getElementById("id_x").style.cursor = "default";
  setTimeout(() => {
    ocult.style.visibility = "visible";
  }, 150);
});

sl.addEventListener("mouseover", function () {
  image_2.style.opacity = "0";
  image_3.style.opacity = "0";
  image_4.style.opacity = "0";
  setTimeout(function () {
    image_2.style.visibility = "hidden";
    image_3.style.visibility = "hidden";
    image_4.style.visibility = "hidden";
    image.style.opacity = "1";
    image.style.visibility = "visible";
  }, 200);
});

tn.addEventListener("mouseover", function () {
  image.style.opacity = "0";
  image_3.style.opacity = "0";
  image_4.style.opacity = "0";
  setTimeout(function () {
    image.style.visibility = "hidden";
    image_3.style.visibility = "hidden";
    image_3.style.visibility = "hidden";
    image_2.style.opacity = "1";
    image_2.style.visibility = "visible";
  }, 200);
});

str.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    image.style.opacity = "0";
    image_2.style.opacity = "0";
    image_4.style.opacity = "0";
    setTimeout(function () {
      image.style.visibility = "hidden";
      image_2.style.visibility = "hidden";
      image_4.style.visibility = "hidden";
      image_3.style.opacity = "1";
      image_3.style.visibility = "visible";
    }, 200);
  });
});

var vector = [];
var i = [];

function es_Graficos(img, img2, img3) {
  var imgs = [];
  imgs.push(img);
  imgs.push(img2);
  imgs.push(img3);
  return imgs;
}

function bridge(element, listImgs) {
  var x_Experimento = vector[0];
  if (vector.length != 0) {
    //////////////////////////////////////////////////////
    if (listImgs.length != 0) {
      listImgs[0].style.opacity = "0";
      listImgs[1].style.opacity = "0";
      listImgs[2].style.opacity = "0";
      listImgs[0].style.pointerEvents = "none";
    }
    ///////////////////////////////////////////////////////
    x_Experimento.style.pointerEvents = "none";
    cF_Off.style.pointerEvents = "auto";
    cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
    cF_Off.style.opacity = "100";
    x_Experimento.style.animation = "moveFadeOut 0.7s forwards";
    setTimeout(function () {
      x_Experimento.style.opacity = "0";
    }, 700);
    vector = [];
    i = [];
    vector.push(element);
  } else {
    vector.push(element);
  }
}

/////////////////////////////////////////////////////////////////////////
str.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Str, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Str.style.pointerEvents = "auto";
    Experimento_Str.style.opacity = "100";
    Experimento_Str.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "TIRANTE NORMAL";
  });
});

img_Experimento_Str.addEventListener("click", () => {
  vector = [];
  Experimento_Str.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Str.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_Str.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

sp.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Sp, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Sp.style.pointerEvents = "auto";
    Experimento_Sp.style.opacity = "100";
    Experimento_Sp.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "TIRANTE NORMAL";
  });
});

img_Experimento_Sp.addEventListener("click", () => {
  vector = [];
  Experimento_Sp.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Sp.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_Sp.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

dt.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Dt, i);
    i = es_Graficos(
      img_Experimento_Dt,
      img2_Experimento_Dt,
      img3_Experimento_Dt
    );
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Dt.style.pointerEvents = "auto";
    Experimento_Dt.style.opacity = "100";
    Experimento_Dt.style.animation = "moveFadeOut2 0.7s forwards";
    setTimeout(function () {
      img_Experimento_Dt.style.opacity = "100";
      img2_Experimento_Dt.style.opacity = "100";
      img3_Experimento_Dt.style.opacity = "100";
      img_Experimento_Dt.style.pointerEvents = "auto";
    }, 500);
    document.getElementById("encabe").textContent = "REMANSO";
  });
});

img_Experimento_Dt.addEventListener("click", () => {
  vector = [];
  img_Experimento_Dt.style.opacity = "0";
  img2_Experimento_Dt.style.opacity = "0";
  img3_Experimento_Dt.style.opacity = "0";
  Experimento_Dt.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Dt.style.animation = "moveFadeOut 0.7s forwards";
  img_Experimento_Dt.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Dt.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

br.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Br, i);
    i = es_Graficos(
      img_Experimento_Br,
      img2_Experimento_Br,
      img3_Experimento_Br
    );
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Br.style.pointerEvents = "auto";
    Experimento_Br.style.opacity = "100";
    Experimento_Br.style.animation = "moveFadeOut2 0.7s forwards";
    setTimeout(function () {
      img_Experimento_Br.style.opacity = "100";
      img2_Experimento_Br.style.opacity = "100";
      img3_Experimento_Br.style.opacity = "100";
      img_Experimento_Br.style.pointerEvents = "auto";
    }, 500);
    document.getElementById("encabe").textContent = "REMANSO";
  });
});

img_Experimento_Br.addEventListener("click", () => {
  vector = [];
  img_Experimento_Br.style.opacity = "0";
  img2_Experimento_Br.style.opacity = "0";
  img3_Experimento_Br.style.opacity = "0";
  Experimento_Br.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Br.style.animation = "moveFadeOut 0.7s forwards";
  img_Experimento_Br.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Br.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

ig.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Ig, i);
    i = es_Graficos(
      img_Experimento_Ig,
      img2_Experimento_Ig,
      img3_Experimento_Ig
    );
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Ig.style.pointerEvents = "auto";
    Experimento_Ig.style.opacity = "100";
    Experimento_Ig.style.animation = "moveFadeOut2 0.7s forwards";
    setTimeout(function () {
      img_Experimento_Ig.style.opacity = "100";
      img2_Experimento_Ig.style.opacity = "100";
      img3_Experimento_Ig.style.opacity = "100";
      img_Experimento_Ig.style.pointerEvents = "auto";
    }, 500);
    document.getElementById("encabe").textContent = "REMANSO";
  });
});

img_Experimento_Ig.addEventListener("click", () => {
  vector = [];
  img_Experimento_Ig.style.opacity = "0";
  img2_Experimento_Ig.style.opacity = "0";
  img3_Experimento_Ig.style.opacity = "0";
  Experimento_Ig.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Ig.style.animation = "moveFadeOut 0.7s forwards";
  img_Experimento_Ig.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Ig.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

sc.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_Sc, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_Sc.style.pointerEvents = "auto";
    Experimento_Sc.style.opacity = "100";
    Experimento_Sc.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "TIRANTE NORMAL";
  });
});

img_Experimento_Sc.addEventListener("click", () => {
  vector = [];
  Experimento_Sc.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_Sc.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_Sc.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

t_str.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_tirante_str, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_tirante_str.style.pointerEvents = "auto";
    Experimento_tirante_str.style.opacity = "100";
    Experimento_tirante_str.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "TIRANTE CRÍTICO";
  });
});

img_Experimento_tirante_str.addEventListener("click", () => {
  vector = [];
  Experimento_tirante_str.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_tirante_str.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_tirante_str.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

t_Sc.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_tirante_Sc, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_tirante_Sc.style.pointerEvents = "auto";
    Experimento_tirante_Sc.style.opacity = "100";
    Experimento_tirante_Sc.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "TIRANTE CRÍTICO";
  });
});

img_Experimento_tirante_Sc.addEventListener("click", () => {
  vector = [];
  Experimento_tirante_Sc.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_tirante_Sc.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_tirante_Sc.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

///me quede hasta aqui continuar///

s_Sr.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_salto_Sr, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_salto_Sr.style.pointerEvents = "auto";
    Experimento_salto_Sr.style.opacity = "100";
    Experimento_salto_Sr.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "SALTO HIDRÁULICO";
  });
});

img_Experimento_salto_Sr.addEventListener("click", () => {
  vector = [];
  Experimento_salto_Sr.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_salto_Sr.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_salto_Sr.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

s_T.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_salto_t, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_salto_t.style.pointerEvents = "auto";
    Experimento_salto_t.style.opacity = "100";
    Experimento_salto_t.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "SALTO HIDRÁULICO";
  });
});

img_Experimento_salto_t.addEventListener("click", () => {
  vector = [];
  Experimento_salto_t.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_salto_t.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_salto_t.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});



d_Dza.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_drenajes_dZa, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_drenajes_dZa.style.pointerEvents = "auto";
    Experimento_drenajes_dZa.style.opacity = "100";
    Experimento_drenajes_dZa.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "DONNAN";
  });
});

img_Experimento_drenajes_dZa.addEventListener("click", () => {
  vector = [];
  Experimento_drenajes_dZa.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_drenajes_dZa.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_drenajes_dZa.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});


d_Dte.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_drenajes_dTe, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_drenajes_dTe.style.pointerEvents = "auto";
    Experimento_drenajes_dTe.style.opacity = "100";
    Experimento_drenajes_dTe.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "DONNAN";
  });
});

img_Experimento_drenajes_dTe.addEventListener("click", () => {
  vector = [];
  Experimento_drenajes_dTe.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_drenajes_dTe.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_drenajes_dTe.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});





d_Dagan_sh.forEach(function (element) {
  element.addEventListener("click", () => {
    bridge(Experimento_drenajes_dagan_sh, i);
    cF_Off.style.pointerEvents = "none";
    cF_Off.style.animation = "moveFadeOut 0.7s forwards";
    cF_Off.style.opacity = "0";
    Experimento_drenajes_dagan_sh.style.pointerEvents = "auto";
    Experimento_drenajes_dagan_sh.style.opacity = "100";
    Experimento_drenajes_dagan_sh.style.animation = "moveFadeOut2 0.7s forwards";
    document.getElementById("encabe").textContent = "DAGAN";
  });
});



img_Experimento_drenajes_dagan_sh.addEventListener("click", () => {
  vector = [];
  Experimento_drenajes_dagan_sh.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = "moveFadeOut2 0.7s forwards";
  cF_Off.style.opacity = "100";
  Experimento_drenajes_dagan_sh.style.animation = "moveFadeOut 0.7s forwards";
  setTimeout(function () {
    Experimento_drenajes_dagan_sh.style.opacity = "0";
  }, 700);
  setTimeout(function () {
    document.getElementById("encabe").textContent = "LISTA DE CONTENIDO";
  }, 200);
});

//////////////////////////////////////////////////////////////////////////////
sp.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    image.style.opacity = "0";
    image_2.style.opacity = "0";
    image_3.style.opacity = "0";
    setTimeout(function () {
      image.style.visibility = "hidden";
      image_2.style.visibility = "hidden";
      image_3.style.visibility = "hidden";
      image_4.style.opacity = "1";
      image_4.style.visibility = "visible";
    }, 200);
  });
});
