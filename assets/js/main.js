const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop');
    const overlay = document.getElementById('overlay');
    const mobMenu = document.getElementById('mobMenu');
    const mobBtn = document.getElementById('mobBtn');
    const mobClose = document.getElementById('mobClose');
    const mobLinks = mobMenu.querySelectorAll('a');

    function onScroll() {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 8);
      scrollTopBtn.classList.toggle('vis', y > 480);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    function openMob() { overlay.classList.add('open'); mobMenu.classList.add('open'); document.body.style.overflow='hidden'; }
    function closeMob() { overlay.classList.remove('open'); mobMenu.classList.remove('open'); document.body.style.overflow=''; }
    mobBtn?.addEventListener('click', openMob);
    mobClose?.addEventListener('click', closeMob);
    overlay?.addEventListener('click', closeMob);
    mobLinks.forEach(link => link.addEventListener('click', closeMob));

    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('vis');
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.sr').forEach(el => io.observe(el));
