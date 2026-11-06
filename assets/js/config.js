/* ==========================================================================
   Konfiguracja prototypu – JEDNO miejsce na założenia wymagające zatwierdzenia.
   Wszystkie nazwy, ceny, okresy i uprawnienia planów są DANYMI DEMONSTRACYJNYMI,
   a nie zatwierdzoną ofertą KBR.
   ========================================================================== */
window.KBR = window.KBR || {};

KBR.config = {
  storagePrefix: 'kbr.proto.v1.',

  /* Miękki paywall (licznik darmowych materiałów).
     Docelowy limit, zasady naliczania i dostępność dla niezalogowanych są DO USTALENIA.
     Wartość jest założeniem prototypu i można ją zmienić w panelu „Narzędzia demo”.
     0 = licznik wyłączony (materiały „w ramach limitu” są wtedy otwarte). */
  meter: {
    defaultLimit: 3,
    period: 'bez odnawiania – licznik zapisany w przeglądarce (po wyczyszczeniu historii lub cookies liczy się od nowa; ryzyko zaakceptowane)',
    appliesTo: 'gość (niezalogowany); po limicie wymagane bezpłatne konto'
  },

  currency: 'zł',

  /* Trzy pakiety – wyłącznie rozliczenie roczne. Każdy pakiet daje pełny dostęp do serwisu.
     Zmiana pakietu w trakcie okresu dostępu NIE jest przewidziana w MVP.
     role: rola konta nadawana po opłaceniu (cyfrowa | prenumerata | premium). */
  featureList: [
    'Nieograniczony dostęp do wszystkich treści KBR online',
    'Pełne archiwum artykułów',
    'Cotygodniowy newsletter redakcji',
    '4 wydania drukowane rocznie (kwartalnik) z dostawą do domu lub biura',
    'Wydania cyfrowe każdego numeru',
    'Wydania specjalne w wersji cyfrowej',
    'Zniżki na wydarzenia, konferencje i webinary KBR',
    'Zaproszenia na eventy i wydarzenia networkingowe'
  ],
  roles: {
    cyfrowa: { label: 'Cyfrowa', cls: 'hdr-premium--digital' },
    prenumerata: { label: 'Prenumerata', cls: 'hdr-premium--print' },
    premium: { label: 'Premium +', cls: '' }
  },
  plans: [
    {
      id: 'cyfrowy',
      role: 'cyfrowa',
      name: 'Cyfrowy',
      description: 'Pełen dostęp cyfrowy w dowolnym miejscu i na każdym urządzeniu.',
      cta: 'Zamów prenumeratę',
      prices: { year: 120 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles'],
      includes: [true, true, true, false, false, false, false, false]
    },
    {
      id: 'drukowany',
      role: 'prenumerata',
      name: 'Drukowany',
      description: 'Drukowany magazyn do uważnej lektury plus wygoda dostępu cyfrowego.',
      cta: 'Zamów prenumeratę',
      prices: { year: 180 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles', 'print'],
      print: true,
      includes: [true, true, true, true, true, true, false, false]
    },
    {
      id: 'premium',
      role: 'premium',
      featured: true,
      name: 'Premium +',
      description: 'Kompletny zestaw narzędzi dla liderów, którzy chcą wiedzieć więcej.',
      cta: 'Zamów prenumeratę',
      prices: { year: 480 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles', 'print', 'benefits'],
      print: true,
      benefits: true,
      includes: [true, true, true, true, true, true, true, true]
    }
  ],
  /* Korzyści Premium – wysyłane e-mailem na adres konta. */
  benefits: {
    short: 'Kody zniżkowe i zaproszenia trafiają prosto na skrzynkę e-mail.',
    details: 'Kody zniżkowe na szkolenia i zaproszenia na wydarzenia Akademii Leona Koźmińskiego wysyłamy e-mailem na adres Twojego konta przez cały okres pakietu. Po wygaśnięciu pakietu wiadomości przestają przychodzić.'
  },
  /* Identyfikatory pakietów z wcześniejszych wersji prototypu (dane w localStorage). */
  planAliases: { pelny: 'premium' },

  /* Reklamy ustawione na sztywno. Pliki wgraj do assets/img/reklamy/ (wersja @2x obok, np. artykul-728x90@2x.jpg).
     Puste pole src = ramka zastępcza. href = link docelowy, alt = tekst alternatywny. */
  ads: {
    home: { desktop: 'assets/img/reklamy/glowna-970x250.jpg', mobile: 'assets/img/reklamy/glowna-300x250.jpg', href: '', alt: '' },
    inline: { desktop: 'assets/img/reklamy/artykul-728x90.jpg', mobile: 'assets/img/reklamy/artykul-300x250.jpg', href: '', alt: '' },
    side: { src: 'assets/img/reklamy/bok-300x250.jpg', href: '', alt: '' },
    /* Strona logowania – large rectangle 336 × 280 (zalecany plik 2×: 672 × 560) */
    login: { src: 'assets/img/reklamy/logowanie-336x280.jpg', href: '', alt: '' }
  },

  /* Wysyłka drukowanego wydania – DANE DEMONSTRACYJNE. */
  printShipping: {
    short: 'Nowe wydanie drukowane co kwartał.',
    details: 'Kwartalnik wysyłamy Pocztą Polską. Dostawa na terenie Polski trwa 3–5 dni roboczych.',
    next: '1–7 grudnia 2026 (Nr 04 / 2026)'
  },

  /* Zakup: jednorazowa płatność za 12 miesięcy. */
  purchase: {
    months: 12,
    vatRate: 0.08, // stawka VAT doliczana w podsumowaniu zamówienia (strona subskrypcji pokazuje ceny netto)
    priceNote: 'Cena netto powiększona o 8% VAT, za 12 miesięcy prenumeraty. Wydanie drukowane z bezpłatną dostawą na terenie Polski.',
    /* Zgody w formularzu – TREŚCI DO DOSTARCZENIA (teksty zastępcze). */
    consents: [
      { id: 'terms', required: true, text: 'Akceptuję Regulamin subskrypcji KBR.', link: '#/strona/regulamin-subskrypcji' },
      { id: 'privacy', required: true, text: 'Zapoznałam/em się z Polityką prywatności i informacją o przetwarzaniu danych.', link: '#/strona/polityka-prywatnosci' },
      { id: 'digital', required: true, text: 'Wyrażam zgodę na rozpoczęcie dostępu do treści cyfrowych przed upływem terminu na odstąpienie od umowy.' }
    ]
  },

  /* Bramka płatności – zamówienie składane we własnym formularzu KBR (#/zamowienie),
     płatność u operatora (np. PayU, Przelewy24, Stripe – do wyboru).
     initUrl: endpoint backendu KBR, który tworzy transakcję u operatora i zwraca { redirectUrl }.
     Pusty initUrl = TRYB DEMONSTRACYJNY (bez przekierowania, wynik płatności symulowany).
     returnUrl: powrót z bramki; {orderId} zastępuje numer zamówienia. Opis: docs/platnosci/README.md */
  payment: {
    operator: '',
    initUrl: '',
    returnUrl: '#/zamowienie/status?nr={orderId}'
  },

  periods: {
    month: { label: 'Miesięcznie', unit: 'mies.', months: 1 },
    year: { label: 'Rocznie', unit: 'rok', months: 12 }
  },

  /* Konto demonstracyjne używane przez przełącznik stanów w panelu demo. */
  demoAccount: { firstName: 'Anna', lastName: 'Kowalska', email: 'anna.kowalska@example.com' },

  /* Minimalne wymagania hasła (założenie prototypu). */
  password: { minLength: 8 }
};
KBR.config.plans.forEach(function (p) { p.features = KBR.config.featureList.map(function (t, i) { return { text: t, included: p.includes[i] }; }); });
