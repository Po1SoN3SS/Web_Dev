alert(alert(1) || 2 || alert(3));
// alert(1) печатает 1, возвращает undefined
// undefined как false, OR идет дальше. 2 подходит.
// alert(2) печатает 2, всего "1" и "2"