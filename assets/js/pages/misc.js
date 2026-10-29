/* Widoki podstawowe spoza głównego zakresu: magazyn, wydarzenia, kluby, strony informacyjne. */
(function () {
  const ui = KBR.ui, C = KBR.content, I = KBR.icon, esc = ui.esc;
  const demoNote = function () { return ''; };

  KBR.pages.redirect = function (hash) { return { redirect: hash }; };

  KBR.pages.notFound = function () {
    return { title: 'Nie znaleziono strony – KBR', html: '<div class="container"><div class="result"><div class="result__icon result__icon--cancel">' + I('search', 36) + '</div><h1>Nie znaleźliśmy tej strony</h1><p>Adres mógł się zmienić albo materiał nie jest już dostępny.</p><div class="btn-row"><a class="btn btn--primary" href="#/">Strona główna</a><a class="btn btn--outline" href="#/artykuly">Artykuły</a></div></div></div>' };
  };

  KBR.pages.magazine = function () {
    const issue = C.currentIssue();
    const toc = issue.toc.map(C.get);
    const more = issue.tocMore || [];
    const noImg = '<span class="img-ph" aria-hidden="true"></span>';
    const archived = KBR.data.issues.filter(function (i) { return i.archived; });
    const tocRow = function (inner, href, i) { return '<li>' + (href ? '<a class="mag-toc" href="' + href + '">' : '<div class="mag-toc mag-toc--static">') + '<span class="mag-toc__nr">' + String(i + 1).padStart(2, '0') + '</span>' + inner + (href ? '<span class="mag-toc__arrow" aria-hidden="true">' + I('chevRight', 18, 'stroke-width="2"') + '</span></a>' : '</div>') + '</li>'; };
    const tocReal = toc.map(function (m, i) {
      return tocRow('<span class="mag-toc__thumb" aria-hidden="true"><img src="' + ui.img((issue.featureImage && issue.featureImage[m.id]) || m.image) + '" alt=""></span>' +
        '<span class="mag-toc__body"><span class="mag-toc__topic">' + esc(C.topic(m.topic).name) + '</span><span class="mag-toc__title">' + esc(m.title) + (m.access === 'premium' ? '<span class="visually-hidden"> (Premium)</span>' : '') + '</span>' +
        '<span class="mag-toc__author">Autor: ' + esc(m.authors.filter(function (x) { return x.role === 'autor'; }).map(function (x) { return C.author(x.id).name; }).join(', ')) + '</span></span>', ui.materialUrl(m), i);
    }).join('');
    const tocMore = more.map(function (x, i) {
      return tocRow('<span class="mag-toc__thumb mag-toc__thumb--ph" aria-hidden="true"></span><span class="mag-toc__body"><span class="mag-toc__topic">' + esc(x.section) + '</span><span class="mag-toc__title">' + esc(x.title) + '</span><span class="mag-toc__author">Autor: ' + esc(x.author) + '</span></span>', null, toc.length + i);
    }).join('');
    const arch = archived.map(function (i) {
      return '<article class="arch-item" data-arch="' + esc((i.label + ' ' + i.title + ' ' + i.description + ' ' + i.articles.join(' ')).toLowerCase()) + '">' + noImg +
        '<div><h3 class="arch-item__nr">' + esc(i.label) + '</h3><p class="arch-item__title">' + esc(i.title) + '</p><p class="arch-item__desc">' + esc(i.description) + '</p>' +
        '<p class="arch-item__feat">W numerze</p><ul id="arch-' + i.id + '">' + i.articles.map(function (t, n) { return '<li data-arch-art="' + esc(t.toLowerCase()) + '"' + (n > 2 ? ' data-more hidden' : '') + '>' + esc(t) + '</li>'; }).join('') + '</ul>' +
        (i.articles.length > 3 ? '<button type="button" class="toc-toggle arch-toggle" data-arch-toggle aria-expanded="false" aria-controls="arch-' + i.id + '" data-count="' + i.articles.length + '"><span>Pokaż wszystkie artykuły (' + i.articles.length + ')</span>' + I('chevDown', 16, 'stroke-width="2"') + '</button>' : '') + '</div></article>';
    }).join('');
    const subNow = KBR.subscription.get(), printOnly = !!(subNow && subNow.status === 'active') && !KBR.subscription.has('magazine-pdf');
    const html = '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Magazyn' }]) + '<h1>Magazyn KBR</h1><p>Aktualny numer kwartalnika i archiwum wydań.</p></header>' +
      '<div class="issue"><div class="issue__cover"><div class="mag-cover mag-cover--page" role="img" aria-label="Okładka ' + esc(issue.label) + ': ' + esc(issue.title) + '">' + ui.magCoverBook(issue) + '<span class="mag-cover__shadow" aria-hidden="true"></span></div>' +
        (printOnly ? '<div class="issue__actions"><button type="button" class="btn btn--primary btn--block" data-action="mag-open">Podgląd numeru' + I('chevRight', 16, 'stroke-width="2"') + '</button><p class="notice">' + I('info', 18) + '<span>Wersja elektroniczna i PDF są dostępne w każdym pakiecie subskrypcji.</span></p></div></div>' :
        '<div class="issue__actions"><button type="button" class="btn btn--primary btn--block" data-action="mag-open">' + (KBR.subscription.has('magazine-pdf') ? 'Otwórz wersję elektroniczną' : 'Podgląd numeru') + I('chevRight', 16, 'stroke-width="2"') + '</button>' +
        '<button type="button" class="btn btn--outline btn--block" data-action="mag-download">Pobierz PDF' + I('chevRight', 16, 'stroke-width="2"') + '</button></div></div>') +
      '<div><span class="t-label">Aktualny numer</span><h2 class="magazine__nr" style="margin-top:8px">' + esc(issue.label.toUpperCase()) + '</h2><p class="t-lead" style="margin-top:16px">' + esc(issue.title) + '</p><p style="margin-top:8px">' + esc(issue.description) + '</p>' +
      '<h3 class="t-section" style="margin-top:32px;padding-bottom:10px">Spis treści</h3><nav aria-label="Spis treści"><ol class="mag__toc mag__toc--light" role="list">' + tocReal + '</ol>' +
        (more.length ? '<ol class="mag__toc mag__toc--light mag__toc--more" id="toc-more" role="list" hidden>' + tocMore + '</ol><button type="button" class="toc-toggle" data-action="toc-toggle" aria-expanded="false" aria-controls="toc-more"><span>Pokaż pełny spis treści (' + (toc.length + more.length) + ')</span>' + I('chevDown', 16, 'stroke-width="2"') + '</button>' : '') +
      '</nav></div></div></div>' +
      '<section class="mag-archive" aria-labelledby="h-archive"><div class="container">' +
        '<div class="mag-archive__head"><h2 id="h-archive">Archiwum wydań</h2><label class="mag-search"><span class="visually-hidden">Szukaj w archiwum</span>' + I('search', 20) + '<input type="search" class="input" data-arch-search placeholder="Znajdź artykuł w archiwum"></label></div>' +
        '<div class="mag-archive__list">' + arch + '</div><p class="mag-archive__empty" data-arch-empty hidden>Brak wyników w archiwum. Spróbuj innej frazy.</p>' +
      '</div></section>';
    return { title: 'Magazyn ' + issue.label + ' – KBR', html: html, mount: function (root) {
      const pc = root.querySelector('.mag-cover--page');
      if (pc) { ui.magCoverMotion(pc, { tilt: true }); requestAnimationFrame(function () { requestAnimationFrame(function () { pc.classList.add('is-in'); }); }); }
      const tg = root.querySelector('[data-action="toc-toggle"]');
      if (tg) tg.addEventListener('click', function () {
        const box = root.querySelector('#toc-more'), open = box.hidden;
        box.hidden = !open; tg.setAttribute('aria-expanded', String(open));
        tg.querySelector('span').textContent = open ? 'Zwiń spis treści' : 'Pokaż pełny spis treści (' + (toc.length + more.length) + ')';
      });
      const openBtn = root.querySelector('[data-action="mag-open"]');
      if (openBtn) openBtn.addEventListener('click', function () { ui.flipbook(issue, { total: 24, limit: KBR.subscription.has('magazine-pdf') ? 0 : 6 }); });
      root.querySelectorAll('[data-action="mag-download"]').forEach(function (b) {
        b.addEventListener('click', function () {
          if (!KBR.subscription.has('magazine-pdf')) { KBR.app.navigate('#/subskrypcja'); setTimeout(function () { ui.toast('Aby pobrać magazyn w PDF, wykup subskrypcję.'); }, 60); return; }
          ui.toast(b.dataset.action === 'mag-open' ? 'Otwieranie czytnika wydania.' : 'Pobrano PDF.');
        });
      });
      function setArch(btn, open) {
        btn.setAttribute('aria-expanded', String(open));
        btn.closest('.arch-item').querySelectorAll('[data-more]').forEach(function (li) { li.hidden = !open; });
        btn.querySelector('span').textContent = open ? 'Zwiń listę artykułów' : 'Pokaż wszystkie artykuły (' + btn.dataset.count + ')';
      }
      root.querySelectorAll('[data-arch-toggle]').forEach(function (b) { b.addEventListener('click', function () { setArch(b, b.getAttribute('aria-expanded') !== 'true'); }); });
      const q = root.querySelector('[data-arch-search]');
      q.addEventListener('input', function () {
        const v = q.value.trim().toLowerCase(); let n = 0;
        root.querySelectorAll('.arch-item').forEach(function (it) {
          const hit = !v || it.dataset.arch.indexOf(v) !== -1; it.hidden = !hit; if (hit) n++;
          let deep = false;
          it.querySelectorAll('[data-arch-art]').forEach(function (li) { const h = !!v && li.dataset.archArt.indexOf(v) !== -1; li.classList.toggle('is-hit', h); if (h && li.hasAttribute('data-more')) deep = true; });
          const tb = it.querySelector('[data-arch-toggle]'); if (tb && deep) setArch(tb, true);
        });
        root.querySelector('[data-arch-empty]').hidden = n > 0;
      });
    } };
  };

  KBR.pages.events = function () {
    return { title: 'Wydarzenia – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Wydarzenia' }]) + '<h1>Wydarzenia</h1><p>Wydarzenia, webinary, kluby i programy Executive Education Akademii Leona Koźmińskiego. Zapisy prowadzą do serwisów uczelni.</p>' +
      '</header>' +
      '<div class="grid-4" style="padding-bottom:96px">' + KBR.data.events.map(function (e) {
        return '<article class="card event-card"><a class="card__media" href="#/wydarzenie/' + e.id + '" tabindex="-1" aria-hidden="true"><img src="' + ui.img(e.image) + '" alt="" loading="lazy"></a><span class="t-label card__cat">' + esc(e.category) + '</span>' +
          '<h2 class="card__title"><a class="t-title-card t-title-card--loose hover-title" href="#/wydarzenie/' + e.id + '">' + esc(e.title) + '</a></h2>' +
          '<div class="card__eventmeta"><div>' + I('calendar', 24) + '<span>' + esc(e.date) + '</span></div><div>' + I('pin', 24) + '<span>' + esc(e.place) + '</span></div></div>' +
          '<a class="btn btn--tint" href="#/wydarzenie/' + e.id + '" aria-label="Zapisz się: ' + esc(e.title) + '">Zapisz się' + I('chevRight', 16, 'stroke-width="2"') + '</a></article>';
      }).join('') + '</div></div>' };
  };

  KBR.pages.event = function (route) {
    const e = C.event(route.params.id);
    if (!e) return KBR.pages.notFound();
    return { title: e.title + ' – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'Wydarzenia', href: '#/wydarzenia' }, { label: e.title }]) +
      '<span class="t-label">' + esc(e.category) + '</span><h1 style="margin-top:12px;max-width:960px">' + esc(e.title) + '</h1></header>' +
      '<div class="event-page"><div><img src="' + ui.img(e.image) + '" alt="' + esc(e.imageAlt) + '"><div class="prose" style="margin-top:32px"><p>Opis wydarzenia zostanie uzupełniony przez organizatora. Na tym etapie strona pokazuje najważniejsze informacje i przejście do zapisów w serwisie uczelni.</p></div></div>' +
      '<aside class="auth-side"><h2>Informacje</h2><div class="card__eventmeta" style="margin-top:20px"><div>' + I('calendar', 24) + '<span>' + esc(e.date) + '</span></div><div>' + I('pin', 24) + '<span>' + esc(e.place) + '</span></div></div>' +
      '<a class="btn btn--primary btn--block" style="margin-top:28px;height:48px" href="https://www.kozminski.edu.pl/pl" target="_blank" rel="noopener">Przejdź do zapisów' + I('external', 16) + '<span class="visually-hidden"> (serwis uczelni, nowa karta)</span></a>' +
      '<p style="font-size:13px;line-height:19px;margin-top:12px;color:var(--c-muted)">Zapis odbywa się w zewnętrznym serwisie uczelni. Docelowy adres zapisów dla tego wydarzenia – do uzupełnienia.</p></aside></div></div>' };
  };

  function simplePage(title, crumb, intro, body) {
    return { title: title + ' – KBR', html: '<div class="container"><header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }].concat(crumb)) + '<h1>' + esc(title) + '</h1>' + (intro ? '<p>' + intro + '</p>' : '') + '</header><div class="info">' + demoNote() + '<div class="prose">' + body + '</div></div></div>' };
  }

  KBR.pages.clubs = function () {
    return simplePage('Kluby', [{ label: 'Kluby' }], 'Społeczności praktyków, liderów i absolwentów.',
      '<p>Lista klubów i ich proste strony zostaną przygotowane na podstawie oferty Kozminski Business Hub. Każdy klub będzie miał opis, najbliższe spotkania i przejście do zapisu w serwisie uczelni.</p><p><a href="https://www.kozminski.edu.pl/pl" target="_blank" rel="noopener">Przejdź do serwisu uczelni</a> (link zewnętrzny).</p>');
  };
  KBR.pages.executive = function () {
    return simplePage('Strefa Kozminski Executive Education', [{ label: 'Executive Education' }], 'Programy MBA, studia podyplomowe i szkolenia dla menedżerów.',
      '<p>Lista programów i szkoleń oraz proste strony programów zostaną przygotowane na podstawie oferty uczelni. Rekrutacja prowadzi do zewnętrznych serwisów Akademii Leona Koźmińskiego.</p><p><a href="https://www.kozminski.edu.pl/pl" target="_blank" rel="noopener">Zobacz ofertę w serwisie uczelni</a> (link zewnętrzny).</p>');
  };

  const INFO = {
    'o-kbr': ['O KBR – misja i wizja', 'Kozminski Business Review to polska platforma wiedzy biznesowej dla menedżerów, liderek i liderów, wydawana przez Akademię Leona Koźmińskiego.', '<p>Treść misji i wizji serwisu zostanie przygotowana przez redakcję.</p>'],
    'redakcja': ['Redakcja i rada programowa', 'Jedna wspólna strona zespołu redakcyjnego i rady programowej.', '<p>Skład redakcji i rady programowej – do uzupełnienia przez redakcję.</p>'],
    'dla-autorow': ['Dla autorów', 'Zasady publikowania i kontakt dla autorów.', '<p>Zasady zgłaszania tekstów zostaną opublikowane przez redakcję. Panel samodzielnego przesyłania tekstów nie jest przewidziany w tym etapie.</p>'],
    'reklama': ['Reklama i partnerstwa', 'Współpraca reklamowa i partnerstwa merytoryczne.', '<p>Media pack i dane kontaktowe działu sprzedaży – do uzupełnienia.</p>'],
    'kontakt': ['Kontakt', 'Kontakt z redakcją KBR.', '<p>Adres redakcji, e-mail i telefon – do uzupełnienia.</p>'],
    'kanaly': ['Nasze kanały', 'Kanały społecznościowe KBR i Akademii Leona Koźmińskiego.', '<p>Adresy profili w mediach społecznościowych – do uzupełnienia.</p>'],
    'nota-prawna': ['Nota prawna', '', '<h2>Postanowienia ogólne</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Zakres i zasady</h2><p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li><li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li></ul><h2>Postanowienia końcowe</h2><p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>'],
    'polityka-prywatnosci': ['Polityka prywatności', '', '<h2>Postanowienia ogólne</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Zakres i zasady</h2><p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li><li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li></ul><h2>Postanowienia końcowe</h2><p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>'],
    'polityka-cookies': ['Polityka cookies', '', '<h2>Postanowienia ogólne</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Zakres i zasady</h2><p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li><li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li></ul><h2>Postanowienia końcowe</h2><p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p><p><button type="button" class="btn btn--outline" data-action="cookies">Ustawienia cookies</button></p>'],
    'regulaminy': ['Regulaminy', '', '<ul><li><a href="#/strona/regulamin-serwisu">Regulamin serwisu</a></li><li><a href="#/strona/regulamin-subskrypcji">Regulamin subskrypcji</a></li></ul>'],
    'regulamin-serwisu': ['Regulamin serwisu', '', '<h2>Postanowienia ogólne</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Zakres i zasady</h2><p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li><li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li></ul><h2>Postanowienia końcowe</h2><p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>'],
    'regulamin-subskrypcji': ['Regulamin subskrypcji', '', '<h2>Postanowienia ogólne</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.</p><p>Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.</p><h2>Zakres i zasady</h2><p>Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li><li>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li></ul><h2>Postanowienia końcowe</h2><p>Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>'],
    'informacje-wydawnicze': ['Informacje wydawnicze', '', '<p>Wydawca: Akademia Leona Koźmińskiego. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>']
  };
  const head = function (title, intro) {
    return '<header class="page-head">' + ui.crumbs([{ label: 'Strona główna', href: '#/' }, { label: 'O KBR' }, { label: title }]) + '<h1>' + esc(title) + '</h1>' + (intro ? '<p>' + intro + '</p>' : '') + '</header>';
  };
  function aboutPage() {
    const team = [
      ['Redaktor naczelna / redaktor naczelny', 'Odpowiada za linię programową serwisu i magazynu.'],
      ['Zastępca redaktora naczelnego', 'Koordynuje plan wydawniczy i współpracę z autorami.'],
      ['Redaktorka prowadząca – serwis', 'Odpowiada za publikacje online, newsletter i podcasty.'],
      ['Redaktor prowadzący – magazyn', 'Przygotowuje kolejne wydania kwartalnika.'],
      ['Sekretarz redakcji', 'Odpowiada za redakcję językową, korektę i harmonogram.'],
      ['Dyrektor artystyczny', 'Odpowiada za oprawę graficzną serwisu i magazynu.']
    ];
    const board = ['Przewodnicząca / przewodniczący rady', 'Członkini / członek rady', 'Członkini / członek rady', 'Członkini / członek rady'];
    const html = '<div class="container">' + head('Misja i wizja', 'Kozminski Business Review to polska platforma wiedzy biznesowej dla menedżerów, liderek i liderów, wydawana przez Akademię Leona Koźmińskiego.') +
      '<div class="about">' + demoNote() +
      '<section class="about-mv" aria-label="Misja i wizja">' +
        '<div class="about-mv__item"><span class="t-label">Misja</span><p class="about-mv__text">Łączymy wyniki badań naukowych z praktyką zarządzania, aby pomagać liderom podejmować lepsze decyzje.</p><p>Publikujemy analizy, studia przypadków i rozmowy, w których badacze Akademii Leona Koźmińskiego i praktycy biznesu dzielą się wiedzą sprawdzoną w działaniu. Piszemy przystępnie, ale bez uproszczeń.</p></div>' +
        '<div class="about-mv__item"><span class="t-label">Wizja</span><p class="about-mv__text">Chcemy być pierwszym źródłem wiedzy, po które sięgają polscy menedżerowie, gdy stają przed ważną decyzją.</p><p>Budujemy miejsce, w którym nauka i biznes rozmawiają ze sobą na równych prawach – w serwisie, w kwartalniku drukowanym i podczas spotkań społeczności KBR.</p></div>' +
      '</section>' +
      '<section class="about-team" aria-labelledby="h-team"><h2 class="t-section col-head" id="h-team">Redakcja</h2><ul class="team-grid" role="list">' +
        team.map(function (t) { return '<li class="team-card"><span class="team-card__photo" aria-hidden="true"></span><span class="team-card__name">Imię i nazwisko</span><span class="team-card__role">' + esc(t[0]) + '</span><span class="team-card__desc">' + esc(t[1]) + '</span></li>'; }).join('') +
      '</ul></section>' +
      '<section class="about-team" aria-labelledby="h-board"><h2 class="t-section col-head" id="h-board">Rada programowa</h2><ul class="team-grid team-grid--compact" role="list">' +
        board.map(function (t) { return '<li class="team-card"><span class="team-card__name">Imię i nazwisko</span><span class="team-card__role">' + esc(t) + '</span></li>'; }).join('') +
      '</ul></section>' +
      '<div class="about-links"><a class="btn btn--primary" href="#/autorzy">Autorzy i eksperci' + KBR.icon('chevRight', 16, 'stroke-width="2"') + '</a><a class="btn btn--ghost" href="#/strona/kontakt">Kontakt z redakcją</a></div>' +
      '</div></div>';
    return { title: 'Misja i wizja – KBR', html: html };
  }
  function contactPage() {
    const box = function (id, label, title, text, mail, extra) {
      return '<section class="contact-box" id="' + id + '" aria-labelledby="h-' + id + '"><span class="t-label">' + label + '</span><h2 id="h-' + id + '">' + title + '</h2><p>' + text + '</p>' +
        '<a class="contact-box__mail" href="mailto:' + mail + '">' + KBR.icon('mail', 18) + mail + '</a>' + (extra || '') + '</section>';
    };
    const html = '<div class="container">' + head('Kontakt', 'Napisz do nas w sprawie publikacji, współpracy reklamowej lub partnerstwa.') +
      '<div class="contact">' + demoNote() +
      '<div class="contact-grid">' +
        box('redakcja', 'Redakcja', 'Kontakt z redakcją', 'Pytania o publikacje, sprostowania, prośby o komentarz eksperta i sprawy prasowe.', 'redakcja@kbr.example') +
        box('reklama', 'Reklama i partnerstwa', 'Współpraca reklamowa i partnerstwa', 'Kampanie w serwisie, newsletterze i magazynie, projekty specjalne oraz partnerstwa merytoryczne i wydarzenia. Na prośbę prześlemy media kit z zasięgami i cennikiem.', 'reklama@kbr.example',
          '<ul class="contact-box__list"><li>Reklama w serwisie i newsletterze</li><li>Reklama w magazynie drukowanym</li><li>Artykuły i raporty partnerskie</li><li>Patronaty i wydarzenia</li></ul>') +
      '</div>' +
      '<section class="contact-author" id="zostan-autorem" aria-labelledby="h-author"><div class="contact-author__intro"><span class="t-label">Dla autorów</span><h2 id="h-author">Zostań autorem KBR</h2>' +
        '<p>Publikujemy teksty badaczy, ekspertów i praktyków biznesu. Szukamy autorów, którzy mają do powiedzenia coś nowego i potrafią poprzeć to badaniami lub doświadczeniem.</p>' +
        '<ul class="contact-box__list"><li>Prześlij krótki opis tematu (do 300 słów) i informację o sobie.</li><li>Redakcja odpowiada w ciągu 14 dni.</li><li>Teksty do serwisu: 8–15 tys. znaków, do magazynu: 15–25 tys. znaków.</li></ul>' +
        '<a class="contact-box__mail" href="mailto:autorzy@kbr.example">' + KBR.icon('mail', 18) + 'autorzy@kbr.example</a></div>' +
        '</section></div></div>';
    return { title: 'Kontakt – KBR', html: html, mount: function (root) {
      const f = root.querySelector('[data-author-form]');
      if (f) f.addEventListener('submit', function (e) {
        e.preventDefault();
        const bad = Array.prototype.filter.call(f.querySelectorAll('[required]'), function (el) { return !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value)); });
        f.querySelectorAll('.input').forEach(function (el) { el.setAttribute('aria-invalid', bad.indexOf(el) !== -1 ? 'true' : 'false'); });
        if (bad.length) { bad[0].focus(); ui.toast('Uzupełnij wymagane pola.'); return; }
        f.reset(); ui.toast('Dziękujemy! Propozycja została wysłana (demo).');
      });
    } };
  }
  KBR.pages.info = function (route) {
    const slug = route.params.slug;
    if (slug === 'o-kbr' || slug === 'redakcja') return aboutPage();
    if (slug === 'kontakt' || slug === 'reklama' || slug === 'dla-autorow') return contactPage();
    const p = INFO[slug];
    if (!p) return KBR.pages.notFound();
    return simplePage(p[0], [{ label: p[0] }], p[1], p[2]);
  };

  /* Ustawienia cookies – mechanizm (okno), nie osobna strona */
  KBR.ui.cookies = function () {
    const prefs = KBR.storage.get('cookies', { analytics: false, marketing: false });
    const d = KBR.ui.modal('<h2 id="modal-title">Ustawienia cookies</h2><p>Wybierz, na jakie kategorie plików cookies się zgadzasz. <span class="demo-tag">Kategorie i opisy do zatwierdzenia</span></p>' +
      '<form id="cookie-form" style="margin-top:20px"><label class="check" for="ck-nec"><input type="checkbox" id="ck-nec" checked disabled><span><strong>Niezbędne</strong> – zawsze aktywne</span></label>' +
      '<label class="check" for="ck-an"><input type="checkbox" id="ck-an"' + (prefs.analytics ? ' checked' : '') + '><span><strong>Analityczne</strong></span></label>' +
      '<label class="check" for="ck-mk"><input type="checkbox" id="ck-mk"' + (prefs.marketing ? ' checked' : '') + '><span><strong>Marketingowe</strong></span></label>' +
      '<div class="btn-row"><button class="btn btn--primary" type="submit">Zapisz ustawienia</button><button class="btn btn--ghost" type="button" data-close>Anuluj</button></div></form>', { focus: '#ck-an' });
    d.querySelector('#cookie-form').addEventListener('submit', function (e) {
      e.preventDefault();
      KBR.storage.set('cookies', { analytics: d.querySelector('#ck-an').checked, marketing: d.querySelector('#ck-mk').checked });
      d.close(); KBR.ui.toast('Zapisano ustawienia cookies.');
    });
  };
})();
