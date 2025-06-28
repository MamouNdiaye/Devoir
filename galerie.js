 let indexes = { photo: 0, video: 0 };
    let videoTimer;

    function showSlide(type, i) {
      const container = document.querySelector(`#${type}Slider .${type === 'photo' ? 'slides' : 'videos'}`);
      const items = container.children;
      indexes[type] = (i + items.length) % items.length;
      container.style.transform = `translateX(-${indexes[type] * 100}%)`;

      // Pour les vidéos, attendre 1 minute avant de passer
      if (type === 'video') {
        clearTimeout(videoTimer);
        videoTimer = setTimeout(() => {
          nextSlide('video');
        }, 60000); // 60 000 ms = 1 minute
      }
    }

    function nextSlide(type) {
      showSlide(type, indexes[type] + 1);
    }

    function prevSlide(type) {
      showSlide(type, indexes[type] - 1);
    }

    setInterval(() => nextSlide('photo'), 4000);

    window.onload = () => {
      showSlide('photo', 0);
      showSlide('video', 0);
    };