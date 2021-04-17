class Clock {
    constructor() {
        
        const dateAndTime = new Date(); 

        this.hours = dateAndTime.getHours();
        this.minutes = dateAndTime.getMinutes();
        this.seconds = dateAndTime.getSeconds();

    }

    printTime() {
        const time = [this.hours, this.minutes, this.seconds].join(":");
    }

    _tick() {
        
    }
}

// const clock = new Clock();

// console.log(clock);
