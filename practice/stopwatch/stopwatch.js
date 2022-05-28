function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        //if stopwatch is started
        if (running)
            throw new Error('Stopwatch has already started!');

        // if stopwatch is not started
        running = true;
        startTime = new Date();
    };

    this.stop = function () {
        //if stopwatch is not started
        if (!running)
            throw new Error('Stopwatch is not started!');

        //if stopwatch is started
        running = false;
        endTime = new Date();

        //calculate the seconds between the end time and start time
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}