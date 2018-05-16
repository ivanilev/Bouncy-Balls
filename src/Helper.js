// Utility Functions
var Helper = {
    minRadius: 15,
    maxRadius: 35,
    GRAVITY: 0.05,
    FRICTION: 0.9,
    canvas: undefined, 
    canvasContext: undefined,
    
    setCanvasAndContext(){
        this.canvas = document.querySelector('canvas');
       
        if (!this.canvas){
            //TODO: Add error hander
        }
        this.canvasContext = this.canvas.getContext('2d');
        if (!this.canvasContext){
            //TODO: Add error handler
        }
    },

    getCanvasContainerSize(){
        let container = document.getElementById('RightSide') || {
            clientWidth:320,
            clientWidth:320
        };
        
        let w = container.clientWidth;
        let h = container.clientHeight;
        return {
            width: w, 
            height: h
        };
    },

    /**
         * Rotates coordinate system for velocities
         *
         * Takes velocities and alters them as if the coordinate system they're on was rotated
         *
         * @param  Object | velocity | The velocity of an individual particle
         * @param  Float  | angle    | The angle of collision between two objects in radians
         * @return Object | The altered x and y velocities after the coordinate system has been rotated
     */
    rotate(velocity, angle) {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };

        return rotatedVelocities;
    },

    /**
         * Swaps out two colliding particles' x and y velocities after running through
         * an elastic collision reaction equation
         *
         * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
         * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
         * @return Null | Does not return a value
     */
    resolveCollision(particle, otherParticle) {
        const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
        const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
    
        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;

        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

            // Store weight in var for better readability in collision equation
            const w1 = particle.weight;
            const w2 = otherParticle.weight;

            // Velocity before equation
            const u1 = this.rotate(particle.velocity, angle);
            const u2 = this.rotate(otherParticle.velocity, angle);

            // Velocity after 1d collision equation
            const v1 = { x: u1.x * (w1 - w2) / (w1 + w2) + u2.x * 2 * w2 / (w1 + w2), y: u1.y };
            const v2 = { x: u2.x * (w1 - w2) / (w1 + w2) + u1.x * 2 * w2 / (w1 + w2), y: u2.y };
    
            // Final velocity after rotating axis back to original location
            const vFinal1 = this.rotate(v1, -angle);
            const vFinal2 = this.rotate(v2, -angle);

            // Swap particle velocities for realistic bounce effect
            particle.velocity.x = vFinal1.x;
            particle.velocity.y = vFinal1.y;

            otherParticle.velocity.x = vFinal2.x;
            otherParticle.velocity.y = vFinal2.y;
        }

    },
        
    randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },
    
    //Pythagorean theorem 
    getDistance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;
    
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    },

    //Random color
    //https://stackoverflow.com/questions/1484506/random-color-generator
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    //Starting colors
     getStartingColors() {
        var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
        return colors[Math.floor(Math.random() * colors.length)]
    },
};

export {Helper};