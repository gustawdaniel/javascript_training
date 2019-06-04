(function () {

    'use strict';

    class Follower {
        constructor() {
            this.d = 74;// wheels distance
            this.l = 48; // from wheels center to circle center
            this.isSpecialControlled = false;
            this.specialDirection = null;  // +1 right, -1 left
            this.specialTurnnsToBackToNormal = null;
            this.isDisconnected = false;
            // this.a = 5; depreciated
            this.r = 17.7; // radius

            // start position
            this.x = 113; // x position of center between wheels
            this.y = 270; // y -||-
            this.alf = 85*Math.PI/180;

            this.states = [...Array(8)].map(()=> 0);
            this.rPower = 0.1;
            this.lPower = 0.1;
            this.powerToSpeed = 5;
            this.lastTurns = [...Array(100)].map(() => 0);
        }

        detectDisconnection() {
            let peaks = 0;
            for( let i=0; i<this.states.length; i++)
            {
                while(i<this.states.length && this.states[i] === 0)i++;

                while(i<this.states.length && this.states[i] !== 0)i++;

                if(this.states[i-1] !== 0) peaks++;
            }

            if (peaks >= 3) {
                 throw Error("STOP, more than 2 peaks" + this.states.join(","));
            }

            if (peaks <= 0) {
                  throw Error("STOP, less than 1 peak" + this.states.join(","));
            }

            this.isDisconnected = peaks >= 2;
        }

        removeDisconnectedPeak() {

	    if(this.lastTurns[ this.lastTurns.length-1 ] > 0) // last turn was to right, so we should ignore left block(we assume there are 2 blocks)  
	    {
		let i=0;
		while(i<this.states.length && this.states[i] === 0) i++;

		while(i<this.states.length && this.states[i] !== 0)
		{
		    this.states[i] = 0;
		    i++;
		}
            }
	    else
            {
		let i = 7;
		    
		while(i<this.states.length && this.states[i] === 0) i--;

		while(i<this.states.length && this.states[i] !== 0)
		{
		    this.states[i] = 0;
		    i--;
		}
	    }
        }

        checkIfWeShouldAndSwitchToSpecialControl() {
            if(this.states[1] >= 50) {

                this.isSpecialControlled = true;
                this.specialDirection = -1; // left

            } else if(this.states[6] >= 50) {

                this.isSpecialControlled = true;
                this.specialDirection = 1; // right
                this.specialTurnnsToBackToNormal = 50;

            }
        }

        checkIfWeShouldCloseSpecialControlAndClose()
        {
            this.specialTurnnsToBackToNormal--;

            if(this.specialTurnnsToBackToNormal <= 0) {

                this.specialDirection = null;
                this.isSpecialControlled = false;
                this.specialTurnnsToBackToNormal = 50;

            }
        }

        control(i) {
            console.log(i, this.states);
            const Kp = 0.1;

	    // connection check should be done before calculating dp 
            this.detectDisconnection();
            if(this.isDisconnected) {
                console.log("last turn", this.lastTurns[ this.lastTurns.length-1 ]);
                this.removeDisconnectedPeak();
                console.log("DISCONNECTED, processed states", this.states);
            }

            const sum = this.states.reduce((a,b) => a+b)/100;
            const err = this.states.map((s,i) => s * ( i - 3.5 )).reduce((a,b) => a+b)/100;
	    
	    const integral = this.lastTurns.reduce((a,b) => a+b);
	    const Ki = 0.05;

	    console.log("integral: ", integral);

            const dP = (Kp * err); // + (Ki * integral);
            console.log("dp", dP, "sum", sum);

            this.lastTurns.shift();
            this.lastTurns.push(dP);

            // this.checkIfWeShouldAndSwitchToSpecialControl();

            if( this.isSpecialControlled ) { // if no reading
                console.log("CRITIC", i);
                this.lPower = 0.2 * Math.sign(this.specialDirection);
                this.rPower = - 0.2 * Math.sign(this.specialDirection);

               // this.checkIfWeShouldCloseSpecialControlAndClose();

            } else {
                this.lPower = 0.1 + dP;
                this.rPower = 0.1 - dP;
            }
        }

        read(ctx) {
            this.states = this.states.map((s, i) => {
                    const phi = Math.PI / 7 * (7 - i);
                    return ctx.getImageData(
                        ...this.rotate(this.x + this.l + this.r * Math.sin(phi), this.y + this.r * Math.cos(phi)),
                        1,
                        1
                    ).data[3];
                }
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
            ctx.moveTo(...this.rotate(this.x-10, this.y-this.d/2));
            ctx.lineTo(...this.rotate(this.x+10, this.y-this.d/2));
            ctx.closePath();
            ctx.moveTo(...this.rotate(this.x-10, this.y+this.d/2));
            ctx.lineTo(...this.rotate(this.x+10, this.y+this.d/2));
            ctx.closePath();

            // core
            ctx.moveTo(...this.rotate(this.x, this.y));
            ctx.lineTo(...this.rotate(this.x+this.l, this.y));
            ctx.closePath();

            // front circle
            ctx.moveTo(...this.rotate(this.x+this.l, this.y));
            ctx.arc(...this.rotate(this.x+this.l, this.y), this.r, 0+this.alf, Math.PI+this.alf, true); // bug here
            ctx.closePath();

            // detectors
            for(let i = 0; i < 8; i++) {
                const phi = Math.PI / 7 * i;
                ctx.moveTo(...this.rotate(this.x+this.l+this.r*Math.sin(phi), this.y+this.r*Math.cos(phi)));
                ctx.lineTo(...this.rotate(this.x+this.l+(1.3*this.r)*Math.sin(phi), this.y+(1.3*this.r)*Math.cos(phi)));
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
            this.img.src = "/data/framed_final.png";

            window.follower = this.follower;

            document.addEventListener('keyup', (event) => {
                if(event.key === "s") {
                    this.stop = !this.stop;
                    console.log("STOP", this.stop);
                    if(!this.stop) window.requestAnimationFrame(this.draw.bind(this));
                }
            })
        }

        draw() {
            console.log("DRAW", window.requestAnimationFrame);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

            this.ctx.drawImage(this.img, 0, 0);
            this.follower.read(this.ctx);
            this.follower.draw(this.ctx);
            this.follower.control(this.i++);
            this.follower.move();

            // this.stop = true;

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
