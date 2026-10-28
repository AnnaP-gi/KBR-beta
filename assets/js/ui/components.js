/* Komponenty: nagłówek, stopka, karty publikacji. */
(function (ui) {
  const I = KBR.icon, C = KBR.content, esc = ui.esc;

  /* ------------------------------------------------------------ Nagłówek */
  ui.header = function (route) {
    const user = KBR.auth.currentUser();
    const sub = user && KBR.subscription.isActive(user);
    const path = route ? route.path : '';
    const cur = function (p) { return path === p || path.indexOf(p + '/') === 0 ? ' aria-current="page"' : ''; };
    const topics = KBR.data.topics.map(function (t) { return '<li><a href="#/tematy/' + t.slug + '"' + cur('/tematy/' + t.slug) + '>' + esc(t.name) + '</a></li>'; }).join('');

    const subRec = sub && KBR.subscription.get ? KBR.subscription.get() : null;
    const subPlan = subRec ? KBR.subscription.plan(subRec.planId) : null;
    const subTag = !subPlan ? '' : (subPlan.entitlements.indexOf('premium') !== -1 ? '<span class="hdr-premium">Premium</span>' : '<span class="hdr-premium hdr-premium--print">Prenumerata</span>');
    const today = new Date();
    const MON = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
    const NAV_IDS = ['przywodztwo', 'strategia', 'zarzadzanie', 'przedsiebiorczosc', 'ai', 'technologie', 'innowacje', 'marketing', 'finanse'];
    const navTopics = KBR.data.topics.filter(function (t) { return NAV_IDS.indexOf(t.id) !== -1; });
    const moreTopics = KBR.data.topics.filter(function (t) { return NAV_IDS.indexOf(t.id) === -1; }).map(function (t) { return '<li><a href="#/tematy/' + t.slug + '"' + cur('/tematy/' + t.slug) + '>' + esc(t.name) + '</a></li>'; }).join('');
    const account = user
      ? '<div class="menu"><button type="button" class="hdr-link" data-action="menu" aria-expanded="false" aria-controls="account-menu" aria-haspopup="true">' + I('userPlain', 20) +
        '<span>' + esc(user.firstName || 'Moje konto') + '</span>' + subTag + '<span class="chev">' + I('chevDown', 14) + '</span></button>' +
        '<div class="menu__panel" id="account-menu" hidden>' +
        '<div class="menu__head"><strong>' + esc(user.firstName || 'Czytelnik') + '</strong>' + esc(user.email) + '<br>' + (subPlan ? 'Pakiet ' + esc(subPlan.name) + ' – aktywny' : 'Konto bez subskrypcji') + '</div>' +
        '<a href="#/konto/subskrypcja">' + I('card', 18) + 'Moja subskrypcja</a>' +
        '<a href="#/konto/dane">' + I('userPlain', 18) + 'Moje dane</a>' +
        '<hr><button type="button" data-action="logout">' + I('logout', 18) + 'Wyloguj się</button></div></div>'
      : '<a class="hdr-link" href="#/logowanie" data-action="auth-link">' + I('user', 20) + '<span>Zaloguj się</span></a>';

    const subscribeBtn = sub ? '' : '<a class="btn btn--primary" href="#/subskrypcja"><span class="btn-long">Subskrybuj</span><span class="btn-short">Subskr.</span>' + I('chevRight', 16, 'stroke-width="2.25"') + '</a>';

    return '' +
      (KBR.storage.get('topbarClosed', false, 'session') ? '' : '<div class="topbar"><div class="container topbar__inner"><a href="#/magazyn"><span class="topbar__dot"></span><span class="topbar__strong">Nowe wydanie magazynu już dostępne</span><span class="topbar__divider"></span><span class="topbar__text">Technologie, AI i nowe spojrzenie na przywództwo. Odkryj tematy najnowszego numeru</span></a>' +
        '<button type="button" class="topbar__close" data-action="close-topbar" aria-label="Zamknij pasek informacyjny">' + I('close', 16, 'stroke-width="2"') + '</button></div></div>') +
      '<div class="container masthead">' +
        '<div class="masthead__date" aria-hidden="true"><span class="masthead__day">' + today.getDate() + '</span><span class="masthead__mon">' + MON[today.getMonth()] + '</span></div>' +
        '<a class="logo" href="#/" aria-label="Kozminski Business Review – strona główna"><img class="logo__img" src="assets/img/kbr-logo.svg" alt="" width="208" height="56"></a>' +
        '<div class="masthead__actions">' +
          account + subscribeBtn +
          '<button type="button" class="icon-btn" data-action="toggle-drawer" aria-expanded="false" aria-controls="mobile-drawer"><span class="visually-hidden">Menu</span>' + I('menu', 24) + '</button>' +
        '</div>' +
      '</div>' +
      '<nav class="container mainnav" aria-label="Menu główne"><ul class="mainnav__list">' +
        '<li><a class="mainnav__link mainnav__link--issue" href="#/magazyn"' + cur('/magazyn') + '>' + I('newspaper', 20) + 'Nowy numer</a></li>' +
        navTopics.map(function (t, i) { return '<li' + (i >= 7 ? ' class="mainnav__opt mainnav__opt--2"' : i >= 5 ? ' class="mainnav__opt"' : '') + '><a class="mainnav__link" href="#/tematy/' + t.slug + '"' + cur('/tematy/' + t.slug) + '>' + esc(t.name) + '</a></li>'; }).join('') +
        '<li class="menu"><button type="button" class="mainnav__link" data-action="menu" aria-expanded="false" aria-controls="topics-menu" aria-haspopup="true">Więcej' + I('chevDown', 14) + '</button>' +
          '<ul class="menu__panel menu__panel--cols" id="topics-menu" hidden>' + navTopics.slice(5).map(function (t, i) { return '<li class="menu__opt' + (i >= 2 ? ' menu__opt--2' : '') + '"><a href="#/tematy/' + t.slug + '">' + esc(t.name) + '</a></li>'; }).join('') + moreTopics + '<li class="menu__sep"><a href="#/tematy">Wszystkie tematy</a></li></ul></li>' +
      '</ul></nav>' +
      '<nav class="mobile-drawer" id="mobile-drawer" aria-label="Menu główne (mobilne)"><div class="container"><ul class="mobile-drawer__list">' +
        '<li><a href="#/artykuly">Artykuły' + I('chevRight', 18) + '</a></li>' +
        '<li><a href="#/magazyn">Magazyn' + I('chevRight', 18) + '</a></li>' +
        '<li><button type="button" class="drawer-toggle" data-action="drawer-sub" aria-expanded="false" aria-controls="drawer-topics">Tematy' + I('chevDown', 18) + '</button><ul class="mobile-drawer__sub" id="drawer-topics" hidden>' + topics + '</ul></li>' +
      '</ul><div class="mobile-drawer__account">' +
        (user
          ? '<a class="btn btn--outline" href="#/konto/subskrypcja">' + I('card', 18) + 'Moja subskrypcja</a><button type="button" class="btn btn--ghost" data-action="logout">' + I('logout', 18) + 'Wyloguj się</button>'
          : '<a class="btn btn--outline" href="#/logowanie" data-action="auth-link">' + I('userPlain', 18) + 'Zaloguj się</a><a class="btn btn--ghost" href="#/rejestracja" data-action="auth-link">Załóż bezpłatne konto</a>') +
      '</div></div></nav>';
  };

  ui.searchForm = function (id, value) {
    const names = { 'q-desktop': 'Wyszukiwarka serwisu', 'q-mobile': 'Wyszukiwarka serwisu (mobilna)', 'q-page': 'Wyszukiwarka na stronie wyników' };
    return '<form class="search" role="search" aria-label="' + (names[id] || 'Wyszukiwarka') + '" data-form="search" action="#/wyszukiwanie"><label class="visually-hidden" for="' + id + '">Szukaj artykułów i tematów</label>' +
      '<span class="search__icon">' + I('search', 18) + '</span><input id="' + id + '" name="q" type="search" placeholder="Szukaj materiałów, osób, wydarzeń" autocomplete="off" value="' + esc(value || '') + '"></form>';
  };

  /* ------------------------------------------------------------ Stopka */
  ui.footer = function () {
    const socials = [['facebook', 'Facebook'], ['linkedin', 'LinkedIn'], ['x', 'X (Twitter)'], ['instagram', 'Instagram'], ['youtube', 'YouTube'], ['flickr', 'Flickr']];
    return '<footer class="site-footer" aria-labelledby="footer-title"><h2 id="footer-title" class="visually-hidden">Stopka serwisu</h2><div class="container"><div class="footer-grid">' +
      '<div class="footer-brand">' +
        '<a class="logo" href="#/" aria-label="Kozminski Business Review – strona główna"><img class="logo__img" src="assets/img/kbr-logo-light.svg" alt="" width="208" height="56"></a>' +
        '<p>Polska platforma wiedzy biznesowej dla menedżerów, liderek i liderów, wydawana przez Akademię Leona Koźmińskiego.</p>' +
        '<ul class="socials" aria-label="Kanały społecznościowe">' + socials.map(function (s) { return '<li><a href="#/strona/kanaly" aria-label="' + s[1] + ' (adres do uzupełnienia)"><img src="assets/img/social-' + s[0] + '.png" alt=""></a></li>'; }).join('') + '</ul>' +
        '<div class="footer-cols">' +
          '<div><h2>O KBR</h2><ul><li><a href="#/strona/o-kbr">Misja i wizja</a></li><li><a href="#/autorzy">Autorzy i eksperci</a></li><li><a href="#/strona/kontakt">Kontakt</a></li></ul></div>' +
          '<div><h2>Koźmiński</h2><ul>' +
            [['O uczelni', 'https://www.kozminski.edu.pl/pl/o-uczelni'], ['Studia i szkolenia', 'https://www.kozminski.edu.pl/pl/oferta-edukacyjna'], ['Nauka i badania', 'https://www.kozminski.edu.pl/pl/nauka-i-badania'], ['Dla biznesu', 'https://www.kozminski.edu.pl/pl/wspolpraca-strategiczna-i-fundusze-stypendialne']].map(function (l) { const t = l[0]; return '<li><a class="ext-link" href="' + l[1] + '" target="_blank" rel="noopener">' + t + '<span aria-hidden="true">' + I('external', 14, 'stroke-width="2"') + '</span><span class="visually-hidden"> (serwis uczelni, otwiera się w nowej karcie)</span></a></li>'; }).join('') +
          '</ul></div>' +
          '<div><h2>Dostęp</h2><ul><li><a href="#/subskrypcja">Subskrypcja</a></li></ul></div>' +
        '</div>' +
      '</div>' +
      '<div class="footer-news">' + ui.newsletterForm('footer') + '</div>' +
      '</div>' +
      '<div class="footer-bottom"><ul>' +
        '<li><a href="#/strona/polityka-prywatnosci">Polityka prywatności</a></li><li><a href="#/strona/polityka-cookies">Polityka cookies</a></li><li><a href="#/strona/regulaminy">Regulaminy</a></li>' +
      '</ul><p class="footer-copy">© 2026 Akademia Leona Koźmińskiego · ISSN: [do uzupełnienia]</p></div>' +
      '</div></footer>';
  };

  ui.meterDots = function (used, limit, large) {
    if (limit > 10) return '';
    let h = '<span class="meter-dots' + (large ? ' meter-dots--lg' : '') + '" aria-hidden="true">';
    for (let i = 0; i < limit; i++) h += '<i' + (i < used ? ' class="is-used"' : '') + '></i>';
    return h + '</span>';
  };

  /* Newsletter – wariant w kolumnie strony głównej i w stopce */
  ui.newsletterForm = function (variant) {
    const id = 'nl-' + variant;
    if (variant === 'footer') {
      return '<form data-form="newsletter" novalidate aria-labelledby="' + id + '-title"><h2 class="label" id="' + id + '-title">Newsletter KBR</h2>' +
        '<p>Najnowsze artykuły Kozminski Business Review – wybór redakcji prosto na Twoją skrzynkę.</p>' +
        '<label class="check check--small" for="' + id + '-consent"><input type="checkbox" id="' + id + '-consent" name="consent"><span>Wyrażam zgodę na otrzymywanie za pośrednictwem poczty e-mail newslettera Kozminski Business Review. Administratorem Pani/Pana danych osobowych jest Akademia Leona Koźmińskiego. <a href="#/strona/polityka-prywatnosci">Szczegółowe informacje na temat przetwarzania Pani/Pana danych osobowych.</a> (wymagane)</span></label>' +
        '<div class="nl-row" data-error-anchor><label class="visually-hidden" for="' + id + '-email">Adres e-mail</label><input class="input input--dark" type="email" id="' + id + '-email" name="email" placeholder="Adres e-mail" autocomplete="email"><button class="btn btn--primary" type="submit">Zapisz się' + I('chevRight', 16, 'stroke-width="2" style="color:#e9aab9"') + '</button></div>' +
        '<div class="nl-status" role="status"></div></form>';
    }
    return '<form class="nl-box" data-form="newsletter" novalidate aria-labelledby="' + id + '-title"><h2 class="t-label" id="' + id + '-title">Newsletter KBR</h2>' +
      '<p>Badania i nowe artykuły - dołącz do grona osób, które jako pierwsze otrzymują informacje prosto na swoją skrzynkę.</p>' +
      '<label class="check" for="' + id + '-consent"><input type="checkbox" id="' + id + '-consent" name="consent"><span>Wyrażam zgodę na otrzymywanie za pośrednictwem poczty e-mail powiadomień i informacji handlowych. Administratorem Pani/Pana danych osobowych jest Akademia Leona Koźmińskiego. <a href="#/strona/polityka-prywatnosci">Szczegółowe informacje na temat przetwarzania Pani/Pana danych osobowych.</a> (wymagane)</span></label>' +
      '<label class="visually-hidden" for="' + id + '-email">Adres e-mail</label><input class="input" type="email" id="' + id + '-email" name="email" placeholder="Adres e-mail" autocomplete="email">' +
      '<button class="btn btn--primary" type="submit">Zapisz się' + I('chevRight', 16, 'stroke-width="2" style="color:#e9aab9"') + '</button>' +
      '<div class="nl-status" role="status"></div></form>';
  };

  /* ------------------------------------------------------------ Karty */
  ui.topicLabel = function (m, tag) {
    const t = C.topic(m.topic);
    return '<a class="t-label card__cat" href="#/tematy/' + t.slug + '">' + esc(t.name) + '</a>';
  };
  ui.promo = function () {
    const I = KBR.icon;
    return '<div class="promo"><span class="promo__label">Reklama</span>' +
      '<img class="promo__img" src="assets/img/baner-executive.jpg" alt="Budynek Akademii Leona Koźmińskiego z rzeźbą lwa i logo Koźmiński University">' +
      '<div class="promo__body"><h2>Rozwijaj kompetencje, które zmieniają biznes</h2><p>Programy rozwojowe, studia podyplomowe i executive oparte na badaniach i doświadczeniu.</p><span class="promo__rule"></span>' +
      '<a class="btn btn--primary" href="https://www.kozminski.edu.pl/pl" target="_blank" rel="noopener">Poznaj programy i szkolenia' + I('chevRight', 16, 'stroke-width="2"') + '</a></div>' +
      '<span class="promo__adchoice" aria-hidden="true"><svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 1.5v7l6-3.5z" fill="none" stroke="currentColor" stroke-width="1.3"/></svg><svg width="4" height="10" viewBox="0 0 4 10"><circle cx="2" cy="2" r="1" fill="currentColor"/><circle cx="2" cy="5" r="1" fill="currentColor"/><circle cx="2" cy="8" r="1" fill="currentColor"/></svg></span>' +
    '</div>';
  };
  /* Okładka wydania z napisami (logo, numer, tytuł, zapowiedź) – wspólna dla strony głównej i strony magazynu */
  ui.magCoverBook = function (issue) {
    const headline = issue.coverHeadline || esc(issue.title);
    return '<span class="mag-cover__book">' +
      '<img class="mag-cover__photo" src="' + ui.img(issue.cover) + '" alt="">' +
      '<span class="mag-cover__shade" aria-hidden="true"></span>' +
      '<span class="mag-cover__top" aria-hidden="true"><img src="assets/img/kbr-logo-light.svg" alt=""><span>' + esc(issue.label.toUpperCase()) + '</span></span>' +
      '<span class="mag-cover__headline" aria-hidden="true">' + headline + '</span>' +
      (issue.coverSide ? '<span class="mag-cover__side" aria-hidden="true"><b>' + esc(issue.coverSide[0]) + '</b>' + esc(issue.coverSide[1]) + '</span>' : '') +
      '<span class="mag-cover__foot" aria-hidden="true">Knowledge <i>that</i> matters</span>' +
      '<span class="mag-cover__spine" aria-hidden="true"></span>' +
      '<span class="mag-cover__glare" aria-hidden="true"></span></span>';
  };
  /* Interakcja okładki: odblask za kursorem; opts.tilt – lekkie pochylenie 3D */
  ui.magCoverMotion = function (cover, opts) {
    opts = opts || {};
    const book = cover && cover.querySelector('.mag-cover__book');
    if (!book || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    cover.addEventListener('pointermove', function (e) {
      const r = cover.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        book.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
        book.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
        if (opts.tilt) book.style.transform = 'rotateY(' + ((x - 0.5) * 10).toFixed(2) + 'deg) rotateX(' + ((0.5 - y) * 7).toFixed(2) + 'deg) translateY(-6px)';
      });
    });
    cover.addEventListener('pointerenter', function () { cover.classList.add('is-hover'); });
    cover.addEventListener('pointerleave', function () { cancelAnimationFrame(raf); cover.classList.remove('is-hover'); if (opts.tilt) book.style.transform = ''; });
  };
  ui.metaLine = function (m) { return '<span style="font-family:var(--f-tag)">' + esc(ui.authorLine(m)) + '</span> · <time datetime="' + m.date + '">' + ui.dateShort(m.date) + '</time>'; };
  ui.plMat = function (n) { const r = n % 10, r100 = n % 100; return n + ' ' + (n === 1 ? 'materiał' : (r >= 2 && r <= 4 && (r100 < 12 || r100 > 14)) ? 'materiały' : 'materiałów'); };
  ui.premiumTag = function (m) { return m.access === 'premium' ? '<span class="badge badge--premium badge--sm">' + ui.lockIcon(m, 12) + 'Premium</span>' : ''; };
  ui.lockIcon = function (m, size) {
    if (m.access !== 'premium') return '';
    const open = KBR.subscription.has('premium');
    return '<span title="' + (open ? 'Masz dostęp do tego materiału' : 'Materiał Premium') + '">' + I(open ? 'unlock' : 'lock', size || 24) + '</span>';
  };
  ui.savedFlag = function (m) {
    return '';
    const saved = KBR.auth.currentUser() && KBR.library.isSaved(m.id);
    return '<span class="card__saved" data-saved-flag="' + m.id + '"' + (saved ? '' : ' hidden') + '>' + I('bookmarkFill', 16) + '<span class="visually-hidden">Zapisano w bibliotece</span></span>';
  };
  ui.media = function (m, opts) {
    opts = opts || {};
    const badges = [];
    const lockInBadge = m.access === 'premium' && opts.premiumBadge !== false;
    if (lockInBadge) badges.push('<span class="badge badge--premium">' + (opts.lock === false ? '' : ui.lockIcon(m, 14)) + 'Premium</span>');
    if (opts.formatBadge) badges.push('<span class="badge badge--navy">' + (m.format === 'podcast' || m.format === 'video' ? I('play', 12) : '') + esc(opts.formatBadge) + '</span>');
    const img = opts.image || m.image;
    return '<a class="card__media" href="' + ui.materialUrl(m) + '" tabindex="-1" aria-hidden="true">' +
      '<img src="' + ui.img(img) + '" alt="" loading="lazy"' + (m.imagePos && !opts.image ? ' style="object-position:' + m.imagePos + '"' : '') + '>' +
      (opts.logo ? '<img class="case-logo" src="assets/img/case-logo-' + opts.logo + '.png" alt="" style="' + ui.caseLogoPos[opts.logo] + '">' : '') +
      (badges.length ? '<span class="card__badges">' + badges.join('') + '</span>' : '') +
      '<span class="card__corner">' + ui.savedFlag(m) + (opts.lock === false || lockInBadge ? '' : ui.lockIcon(m)) + '</span>' +
      (opts.play ? '<span class="play-dot">' + I('play', 26) + '</span>' : '') +
      '</a>';
  };
  /* Pozycje logotypów na kartach „Studia przypadków” (jak w projekcie) */
  ui.caseLogoPos = {
    1: 'left:3.3%;top:20.6%;width:36.2%;height:auto',
    2: 'left:4.6%;top:20.6%;width:17.1%;height:auto',
    3: 'left:2.6%;top:35.3%;width:54.6%;height:auto',
    4: 'left:2.6%;top:20.6%;width:16.4%;height:auto'
  };

  ui.titleLink = function (m, cls, tag) {
    tag = tag || 'h3';
    return '<' + tag + ' class="card__title"><a class="t-title-card ' + (cls || '') + ' hover-title" href="' + ui.materialUrl(m) + '">' + esc(m.title) + (m.access === 'premium' ? '<span class="visually-hidden"> (Premium)</span>' : '') + '</a></' + tag + '>';
  };

  /* Standardowa karta (Dla subskrybentów, powiązane, listy siatkowe) */
  ui.card = function (m, opts) {
    opts = opts || {};
    return '<article class="card">' +
      (opts.noImage ? '' : ui.media(m, opts)) +
      (opts.noImage && m.access === 'premium' ? ui.topicLabel(m).replace(/^<a class="t-label card__cat"/, '<span class="card__cat card__cat--prem"><a class="t-label"').replace(/<\/a>$/, '</a>' + ui.premiumTag(m) + '</span>') : ui.topicLabel(m)) +
      ui.titleLink(m, '', opts.tag) +
      (opts.lead ? '<p class="t-body card__lead">' + esc(m.lead) + '</p>' : '') +
      '<p class="t-meta card__author">' + ui.metaLine(m) + '</p>' +
      (opts.save ? '<div class="card__actions">' + ui.saveButton(m, { compact: true }) + '</div>' : '') +
      '</article>';
  };

  /* Wiersz listy: obraz z lewej, treść z prawej (zgodnie ze specyfikacją list) */
  ui.row = function (m) {
    const f = C.format(m.format), isAV = m.format === 'podcast' || m.format === 'video';
    const showFmt = isAV;
    return '<article class="row-item">' + ui.media(m, { formatBadge: m.format !== 'article' ? f.badge : null }) +
      '<div class="row-item__body">' + (showFmt ? '<p class="card__format row-item__format">' + (isAV ? '<span class="fmt-ico">' + I('play', 12) + '</span>' : '') + '<strong>' + esc(f.name) + '</strong>' + (isAV && m.duration ? '<span>• ' + m.duration + ' min</span>' : '') + '</p>' : '') +
      '<div class="row-item__top">' + ui.topicLabel(m).replace('card__cat', '') + '</div>' +
      '<h2 style="margin:0"><a class="t-title-card hover-title" href="' + ui.materialUrl(m) + '">' + esc(m.title) + (m.access === 'premium' ? '<span class="visually-hidden"> (Premium)</span>' : '') + '</a></h2>' +
      '<p class="t-body">' + esc(m.lead) + '</p>' +
      '<div class="row-item__foot"><p class="t-meta">' + ui.metaLine(m) + '</p></div>' +
      '</div></article>';
  };

  ui.sectionHead = function (title, link, opts) {
    opts = opts || {};
    return '<div class="section-head"><h2 class="t-section" id="' + (opts.id || '') + '">' + title + '</h2>' + (link ? '<a class="t-link" href="' + link.href + '">' + link.label + '' + KBR.icon('chevRight', 14, 'stroke-width="2.25"') + '</a>' : '') + '</div>';
  };

  ui.crumbs = function (items) {
    return '<nav class="crumbs" aria-label="Ścieżka nawigacji"><ol>' + items.map(function (it, i) {
      return '<li>' + (it.href && i < items.length - 1 ? '<a href="' + it.href + '">' + esc(it.label) + '</a>' : '<span aria-current="page">' + esc(it.label) + '</span>') + '</li>';
    }).join('') + '</ol></nav>';
  };
})(KBR.ui);
