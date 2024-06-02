
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








