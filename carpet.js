const WIDTH = 600;
const HEIGHT = 600;

function setup() {
    canvas = document.getElementById("sierpinskiCanvas").getContext("2d");;
}

let x = WIDTH / 2;
let y = HEIGHT / 2;
let pt = [];

for (let vy = 0; vy <= 2; vy++) {
    for (let vx = 0; vx <= 2; vx++) {
        if (vx === 1 && vy === 1) continue;
        pt.push([vx * WIDTH / 2, vy * HEIGHT / 2]);
    }
}

function point(x,y,color)  {
    canvas.fillRect(x,y,1,1,color);
}

function draw() {
    point(x, y, 255);
    const rand = Math.floor(Math.random()*8);
    x = (x + 2*pt[rand][0]) / 3;
    y = (y + 2*pt[rand][1]) / 3;
}

window.onload = function() {
    setup();
    setInterval(draw,0);
}
