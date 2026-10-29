/* Listy materiałów: artykuły, tematy, formaty, wyszukiwanie, autorzy. */
(function () {
  const ui = KBR.ui, C = KBR.content, I = KBR.icon, esc = ui.esc;

  function q(route, patch) {
    const p = Object.assign({}, route.query, patch);
    const s = Object.keys(p).filter(function (k) { return p[k]; }).map(function (k) { return k + '=' + encodeURIComponent(p[k]); }).join('&');
    return '#' + route.path + (s ? '?' + s : '');
  }
  function chips(label, items) {
    return '<div class="group"><span id="lbl-' + label.replace(/\W/g, '') + '">' + label + '</span><nav aria-labelledby="lbl-' + label.replace(/\W/g, '') + '" class="chips">' +
      items.map(function (it) { return '<a class="chip" href="' + it.href + '"' + (it.active ? ' aria-current="true"' : '') + '>' + esc(it.label) + '</a>'; }).join('') + '</nav></div>';
  }
  function topicChips(route, current) {
    return chips('Temat', [{ label: 'Wszystkie', href: q(route, { temat: '' }), active: !current }].concat(KBR.data.topics.map(function (t) {
      return { label: t.name, href: q(route, { temat: t.slug }), active: current === t.id };
    })));
  }
  function accessChips(route) {
    const a = route.query.dostep || '';
    return chips('Dostęp', [{ label: 'Wszystkie', href: q(route, { dostep: '' }), active: !a }, { label: 'Premium', href: q(route, { dostep: 'premium' }), active: a === 'premium' }, { label: 'Bezpłatne', href: q(route, { dostep: 'bezplatne' }), active: a === 'bezplatne' }]);
  }
  const FORMAT_FILTERS = [{ id: '', label: 'Wszystkie formaty', formats: null }, { id: 'artykuly', label: 'Artykuły i analizy', formats: ['article'] }, { id: 'case', label: 'Studia przypadków', formats: ['case'] }, { id: 'media', label: 'Podcasty i wideo', formats: ['podcast', 'video'] }];
  function formatChips(route) {
    const cur = route.query.format || '';
    return chips('Format', FORMAT_FILTERS.map(function (f) { return { label: f.label, href: q(route, { format: f.id }), active: cur === f.id }; }));
  }
  function formatsFromQuery(route) { const f = FORMAT_FILTERS.find(function (x) { return x.id === (route.query.format || ''); }); return f ? f.formats : null; }

  function page(o) {
    const list = o.items.length
      ? '<div class="rows">' + o.items.map(ui.row).join('') + '</div>'
      : '<div class="empty" role="status">' + I('search', 40) + '<h2>' + (o.emptyTitle || 'Brak materiałów') + '</h2><p>' + (o.emptyText || 'Zmień filtry, aby zobaczyć więcej materiałów.') + '</p><a class="btn btn--primary" href="#/artykuly">Przeglądaj artykuły</a></div>';
    return '<div class="container">' +
      '<header class="page-head">' + ui.crumbs(o.crumbs) + '<h1>' + esc(o.title) + '</h1>' + (o.intro ? '<p>' + o.intro + '</p>' : '') + (o.actions || '') + '</header>' +
      '<div class="list-layout">' + (o.filters ? '<div class="list-toolbar">' + o.filters + '<p class="result-count" role="status">' + countLabel(o.items.length) + '</p></div>' : '') + list + '</div></div>';
  }
  function countLabel(n) { const r = n % 10, r100 = n % 100; return n + ' ' + (n === 1 ? 'materiał' : (r >= 2 && r <= 4 && (r100 < 12 || r100 > 14)) ? 'materiały' : 'materiałów'); }

  KBR.pages.articles = function (route) {
    const topic = route.query.temat ? C.topicBySlug(route.query.temat) : null;
    const a = route.query.dostep === 'premium' ? 'premium' : route.query.dostep === 'bezplatne' ? 'free' : null;
    const items = C.list({ formats: ['article'], topic: topic && topic.id, access: a });
    return { title: 'Artykuły i analizy – KBR', html: page({
      title: 'Artykuły i analizy', intro: 'Eksperckie teksty o zarządzaniu, strategii, technologii i przywództwie. Materiały oznaczone jako Premium są dostępne w ramach subskrypcji.',
      crumbs: [{ label: 'Strona główna', href: '#/' }, { label: 'Artykuły' }], filters: topicChips(route, topic && topic.id) + accessChips(route), items: items }) };
  };

  KBR.pages.formatList = function (formatIds, title, intro, crumb) {
    return function (route) {
      const topic = route.query.temat ? C.topicBySlug(route.query.temat) : null;
      const items = C.list({ formats: formatIds, topic: topic && topic.id });
      return { title: title + ' – KBR', html: page({ title: title, intro: intro, crumbs: [{ label: 'Strona główna', href: '#/' }, { label: crumb }], filters: topicChips(route, topic && topic.id), items: items }) };
    };
  };

  KBR.pages.topics = function () {
    const items = KBR.data.topics.map(function (t) {
      const n = C.list({ topic: t.id }).length;
      return '<li><a class="topic-row" href="#/tematy/' + t.slug + '"><span class="topic-row__name">' + esc(t.name) + '</span><span class="topic-row__count">' + ui.plMat(n) + '</span>' + I('chevRight', 20, 'stroke-width="2"') + '</a></li>';
    }).join('');
    return { title: 'Tematy – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Tematy' }]) + '<h1>Tematy</h1></header>' +
      '<ul class="topic-list">' + items + '</ul></div>' +
      '<aside class="container topics-promo" aria-label="Reklama">' + ui.promo() + '</aside>' };
  };

  KBR.pages.topic = function (route) {
    const t = C.topicBySlug(route.params.slug);
    if (!t) return KBR.pages.notFound();
    const items = C.list({ topic: t.id });
    const on = KBR.auth.currentUser() && KBR.follow.isFollowing(t.id);
    const followBtn = '<div class="topic-actions"><button type="button" class="save-btn" data-action="toggle-follow" data-id="' + t.id + '" aria-pressed="' + (on ? 'true' : 'false') + '">' + I(on ? 'bookmarkFill' : 'bookmark', 18) + '<span>' + (on ? 'Obserwujesz temat' : 'Obserwuj cały temat') + '</span></button></div>';
    return { title: t.name + ' – KBR', html: page({ title: t.name, intro: 'Wszystkie formaty materiałów przypisanych do tego tematu głównego. Każdy materiał otwiera się pod tym samym adresem niezależnie od miejsca, z którego do niego trafiasz.',
      crumbs: [{ label: 'Strona główna', href: '#/' }, { label: 'Tematy', href: '#/tematy' }, { label: t.name }], items: items }) };
  };

  /* Wyszukiwanie: zakres („Szukaj w”) jako pierwszy poziom, filtry zależne od zakresu jako drugi. */
  const norm = function (s) { return (s || '').toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l'); };
  function matches(term, parts) { const hay = norm(parts.join(' ')); return norm(term).split(/\s+/).filter(Boolean).every(function (t) { return hay.indexOf(t) !== -1; }); }
  function personRoles(a) {
    const r = { autor: 0, ekspert: 0 };
    KBR.data.materials.forEach(function (m) { m.authors.forEach(function (x) { if (x.id === a.id) r[x.role]++; }); });
    return r;
  }
  function personHit(a) {
    const r = personRoles(a);
    const roles = [r.autor ? 'Autor' : '', r.ekspert ? 'Ekspert' : ''].filter(Boolean).join(' · ');
    return '<a class="hit" href="#/autor/' + a.id + '">' + ui.personPhoto(a, 'person-photo--48') + '<div class="hit__body"><span class="t-label">' + (roles || 'Osoba') + '</span><span class="hit__title">' + esc(a.name) + '</span><span class="hit__text">' + esc(a.bio) + '</span><span class="t-meta">' + countLabel(r.autor + r.ekspert) + '</span></div>' + I('chevRight', 18, 'stroke-width="2"') + '</a>';
  }
  function eventHit(e) {
    return '<a class="hit" href="#/wydarzenie/' + e.id + '"><img class="hit__img" src="' + ui.img(e.image) + '" alt="" loading="lazy"><div class="hit__body"><span class="t-label">' + esc(e.category) + '</span><span class="hit__title">' + esc(e.title) + '</span><span class="t-meta">' + esc(e.date) + ' · ' + esc(e.place) + '</span></div>' + I('chevRight', 18, 'stroke-width="2"') + '</a>';
  }
  function offerHit(o) {
    return '<a class="hit" href="' + o.href + '" target="_blank" rel="noopener"><span class="hit__ico" aria-hidden="true">' + I('cap', 22) + '</span><div class="hit__body"><span class="t-label">' + esc(o.kind) + '</span><span class="hit__title">' + esc(o.title) + '</span><span class="hit__text">' + esc(o.lead) + '</span></div>' + I('external', 18) + '<span class="visually-hidden"> (serwis uczelni, nowa karta)</span></a>';
  }
  function plural(n, one, few, many) { const r = n % 10, r100 = n % 100; return n + ' ' + (n === 1 ? one : (r >= 2 && r <= 4 && (r100 < 12 || r100 > 14)) ? few : many); }

  KBR.pages.search = function (route) {
    const term = (route.query.q || '').trim();
    const R = { materialy: [], osoby: [] };
    if (term) {
      R.materialy = C.search(term);
      R.osoby = KBR.data.authors.filter(function (a) { return !a.institution && matches(term, [a.name]); })
        .filter(function (a) { const r = personRoles(a); return r.autor + r.ekspert > 0; });
    }
    const SCOPES = [
      { id: '', label: 'Wszystko', n: R.materialy.length + R.osoby.length },
      { id: 'materialy', label: 'Artykuły', n: R.materialy.length, render: ui.row, wrap: 'rows' },
      { id: 'osoby', label: 'Autorzy i eksperci', n: R.osoby.length, render: personHit, wrap: 'hits' }
    ];
    const cur = SCOPES.find(function (s) { return s.id === (route.query.w || ''); }) || SCOPES[0];
    const tabs = '<nav class="search-scope" aria-label="Wyniki wyszukiwania">' + SCOPES.map(function (s) {
      return '<a href="' + q(route, { w: s.id }) + '"' + (s === cur ? ' aria-current="page"' : '') + '>' + s.label + '<span class="search-scope__n">' + s.n + '</span></a>';
    }).join('') + '</nav>';
    const listOf = function (sc, items) { return '<div class="' + sc.wrap + '">' + items.map(sc.render).join('') + '</div>'; };
    const results = !cur.id
      ? (cur.n ? SCOPES.slice(1).filter(function (sc) { return sc.n; }).map(function (sc) {
          return '<section class="search-group" aria-labelledby="sg-' + sc.id + '">' + ui.sectionHead(sc.label, sc.n > 3 ? { href: q(route, { w: sc.id }), label: 'Pokaż wszystkie (' + sc.n + ')' } : null, { id: 'sg-' + sc.id }) + listOf(sc, R[sc.id].slice(0, 3)) + '</section>';
        }).join('') : '')
      : (R[cur.id].length ? listOf(cur, R[cur.id]) : '');
    const empty = '<div class="empty" role="status">' + I('search', 40) + '<h2>' + (term ? 'Brak wyników' : 'Wpisz szukaną frazę') + '</h2><p>' +
        (term ? 'Nie znaleźliśmy wyników dla tej frazy. Sprawdź pisownię lub użyj innego słowa.' : 'Wpisz fragment tytułu, temat, tag albo imię lub nazwisko.') + '</p></div>';
    return { title: 'Wyszukiwanie – KBR', html: '<div class="container"><header class="page-head search-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Wyszukiwanie' }]) +
      '<h1>' + (term ? 'Wyniki dla: „' + esc(term) + '”' : 'Wyszukiwanie') + '</h1><div class="search-head__form">' + ui.searchForm('q-page', term) + '</div></header>' +
      '<div class="list-layout">' + (term ? tabs : '') + (results || empty) + '</div></div>' };
  };

  KBR.pages.tag = function (route) {
    const name = C.tagBySlug(route.params.slug);
    if (!name) return KBR.pages.notFound();
    const items = C.byTag(route.params.slug);
    return { title: name + ' – KBR', html: page({ title: name, intro: 'Artykuły oznaczone tagiem „' + esc(name) + '”.',
      crumbs: [{ label: 'Strona główna', href: '#/' }, { label: 'Artykuły', href: '#/artykuly' }, { label: 'Tag: ' + name }], filters: ' ', items: items }) };
  };

  KBR.pages.author = function (route) {
    const a = C.author(route.params.id);
    if (!a) return KBR.pages.notFound();
    const role = route.query.rola || '';
    const all = KBR.data.materials.filter(function (m) { return m.authors.some(function (x) { return x.id === a.id; }); });
    const items = all.filter(function (m) { return !role || m.authors.some(function (x) { return x.id === a.id && x.role === role; }); }).sort(function (x, y) { return y.date.localeCompare(x.date); });
    const nA = all.filter(function (m) { return m.authors.some(function (x) { return x.id === a.id && x.role === 'autor'; }); }).length;
    const nE = all.length - nA;
    const filters = chips('Rola w publikacji', [{ label: 'Wszystkie (' + all.length + ')', href: q(route, { rola: '' }), active: !role }, { label: 'Autorstwo (' + nA + ')', href: q(route, { rola: 'autor' }), active: role === 'autor' }, { label: 'Udział ekspercki (' + nE + ')', href: q(route, { rola: 'ekspert' }), active: role === 'ekspert' }]);
    return { title: a.name + ' – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Autorzy i eksperci', href: '#/autorzy' }, { label: a.name }]) +
      '<div class="author-head">' + ui.personPhoto(a, 'person-photo--96') + '<div><h1>' + esc(a.name) + '</h1>' + (a.role ? '<p class="person-role">' + esc(a.role) + '</p>' : '') + ui.personContact(a) + '</div></div><p>' + esc(a.bio) + '</p></header>' +
      '<div class="list-layout"><div class="list-toolbar">' + filters + '<p class="result-count" role="status">' + countLabel(items.length) + '</p></div><div class="rows">' + items.map(ui.row).join('') + '</div></div></div>' };
  };

  KBR.pages.authors = function () {
    return { title: 'Autorzy i eksperci – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Autorzy i eksperci' }]) +
      '<h1>Autorzy i eksperci</h1><p>Osoby publikujące w KBR i udzielające komentarzy eksperckich. Ta sama osoba może występować w obu rolach i ma jeden profil.</p></header>' +
      '<div class="grid-3" style="padding-bottom:96px">' + KBR.data.authors.map(function (a) {
        const n = KBR.data.materials.filter(function (m) { return m.authors.some(function (x) { return x.id === a.id; }); }).length;
        return '<a class="community-card" href="#/autor/' + a.id + '" style="justify-content:flex-start"><div class="avatar avatar--sm" aria-hidden="true">' + esc(a.initials.slice(0, 2)) + '</div><div><h2 style="font-size:18px;line-height:24px;color:var(--c-ink);font-weight:700">' + esc(a.name) + '</h2><p style="font-size:14px;margin-top:4px;color:var(--c-muted)">' + countLabel(n) + '</p></div></a>';
      }).join('') + '</div></div>' };
  };
})();
