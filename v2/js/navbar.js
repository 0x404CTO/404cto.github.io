/* ============================================
   404CTO V2 - Navbar Interactions
   ============================================ */

import { throttle } from './utils.js';

/**
 * Initialize navbar scroll effect and mobile menu
 */
export function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar__toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
    const navLinks = document.querySelectorAll('.navbar__link, .navbar__connect');

    if (!navbar) return;

    // ── Scroll effect ──
    const onScroll = throttle(() => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 50);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Initial check

    // ── Mobile menu toggle ──
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    }

    // ── Smooth scroll for anchor links ──
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = navbar.offsetHeight + 20;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });
}
