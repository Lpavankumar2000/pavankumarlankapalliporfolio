// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle reveal-on-scroll for sections and cards
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(
    '.section, .stack-card, .impact-card, .pillar, .exp-card, .role-arc, .metric, .hero-viz, .hero-avatar'
  )
  .forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition =
      'opacity 0.7s cubic-bezier(.2,.7,.2,1), transform 0.7s cubic-bezier(.2,.7,.2,1)';
    io.observe(el);
  });

const style = document.createElement('style');
style.textContent = `
  .is-in { opacity: 1 !important; transform: none !important; }
`;
document.head.appendChild(style);

// Active nav link highlighting
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [...navLinks]
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((a) => {
          a.style.color =
            a.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => navObserver.observe(s));

// Live streaming bar chart in the hero visualization.
// Every tick, drop the oldest bar and push a new random value on the right,
// giving the impression of a real-time query-volume stream.
(function liveBars() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const bars = [...document.querySelectorAll('#liveBars .viz-bar')];
  if (!bars.length) return;

  const heights = bars.map(
    (b) => parseInt(b.style.getPropertyValue('--h'), 10) || 50
  );

  function next() {
    const base = 35 + Math.random() * 55;
    const wobble = (Math.random() - 0.5) * 12;
    return Math.max(20, Math.min(98, Math.round(base + wobble)));
  }

  setInterval(() => {
    heights.shift();
    heights.push(next());
    bars.forEach((bar, i) => bar.style.setProperty('--h', heights[i] + '%'));
  }, 1600);
})();
