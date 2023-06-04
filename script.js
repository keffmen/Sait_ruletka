const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spin-button");
// Получаем ссылки на счетчик и кнопку
var counterElement = document.getElementById("counter");

let spinning = false;
let currentRotation = 0;

// Проверяем, есть ли сохраненное значение в localStorage
var count = localStorage.getItem("counterValue");
// Если значение есть, преобразуем его в число. В противном случае, устанавливаем значение по умолчанию (0).
count = count ? parseInt(count) : 0;

// подключение шрифта Font Awesome
(function() {
  var css = document.createElement('link');
  css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);
})();

// Функция для обновления значения счетчика и сохранения его в localStorage
function updateCounter() {
  counterElement.textContent = count;
  localStorage.setItem("counterValue", count);
}

function spinWheel() {
  if (spinning) return;
  spinning = true;
  const spinAngle = 360 * 5 + Math.floor(Math.random() * 360);
  const totalRotation = currentRotation + spinAngle;
  const tl = gsap.timeline({
    onComplete: () => {
        count++; // Увеличиваем значение счетчика на 1
        updateCounter(); // Обновляем значение счетчика на странице и сохраняем его в localStorage
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


// Обновляем значение счетчика на странице
updateCounter();





