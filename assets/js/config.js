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
    'Dostęp do wszystkich artykułów w serwisie',
    'Magazyn online: czytnik wydania i PDF do pobrania',
    'Drukowane wydanie magazynu wysyłane na podany adres',
    'Zniżki na szkolenia Akademii Leona Koźmińskiego',
    'Zaproszenia na wydarzenia organizowane przez Uczelnię'
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
      description: 'Pełny dostęp do wszystkich artykułów w serwisie oraz do magazynu online i w PDF.',
      cta: 'Wybieram cyfrowy',
      prices: { year: 120 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles'],
      includes: [true, true, false, false, false]
    },
    {
      id: 'drukowany',
      role: 'prenumerata',
      name: 'Drukowany',
      description: 'Wszystko, co w pakiecie Cyfrowym, oraz drukowane wydanie magazynu wysyłane na podany adres.',
      cta: 'Wybieram drukowany',
      prices: { year: 160 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles', 'print'],
      print: true,
      includes: [true, true, true, false, false]
    },
    {
      id: 'premium',
      role: 'premium',
      featured: true,
      name: 'Premium +',
      description: 'Pakiet Drukowany oraz zniżki na szkolenia i zaproszenia na wydarzenia Uczelni.',
      cta: 'Wybieram Premium +',
      prices: { year: 280 },
      entitlements: ['content', 'magazine-pdf', 'magazine-articles', 'print', 'benefits'],
      print: true,
      benefits: true,
      includes: [true, true, true, true, true]
    }
  ],
  /* Korzyści Premium – wysyłane e-mailem na adres konta. */
  benefits: {
    short: 'Zniżki i zaproszenia otrzymasz e-mailem.',
    details: 'Kody zniżkowe na szkolenia i zaproszenia na wydarzenia Akademii Leona Koźmińskiego wysyłamy e-mailem na adres Twojego konta przez cały okres pakietu. Po wygaśnięciu pakietu wiadomości przestają przychodzić.'
  },
  /* Identyfikatory pakietów z wcześniejszych wersji prototypu (dane w localStorage). */
  planAliases: { pelny: 'premium' },

  /* Wysyłka drukowanego wydania – DANE DEMONSTRACYJNE. */
  printShipping: {
    short: 'Wydanie drukowane raz na kwartał.',
    details: 'Kwartalnik wysyłamy Pocztą Polską. Pierwszy egzemplarz otrzymasz z najbliższej wysyłki po opłaceniu zamówienia. Dostawa na terenie Polski trwa 3–5 dni roboczych.',
    next: '1–7 grudnia 2026 (Nr 04 / 2026)'
  },

  /* Zakup: jednorazowa płatność za 12 miesięcy. */
  purchase: {
    months: 12,
    priceNote: 'Jednorazowa opłata za 12 miesięcy.',
    /* Zgody w formularzu – TREŚCI DO DOSTARCZENIA (teksty zastępcze). */
    consents: [
      { id: 'terms', required: true, text: 'Akceptuję Regulamin subskrypcji KBR.', link: '#/strona/regulamin-subskrypcji' },
      { id: 'privacy', required: true, text: 'Zapoznałam/em się z Polityką prywatności i informacją o przetwarzaniu danych.', link: '#/strona/polityka-prywatnosci' },
      { id: 'digital', required: true, text: 'Wyrażam zgodę na rozpoczęcie dostępu do treści cyfrowych przed upływem terminu na odstąpienie od umowy.' }
    ]
  },

  /* Jotform – formularz zamówienia (szablon Product Order Form).
     formUrl: Jotform → Publikuj → Szybkie udostępnianie → Kopiuj link,
              np. https://form.jotform.com/251234567890123 (lub https://eu.jotform.com/… dla serwerów UE).
     Pusty formUrl = TRYB DEMONSTRACYJNY (formularz nie jest osadzany, płatność nie działa).
     formUrlByPlan: opcjonalnie osobny formularz na pakiet (nadpisuje formUrl).
     fields: UNIKALNE NAZWY pól (pole → Właściwości → Zaawansowane → Unikalna nazwa).
             Wartości poniżej to nazwy do ustawienia w Jotform – muszą być identyczne. */
  jotform: {
    formUrl: '',
    formUrlByPlan: { cyfrowy: '', drukowany: '', premium: '' },
    fields: {
      plan: 'pakiet',              // ukryte, np. „Cyfrowy — 12 miesięcy”
      planCode: 'kodPakietu',      // ukryte: cyfrowy | drukowany | premium
      orderId: 'numerZamowienia',  // ukryte: numer zamówienia KBR (powiązanie z kontem)
      userId: 'idKonta',           // ukryte: identyfikator konta KBR
      amount: 'kwota',             // ukryte: kwota w zł (kontrola po stronie serwera)
      name: 'imieNazwisko',        // pole „Imię i nazwisko” (Full Name) → name[first], name[last]
      email: 'email'               // pole „E-mail”
    }
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
