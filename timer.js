class Timer {
    constructor() {
        this.reset()
    }

    start() {
        this.reset()

        this.start_time = Date.now()
        this.running = true
    }

    pause() {
        if (this.running && !this.pausing) {
            this.pause_start_time = Date.now()
            this.pausing = true
        }
    }
    remuse() {
        if (this.running && this.pausing) {
            this.pause_total_time += Date.now() - this.pause_start_time
            this.pause_start_time = 0
            this.pausing = false
        }
    }

    time() {
        if (this.running) {
            if (this.pausing) {
                return this.pause_start_time - this.start_time - this.pause_total_time
            } else {
                return Date.now() - this.start_time - this.pause_total_time
            }
        } else {
            return 0
        }
    }

    reset() {
        this.start_time = 0
        this.pause_start_time = 0
        this.pause_total_time = 0
        this.running = false
        this.pausing = false
    }
}