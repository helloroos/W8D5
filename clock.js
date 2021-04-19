class Clock {
    constructor() {
        
        const dateAndTime = new Date(); 

        this.hours = dateAndTime.getHours();
        this.minutes = dateAndTime.getMinutes();
        this.seconds = dateAndTime.getSeconds();

    }

    printTime() {
        const time = [this.hours, this.minutes, this.seconds].join(":");
        console.log(time);
    }

    _tick() {
        let that = this;

        setInterval(function () {
            if (that.seconds === 59) {
                that.seconds = 0;

                if (that.minutes === 59) {
                    that.minutes = 0;

                    if (that.hours === 23) {
                        that.hours = 0;
                    } else {
                        that.hours += 1;
                    }

                } else {
                    that.minutes += 1;
                }

            } else {
                that.seconds += 1;
            }

            that.printTime.call(that);
        }, 1000);


    }

}

// const clock = new Clock();

// console.log(clock);


Function