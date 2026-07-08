// ─── Data: Programming Languages ───
const languages = [
  { name: 'Python', icon: 'logos:python', color: 'rgba(55,118,171,0.3)' },
  { name: 'JavaScript', icon: 'logos:javascript', color: 'rgba(247,223,30,0.3)' },
  { name: 'TypeScript', icon: 'logos:typescript-icon', color: 'rgba(49,120,198,0.3)' },
  { name: 'React', icon: 'logos:react', color: 'rgba(97,218,251,0.3)' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', color: 'rgba(104,159,56,0.3)' },
  { name: 'Go', icon: 'logos:go', color: 'rgba(0,173,216,0.3)' },
  { name: 'Rust', icon: 'logos:rust', color: 'rgba(222,165,132,0.3)' },
  { name: 'Java', icon: 'logos:java', color: 'rgba(244,67,54,0.3)' },
  { name: 'Swift', icon: 'logos:swift', color: 'rgba(255,79,68,0.3)' },
  { name: 'Kotlin', icon: 'logos:kotlin-icon', color: 'rgba(127,82,242,0.3)' },
  { name: 'Dart', icon: 'logos:dart', color: 'rgba(0,150,246,0.3)' },
  { name: 'C++', icon: 'logos:c-plusplus', color: 'rgba(104,159,56,0.3)' },
  { name: 'PHP', icon: 'logos:php', color: 'rgba(119,123,180,0.3)' },
  { name: 'Ruby', icon: 'logos:ruby', color: 'rgba(204,52,45,0.3)' },
  { name: 'R', icon: 'logos:r-lang', color: 'rgba(39,64,139,0.3)' },
  { name: 'Scala', icon: 'logos:scala', color: 'rgba(204,45,45,0.3)' },
  { name: 'Elixir', icon: 'logos:elixir', color: 'rgba(110,68,154,0.3)' },
  { name: 'Solidity', icon: 'logos:solidity', color: 'rgba(100,100,100,0.3)' },
  { name: 'C#', icon: 'logos:c-sharp', color: 'rgba(156,34,176,0.3)' },
  { name: 'SQL', icon: 'logos:mysql', color: 'rgba(0,117,143,0.3)' },
];

// ─── Data: Frameworks ───
const frameworks = [
  'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Nuxt.js',
  'Express.js', 'FastAPI', 'Django', 'Flask', 'Spring Boot',
  'Flutter', 'React Native', 'TailwindCSS', 'GraphQL', 'gRPC',
  'TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'OpenAI API',
];

// ─── Data: Databases & DevOps ───
const tools = [
  'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB',
  'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure',
  'Terraform', 'GitHub Actions', 'Jenkins', 'Datadog', 'Sentry',
  'Firebase', 'Supabase', 'Vercel', 'Cloudflare', 'Kafka',
];

// ─── Data: Industries ───
const industries = [
  { name: 'Fintech & Payments', icon: 'lucide:wallet', desc: 'UPI, lending, insurance tech' },
  { name: 'E-Commerce & D2C', icon: 'lucide:shopping-bag', desc: 'Marketplaces, quick commerce' },
  { name: 'Healthcare & MedTech', icon: 'lucide:heart-pulse', desc: 'Telemedicine, diagnostics' },
  { name: 'EdTech', icon: 'lucide:graduation-cap', desc: 'LMS, live classes, assessments' },
  { name: 'Real Estate & PropTech', icon: 'lucide:building', desc: 'Listing platforms, AR tours' },
  { name: 'Logistics & Supply Chain', icon: 'lucide:truck', desc: 'Fleet mgmt, route optimization' },
  { name: 'Agriculture & AgriTech', icon: 'lucide:sprout', desc: 'Farm management, mandi pricing' },
  { name: 'SaaS & Enterprise', icon: 'lucide:cloud', desc: 'B2B platforms, internal tools' },
  { name: 'Food & Restaurant', icon: 'lucide:utensils', desc: 'Delivery, POS, kitchen mgmt' },
  { name: 'Travel & Hospitality', icon: 'lucide:plane', desc: 'Booking engines, itinerary AI' },
  { name: 'Gaming & Entertainment', icon: 'lucide:gamepad-2', desc: 'Real-money gaming, streaming' },
  { name: 'Manufacturing & IoT', icon: 'lucide:factory', desc: 'Smart factory, predictive maint.' },
];

// ─── Render Language Grid ───
const langGrid = document.getElementById('langGrid');
languages.forEach((lang, i) => {
  const pill = document.createElement('div');
  pill.className = 'lang-pill bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2.5 cursor-default reveal';
  pill.style.cssText = `--lang-color: ${lang.color}; transition-delay: ${i * 40}ms;`;
  pill.innerHTML = `
    <iconify-icon icon="${lang.icon}" width="28"></iconify-icon>
    <span class="text-xs font-medium text-slate-700">${lang.name}</span>
  `;
  langGrid.appendChild(pill);
});

// ─── Render Framework Grid ───
const frameworkGrid = document.getElementById('frameworkGrid');
frameworks.forEach(fw => {
  const pill = document.createElement('span');
  pill.className = 'fw-pill inline-flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-xs font-medium text-slate-600';
  pill.textContent = fw;
  frameworkGrid.appendChild(pill);
});

// ─── Render Tools Grid ───
const toolsGrid = document.getElementById('toolsGrid');
tools.forEach(tool => {
  const pill = document.createElement('span');
  pill.className = 'fw-pill inline-flex items-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-xs font-medium text-slate-600';
  pill.textContent = tool;
  toolsGrid.appendChild(pill);
});

// ─── Render Industry Grid ───
const industryGrid = document.getElementById('industryGrid');
industries.forEach((ind, i) => {
  const card = document.createElement('div');
  card.className = 'industry-card bg-white/70 border border-slate-200 rounded-2xl p-6 cursor-default reveal';
  card.style.cssText = `transition-delay: ${i * 50}ms;`;
  card.innerHTML = `
    <div class="industry-icon w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4">
      <iconify-icon icon="${ind.icon}" width="22" class="text-indigo-600"></iconify-icon>
    </div>
    <h3 class="text-sm font-medium text-slate-900 mb-1">${ind.name}</h3>
    <p class="text-xs font-light text-slate-400">${ind.desc}</p>
  `;
  industryGrid.appendChild(card);
});

// ─── Scroll Reveal Observer ───
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.style.transitionDelay || '0ms';
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ─── Navbar Scroll Effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── Mobile Menu ───
const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.add('open');
  menuOverlay.style.opacity = '1';
  menuOverlay.style.pointerEvents = 'auto';
  document.body.style.overflow = 'hidden';
}
function closeMenuFn() {
  mobileMenu.classList.remove('open');
  menuOverlay.style.opacity = '0';
  menuOverlay.style.pointerEvents = 'none';
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFn);
menuOverlay.addEventListener('click', closeMenuFn);
mobileLinks.forEach(link => link.addEventListener('click', closeMenuFn));

// ─── Card Spotlight Mouse Tracking ───
document.querySelectorAll('.card-spotlight-light').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
});

// ─── Counter Animation ───
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = target * eased;

        if (isDecimal) {
          el.textContent = current.toFixed(1) + suffix;
        } else {
          el.textContent = Math.round(current) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }
      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ─── Dashboard Metric Animations ───
function animateMetric(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  const duration = 2500;
  const startTime = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = target * eased;

    if (isDecimal) {
      el.textContent = current.toFixed(1) + suffix;
    } else {
      el.textContent = Math.round(current) + suffix;
    }

    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// Trigger after a delay for hero visibility
setTimeout(() => {
  animateMetric('metricUsers', 54000, '+');
  animateMetric('metricRetention', 94, '%');
  animateMetric('metricRevenue', 220, '%');
}, 1500);

// ─── Code Rain Effect ───
const codeRain = document.getElementById('codeRain');
const codeChars = '01{}[]<>=/;:+-_*&|^~!?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function createCodeDrop() {
  const span = document.createElement('span');
  span.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
  span.style.left = Math.random() * 100 + '%';
  span.style.animationDuration = (8 + Math.random() * 12) + 's';
  span.style.animationDelay = Math.random() * 5 + 's';
  span.style.fontSize = (10 + Math.random() * 6) + 'px';
  codeRain.appendChild(span);
  setTimeout(() => span.remove(), 25000);
}
for (let i = 0; i < 30; i++) setTimeout(createCodeDrop, i * 200);
setInterval(createCodeDrop, 600);

// ─── Contact Form ───
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const submitBtn = contactForm.querySelector('button[type="submit"]');

function showToast(msg, isError = false) {
  toastMsg.textContent = msg;
  const icon = toast.querySelector('iconify-icon');
  if (icon) icon.setAttribute('icon', isError ? 'lucide:alert-circle' : 'lucide:check-circle-2');
  if (icon) icon.setAttribute('class', isError ? 'text-red-400' : 'text-emerald-400');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.querySelector('#name').value.trim(),
    company: contactForm.querySelector('#company').value.trim(),
    email: contactForm.querySelector('#email').value.trim(),
    phone: contactForm.querySelector('#phone').value.trim(),
    service: contactForm.querySelector('#service').value,
    message: contactForm.querySelector('#message').value.trim(),
  };

  // Disable button and show loading state
  submitBtn.disabled = true;
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span class="relative z-10">Sending...</span>';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      showToast('🎉 Growth plan request sent! We\'ll reach out within 4 hours.');
      contactForm.reset();
    } else {
      showToast(result.error || 'Something went wrong. Please try again.', true);
    }
  } catch (err) {
    showToast('Network error. Please check your connection and try again.', true);
    console.error('Form submission error:', err);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});

// ─── Smooth scroll offset for fixed nav ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});