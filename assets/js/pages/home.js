/* Strona główna – odwzorowanie projektu KBR_Home.pdf */
KBR.pages = KBR.pages || {};
KBR.pages.home = function () {
  const ui = KBR.ui, C = KBR.content, H = KBR.data.home, I = KBR.icon, esc = ui.esc;
  const get = function (id) { return C.get(id); };
  const lead = get(H.lead);
  const subscribed = KBR.subscription.has('premium');

  const picks = H.picks.map(get);
  /* zdjęcie przy środkowym artykule kolumny */
  const mid = Math.floor(picks.length / 2);
  const pickCards = picks.map(function (m, i) {
    if (i !== mid) return ui.card(m, { noImage: true, date: false });
    return '<article class="card card--img">' + ui.media(m) + ui.topicLabel(m) +
      ui.titleLink(m) + '<p class="t-body card__lead">' + esc(m.lead) + '</p><p class="t-meta card__author">' + ui.metaLine(m) + '</p></article>';
  }).join('');
  const latest = H.latest.map(get).map(function (m) { return ui.card(m, { noImage: true, date: false }); }).join('');


  const issue = C.currentIssue();
  const toc = issue.toc.map(get);
  const tocHtml = toc.map(function (m, i) {
    return '<a class="toc-item" href="' + ui.materialUrl(m) + '" data-issue-item="' + m.id + '" data-active="' + (i === 0) + '">' +
      '<span class="toc-item__arrow">' + I('chevLeft', 22, 'stroke-width="2"') + '</span>' +
      (m.access === 'premium' ? '<span class="toc-item__cat"><span class="t-label">' + esc(C.topic(m.topic).name) + '</span>' + ui.premiumTag(m) + '</span>' : '<span class="t-label">' + esc(C.topic(m.topic).name) + '</span>') + '<span class="t-title-card">' + esc(m.title) + (m.access === 'premium' ? '<span class="visually-hidden"> (Premium)</span>' : '') + '</span>' +
      '<span class="t-meta">' + esc(m.authors.filter(function (a) { return a.role === 'autor'; }).map(function (a) { return C.author(a.id).name; }).join(', ')) + '</span></a>';
  }).join('');

  const latest2 = H.latest.slice(0, 2).map(get).map(function (m) { return ui.card(m, { noImage: true, date: false }); }).join('');
  /* Zajawka najnowszego numeru w kolumnie „Najnowsze” */
  const magTeaser = '<a class="mag-teaser" href="#/magazyn" aria-label="Nowy numer magazynu KBR: ' + esc(issue.label) + ', ' + esc(issue.title) + '">' +
    '<span class="mag-cover mag-teaser__cover">' + ui.magCoverBook(issue) + '</span>' +
    '<span class="mag-teaser__body"><span class="t-label">Nowy numer</span>' +
      '<span class="mag-teaser__issue">' + esc(issue.label) + '</span>' +
      '<span class="mag-teaser__title">' + esc(issue.title) + '</span>' +
      '<span class="mag-teaser__more">Zobacz spis treści' + I('chevRight', 14, 'stroke-width="2.25"') + '</span></span></a>';

  const topicTiles = KBR.data.topics.map(function (t) { return { t: t, n: C.list({ topic: t.id }).length }; })
    .filter(function (x) { return x.n > 0; }).sort(function (x, y) { return y.n - x.n; }).slice(0, 5)
    .map(function (x) { return x.t; }).map(function (t, i) {
    const items = C.list({ topic: t.id });
    const top = items[0];
    return '<a class="topic-tile' + (i === 0 ? ' topic-tile--lg' : '') + '" href="#/tematy/' + t.slug + '">' +
      (top ? '<img src="' + ui.img(top.image) + '" alt="" loading="lazy"' + (top.imagePos ? ' style="object-position:' + top.imagePos + '"' : '') + '>' : '') +
      '<span class="topic-tile__shade" aria-hidden="true"></span>' +
      '<span class="topic-tile__nr" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="topic-tile__body"><span class="topic-tile__name">' + esc(t.name) + '</span>' +
        '<span class="topic-tile__count">' + ui.plMat(items.length) + '</span>' +
        (top ? '<span class="topic-tile__latest"><span>Najnowszy</span>' + esc(top.title) + '</span>' : '') +
      '</span><span class="topic-tile__arrow" aria-hidden="true">' + I('chevRight', 20, 'stroke-width="2"') + '</span></a>';
  }).join('');
  const shown = KBR.data.topics.map(function (t) { return { t: t, n: C.list({ topic: t.id }).length }; })
    .filter(function (x) { return x.n > 0; }).sort(function (x, y) { return y.n - x.n; }).slice(0, 5).map(function (x) { return x.t.id; });
  const topicMore = KBR.data.topics.filter(function (t) { return shown.indexOf(t.id) === -1; }).map(function (t) {
    const n = C.list({ topic: t.id }).length;
    return '<li><a class="topic-row" href="#/tematy/' + t.slug + '"><span class="topic-row__name">' + esc(t.name) + '</span><span class="topic-row__count">' + ui.plMat(n) + '</span>' + I('chevRight', 18, 'stroke-width="2"') + '</a></li>';
  }).join('');
  const qSrc = C.list({}).filter(function (x) { return x.issue === issue.id && JSON.stringify(x.body || []).indexOf('"t":"pull"') !== -1; })[0];
  const pullOf = function (x) { const flat = []; (x.body || []).forEach(function (y) { flat.push(y); (y.blocks || []).forEach(function (z) { flat.push(z); }); }); const b = flat.filter(function (y) { return y.t === 'pull'; })[0]; return b ? b.x : ''; };
  const firstAuthor = function (x) { const a = x.authors.filter(function (y) { return y.role === 'autor'; })[0]; return a ? C.author(a.id) : null; };
  const usedA = {};
  const withQuotes = (qSrc ? [qSrc] : []).concat(C.list({ formats: ['article'] }).filter(function (x) { return x !== qSrc && pullOf(x); }))
    .filter(function (x) { const p = firstAuthor(x); if (!p || p.id === 'alk' || usedA[p.id]) return false; usedA[p.id] = 1; return true; }).slice(0, 4);
  const opFrom = function (x) { return '<span class="op__from">Z artykułu: <span class="op__from-title">' + esc(x.title) + '</span>' + (x.access === 'premium' ? ' ' + ui.premiumTag(x) : '') + '</span>'; };
  const feat = withQuotes[0], rest = withQuotes.slice(1);
  const quoteBand = feat ? '<section class="container home-quote" aria-labelledby="h-quote">' +
      '<div class="op-head"><h2 class="t-section col-head" id="h-quote">Punkt widzenia</h2>' +
      (rest.length > 1 ? '<div class="op-nav" hidden><button type="button" class="op-nav__btn" data-op-prev aria-label="Poprzednie opinie" aria-controls="op-list">' + I('chevLeft', 20, 'stroke-width="2"') + '</button><button type="button" class="op-nav__btn" data-op-next aria-label="Następne opinie" aria-controls="op-list">' + I('chevRight', 20, 'stroke-width="2"') + '</button></div>' : '') + '</div>' +
      '<a class="op-feat op-hit" href="' + ui.materialUrl(feat) + '">' + ui.personPhoto(firstAuthor(feat), 'person-photo--136') +
        '<span class="op-feat__body">' + '<span class="op__quote">„' + esc(pullOf(feat)) + '”</span>' +
        '<span class="op-feat__cap"><span class="op__name">' + esc(firstAuthor(feat).name) + '</span>' + (firstAuthor(feat).role ? '<span class="op__role">' + esc(firstAuthor(feat).role) + '</span>' : '') + '</span>' + opFrom(feat) + '</span></a>' +
      (rest.length ? '<ul class="op-list" id="op-list" role="list" tabindex="-1">' + rest.map(function (x) {
        const p = firstAuthor(x);
        return '<li><a class="op op-hit" href="' + ui.materialUrl(x) + '">' + '<span class="op__quote">„' + esc(pullOf(x)) + '”</span>' +
          '<span class="op__cap">' + ui.personPhoto(p, 'person-photo--56') + '<span class="op__who"><span class="op__name">' + esc(p.name) + '</span>' + (p.role ? '<span class="op__role">' + esc(p.role) + '</span>' : '') + '</span></span>' + opFrom(x) + '</a></li>';
      }).join('') + '</ul>' : '') +
      '<div class="op-m"><ul class="op-m__list" role="list" aria-label="Punkt widzenia">' + withQuotes.map(function (x, k) {
        const p = firstAuthor(x);
        return '<li id="op-m-' + k + '" aria-label="' + (k + 1) + ' z ' + withQuotes.length + '"><a class="op-m__card op-hit" href="' + ui.materialUrl(x) + '">' +
          '<span class="op-m__who">' + ui.personPhoto(p, 'person-photo--56') + '<span class="op__who"><span class="op__name">' + esc(p.name) + '</span>' + (p.role ? '<span class="op__role">' + esc(p.role) + '</span>' : '') + '</span></span>' +
          '<span class="op__quote">„' + esc(pullOf(x)) + '”</span>' + opFrom(x) + '</a></li>';
      }).join('') + '</ul>' +
      (withQuotes.length > 1 ? '<div class="op-m__bar"><div class="op-m__dots">' + withQuotes.map(function (x, k) { return '<button type="button" class="op-m__dot" data-op-dot="' + k + '" aria-label="Opinia ' + (k + 1) + ' z ' + withQuotes.length + '"' + (k === 0 ? ' aria-current="true"' : '') + '></button>'; }).join('') + '</div>' +
        '<div class="op-nav"><button type="button" class="op-nav__btn" data-op-m-prev aria-label="Poprzednia opinia" disabled>' + I('chevLeft', 20, 'stroke-width="2"') + '</button><button type="button" class="op-nav__btn" data-op-m-next aria-label="Następna opinia">' + I('chevRight', 20, 'stroke-width="2"') + '</button></div></div>' : '') +
      '</div>' +
    '</section>' : '';
  const recPool = C.list({ formats: ['article', 'case'] }).filter(function (x) { return x.id !== lead.id; });
  const recFeat = recPool.filter(function (x) { return x.access === 'premium'; })[0] || recPool[0];
  const popular = recPool.filter(function (x) { return x !== recFeat; }).slice(3, 7);
  const recBand = '<section class="container home-rec" aria-label="KBR poleca">' +
      '<div class="home-rec__col"><h2 class="t-section col-head">KBR poleca</h2>' + ui.card(recFeat, {}) + '</div>' +
      '<div class="home-rec__col"><h2 class="t-section col-head">Najpopularniejsze</h2><ol class="pop-list" role="list">' + popular.map(function (x) {
        return '<li class="pop"><a class="pop__thumb" href="' + ui.materialUrl(x) + '" tabindex="-1" aria-hidden="true"><img src="' + ui.img(x.image) + '" alt="" loading="lazy"' + (x.imagePos ? ' style="object-position:' + x.imagePos + '"' : '') + '></a>' + ui.card(x, { noImage: true }) + '</li>';
      }).join('') + '</ol></div>' +
      '<div class="home-rec__col home-rec__nl"><h2 class="t-section col-head">Newsletter</h2>' + ui.newsletterForm('home-rec') + '</div>' +
    '</section>';
  const onTimeUsed = [lead.id].concat(picks.map(function (x) { return x.id; }), H.latest.slice(0, 2));
  const onTime = C.list({ formats: ['article', 'case'] }).filter(function (x) { return onTimeUsed.indexOf(x.id) === -1; }).slice(0, 4);
  const onTimeBand = onTime.length ? '<section class="container home-ontime" aria-labelledby="h-ontime">' + ui.sectionHead('W centrum uwagi', { href: '#/artykuly', label: 'Wszystkie artykuły' }, { id: 'h-ontime' }) +
    '<div class="grid-4">' + onTime.map(function (x) { return ui.card(x, {}); }).join('') + '</div></section>' : '';
  const html = '' +
    '<h1 class="visually-hidden">Kozminski Business Review – strona główna</h1>' +
    '<div class="container"><div class="home-hero">' +
      '<article class="lead-story">' + ui.media(lead) +
        '<div class="lead-story__meta">' + ui.topicLabel(lead).replace('card__cat', '') + '</div>' +
        '<h2><a class="t-title-xl hover-title" href="' + ui.materialUrl(lead) + '">' + esc(lead.title) + '</a></h2>' +
        '<p class="t-lead">' + esc(lead.lead) + '</p><p class="t-meta">' + ui.metaLine(lead) + '</p>' +
      '</article>' +
      '<section class="picks" aria-labelledby="h-picks"><h2 class="t-section col-head" id="h-picks">Wybrane dla Ciebie</h2>' + pickCards + '</section>' +
      '<section class="latest" aria-labelledby="h-latest"><h2 class="t-section col-head" id="h-latest">Najnowsze</h2>' + magTeaser + latest2 + '</section>' +
    '</div></div>' +


    '<aside class="container" aria-label="Reklama">' + ui.promo() + '</aside>' + onTimeBand +

    '<section class="mag" aria-labelledby="h-magazine"><div class="container">' +
      '<div class="mag__head mag-reveal" style="--i:0"><h2 id="h-magazine">' + I('newspaper', 22) + 'Magazyn</h2></div>' +
      '<div class="mag__grid">' +
        '<div class="mag__coverwrap mag-reveal" style="--i:1">' +
          '<a class="mag-cover" href="#/magazyn" aria-label="Aktualny numer: ' + esc(issue.label) + ' – ' + esc(issue.title) + '">' +
            ui.magCoverBook(issue) + '<span class="mag-cover__shadow" aria-hidden="true"></span></a>' +
        '</div>' +
        '<div class="mag__info">' +
          '<span class="mag__kicker mag-reveal" style="--i:2">Aktualny numer</span>' +
          '<h3 class="mag__title mag-reveal" style="--i:3">' + esc(issue.title) + '</h3>' +
          '<p class="mag__desc mag-reveal" style="--i:4">' + esc(issue.description) + '</p>' +
          '<ol class="mag__toc" aria-label="Spis treści numeru ' + esc(issue.label) + '">' + toc.map(function (m, i) {
            return '<li class="mag-reveal" style="--i:' + (5 + i) + '"><a class="mag-toc" href="' + ui.materialUrl(m) + '">' +
              '<span class="mag-toc__nr">' + String(i + 1).padStart(2, '0') + '</span>' +
              '<span class="mag-toc__thumb" aria-hidden="true"><img src="' + ui.img(issue.featureImage[m.id] || m.image) + '" alt=""></span>' +
              '<span class="mag-toc__body"><span class="mag-toc__topic">' + esc(C.topic(m.topic).name) + '</span><span class="mag-toc__title">' + esc(m.title) + (m.access === 'premium' ? '<span class="visually-hidden"> (Premium)</span>' : '') + '</span>' +
              '<span class="mag-toc__author">Autor: ' + esc(m.authors.filter(function (x) { return x.role === 'autor'; }).map(function (x) { return C.author(x.id).name; }).join(', ')) + '</span></span>' +
              '<span class="mag-toc__arrow" aria-hidden="true">' + I('chevRight', 18, 'stroke-width="2"') + '</span></a></li>';
          }).join('') + '</ol>' +
          '<div class="mag__cta mag-reveal" style="--i:9"><a class="btn btn--primary" href="#/magazyn">Czytaj numer' + I('chevRight', 16, 'stroke-width="2"') + '</a><button type="button" class="btn mag__btn-ghost" data-action="mag-download">Pobierz PDF</button></div>' +
        '</div>' +
      '</div>' +
    '</div></section>' + quoteBand + recBand +
    '<section class="container home-topics" aria-labelledby="h-topics">' + ui.sectionHead('Tematy', { href: '#/tematy', label: 'Wszystkie tematy' }, { id: 'h-topics' }) +
      '<div class="topic-mosaic">' + topicTiles + '</div></section>' +


    (KBR.subscription.has('premium') ? '<div class="cta-wide" aria-hidden="true"></div>' : '<div class="container cta-wide"><a class="btn btn--primary btn--lg" href="#/subskrypcja">Wybierz subskrypcję i czytaj bez ograniczeń' + I('chevRight', 24, 'stroke-width="2.25"') + '</a></div>');

  return {
    title: 'Kozminski Business Review',
    html: html,
    mount: function (root) {
      const opList = root.querySelector('.op-list'), opNav = root.querySelector('.op-nav');
      if (opList && opNav) {
        const prev = opNav.querySelector('[data-op-prev]'), next = opNav.querySelector('[data-op-next]');
        const sync = function () {
          const max = opList.scrollWidth - opList.clientWidth;
          opNav.hidden = max < 4;
          prev.disabled = opList.scrollLeft < 4; next.disabled = opList.scrollLeft > max - 4;
        };
        const step = function (d) { const li = opList.querySelector('li'); opList.scrollBy({ left: d * (li ? li.offsetWidth : opList.clientWidth), behavior: 'smooth' }); };
        prev.addEventListener('click', function () { step(-1); });
        next.addEventListener('click', function () { step(1); });
        opList.addEventListener('scroll', sync, { passive: true });
        window.addEventListener('resize', sync);
        sync();
      }
      if (!document.__kbrOpM) {
        document.__kbrOpM = true;
        const parts = function () { const l = document.querySelector('.op-m__list'); return l ? { l: l, items: l.children, dots: document.querySelectorAll('[data-op-dot]'), prev: document.querySelector('[data-op-m-prev]'), next: document.querySelector('[data-op-m-next]') } : null; };
        const cur = function (p) { let best = 0, d = 1e9; for (let k = 0; k < p.items.length; k++) { const v = Math.abs(p.items[k].offsetLeft - p.l.offsetLeft - p.l.scrollLeft); if (v < d) { d = v; best = k; } } return best; };
        const go = function (p, k) { const li = p.items[Math.max(0, Math.min(p.items.length - 1, k))]; p.l.scrollTo({ left: li.offsetLeft - p.l.offsetLeft, behavior: 'smooth' }); };
        const msync = function () { const p = parts(); if (!p) return; const k = cur(p); p.dots.forEach(function (b, j) { if (j === k) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); }); if (p.prev) { p.prev.disabled = k === 0; p.next.disabled = k === p.items.length - 1; } };
        document.addEventListener('click', function (ev) {
          const b = ev.target.closest && ev.target.closest('[data-op-dot],[data-op-m-prev],[data-op-m-next]'); if (!b) return;
          const p = parts(); if (!p) return;
          if (b.hasAttribute('data-op-dot')) go(p, +b.getAttribute('data-op-dot'));
          else go(p, cur(p) + (b.hasAttribute('data-op-m-next') ? 1 : -1));
        });
        let t; document.addEventListener('scroll', function (ev) { if (ev.target && ev.target.classList && ev.target.classList.contains('op-m__list')) { clearTimeout(t); t = setTimeout(msync, 60); } }, { capture: true, passive: true });
      }
      const sec = root.querySelector('.mag');
      if (!sec) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce || !('IntersectionObserver' in window)) sec.classList.add('is-in');
      else {
        const io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { sec.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.15 });
        io.observe(sec);
      }
      ui.magCoverMotion(sec.querySelector('.mag-cover'));
      const dl = sec.querySelector('[data-action="mag-download"]');
      if (dl) dl.addEventListener('click', function () {
        if (!KBR.subscription.has('magazine-pdf')) { KBR.app.navigate('#/subskrypcja'); setTimeout(function () { ui.toast('Magazyn w formacie PDF jest dostępny w pakietach „Cyfrowy” i „Pełny”.'); }, 150); }
        else ui.toast('Pobieranie PDF – plik demonstracyjny niedostępny.');
      });
      const spines = sec.querySelectorAll('.spine'), cap = sec.querySelector('.mag__shelf-caption');
      function pick(sp) {
        spines.forEach(function (x) { x.classList.toggle('is-out', x === sp); });
        cap.querySelector('.mag__shelf-nr').textContent = sp.dataset.nr;
        cap.querySelector('.mag__shelf-title').textContent = sp.dataset.title;
        cap.querySelector('.mag__shelf-desc').textContent = sp.dataset.desc;
      }
      if (spines.length && cap) {
        pick(spines[0]);
        spines.forEach(function (sp) { sp.addEventListener('pointerenter', function () { pick(sp); }); sp.addEventListener('focus', function () { pick(sp); }); });
      }
    }
  };
};
