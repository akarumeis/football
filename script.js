let canTipe = Boolean(true);
gates.addEventListener("click", (event) => {
  // Достаём нужные материалы с html файла
  const game = document.querySelector(".game-field");
  const pointsHtml = document.querySelector(".points");
  const gates = document.querySelector("#gates").getBoundingClientRect();

  // Задаём плавность движений мяча
  ball.style.transition = 0.7 + "s";
  // Задаём задержку перед началом анимации
  ball.style.transitionDelay = 0.1 + "s";

  // Проверка можно ли манипулировать положением мяча
  if (canTipe === true) {
    // Расчёт координат нажатия по X-оси
    let xCor = event.clientX - (window.innerWidth - game.clientWidth + 50) / 2;
    // Расчёт координат нажатия по Y-оси
    let yCor = event.clientY - (window.innerHeight - game.clientHeight + 20) / 2;
    // Изменяем координаты мяча на координати нажатия по X-оси
    ball.style.left = xCor + "px";
    // Изменяем координаты мяча на координати нажатия по Y-оси
    ball.style.top = yCor + "px";

    // Проверка положения мяча относительно нижней границы игрового поля
    if (yCor > 343) {
      ball.style.top = 343 + "px";
    }
    // Проверка положения мяча относительно верхней границы игрового поля
    else if (yCor < 0) {
      ball.style.top = 0 + "px";
    }

    // Проверка положения мяча относительно правой границы игрового поля
    if (xCor > 420) {
      ball.style.left = 423 + "px";
    }
    // Проверка положения мяча относительно левой границы игрового поля
    else if (xCor < 0) {
      ball.style.left = 0 + "px";
    }

    // Проверка положения мяча относительно ворот
    if (yCor < gates.height * 0.7 && xCor > 20) {
      if (yCor > 20 && xCor < 400) {
        // Начисление очка за попадание в ворота
        pointsHtml.innerHTML = parseInt(pointsHtml.innerHTML) + 1;
        // Проверка попадания в верхний левый угол ворот
        if (yCor > 20 && xCor < 70) {
          if (yCor < 70 && xCor > 20) {
            // Начисление очка за попадание в ворота
            pointsHtml.innerHTML = parseInt(pointsHtml.innerHTML) + 1;
          }
        }
        // Проверка попадания в верхний правый угол ворот
        else if (yCor > 20 && xCor < game.clientWidth - 20) {
          if (yCor < 70 && xCor > game.clientWidth - 90) {
            // Начисление очка за попадание в ворота
            pointsHtml.innerHTML = parseInt(pointsHtml.innerHTML) + 1;
          }
        }
      }
    }
    // Изменяем значение переменной, которая отвечает за то, что можно ли использовать мяч
    canTipe = false;
  }

  // Задаём задержку на срабатывание функции
  setTimeout(() => {
    // Возвращаем мяч в стартовую точку по X-оси
    ball.style.left = game.clientWidth / 2 - 20;
    // Возвращаем мяч в стартовую точку по Y-оси
    ball.style.top = game.clientHeight / 1.2 + "px";
    // Изменяем значение переменной, которая отвечает за то, что можно ли использовать мяч
    canTipe = true;
  }, 1000 /*Значение задержии*/);
});
