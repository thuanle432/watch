const tempLateLight = [
    {
        id: 0,
        barLighted: [1,2,4,5,6,7],
    },
    {
        id: 1,
        barLighted: [2,5],
    },
    {
        id: 2,
        barLighted: [1,2,3,6,7],
    },
    {
        id: 3,
        barLighted: [1,2,3,5,6],
    },
    {
        id: 4,
        barLighted: [2,3,4,5],
    },
    {
        id: 5,
        barLighted: [1,3,4,5,6],
    },
    {
        id: 6,
        barLighted: [1,3,4,5,6,7],
    },
    {
        id: 7,
        barLighted: [1,2,5],
    },
    {
        id: 8,
        barLighted: [1,2,3,4,5,6,7],
    },
    {
        id: 9,
        barLighted: [1,2,3,4,5,6],
    }
];

const lightOn =  (numberSlot, currentNumber) => {
    numberSlot = document.querySelectorAll(`${numberSlot} .bar `);


    numberSlot.forEach((bar) => {
        bar.classList.remove("light-on");
    });

    tempLateLight[currentNumber].barLighted.forEach((num) => {
        numberSlot[num - 1].classList.add("light-on");
    });
}

setInterval(() => {
    var now = new Date();
     
    var hour= now.getHours();
    var hourNum1 = Math.floor(hour / 10);
    var hourNum2 = hour % 10;

    var min= now.getMinutes();
    var minuteNum1 = Math.floor(min / 10);
    var minuteNum2 = min % 10;

    var sec= now.getSeconds();
    var secondNum1 = Math.floor(sec / 10);
    var secondNum2 = sec % 10;

    lightOn(".hour.num-1", hourNum1);
    lightOn(".hour.num-2", hourNum2);

    lightOn(".minute.num-1", minuteNum1);
    lightOn(".minute.num-2", minuteNum2);

    lightOn(".second.num-1", secondNum1);
    lightOn(".second.num-2", secondNum2);

}, 1000);