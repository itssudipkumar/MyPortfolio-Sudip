/* ═══════════════════════════════
   MAIN.JS
═══════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HAMBURGER MENU ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    let lastScrollY = window.scrollY;

    const setNavState = (isOpen) => {
      navToggle.classList.toggle('active', isOpen);
      navLinks.classList.toggle('mobile-active', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) document.body.classList.remove('nav-scroll-down');
    };

    navToggle.addEventListener('click', () => {
      const willOpen = !navLinks.classList.contains('mobile-active');
      setNavState(willOpen);
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        setNavState(false);
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('mobile-active')) return;
      const clickInsideNav = e.target.closest('nav');
      if (!clickInsideNav) setNavState(false);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setNavState(false);
        document.body.classList.remove('nav-scroll-down');
      }
    });

    window.addEventListener('scroll', () => {
      if (window.innerWidth > 768) return;
      if (navLinks.classList.contains('mobile-active')) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      if (currentY < 20 || delta < -4) {
        document.body.classList.remove('nav-scroll-down');
      } else if (delta > 4) {
        document.body.classList.add('nav-scroll-down');
      }

      lastScrollY = currentY;
    });
  }

  /* ── THEME TOGGLE ── */
  const html = document.documentElement;
  const togBtn = document.querySelector('.theme-tog');
  const togKnob = document.querySelector('.tog-knob');
  const saved = localStorage.getItem('sudip-theme') || 'light';
  html.setAttribute('data-theme', saved);
  if (togKnob) togKnob.textContent = saved === 'dark' ? '🌙' : '☀️';

  if (togBtn) {
    togBtn.addEventListener('click', () => {
      const curr = html.getAttribute('data-theme');
      const next = curr === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      if (togKnob) togKnob.textContent = next === 'dark' ? '🌙' : '☀️';
      localStorage.setItem('sudip-theme', next);
    });
  }

  /* ── SCROLL REVEAL ── */
  const revEls = document.querySelectorAll('.rv');
  const revObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const siblings = Array.from(e.target.parentElement?.children || []);
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('on'), Math.min(idx, 5) * 100);
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  revEls.forEach(el => revObs.observe(el));

  /* ── SKILL BAR FILLS ── */
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.hero-card-fill, .c-fill').forEach(b => {
          setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 400);
        });
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.hero-side-card, .h-card').forEach(c => barObs.observe(c));

  /* ── ANIMATED STAT COUNTERS ── */
  const animateCounter = (element, target) => {
    const duration = 2000;
    const increment = target / (duration / 50);
    let current = 0;
    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, 50);
  };

  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-count').forEach(stat => {
          const target = parseInt(stat.dataset.target);
          if (target) animateCounter(stat, target);
        });
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.hero-side-card').forEach(c => countObs.observe(c));

  /* ── SKILLS CAROUSEL ── */
  const track = document.querySelector('.skills-track');
  const slides = document.querySelectorAll('.skill-slide');
  const dots = document.querySelectorAll('.skill-dot');
  const prevBtn = document.querySelector('.arrow-prev');
  const nextBtn = document.querySelector('.arrow-next');

  let current = 1; // start at middle
  const total = slides.length;
  let autoSlideInterval;
  let isUserInteracting = false;

  function getSlideWidth() {
    if (!slides[0]) return 0;
    return slides[0].offsetWidth + 24; // 24 = gap
  }

  function updateCarousel(animate = true) {
    if (!track) return;
    if (!animate) track.style.transition = 'none';
    else track.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';

    const slideW = getSlideWidth();
    const vpW = track.parentElement.offsetWidth;
    // center the active slide
    const offset = (vpW / 2) - (slideW * current) - (slides[0].offsetWidth / 2);
    track.style.transform = `translateX(${offset}px)`;

    slides.forEach((s, i) => {
      s.classList.remove('active', 'adjacent');
      if (i === current) s.classList.add('active');
      else if (Math.abs(i - current) === 1) s.classList.add('adjacent');
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function goNext() {
    if (current < total - 1) {
      current++;
      updateCarousel();
    } else {
      // Loop back to first slide
      current = 0;
      updateCarousel();
    }
  }

  function goPrev() {
    if (current > 0) {
      current--;
      updateCarousel();
    } else {
      // Loop to last slide
      current = total - 1;
      updateCarousel();
    }
  }

  function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isUserInteracting) {
        goNext();
      }
    }, 4000); // Auto-slide every 4 seconds
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  function pauseAutoSlide() {
    isUserInteracting = true;
    stopAutoSlide();
    // Resume after 8 seconds of inactivity
    setTimeout(() => {
      isUserInteracting = false;
      startAutoSlide();
    }, 8000);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { goNext(); pauseAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { goPrev(); pauseAutoSlide(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { current = i; updateCarousel(); pauseAutoSlide(); }));

  // init
  if (track && slides.length) {
    updateCarousel(false);
    setTimeout(() => updateCarousel(false), 50);
    window.addEventListener('resize', () => updateCarousel(false));

    // Start auto-sliding
    startAutoSlide();
  }

  // keyboard
  document.addEventListener('keydown', e => {
    if (document.querySelector('.modal-overlay.open')) return;
    if (e.key === 'ArrowRight') { goNext(); pauseAutoSlide(); }
    if (e.key === 'ArrowLeft') { goPrev(); pauseAutoSlide(); }
  });

  // touch
  let touchStartX = 0;
  if (track) {
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goNext() : goPrev();
        pauseAutoSlide();
      }
    });
  }

  /* ── HIRE ME MODAL ── */
  const overlay = document.getElementById('hireModal');
  const hireBtns = document.querySelectorAll('.hire-btn, .open-hire');
  const closeBtn = document.querySelector('.modal-close');
  const form = document.querySelector('.hire-form');
  const successEl = document.querySelector('.modal-success');

  function openModal() {
    if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }
  function closeModal() {
    if (overlay) { overlay.classList.remove('open'); document.body.style.overflow = ''; }
  }

  hireBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  if (form) {
    const formEndpoint = 'https://formspree.io/f/mlgaqego';

    form.addEventListener('submit', async e => {
      e.preventDefault();
      // Simulate send
      const btn = form.querySelector('.form-submit');
      const originalText = btn ? btn.textContent : 'Send Message →';
      if (btn) {
        btn.textContent = 'Sending...';
        btn.disabled = true;
      }

      const [firstName, lastName, email, company, opportunity, message] = form.querySelectorAll('input, select, textarea');
      const payload = new FormData();
      payload.append('firstName', firstName?.value?.trim() || '');
      payload.append('lastName', lastName?.value?.trim() || '');
      payload.append('email', email?.value?.trim() || '');
      payload.append('company', company?.value?.trim() || '');
      payload.append('opportunity', opportunity?.value?.trim() || '');
      payload.append('message', message?.value?.trim() || '');

      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          body: payload,
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Formspree request failed');
        }

        form.style.display = 'none';
        if (successEl) successEl.classList.add('show');
        setTimeout(() => {
          closeModal();
          setTimeout(() => {
            form.style.display = '';
            form.reset();
            if (successEl) successEl.classList.remove('show');
            if (btn) {
              btn.textContent = originalText;
              btn.disabled = false;
            }
          }, 600);
        }, 2800);
      } catch (error) {
        if (btn) {
          btn.textContent = originalText;
          btn.disabled = false;
        }
        alert('Sorry, something went wrong sending your message. Please try again.');
      }
    });
  }

  /* ── NAV ACTIVE ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinksAnchors = document.querySelectorAll('.nav-links a');
  const scrollObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinksAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--p1)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => scrollObs.observe(s));

  /* ── LOAD FOOTER ── */
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    const footerPath = window.location.pathname.includes('/pages/') ? '../footer.html' : 'footer.html';
    fetch(footerPath)
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }

  /* ── SCROLL ANIMATED CARD ── */
  const heroCard = document.querySelector('.hero-side-card');
  if (heroCard) {
    let ticking = false;
    let isHovering = false;
    heroCard.addEventListener('mouseenter', () => isHovering = true);
    heroCard.addEventListener('mouseleave', () => isHovering = false);
    window.addEventListener('scroll', () => {
      if (!ticking && !isHovering) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight * 0.5;
          const progress = Math.min(scrollY / maxScroll, 1);
          const rotateY = progress * 15;
          const translateY = progress * -10;
          heroCard.style.transform = `translateY(${translateY}px) rotateY(${rotateY}deg)`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

});
