const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");

let spinning = false;
let currentRotation = 0;

// подключение шрифта Font Awesome
(function() {
  var css = document.createElement('link');
  css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);
})();


function spinWheel() {
  if (spinning) return;
  spinning = true;
  const spinAngle = 360 * 5 + Math.floor(Math.random() * 360);
  const totalRotation = currentRotation + spinAngle;
  const tl = gsap.timeline({
    onComplete: () => {
        document.querySelector('.Block_prize').style.display = 'flex';
        var text_prize = document.getElementById('prize')
        text_prize.innerHTML = 'Вы выиграли! <br>Что бы получить приз, сделайте скрин и отправьте его в WhatsApp';
    },
  });
  tl.to(wheel, {
    duration: 6, // длительность анимации в секундах
    ease: "power4.out", // функция ускорения/замедления
    rotation: totalRotation + 360 * 3, // общее количество оборотов колеса (здесь - 5)
    onComplete: () => {
      currentRotation = totalRotation;
    },
  });
}







