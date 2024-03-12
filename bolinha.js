class Bolinha {
    constructor(posX, posY, raio, cor) {
        this.x = posX;
        this.y = posY;
        this.r = raio;
        this.cor = color("#" + cor);
        this.dx = random(-4, 4);
        this.dy = 0;
    }
    show() {
        push();
        fill(this.cor);
        circle(this.x, this.y, this.r);
        pop();
    }
    move() {
        this.dy += gravidade;
        this.y += this.dy;
        this.x += this.dx;

        if (this.y + this.r > height) {
            this.y = height - this.r;
            this.dy *= -rest;
            this.dx *= rest;
        }

        if (this.x - this.r < 0) {
            this.x = this.r;
            this.dx = -this.dx;
        }

        if (this.x + this.r > width) {
            this.x = width - this.r;
            this.dx = -this.dx;
        }
    }
}