(function () {

    'use strict';

    class Follower {
        constructor() {
            this.d = 20;
            this.l = 30;
            this.a = 5;
            this.x = 17;
            this.y = 170;
            this.alf = 85*Math.PI/180;
            this.states = [null, null, null, null, null];
            this.rPower = 0.1;
            this.lPower = 0.1;
            this.powerToSpeed = 5;
            this.lastTurns = [...Array(100)].map(() => 0);
        }

        control(i) {
            // console.log(i, this.states);
            const Kp = 0.1;

            const sum = this.states.reduce((a,b) => a+b)/100;
            const err = this.states.map((s,i) => s * ( i - 2 )).reduce((a,b) => a+b)/100;
            const dP = Kp * err;
            // console.log("dp", dP);

            this.lastTurns.shift();
            this.lastTurns.push(dP);

            if( sum <= 0 || sum >= 5 ) { // if no reading
                // console.log("CRITIC", this.lastTurns.reduce((a, b) => a + b));
                this.lPower = 0.2 * Math.sign(this.lastTurns.reduce((a,b) => a+b));
                this.rPower = - 0.2 * Math.sign(this.lastTurns.reduce((a,b) => a+b));
            } else {
                this.lPower = 0.1 + dP;
                this.rPower = 0.1 - dP;
            }
        }

        read(ctx) {
            this.states = this.states.map((s, i) =>
                ctx.getImageData(...this.rotate(this.x+this.l, this.y+this.a*(i-2)), 1, 1).data[3]
            );
            // console.log(this.states);

            return this.states;
        }

        move() {
            // translate
            const moveSpeed = this.powerToSpeed * ( this.lPower + this.rPower ) / 2;
            [ this.x, this.y ] = [ this.x + Math.cos(this.alf) * moveSpeed, this.y - Math.sin(this.alf) * moveSpeed ];
            // rotate

            const rotateSpeed = this.powerToSpeed * ( this.rPower - this.lPower ) / this.d;
            this.alf += rotateSpeed;
        }

        rotate(x,y) {
            // console.log("IN",x,y);
            x -= this.x; y -= this.y;
            [x,y] = [Math.cos(this.alf) * x + Math.sin(this.alf) * y, - Math.sin(this.alf) * x + Math.cos(this.alf) * y ];
            x += this.x; y += this.y;
            // console.log("Out",x,y);
            return [x,y];
        }

        draw(ctx) {
            ctx.lineWidth = 1;
            ctx.beginPath();

            // axis
            ctx.moveTo(...this.rotate(this.x , this.y-this.d/2));
            ctx.lineTo(...this.rotate(this.x, this.y+this.d/2));
            ctx.closePath();

            // wheels
            ctx.moveTo(...this.rotate(this.x-5, this.y-this.d/2));
            ctx.lineTo(...this.rotate(this.x+5, this.y-this.d/2));
            ctx.closePath();
            ctx.moveTo(...this.rotate(this.x-5, this.y+this.d/2));
            ctx.lineTo(...this.rotate(this.x+5, this.y+this.d/2));
            ctx.closePath();

            // core
            ctx.moveTo(...this.rotate(this.x, this.y));
            ctx.lineTo(...this.rotate(this.x+this.l, this.y));
            ctx.closePath();

            // front
            ctx.moveTo(...this.rotate(this.x+this.l, this.y-2*this.a));
            ctx.lineTo(...this.rotate(this.x+this.l, this.y+2*this.a));
            ctx.closePath();

            // detectores
            for(let i = 0; i < 5; i++) {
                ctx.moveTo(...this.rotate(this.x+this.l, this.y+this.a*(i-2)));
                ctx.lineTo(...this.rotate(this.x+this.l+5, this.y+this.a*(i-2)));
                ctx.closePath();
            }

            ctx.stroke();

        }

    }

    class FollowerMap {
        constructor() {
            this.i = 0;
            this.stop = true;

            this.follower = new Follower();

            this.canvas = document.getElementById('follower-map');
            this.ctx = this.canvas.getContext('2d');

            this.img = new Image();
            this.img.onload = () => {
                window.requestAnimationFrame(this.draw.bind(this));
            };
            this.img.src = "/data/final.png";

            window.follower = this.follower;

            document.addEventListener('keyup', (event) => {
                if(event.key === " ") {
                    this.stop = !this.stop;
                    if(!this.stop) window.requestAnimationFrame(this.draw.bind(this));
                }
            })
        }

        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

            this.ctx.drawImage(this.img, 0, 0);
            this.follower.read(this.ctx);
            this.follower.draw(this.ctx);
            this.follower.control(this.i++);
            this.follower.move();

            if(!this.stop) window.requestAnimationFrame(this.draw.bind(this));
        }

        start() {
            this.stop = false;
            window.requestAnimationFrame(this.draw.bind(this));
        }
    }

    (new FollowerMap())
        // .start();

})();
