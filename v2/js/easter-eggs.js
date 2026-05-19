/* ============================================
   404CTO V2 - Easter Eggs
   ============================================ */

import { randomFrom, randomInt } from './utils.js';

// ── Console ASCII Art ──
const CONSOLE_ART = `
%c
 ██╗  ██╗ ██████╗ ██╗  ██╗ ██████╗████████╗ ██████╗ 
 ██║  ██║██╔═████╗██║  ██║██╔════╝╚══██╔══╝██╔═══██╗
 ███████║██║██╔██║███████║██║        ██║   ██║   ██║
 ╚════██║████╔╝██║╚════██║██║        ██║   ██║   ██║
      ██║╚██████╔╝     ██║╚██████╗   ██║   ╚██████╔╝
      ╚═╝ ╚═════╝      ╚═╝ ╚═════╝   ╚═╝    ╚═════╝
`;

const CONSOLE_MESSAGES = [
    '%c> You found the console. You are one of us.',
    '%c> Hiring: people who open DevTools on every website.',
    '%c> Contact: 404cto@proton.me',
    '%c> No bugs here. Only undocumented features.',
    '%c> If you can read this, you\'re overqualified.',
];

// ── Fake Error Messages ──
const FAKE_ERRORS = [
    { title: 'ERROR 0x420', msg: 'Too much chaos detected. Recalibrating...' },
    { title: 'WARNING', msg: 'Coffee levels critically low. Performance may degrade.' },
    { title: 'NOTICE', msg: 'You\'ve been staring at this site for too long. Touch grass.' },
    { title: 'ERROR 0x404', msg: 'Business plan not found. Shipping products instead.' },
    { title: 'ALERT', msg: 'Developer entered flow state. All systems on autopilot.' },
    { title: 'DEBUG', msg: 'Why is this working? Nobody knows.' },
    { title: 'SYSTEM', msg: 'Chaos level exceeding nominal parameters. This is fine.' },
];

// ── Konami Code Sequence ──
const KONAMI = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

/**
 * Initialize all easter eggs
 */
export function initEasterEggs() {
    printConsoleArt();
    initKonamiCode();
    initFakeErrorModal();
}

/**
 * Print ASCII art and messages to console
 */
function printConsoleArt() {
    console.log(CONSOLE_ART, 'color: #00ff88; font-size: 10px; font-family: monospace;');

    CONSOLE_MESSAGES.forEach((msg, i) => {
        setTimeout(() => {
            console.log(msg, 'color: #00ff88; font-size: 12px;');
        }, (i + 1) * 500);
    });
}

/**
 * Initialize Konami Code listener
 */
function initKonamiCode() {
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === KONAMI[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === KONAMI.length) {
                konamiIndex = 0;
                triggerMatrixRain();
            }
        } else {
            konamiIndex = 0;
        }
    });
}

/**
 * Trigger Matrix rain effect (Konami Code reward)
 */
function triggerMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-rain';
    canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.8;
  `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '404CTOアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff88';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    const interval = setInterval(draw, 33);

    // Remove after 5 seconds
    setTimeout(() => {
        clearInterval(interval);
        canvas.style.transition = 'opacity 1s ease';
        canvas.style.opacity = '0';
        setTimeout(() => canvas.remove(), 1000);
    }, 5000);
}

/**
 * Initialize random fake error modal
 */
function initFakeErrorModal() {
    // 15% chance to show a fake error after 15-45 seconds
    const shouldShow = Math.random() < 0.15;
    if (!shouldShow) return;

    const delay = randomInt(15000, 45000);

    setTimeout(() => {
        showFakeError();
    }, delay);
}

/**
 * Show a fake error modal
 */
function showFakeError() {
    const error = randomFrom(FAKE_ERRORS);
    const modal = document.getElementById('fake-error');

    if (!modal) return;

    const titleEl = modal.querySelector('.fake-error-modal__title');
    const msgEl = modal.querySelector('.fake-error-modal__msg');

    if (titleEl) titleEl.textContent = error.title;
    if (msgEl) msgEl.textContent = error.msg;

    modal.classList.add('show');

    // Auto-dismiss after 4 seconds
    setTimeout(() => {
        modal.classList.remove('show');
    }, 4000);
}
