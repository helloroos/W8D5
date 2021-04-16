class Clock {
    constructor() {
        
        const dateAndTime = new Date(); 

        this.hours = dateAndTime.getHours();
        this.minutes = dateAndTime.getMinutes();
        this.seconds = dateAndTime.getSeconds();

        this.printTime();

        // setInterval(this._tick)

    }

    printTime() {

    }

    _tick() {
        
    }
}

// const clock = new Clock();

// console.log(clock);
