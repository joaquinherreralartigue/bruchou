(() => {
  function setupRevealAnimations() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealGroups = [
      ".hero__header",
      ".hero__copy",
      ".hero__caption",
      ".newsfeed",
      ".home-cta .eyebrow",
      ".home-cta__copy",
      ".search-card",
      ".timeline__content",
      ".directory__content",
      ".case-study__shell > .section-label",
      ".case-study__intro",
      ".case-carousel",
      ".insights__intro",
      ".insight",
      ".awards__copy",
      ".award",
      ".footer__topline",
      ".footer__column",
      ".footer__newsletter",
      ".footer__bottom-shell",
    ];
    const seen = new Set();
    const revealNodes = [];

    revealGroups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((node) => {
        if (seen.has(node)) {
          return;
        }

        seen.add(node);
        revealNodes.push(node);
      });
    });

    revealNodes.forEach((node, index) => {
      const delay = `${Math.min((index % 6) * 70, 350)}ms`;

      node.classList.add("reveal");
      node.style.setProperty("--reveal-delay", delay);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealNodes.forEach((node) => observer.observe(node));
  }

  function setupNewsTicker() {
    const tickers = document.querySelectorAll("[data-news-ticker]");

    tickers.forEach((ticker) => {
      const track = ticker.querySelector(".newsfeed__track");
      const items = ticker.querySelector(".newsfeed__items");

      if (!track || !items || track.querySelector("[data-ticker-clone]")) {
        return;
      }

      const clone = items.cloneNode(true);

      clone.dataset.tickerClone = "true";
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  }

  function setupPracticePageNavigation() {
    const practiceLinks = document.querySelectorAll('a[href="./areas-de-practica.html"], a[href="areas-de-practica.html"]');

    if (practiceLinks.length === 0) {
      return;
    }

    const canUseViewTransition = "startViewTransition" in document;

    practiceLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        if (
          canUseViewTransition ||
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          link.target === "_blank"
        ) {
          return;
        }

        event.preventDefault();
        document.body.classList.add("is-page-exiting");

        window.setTimeout(() => {
          window.location.href = link.href;
        }, 520);
      });
    });
  }

  function setupDragScroll() {
    const dragScrollAreas = document.querySelectorAll("[data-drag-scroll]");

    dragScrollAreas.forEach((area) => {
      const infinite = area.hasAttribute("data-infinite-drag-scroll");
      const track = infinite ? area.firstElementChild : null;
      let pointerId = null;
      let startX = 0;
      let startScrollLeft = 0;
      let isDragging = false;
      let loopWidth = 0;
      let isNormalizing = false;

      if (infinite && track) {
        const originals = Array.from(track.children);
        const beforeFragment = document.createDocumentFragment();
        const afterFragment = document.createDocumentFragment();

        originals.forEach((item) => {
          const beforeClone = item.cloneNode(true);
          const afterClone = item.cloneNode(true);

          [beforeClone, afterClone].forEach((clone) => {
            clone.dataset.clone = "true";
            clone.setAttribute("aria-hidden", "true");
            clone.classList.remove("reveal", "is-visible");
            clone.style.removeProperty("--reveal-delay");
          });

          beforeFragment.appendChild(beforeClone);
          afterFragment.appendChild(afterClone);
        });

        track.prepend(beforeFragment);
        track.append(afterFragment);
      }

      function getOriginalItems() {
        if (!track) {
          return [];
        }

        return Array.from(track.children).filter((item) => !item.dataset.clone);
      }

      function measureLoopWidth() {
        const fullTrackWidth = track?.scrollWidth || area.scrollWidth || 0;

        if (fullTrackWidth) {
          loopWidth = fullTrackWidth / 3;
          return;
        }

        const originals = getOriginalItems();
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");

        loopWidth =
          originals.reduce((total, item) => total + item.getBoundingClientRect().width, 0) +
          gap * Math.max(0, originals.length - 1);
      }

      function normalizeInfiniteScroll(force = false) {
        if (!infinite || !loopWidth) {
          return;
        }

        const minEdge = loopWidth * 0.5;
        const maxEdge = loopWidth * 1.5;

        if (!force && area.scrollLeft >= minEdge && area.scrollLeft <= maxEdge) {
          return;
        }

        isNormalizing = true;

        while (area.scrollLeft < minEdge) {
          area.scrollLeft += loopWidth;
        }

        while (area.scrollLeft > maxEdge) {
          area.scrollLeft -= loopWidth;
        }

        isNormalizing = false;
      }

      function syncInfiniteTrack(preserveOffset = false) {
        if (!infinite || !track) {
          return;
        }

        const previousLoopWidth = loopWidth;
        const relativeOffset = previousLoopWidth
          ? ((area.scrollLeft - previousLoopWidth) % previousLoopWidth + previousLoopWidth) % previousLoopWidth
          : 0;

        measureLoopWidth();

        if (!loopWidth) {
          return;
        }

        area.scrollLeft = loopWidth + (preserveOffset ? relativeOffset : 0);
        normalizeInfiniteScroll(true);
      }

      if (infinite && track) {
        requestAnimationFrame(() => {
          syncInfiniteTrack();
        });

        area.addEventListener("scroll", () => {
          if (isNormalizing) {
            return;
          }

          normalizeInfiniteScroll();
        });
      }

      area.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || area.scrollWidth <= area.clientWidth) {
          return;
        }

        pointerId = event.pointerId;
        startX = event.clientX;
        startScrollLeft = area.scrollLeft;
        isDragging = true;

        area.classList.add("is-dragging");
        area.setPointerCapture(event.pointerId);
      });

      area.addEventListener("pointermove", (event) => {
        if (!isDragging || event.pointerId !== pointerId) {
          return;
        }

        area.scrollLeft = startScrollLeft - (event.clientX - startX);
        normalizeInfiniteScroll();
      });

      function stopDrag(event) {
        if (!isDragging || event.pointerId !== pointerId) {
          return;
        }

        if (area.hasPointerCapture(pointerId)) {
          area.releasePointerCapture(pointerId);
        }

        pointerId = null;
        isDragging = false;
        area.classList.remove("is-dragging");

        requestAnimationFrame(() => {
          normalizeInfiniteScroll(true);
        });
      }

      area.addEventListener("pointerup", stopDrag);
      area.addEventListener("pointercancel", stopDrag);

      window.addEventListener("resize", () => {
        syncInfiniteTrack(true);
      });
    });
  }

  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    carousel
      .querySelectorAll(
        ".case-carousel__controls, .case-carousel__nav, .case-carousel__button, .case-carousel__dots, [data-carousel-prev], [data-carousel-next], [data-carousel-current], [data-carousel-total]",
      )
      .forEach((node) => node.remove());

    const track = carousel.querySelector("[data-carousel-track]");
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const viewport = carousel.querySelector(".case-carousel__viewport");

    if (!track || slides.length === 0 || !viewport) {
      return;
    }

    let currentIndex = 0;
    let pointerId = null;
    let pointerStartX = 0;
    let dragOffset = 0;
    let isDragging = false;
    let suppressClick = false;

    slides.forEach((slide, index) => {
      const serial = slide.querySelector(".case-card__topline span:last-child");

      if (serial) {
        serial.innerHTML = `N&ordm; ${String(index + 1).padStart(2, "0")}`;
      }
    });

    const clampIndex = (nextIndex) => Math.max(0, Math.min(nextIndex, slides.length - 1));

    function getActiveOffset() {
      return slides[currentIndex]?.offsetLeft ?? 0;
    }

    function syncSlides() {
      slides.forEach((slide, index) => {
        const isActive = index === currentIndex;

        slide.setAttribute("aria-hidden", String(!isActive));
        slide.tabIndex = isActive ? 0 : -1;
        slide.classList.toggle("is-active", isActive);
      });
    }

    function render() {
      track.style.transform = `translateX(${-(getActiveOffset()) + dragOffset}px)`;
    }

    function setIndex(nextIndex) {
      currentIndex = clampIndex(nextIndex);
      dragOffset = 0;
      syncSlides();
      render();
    }

    function getResistance(deltaX) {
      const draggingPastFirst = currentIndex === 0 && deltaX > 0;
      const draggingPastLast = currentIndex === slides.length - 1 && deltaX < 0;

      return draggingPastFirst || draggingPastLast ? 0.35 : 1;
    }

    function stopDragging(pointerEvent) {
      if (!isDragging) {
        return;
      }

      if (pointerEvent && pointerId !== null && viewport.hasPointerCapture(pointerId)) {
        viewport.releasePointerCapture(pointerId);
      }

      pointerId = null;
      isDragging = false;
      dragOffset = 0;
      carousel.classList.remove("is-dragging");
    }

    function completeDrag(clientX) {
      const deltaX = clientX - pointerStartX;
      const threshold = Math.min(140, viewport.clientWidth * 0.12);

      if (Math.abs(deltaX) >= threshold) {
        currentIndex = clampIndex(currentIndex + (deltaX < 0 ? 1 : -1));
      }

      stopDragging();
      syncSlides();
      render();
    }

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex(currentIndex + 1);
      }
    });

    viewport.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) {
        return;
      }

      pointerId = event.pointerId;
      pointerStartX = event.clientX;
      dragOffset = 0;
      isDragging = true;
      suppressClick = false;

      carousel.classList.add("is-dragging");
      viewport.setPointerCapture(event.pointerId);
      render();
    });

    viewport.addEventListener("pointermove", (event) => {
      if (!isDragging || event.pointerId !== pointerId) {
        return;
      }

      const deltaX = event.clientX - pointerStartX;

      if (Math.abs(deltaX) > 6) {
        suppressClick = true;
      }

      dragOffset = deltaX * getResistance(deltaX);
      render();
    });

    viewport.addEventListener("pointerup", (event) => {
      if (!isDragging || event.pointerId !== pointerId) {
        return;
      }

      completeDrag(event.clientX);
    });

    viewport.addEventListener("pointercancel", (event) => {
      if (!isDragging || event.pointerId !== pointerId) {
        return;
      }

      stopDragging(event);
      syncSlides();
      render();
    });

    viewport.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    viewport.addEventListener("click", (event) => {
      if (suppressClick) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
        return;
      }

      const clickedSlide = event.target.closest("[data-carousel-slide]");

      if (!clickedSlide) {
        return;
      }

      const clickedIndex = slides.indexOf(clickedSlide);

      if (clickedIndex >= 0 && clickedIndex !== currentIndex) {
        event.preventDefault();
        setIndex(clickedIndex);
      }
    });

    window.addEventListener("resize", () => {
      if (isDragging) {
        stopDragging();
      }

      syncSlides();
      render();
    });

    syncSlides();
    render();
  });

  setupRevealAnimations();
  setupNewsTicker();
  setupPracticePageNavigation();
  setupDragScroll();
})();
