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
    document.getElementById('subheading').textContent = subheadings[step];
    document.getElementById('text').textContent = texts[step];
}

function rotateTriangle(scrollPosition) {
    const maxRotation = 360;
    const rotationAngle = (scrollPosition % 1800) * (maxRotation / 1800); // Учитываем увеличенный шаг скролла
    const triangle = document.querySelector('.triangle');
    triangle.style.transform = `rotateX(${rotationAngle / 1}deg) rotateZ(${rotationAngle / 3}deg) rotateY(28deg)`; // Сохраняем наклон по Z
}


// const headings = [
//     "Выстраиваем вдумчивую коммуникацию с клиентами",
//     "Понимаем уникальность каждого клиента и его задачи",
//     "Делаем все быстро, выгодно для клиента и надежно"
// ];

// const subheadings = [
//     "Думаем на шаг вперед",
//     "Не используем скрипты, ведем клиента с индивидуальным подходом",
//     "Оперативно находим решение и даем детальный ответ"
// ];

// const texts = [
//     "Постоянно обогащая знания о клиенте, предвосхищаем ожидания и отвечаем даже на те вопросы, которые еще не заданы",
//     "Не используем скрипты, ведем клиента от начала до конца задачи только с индивидуальным подходом",
//     "Оперативно находим решение, проверяем информацию и даем детальный ответ, включая стоимость предложений"
// ];

// let currentStep = 0;

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const block2OffsetTop = document.getElementById('block-2').offsetTop;
//     const distanceScrolled = scrollY - block2OffsetTop;

//     const step = Math.min(Math.max(0, Math.floor(distanceScrolled / 600)), 2); // Теперь скроллим на 600px

//     if (step !== currentStep) {
//         currentStep = step;
//         updateContent(currentStep);
//     }

//     rotateTriangle(distanceScrolled);
// });

// function updateContent(step) {
//     document.getElementById('heading').textContent = headings[step];
//     document.getElementById('subheading').textContent = subheadings[step];
//     document.getElementById('text').textContent = texts[step];
// }

// function rotateTriangle(scrollPosition) {
//     const maxRotation = 360;
//     const rotationAngle = (scrollPosition % 1800) * (maxRotation / 1800); // Учитываем увеличенный шаг скролла
//     const triangle = document.querySelector('.triangle');
//     triangle.style.transform = `rotateX(${rotationAngle / 3}deg) rotateY(28deg)`; // Сохраняем наклон по Z
// }
