/* ============================================
   404CTO V2 - Chaos Level Bar Animation
   ============================================ */

/**
 * Initialize chaos bar fill animations when they come into view
 */
export function initChaosBars() {
    const bars = document.querySelectorAll('.chaos-bar__fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const fill = entry.target;
                    const targetWidth = fill.dataset.chaos || '50';
                    // Small delay for visual effect
                    setTimeout(() => {
                        fill.style.width = targetWidth + '%';
                    }, 300);
                    observer.unobserve(fill);
                }
            });
        },
        { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
}
