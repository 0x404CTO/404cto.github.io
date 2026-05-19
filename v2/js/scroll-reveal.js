/* ============================================
   404CTO V2 - Scroll Reveal (IntersectionObserver)
   ============================================ */

/**
 * Initialize scroll reveal animations for elements with .reveal class
 */
export function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Optional: unobserve after reveal for performance
                    // observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }
    );

    reveals.forEach((el) => observer.observe(el));
}
