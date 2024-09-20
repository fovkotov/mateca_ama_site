const headings = [
    "Выстраиваем вдумчивую коммуникацию с клиентами",
    "Понимаем уникальность каждого клиента и его задачи",
    "Делаем все быстро, выгодно для клиента и надежно"
];

const subheadings = [
    "Думаем на шаг вперед",
    "Не используем скрипты, ведем клиента с индивидуальным подходом",
    "Оперативно находим решение и даем детальный ответ"
];

const texts = [
    "Постоянно обогащая знания о клиенте, предвосхищаем ожидания и отвечаем даже на те вопросы, которые еще не заданы",
    "Не используем скрипты, ведем клиента от начала до конца задачи только с индивидуальным подходом",
    "Оперативно находим решение, проверяем информацию и даем детальный ответ, включая стоимость предложений"
];

let currentStep = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const block2OffsetTop = document.getElementById('block-2').offsetTop;
    const distanceScrolled = scrollY - block2OffsetTop;

    const step = Math.min(Math.max(0, Math.floor(distanceScrolled / 600)), 2); // Скроллим на 600px

    if (step !== currentStep) {
        currentStep = step;
        updateContent(currentStep);
    }

    rotateTriangle(distanceScrolled);
});

function updateContent(step) {
    const subheadingElement = document.getElementById('subheading');
    const textElement = document.getElementById('text');
    const textContainer = document.querySelector('.text-container');

    // Применяем класс fade для анимации
    subheadingElement.classList.add('fade');
    textElement.classList.add('fade');
    textContainer.classList.add('fade'); // Добавляем fade для текст-контейнера

    // Ждём завершения перехода, затем меняем текст
    setTimeout(() => {
        subheadingElement.textContent = subheadings[step];
        textElement.textContent = texts[step];

        // Убираем класс fade и добавляем show для следующего перехода
        subheadingElement.classList.remove('fade');
        textElement.classList.remove('fade');
        textContainer.classList.remove('fade'); // Убираем fade у текст-контейнера
        subheadingElement.classList.add('show'); // Появление с анимацией
        textElement.classList.add('show'); // Появление с анимацией
    }, 500); // Задержка равна времени анимации
}


function rotateTriangle(scrollPosition) {
    const maxRotation = 360; // Максимальный угол вращения
    // const rotationAngleX = (scrollPosition % 1800) * (maxRotation / 1800); // Вращение по X
    const rotationAngleY = (scrollPosition % 1800) * (maxRotation / 1800); // Вращение по X
    const rotationAngleZ = (scrollPosition % 1800) * (maxRotation / 1800); // Вращение по Z
    const triangle = document.querySelector('.triangle');
    triangle.style.transform = `rotateX(135deg) rotateY(${320 + rotationAngleY / 10}deg) rotateZ(${rotationAngleZ / 2}deg)`; // Вращение по Z
}