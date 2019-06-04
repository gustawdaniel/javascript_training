(function () {

    'use strict';

    class Follower {
        constructor(control) {
            this.d = 74;// wheels distance
            this.l = 48; // from wheels center to circle center
            this.isSpecialControlled = false;
            this.specialDirection = null;  // +1 right, -1 left
            this.specialTurnnsToBackToNormal = null;
            this.isDisconnected = false;
            this.disconnectionCancelled = true;

            this.currentMode = "normal"; // possible: normal, outMove, outTurn
            this.currentModeCounter = 0;
            // this.a = 5; depreciated
            this.r = 17.7; // radius

            // start position
            this.x = 113; // x position of center between wheels
            this.y = 270; // y -||-
            this.alf = 85 * Math.PI / 180;

            this.states = (new Array(8)).fill(0);
            this.statesHistory = (new Array(100)).fill((new Array(8)).fill(0));
            this.errHistory = (new Array(100)).fill(0);
            this.rPower = 0.1;
            this.lPower = 0.1;
            this.powerToSpeed = 5;
            this.lastTurns = (new Array(100)).fill(0);

            this.control = control; // externalisation of control
            this.logger = new Logger();
        }

        detectDisconnection() {
            let peaks = Helper.countPeaks(this.states);

            if (peaks >= 3) {
                // throw Error("STOP, more than 2 peaks" + this.states.join(","));
                // it is normal...
            }

            if (peaks <= 0) {
                // throw Error("STOP, less than 1 peak" + this.states.join(","));
                //it is normal too...
            }

            this.isDisconnected = peaks >= 2;
        }

        removeDisconnectedPeak() {

            if (this.lastTurns[this.lastTurns.length - 1] > 0) // last turn was to right, so we should ignore left block(we assume there are 2 blocks)
            {
                let i = 0;
                while (i < this.states.length && this.states[i] === 0) i++;

                while (i < this.states.length && this.states[i] !== 0) {
                    this.states[i] = 0;
                    i++;
                }
            } else {
                let i = 7;

                while (i < this.states.length && this.states[i] === 0) i--;

                while (i < this.states.length && this.states[i] !== 0) {
                    this.states[i] = 0;
                    i--;
                }
            }
        }

        checkIfWeShouldAndSwitchToSpecialControl() {
            if (this.states[1] >= 50) {

                this.isSpecialControlled = true;
                this.specialDirection = -1; // left

            } else if (this.states[6] >= 50) {

                this.isSpecialControlled = true;
                this.specialDirection = 1; // right
                this.specialTurnnsToBackToNormal = 50;

            }
        }

        checkIfWeShouldCloseSpecialControlAndClose() {
            this.specialTurnnsToBackToNormal--;

            if (this.specialTurnnsToBackToNormal <= 0) {

                this.specialDirection = null;
                this.isSpecialControlled = false;
                this.specialTurnnsToBackToNormal = 50;

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

        rememberNewAndForgetLastState() {
            this.statesHistory.shift();
            this.statesHistory.push(this.states);
        }

        rememberNewAndForgetLastError(err) {
            this.errHistory.shift();
            this.errHistory.push(err);
        }

        rememberNewAndForgetLastTurn(dOmega) {
            this.lastTurns.shift();
            this.lastTurns.push(dOmega);
        }

        setPower(move, dOmega) {
            this.lPower = move + dOmega;
            this.rPower = move - dOmega;
        }

        move() {
            // translate
            const moveSpeed = this.powerToSpeed * (this.lPower + this.rPower) / 2;
            [this.x, this.y] = [this.x + Math.cos(this.alf) * moveSpeed, this.y - Math.sin(this.alf) * moveSpeed];
            // rotate

            const rotateSpeed = this.powerToSpeed * (this.rPower - this.lPower) / this.d;
            this.alf += rotateSpeed;
        }

        rotate(x, y) {
            // console.log("IN",x,y);
            x -= this.x;
            y -= this.y;
            [x, y] = [Math.cos(this.alf) * x + Math.sin(this.alf) * y, -Math.sin(this.alf) * x + Math.cos(this.alf) * y];
            x += this.x;
            y += this.y;
            // console.log("Out",x,y);
            return [x, y];
        }

        draw(ctx) {
            ctx.lineWidth = 1;
            ctx.beginPath();

            // axis
            ctx.moveTo(...this.rotate(this.x, this.y - this.d / 2));
            ctx.lineTo(...this.rotate(this.x, this.y + this.d / 2));
            ctx.closePath();

            // wheels
            ctx.moveTo(...this.rotate(this.x - 10, this.y - this.d / 2));
            ctx.lineTo(...this.rotate(this.x + 10, this.y - this.d / 2));
            ctx.closePath();
            ctx.moveTo(...this.rotate(this.x - 10, this.y + this.d / 2));
            ctx.lineTo(...this.rotate(this.x + 10, this.y + this.d / 2));
            ctx.closePath();

            // core
            ctx.moveTo(...this.rotate(this.x, this.y));
            ctx.lineTo(...this.rotate(this.x + this.l, this.y));
            ctx.closePath();

            // front circle
            ctx.moveTo(...this.rotate(this.x + this.l, this.y));
            ctx.arc(...this.rotate(this.x + this.l, this.y), this.r, Math.PI / 2 - this.alf, -Math.PI / 2 - this.alf, true); // bug here
            ctx.closePath();

            // detectors
            for (let i = 0; i < 8; i++) {
                const phi = Math.PI / 7 * i;
                ctx.moveTo(...this.rotate(this.x + this.l + this.r * Math.sin(phi), this.y + this.r * Math.cos(phi)));
                ctx.lineTo(...this.rotate(this.x + this.l + (1.3 * this.r) * Math.sin(phi), this.y + (1.3 * this.r) * Math.cos(phi)));
                ctx.closePath();
            }

            ctx.stroke();

        }

    }

    class FollowerMap {
        constructor(follower) {
            this.i = 0;
            this.stop = true;

            this.follower = follower;

            this.canvas = document.getElementById('follower-map');
            this.ctx = this.canvas.getContext('2d');

            this.img = new Image();
            this.img.onload = () => {
                window.requestAnimationFrame(this.draw.bind(this));
            };
            this.img.src = "/data/framed_final.png";

            window.follower = this.follower;

            document.addEventListener('keyup', (event) => {
                if (event.key === "s") {
                    this.stop = !this.stop;
                    console.log("STOP", this.stop);
                    if (this.stop) {
                        this.follower.logger.plotStates(this.follower.statesHistory);
                    }
                    if (!this.stop) window.requestAnimationFrame(this.draw.bind(this));
                }
            })
        }

        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

            this.ctx.drawImage(this.img, 0, 0);
            this.follower.read(this.ctx);
            this.follower.rememberNewAndForgetLastState();
            this.follower.draw(this.ctx);
            this.follower.control(this.i++);
            this.follower.move();
            // this.stop = true;

            if (!this.stop) window.requestAnimationFrame(this.draw.bind(this));
        }

        start() {
            this.stop = false;
            window.requestAnimationFrame(this.draw.bind(this));
        }
    }

    class Helper {
        static countPeaks(states) {
            let peaks = 0;
            for (let i = 0; i < states.length; i++) {
                while (i < states.length && states[i] === 0) i++;
                while (i < states.length && states[i] !== 0) i++;
                if (states[i - 1] !== 0) peaks++;
            }
            return peaks;
        }

        static projection(arr, filter) {
            return arr.map((a, i) => a * filter[i]);
        }

        static integrate(history) {
            return this.sum(history) / history.length;
        }

        static differentiate(history) {
            return history[history.length - 1] - history[history.length - 2];
        }

        static sum(states) {
            return states.reduce((a, b) => a + b);
        }

        static getNorm(states) {
            return Helper.sum(states) / 100;
        }

        static getError(states) {
            return Helper.getNorm(states.map((s, i) => s * (i - 3.5))); // 3.5 = ( number of detectors  - 1 ) / 2
        }

        static getRadialVelocity(follower) {
            // u(t) = k_p [ err(t) + 1/T_i \int_0^t err(\tau) d\tau + T_d d err(t) / dt  ]
            const kp = 0.1;
            const Ti = Infinity;
            const Td = 0;

            const err = Helper.getError(follower.states);
            follower.rememberNewAndForgetLastError(err);
            const errHistory = follower.errHistory;

            return kp * (
                err
                + 1 / Ti * this.integrate(errHistory)
                + Td * this.differentiate(errHistory)
            )
        }
    }

    class Logger {

        constructor() {
            this.statesElement = document.getElementById('follower-heatmap');
        }

        plotStates(states) {
            Plotly.plot(this.statesElement, [
                {
                    z: states,
                    type: 'heatmap'
                }
            ]);
        }

    }

    // function disconnectedControl(i) {
    //     this.detectDisconnection();
    //     if (this.isDisconnected) {
    //         console.log("last turn", this.lastTurns[this.lastTurns.length - 1]);
    //         this.removeDisconnectedPeak();
    //         console.log("DISCONNECTED, processed states", this.states);
    //     }
    //
    //     console.log(i, this.states, this.currentMode);
    //     console.log(
    //         "err", Helper.getError(follower.states),
    //         "norm", Helper.getNorm(follower.states),
    //         "peaks", Helper.countPeaks(follower.states),
    //         "power", Helper.getRadialVelocity(this),
    //         "modeCounter", this.currentModeCounter,
    //         "disconnectionCancelled", this.disconnectionCancelled,
    //         "specialDirection", this.specialDirection
    //     );
    //
    //     const dOmega = Helper.getRadialVelocity(this);
    //     this.rememberNewAndForgetLastTurn(dOmega);
    //     this.setPower(0.1, dOmega);
    // }

    function mergedControl() {
        this.detectDisconnection();
        if (this.isDisconnected) {
            console.log("last turn", this.lastTurns[this.lastTurns.length - 1]);
            this.removeDisconnectedPeak();
            console.log("DISCONNECTED, processed states", this.states);
        }

        console.log(i, this.states, this.currentMode);
        console.log(
            "err", Helper.getError(follower.states),
            "norm", Helper.getNorm(follower.states),
            "peaks", Helper.countPeaks(follower.states),
            "power", Helper.getRadialVelocity(this),
            "modeCounter", this.currentModeCounter,
            "disconnectionCancelled", this.disconnectionCancelled,
            "specialDirection", this.specialDirection
        );

        const dOmega = Helper.getRadialVelocity(this);
        this.rememberNewAndForgetLastTurn(dOmega);
        this.setPower(0.1, dOmega);
    }

    function stateMachineControl(i) {

        this.detectDisconnection();
        if (this.isDisconnected) {
            console.log("last turn", this.lastTurns[this.lastTurns.length - 1]);
            this.removeDisconnectedPeak();
            console.log("DISCONNECTED, processed states", this.states);
        }


        // transitions

        // normal -> preSpecial
        if (Helper.getNorm(Helper.projection(this.states, [1, 1, 1, 0, 0, 1, 1, 1])) >= 0 && this.currentMode === "normal") {
            this.currentMode = "preSpecial";
            this.specialDirection = Math.sign(Helper.getError(this.states));
        }

        // preSpecial -> outMove transition
        if (Helper.getNorm(follower.states) <= 0 && this.currentMode === "preSpecial") {
            // this.logger.plotStates(this.statesHistory);
            // throw new Error("NORM 0");
            this.currentMode = "outMove";
            this.currentModeCounter = 10;
        }
        // outMove -> outTurn
        if (this.currentModeCounter <= 0 && this.currentMode === "outMove") {
            this.currentMode = "outTurn";
            this.currentModeCounter = 0;
        }

        // outTurn -> preSpecial
        if (Helper.getNorm(follower.states) > 1 && this.currentMode === "outTurn") {
            this.currentMode = "preSpecial";
        }

        // preSpecial -> normal
        if (
            Helper.getNorm(Helper.projection(this.states, [1, 1, 1, 0, 0, 1, 1, 1])) <= 0
            && this.currentMode === "preSpecial"
        ) {
            this.currentMode = "normal";
            this.specialDirection = null;
        }

        // controlling
        if (this.currentMode === "normal" || this.currentMode === "preSpecial") {
            const dOmega = Helper.getRadialVelocity(this);
            this.rememberNewAndForgetLastTurn(dOmega);
            this.setPower(0.1, dOmega);
        } else if (this.currentMode === "outMove") {

            this.setPower(0.1, 0);
            this.currentModeCounter--;

        } else if (this.currentMode === "outTurn") {

            this.setPower(0, this.specialDirection);

        }

        console.log(i, this.states, this.currentMode);
        console.log(
            "err", Helper.getError(follower.states),
            "norm", Helper.getNorm(follower.states),
            "peaks", Helper.countPeaks(follower.states),
            "power", Helper.getRadialVelocity(this),
            "modeCounter", this.currentModeCounter,
            "disconnectionCancelled", this.disconnectionCancelled,
            "specialDirection", this.specialDirection
        );


        if (this.isSpecialControlled) { // if no reading
            console.log("CRITIC", i);

            this.checkIfWeShouldCloseSpecialControlAndClose();

        }

    }

    (new FollowerMap(new Follower(stateMachineControl))) // disconnectedControl
    // (new FollowerMap(new Follower(stateMachineControl)))
    // .start();

})();
