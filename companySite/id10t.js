    // Accessibility helper: current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple slide-in on scroll using IntersectionObserver
    (function(){
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        // If user prefers reduced motion, reveal without animation
        document.querySelectorAll('.animate').forEach(el => el.classList.add('in-view'));
        return;
      }

      const options = {
        root: null,
        rootMargin: '0px 0px -8% 0px', // start a little earlier
        threshold: 0.08
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // once visible, unobserve to save resources
            obs.unobserve(entry.target);
          }
        });
      }, options);

      document.querySelectorAll('.animate').forEach(el => {
        // add initial state via class (already present)
        observer.observe(el);
      });
    })();