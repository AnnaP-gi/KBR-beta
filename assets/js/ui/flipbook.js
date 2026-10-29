/* Czytnik wydania – podgląd w formie przewracanych stron (flipbook). Strony demonstracyjne: puste kartki „TREŚĆ”. */
(function (ui) {
  const I = KBR.icon, esc = ui.esc;

  ui.flipbook = function (issue, opts) {
    opts = opts || {};
    const total = opts.total || 24;
    const limit = opts.limit || 0;           // 0 = pełny dostęp
    const last = limit ? limit : total - 1;   // indeks ostatniej strony
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prevFocus = document.activeElement;

    function pageHtml(i) {
      if (i < 0 || i > last) return '';
      if (i === 0) return '<div class="fb-page fb-page--cover"><div class="mag-cover">' + ui.magCoverBook(issue) + '</div></div>';
      if (limit && i === limit) {
        return '<div class="fb-page fb-page--cta"><span class="t-label">Podgląd zakończony</span><p class="fb-cta__title">Czytaj cały numer ' + esc(issue.label) + '</p>' +
          '<p class="fb-cta__text">Pełne wydanie w wersji elektronicznej jest dostępne w każdym pakiecie subskrypcji.</p>' +
          '<a class="btn btn--primary" href="#/subskrypcja" data-fb-close>Zobacz pakiety' + I('chevRight', 16, 'stroke-width="2"') + '</a></div>';
      }
      return '<div class="fb-page' + (i % 2 ? ' fb-page--l' : ' fb-page--r') + '"><span class="fb-page__label">Treść</span><span class="fb-page__nr">' + i + '</span></div>';
    }

    const el = document.createElement('div');
    el.className = 'fb';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Czytnik wydania ' + issue.label);
    el.innerHTML = '<div class="fb__bar"><div class="fb__title"><span class="t-label">Magazyn KBR</span><strong>' + esc(issue.label) + ' · ' + esc(issue.title) + '</strong></div>' +
      '<span class="fb__count" aria-live="polite"></span>' +
      '<button type="button" class="fb__close" data-fb-close aria-label="Zamknij czytnik">' + I('close', 22, 'stroke-width="2"') + '</button></div>' +
      '<div class="fb__stage"><button type="button" class="fb__nav fb__nav--prev" data-fb-prev aria-label="Poprzednia strona">' + I('chevLeft', 28, 'stroke-width="1.75"') + '</button>' +
      '<div class="fb-book"><div class="fb-slot fb-slot--l"></div><div class="fb-slot fb-slot--r"></div></div>' +
      '<button type="button" class="fb__nav fb__nav--next" data-fb-next aria-label="Następna strona">' + I('chevRight', 28, 'stroke-width="1.75"') + '</button></div>' +
      (limit ? '<p class="fb__note">Podgląd: ' + limit + ' z ' + total + ' stron</p>' : '');
    document.body.appendChild(el);
    document.documentElement.classList.add('fb-open');

    const book = el.querySelector('.fb-book'), L = el.querySelector('.fb-slot--l'), R = el.querySelector('.fb-slot--r');
    const count = el.querySelector('.fb__count'), prevB = el.querySelector('[data-fb-prev]'), nextB = el.querySelector('[data-fb-next]');
    let single = window.innerWidth < 760;
    let s = 0;      // rozkładówka: 0 = okładka, k = strony 2k-1 i 2k
    let p = 0;      // strona w trybie jednej kolumny
    let busy = false;
    const maxS = Math.ceil(last / 2);

    function render() {
      book.classList.toggle('is-single', single);
      book.classList.toggle('is-cover', !single && s === 0);
      if (single) {
        L.innerHTML = ''; R.innerHTML = pageHtml(p);
        count.textContent = p === 0 ? 'Okładka' : 'Strona ' + (p + 1) + ' / ' + total;
        prevB.disabled = p === 0; nextB.disabled = p >= last;
      } else {
        L.innerHTML = pageHtml(2 * s - 1); R.innerHTML = pageHtml(2 * s);
        count.textContent = s === 0 ? 'Okładka' : 'Strony ' + (2 * s) + '–' + Math.min(2 * s + 1, total) + ' / ' + total;
        prevB.disabled = s === 0; nextB.disabled = s >= maxS;
      }
    }

    function turn(dir) {
      if (busy) return;
      if (single) {
        const np = p + dir; if (np < 0 || np > last) return;
        p = np;
        if (reduce) return render();
        busy = true; book.classList.add(dir > 0 ? 'is-slide-next' : 'is-slide-prev');
        setTimeout(function () { render(); book.classList.remove('is-slide-next', 'is-slide-prev'); busy = false; }, 180);
        return;
      }
      const ns = s + dir; if (ns < 0 || ns > maxS) return;
      if (reduce) { s = ns; return render(); }
      busy = true;
      const leaf = document.createElement('div');
      leaf.className = 'fb-leaf ' + (dir > 0 ? 'fb-leaf--next' : 'fb-leaf--prev');
      if (dir > 0) {
        leaf.innerHTML = '<div class="fb-leaf__face fb-leaf__front">' + pageHtml(2 * s) + '</div><div class="fb-leaf__face fb-leaf__back">' + pageHtml(2 * ns - 1) + '</div>';
        R.innerHTML = pageHtml(2 * ns);
      } else {
        leaf.innerHTML = '<div class="fb-leaf__face fb-leaf__front">' + pageHtml(2 * s - 1) + '</div><div class="fb-leaf__face fb-leaf__back">' + pageHtml(2 * ns) + '</div>';
        L.innerHTML = pageHtml(2 * ns - 1);
      }
      if (s === 0 || ns === 0) book.classList.remove('is-cover');
      book.appendChild(leaf);
      requestAnimationFrame(function () { requestAnimationFrame(function () { leaf.classList.add('is-turning'); }); });
      setTimeout(function () { s = ns; leaf.remove(); render(); busy = false; }, 720);
    }

    function close() {
      el.remove();
      document.documentElement.classList.remove('fb-open');
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('hashchange', close);
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    }
    function onKey(e) {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') turn(1);
      else if (e.key === 'ArrowLeft') turn(-1);
    }
    function onResize() {
      const now = window.innerWidth < 760;
      if (now === single) return;
      if (now) p = Math.max(0, 2 * s - 1); else s = Math.ceil(p / 2);
      single = now; render();
    }
    el.addEventListener('click', function (e) {
      if (e.target.closest('[data-fb-close]')) { close(); return; }
      if (e.target.closest('[data-fb-prev]')) turn(-1);
      if (e.target.closest('[data-fb-next]')) turn(1);
      const page = e.target.closest('.fb-slot');
      if (page && !e.target.closest('a,button')) turn(page === L ? -1 : 1);
    });
    let tx = null;
    book.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
    book.addEventListener('touchend', function (e) { if (tx === null) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 40) turn(d < 0 ? 1 : -1); tx = null; });
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', close);
    render();
    el.querySelector('.fb__close').focus();
    return { close: close };
  };
})(KBR.ui);
