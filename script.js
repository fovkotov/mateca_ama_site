const headings = [
    "Выстраиваем вдумчивую коммуникацию с клиентами",
    "Понимаем уникальность каждого клиента и его задачи",
    "Делаем все быстро, выгодно для клиента и надежно"
];

const subheadings = [
    "Думаем на шаг вперед",
    "Понимаем уникальность каждого клиента и его задачи",
    "Делаем все быстро, выгодно для клиента и надежно"
];

const texts = [
    "Постоянно обогащая знания о клиенте, предвосхищаем ожидания и отвечаем даже на те вопросы, которые еще не заданы",
    "Не используем скрипты, ведем клиента от начала до конца задачи только с индивидуальным подходом",
    "Оперативно находим решение, проверяем информацию и даем детальный ответ, включая стоимость предложений, доступных в открытых источниках — для сравнения с предложениями наших партнеров"
];

let currentStep = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const block2OffsetTop = document.getElementById('block-2').offsetTop;
    const distanceScrolled = scrollY - block2OffsetTop;

    const step = Math.min(Math.max(0, Math.floor(distanceScrolled / 600)), 2);

    if (step !== currentStep) {
        currentStep = step;
        updateContent(currentStep);
    }

    rotateTriangles(distanceScrolled);
});

function updateContent(step) {
    const subheadingElement = document.getElementById('subheading');
    const textElement = document.getElementById('text');
    const textContainer = document.querySelector('.text-container');

    subheadingElement.classList.add('fade');
    textElement.classList.add('fade');
    textContainer.classList.add('fade');

    setTimeout(() => {
        subheadingElement.textContent = subheadings[step];
        textElement.textContent = texts[step];

        subheadingElement.classList.remove('fade');
        textElement.classList.remove('fade');
        textContainer.classList.remove('fade');
        subheadingElement.classList.add('show');
        textElement.classList.add('show');
    }, 500);
}

function rotateTriangles(scrollPosition) {
    const maxRotation = 360;
    const rotationFactor = maxRotation / 1800;

    const triangle = document.querySelector('.triangle');
    const bigTriangleRotationX = (scrollPosition % 1800) * rotationFactor;
    const bigTriangleRotationZ = (scrollPosition % 1800) * rotationFactor;
    triangle.style.transform = `rotateX(230deg) rotateY(48deg) rotateZ(${bigTriangleRotationZ}deg)`;

    const smallTriangle = document.querySelector('.small-triangle');
    const smallTriangleRotationX = (scrollPosition % 1800) * rotationFactor;
    const smallTriangleRotationY = 2;
    const smallTriangleRotationZ = (scrollPosition % 1800) * rotationFactor;
    smallTriangle.style.transform = `rotateX(230deg) rotateY(48deg) rotateZ(${smallTriangleRotationZ}deg) translateX(-170px) translateY(-10px) translateZ(-114px) `;
}
