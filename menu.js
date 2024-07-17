
const ocult = document.getElementById('bs');
const c2 = document.getElementById('c2');
const image = document.getElementById('image');
const image_2 = document.getElementById('image-2');
const image_3 = document.getElementById('image-3');
const image_4 = document.getElementById('image-4');
const tn = document.getElementById('Tn');
const str = document.getElementById('Str');
const sp = document.getElementById('Sp');
const sl = document.getElementById('Sl');
const dt = document.getElementById('Dt');
const br = document.getElementById('Br');
const ig = document.getElementById('Ig');
const sc = document.getElementById('Sc');
const t_str = document.getElementById('t_str');
const t_Sc = document.getElementById('t_Sc');
const s_Sr = document.getElementById('s_Sr');
const cF_Off = document.getElementById('contenedorFinal');
const Experimento_Str = document.getElementById('Experimento_Str');
const Experimento_Sp = document.getElementById('Experimento_Sp');
const Experimento_Dt = document.getElementById('Experimento_Dt');
const Experimento_Br = document.getElementById('Experimento_Br');
const Experimento_Ig = document.getElementById('Experimento_Ig');
const Experimento_Sc = document.getElementById('Experimento_Sc');
const Experimento_tirante_str = document.getElementById('Experimento_tirante_str');
const Experimento_tirante_Sc = document.getElementById('Experimento_tirante_Sc');
const Experimento_salto_Sr = document.getElementById('Experimento_salto_Sr');
const img_Experimento_Str = document.getElementById('img_Experimento_Str');
const img_Experimento_Sp = document.getElementById('img_Experimento_Sp');
const img_Experimento_Dt = document.getElementById('img_Experimento_Dt');
const img2_Experimento_Dt = document.getElementById('img2_Experimento_Dt');
const img3_Experimento_Dt = document.getElementById('img3_Experimento_Dt');
const img_Experimento_Br = document.getElementById('img_Experimento_Br');
const img2_Experimento_Br = document.getElementById('img2_Experimento_Br');
const img3_Experimento_Br = document.getElementById('img3_Experimento_Br');
const img_Experimento_Ig = document.getElementById('img_Experimento_Ig');
const img2_Experimento_Ig = document.getElementById('img2_Experimento_Ig');
const img3_Experimento_Ig = document.getElementById('img3_Experimento_Ig');
const img_Experimento_Sc = document.getElementById('img_Experimento_Sc');
const img_Experimento_tirante_str = document.getElementById('img_Experimento_tirante_str');
const img_Experimento_tirante_Sc = document.getElementById('img_Experimento_tirante_Sc');
const img_Experimento_salto_Sr = document.getElementById('img_Experimento_salto_Sr');


ocult.addEventListener('click', () => {
  ocult.style.visibility = 'hidden';
  document.getElementById('conte').style.left = '0';
  setTimeout(() => {
    c2.style.visibility = 'visible';
  }, 150);
})
document.getElementById('id_x').addEventListener('click', () => {
  document.getElementById('conte').style.left = '-450px';
  c2.style.visibility = 'hidden';
  setTimeout(() => {
    ocult.style.visibility = 'visible'
  }, 150);
})

sl.addEventListener('mouseover', function () {
  image_2.style.opacity = '0';
  image_3.style.opacity = '0';
  image_4.style.opacity = '0';
  setTimeout(function () {
    image_2.style.visibility = 'hidden';
    image_3.style.visibility = 'hidden';
    image_4.style.visibility = 'hidden';
    image.style.opacity = '1';
    image.style.visibility = 'visible';
  }, 200);
});

tn.addEventListener('mouseover', function () {
  image.style.opacity = '0';
  image_3.style.opacity = '0';
  image_4.style.opacity = '0';
  setTimeout(function () {
    image.style.visibility = 'hidden';
    image_3.style.visibility = 'hidden';
    image_3.style.visibility = 'hidden';
    image_2.style.opacity = '1';
    image_2.style.visibility = 'visible';
  }, 200);
});

str.addEventListener('mouseover', function () {
  image.style.opacity = '0';
  image_2.style.opacity = '0';
  image_4.style.opacity = '0';
  setTimeout(function () {
    image.style.visibility = 'hidden';
    image_2.style.visibility = 'hidden';
    image_4.style.visibility = 'hidden';
    image_3.style.opacity = '1';
    image_3.style.visibility = 'visible';
  }, 200);
});




/////////////////////////////////////////////////////////////////////////

str.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Str.style.pointerEvents = "auto";
  Experimento_Str.style.opacity = '100';
  Experimento_Str.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'TIRANTE NORMAL';
})



img_Experimento_Str.addEventListener('click', () => {
  Experimento_Str.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Str.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_Str.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})


sp.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Sp.style.pointerEvents = "auto";
  Experimento_Sp.style.opacity = '100';
  Experimento_Sp.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'TIRANTE NORMAL';
})



img_Experimento_Sp.addEventListener('click', () => {
  Experimento_Sp.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Sp.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_Sp.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})


dt.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Dt.style.pointerEvents = "auto";
  Experimento_Dt.style.opacity = '100';
  Experimento_Dt.style.animation = 'moveFadeOut2 0.7s forwards';
  setTimeout(function () {
    img_Experimento_Dt.style.opacity = '100';
    img2_Experimento_Dt.style.opacity = '100';
    img3_Experimento_Dt.style.opacity = '100';
    img_Experimento_Dt.style.pointerEvents = "auto";
  }, 500);
  document.getElementById('encabe').textContent = 'REMANSO';
})


img_Experimento_Dt.addEventListener('click', () => {
  img_Experimento_Dt.style.opacity = '0';
  img2_Experimento_Dt.style.opacity = '0';
  img3_Experimento_Dt.style.opacity = '0';
  Experimento_Dt.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Dt.style.animation = 'moveFadeOut 0.7s forwards';
  img_Experimento_Dt.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Dt.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})



br.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Br.style.pointerEvents = "auto";
  Experimento_Br.style.opacity = '100';
  Experimento_Br.style.animation = 'moveFadeOut2 0.7s forwards';
  setTimeout(function () {
    img_Experimento_Br.style.opacity = '100';
    img2_Experimento_Br.style.opacity = '100';
    img3_Experimento_Br.style.opacity = '100';
    img_Experimento_Br.style.pointerEvents = "auto";
  }, 500);
  document.getElementById('encabe').textContent = 'REMANSO';
})



img_Experimento_Br.addEventListener('click', () => {
  img_Experimento_Br.style.opacity = '0';
  img2_Experimento_Br.style.opacity = '0';
  img3_Experimento_Br.style.opacity = '0';
  Experimento_Br.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Br.style.animation = 'moveFadeOut 0.7s forwards';
  img_Experimento_Br.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Br.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})





ig.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Ig.style.pointerEvents = "auto";
  Experimento_Ig.style.opacity = '100';
  Experimento_Ig.style.animation = 'moveFadeOut2 0.7s forwards';
  setTimeout(function () {
    img_Experimento_Ig.style.opacity = '100';
    img2_Experimento_Ig.style.opacity = '100';
    img3_Experimento_Ig.style.opacity = '100';
    img_Experimento_Ig.style.pointerEvents = "auto";
  }, 500);
  document.getElementById('encabe').textContent = 'REMANSO';
})

img_Experimento_Ig.addEventListener('click', () => {
  img_Experimento_Ig.style.opacity = '0';
  img2_Experimento_Ig.style.opacity = '0';
  img3_Experimento_Ig.style.opacity = '0';
  Experimento_Ig.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Ig.style.animation = 'moveFadeOut 0.7s forwards';
  img_Experimento_Ig.style.pointerEvents = "none";
  setTimeout(function () {
    Experimento_Ig.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})



sc.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_Sc.style.pointerEvents = "auto";
  Experimento_Sc.style.opacity = '100';
  Experimento_Sc.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'TIRANTE NORMAL';
})

img_Experimento_Sc.addEventListener('click', () => {
  Experimento_Sc.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_Sc.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_Sc.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})

t_str.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_tirante_str.style.pointerEvents = "auto";
  Experimento_tirante_str.style.opacity = '100';
  Experimento_tirante_str.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'TIRANTE CRÍTICO';
})

img_Experimento_tirante_str.addEventListener('click', () => {
  Experimento_tirante_str.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_tirante_str.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_tirante_str.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})

t_Sc.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_tirante_Sc.style.pointerEvents = "auto";
  Experimento_tirante_Sc.style.opacity = '100';
  Experimento_tirante_Sc.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'TIRANTE CRÍTICO';
})

img_Experimento_tirante_Sc.addEventListener('click', () => {
  Experimento_tirante_Sc.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_tirante_Sc.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_tirante_Sc.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})

s_Sr.addEventListener('click', () => {
  cF_Off.style.pointerEvents = "none";
  cF_Off.style.animation = 'moveFadeOut 0.7s forwards';
  cF_Off.style.opacity = '0';
  Experimento_salto_Sr.style.pointerEvents = "auto";
  Experimento_salto_Sr.style.opacity = '100';
  Experimento_salto_Sr.style.animation = 'moveFadeOut2 0.7s forwards';
  document.getElementById('encabe').textContent = 'SALTO HIDRÁULICO';
})

img_Experimento_salto_Sr.addEventListener('click', () => {
  Experimento_salto_Sr.style.pointerEvents = "none";
  cF_Off.style.pointerEvents = "auto";
  cF_Off.style.animation = 'moveFadeOut2 0.7s forwards';
  cF_Off.style.opacity = '100';
  Experimento_salto_Sr.style.animation = 'moveFadeOut 0.7s forwards';
  setTimeout(function () {
    Experimento_salto_Sr.style.opacity = '0';
  }, 700);
  setTimeout(function () {
    document.getElementById('encabe').textContent = 'LISTA DE CONTENIDO';
  }, 200);
})





//////////////////////////////////////////////////////////////////////////////








sp.addEventListener('mouseover', function () {
  image.style.opacity = '0';
  image_2.style.opacity = '0';
  image_3.style.opacity = '0';
  setTimeout(function () {
    image.style.visibility = 'hidden';
    image_2.style.visibility = 'hidden';
    image_3.style.visibility = 'hidden';
    image_4.style.opacity = '1';
    image_4.style.visibility = 'visible';
  }, 200);
});












