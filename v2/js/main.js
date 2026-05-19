/* ============================================
   404CTO V2 - Main Entry Point
   ============================================ */

import { Typewriter } from './typewriter.js';
import { initFakeLogs } from './fake-logs.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initNavbar } from './navbar.js';
import { initChaosBars } from './chaos-bar.js';
import { initEasterEggs } from './easter-eggs.js';

// ── Hero Tagline Phrases ──
const HERO_PHRASES = [
    'Shipping questionable onchain infra since 2024.',
    '404: business plan not found. Mainnet deploys found instead.',
    'No VC. No token. Just git push and pray.',
    'We write Solidity at 3AM and call it innovation.',
    'fork() → modify() → deploy() → pray()',
    'Our code compiles. That counts as an audit, right?',
    'Building the internet nobody asked for.',
    'Probably pushing to mainnet without tests right now.',
    'We accidentally built real products. Oops.',
    'Chaos-driven development, production-grade output.',
    'The roadmap is a vibe. The code is real.',
];

/**
 * Initialize everything when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // ── Navbar ──
    initNavbar();

    // ── Hero Typewriter ──
    const taglineEl = document.getElementById('hero-tagline');
    if (taglineEl) {
        const tw = new Typewriter(taglineEl, HERO_PHRASES, {
            typeSpeed: 40,
            deleteSpeed: 25,
            pauseTime: 3000,
            loop: true,
        });
        tw.start();
    }

    // ── Fake Logs Background ──
    initFakeLogs();

    // ── Scroll Reveal ──
    initScrollReveal();

    // ── Chaos Bars ──
    initChaosBars();

    // ── Easter Eggs ──
    initEasterEggs();

    // ── Fake Error Modal Close ──
    const errorClose = document.querySelector('.fake-error-modal__close');
    if (errorClose) {
        errorClose.addEventListener('click', () => {
            document.getElementById('fake-error')?.classList.remove('show');
        });
    }
});
