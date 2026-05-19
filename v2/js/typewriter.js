/* ============================================
   404CTO V2 - Typewriter Effect
   ============================================ */

export class Typewriter {
    /**
     * @param {HTMLElement} element - The element to type into
     * @param {string[]} phrases - Array of phrases to cycle through
     * @param {Object} options
     */
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.typeSpeed = options.typeSpeed || 50;
        this.deleteSpeed = options.deleteSpeed || 30;
        this.pauseTime = options.pauseTime || 2500;
        this.loop = options.loop !== undefined ? options.loop : true;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.isRunning = false;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this._tick();
    }

    stop() {
        this.isRunning = false;
    }

    _tick() {
        if (!this.isRunning) return;

        const phrase = this.phrases[this.currentPhrase];

        if (this.isDeleting) {
            this.currentChar--;
        } else {
            this.currentChar++;
        }

        // Update text
        this.element.textContent = phrase.substring(0, this.currentChar);

        let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        // Add slight randomness for natural feel
        delay += Math.random() * 30;

        // Finished typing the phrase
        if (!this.isDeleting && this.currentChar === phrase.length) {
            delay = this.pauseTime;
            this.isDeleting = true;
        }

        // Finished deleting
        if (this.isDeleting && this.currentChar === 0) {
            this.isDeleting = false;
            this.currentPhrase++;

            if (this.currentPhrase >= this.phrases.length) {
                if (this.loop) {
                    this.currentPhrase = 0;
                } else {
                    this.isRunning = false;
                    return;
                }
            }

            delay = 500; // Brief pause before typing next phrase
        }

        setTimeout(() => this._tick(), delay);
    }
}
