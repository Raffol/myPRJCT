// Функция для проверки видимости элемента
var Visible = function (target) {
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        console.clear();
        console.log('Вы видите элемент :)');
    } else {
        console.clear();
    }
};

// Функция для проверки видимости всех элементов
var checkAllElementsVisibility = function() {
    var elements = document.querySelectorAll('.container__exp, .projects, .exp, .about__briefly, .career, .experience');
    elements.forEach(function(element) {
        Visible(element);
    });
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', checkAllElementsVisibility);

// А также запустим функцию сразу
checkAllElementsVisibility();