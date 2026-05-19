/* ============================================
   404CTO V2 - Utility Functions
   ============================================ */

/**
 * Get a random item from an array
 */
export function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generate a random integer between min and max (inclusive)
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a fake timestamp string
 */
export function fakeTimestamp() {
    const h = String(randomInt(0, 5)).padStart(2, '0');
    const m = String(randomInt(0, 59)).padStart(2, '0');
    const s = String(randomInt(0, 59)).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

/**
 * Debounce function
 */
export function debounce(fn, delay = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Throttle function
 */
export function throttle(fn, limit = 100) {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Wait for a specified number of milliseconds
 */
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
