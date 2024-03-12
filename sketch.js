let bolinhas, gravidade, rest;
const cores = ["ff0000", "ff8700", "ffd300", "deff0a", "a1ff0a", "0aff99", "0aefff", "147df5", "580aff", "be0aff"];

function setup() {
    createCanvas(windowWidth, windowHeight - 4);

    ellipseMode(RADIUS);

    gravidade = 1;
    rest = 0.8;

    criaBolinhas();
}

function draw() {
    background(0);
    for (let i = 0; i < bolinhas.length; i++) {
        let bolinha = bolinhas[i];
        bolinha.move();
        bolinha.show();
    }
}

function mousePressed() {
    criaBolinhas();
}

function keyPressed() {
    if (keyCode === 32) {
        criaBolinhas();
    }
}

function criaBolinhas() {
    bolinhas = [];
    for (let i = 0; i < 100; i++) {
        let bola = new Bolinha(random(0, width), random(0, -height), random(10, 60), random(cores));
        bolinhas.push(bola);
    }
}