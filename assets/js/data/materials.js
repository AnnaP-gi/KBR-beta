/* ==========================================================================
   Materiały demonstracyjne. Każdy materiał ma jeden identyfikator (slug),
   jeden temat główny i jeden adres: #/artykul/<slug>.
   Treści zostały przygotowane na potrzeby prototypu – nie są publikacjami KBR.
   Pole access: 'metered' (otwarty), 'metered' (w ramach darmowego limitu), 'premium'.
   ========================================================================== */
KBR.data.materials = [
  /* ---------------------------------------------------------------- HERO */
  {
    id: 'gmina-plan-ogolny', format: 'article', topic: 'gospodarka', access: 'metered',
    title: 'Gmina nie uchwaliła planu ogólnego. Czy możesz pójść do sądu?',
    lead: 'Po 31 sierpnia 2026 r. brak planu ogólnego może utrudnić prowadzenie inwestycji i wpłynąć na sytuację właścicieli nieruchomości. Prof. ALK dr hab. Jan Chmielewski wskazuje możliwą drogę zaskarżenia bezczynności gminy.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-08-28', readTime: 7,
    image: 'hero-plan-ogolny.jpg', imageAlt: 'Dłoń z długopisem nad kolorowym planem zagospodarowania osiedla',
    body: [
      { t: 'p', x: 'Reforma planowania przestrzennego zmieniła sposób, w jaki gminy określają zasady zabudowy. Plan ogólny ma stać się podstawowym dokumentem, do którego odnoszą się kolejne decyzje – od planów miejscowych po warunki zabudowy. Dla inwestora oznacza to, że opóźnienie po stronie gminy przestaje być wyłącznie problemem urzędu.' },
      { t: 'figure', layout: 'side', src: 'hero-plan-ogolny.jpg', pos: '35% 50%', alt: 'Dłoń z długopisem nad planem zagospodarowania osiedla', cap: 'Plan ogólny staje się podstawowym dokumentem dla kolejnych decyzji planistycznych.' },
      { t: 'p', x: 'W praktyce pytania przedsiębiorców i właścicieli gruntów są bardzo konkretne: czy w okresie przejściowym uda się uzyskać decyzję, co stanie się z rozpoczętymi procedurami i czy bezczynność rady gminy da się zaskarżyć.' },
      { t: 'h2', x: 'Dlaczego termin ma znaczenie' },
      { t: 'p', x: 'Termin przyjęcia planu ogólnego porządkuje cały system. Jeżeli gmina nie zdąży, część narzędzi, z których dotąd korzystali inwestorzy, może stać się niedostępna albo znacznie trudniejsza w użyciu. Dotyczy to zwłaszcza terenów, dla których nie obowiązuje plan miejscowy.' },
      { t: 'keypoints', title: 'Najważniejsze wnioski', items: [
        'Plan ogólny wpływa na możliwość uzyskania kolejnych rozstrzygnięć planistycznych.',
        'Opóźnienie gminy może oznaczać realne koszty po stronie inwestora.',
        'Przed wyborem drogi prawnej warto udokumentować przebieg procedury planistycznej.'
      ] },
      { t: 'youtube', id: 'aqz-KE-bpKQ', title: 'Plan ogólny gminy – komentarz eksperta', cap: 'Wideo demonstracyjne. W CMS redakcja wkleja link do filmu w serwisie YouTube.' },
      { t: 'h2', x: 'Jakie działania rozważyć' },
      { t: 'p', x: 'Pierwszym krokiem jest sprawdzenie, na jakim etapie znajduje się procedura w danej gminie: czy podjęto uchwałę o przystąpieniu do sporządzania planu, czy projekt był wyłożony i czy zebrano uwagi. Od tych informacji zależy, jaka ścieżka będzie adekwatna.' },
      { t: 'quote', x: 'Opóźnienie w planowaniu przestrzennym przestaje być sprawą urzędu. Staje się czynnikiem ryzyka, który trzeba ująć w harmonogramie inwestycji.', by: 'Redakcja KBR' },
      { t: 'p', x: 'Drugim krokiem jest ocena, czy sytuacja inwestora spełnia przesłanki do wystąpienia na drogę sądowoadministracyjną. To decyzja, którą warto podjąć z prawnikiem – sam brak dokumentu nie przesądza jeszcze o skuteczności skargi.' },
      { t: 'figure', src: 'case-tlo.jpg', alt: 'Schemat: Ścieżka oceny sytuacji inwestora', cap: 'Ścieżka oceny sytuacji inwestora.' },
      { t: 'p', x: 'Niezależnie od wybranej drogi, dobrze prowadzona dokumentacja i stały kontakt z urzędem pozwalają ograniczyć niepewność. W wielu przypadkach to właśnie jakość informacji decyduje o tym, czy inwestycja utrzyma zakładany harmonogram.' }
    ]
  },

  /* ---------------------------------------------------- WYBRANE DLA CIEBIE */
  {
    id: 'wiarygodnosc-po-kryzysie', format: 'case', topic: 'marketing', access: 'metered',
    title: 'Kto decyduje, czy firma odzyska wiarygodność po kryzysie w sieci?',
    lead: 'Badanie z udziałem prof. Doroty Dobiji pokazuje, jak w sieci powstają grupy krytyków, obrońców i obserwatorów oraz dlaczego odbudowa reputacji wymaga śledzenia zmieniających się oczekiwań społecznych.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-08-28', readTime: 9,
    image: 'wiarygodnosc-siec.jpg', imageAlt: 'Wizualizacja sieci połączeń nad nowoczesnym budynkiem', caseLogo: 1,
    body: [
      { t: 'p', x: 'Kryzys wizerunkowy rzadko przebiega według jednego scenariusza. W mediach społecznościowych szybko formują się grupy o różnych motywacjach: jedni domagają się rozliczenia, inni bronią marki, a największa część obserwuje i czeka na kolejne sygnały.' },
      { t: 'p', x: 'To studium przypadku pokazuje, jak zespół zarządzający może mapować te grupy i dostosować komunikację do etapu kryzysu, zamiast odpowiadać jednym, uniwersalnym komunikatem.' },
      { t: 'h2', x: 'Trzy grupy, trzy potrzeby' },
      { t: 'list', items: ['Krytycy oczekują przyznania się do błędu i konkretnych zmian.', 'Obrońcy potrzebują argumentów, którymi mogą się posłużyć w dyskusji.', 'Obserwatorzy oceniają spójność działań w czasie, a nie pojedyncze deklaracje.'] },
      { t: 'figure', src: 'case-tlo.jpg', alt: 'Dokumenty z wykresami i lupa', cap: 'Analiza dyskusji w sieci wymaga łączenia danych ilościowych z oceną jakościową. Ilustracja poglądowa.' },
      { t: 'h2', x: 'Co zrobił zespół zarządzający' },
      { t: 'p', x: 'Pierwsze dni kryzysu zespół poświęcił na nasłuch i kategoryzowanie wypowiedzi. Dopiero na tej podstawie przygotowano sekwencję komunikatów: przeprosiny, plan naprawczy i regularne raporty z postępów.' },
      { t: 'quote', x: 'Wiarygodność nie wraca po jednym oświadczeniu. Wraca wtedy, gdy obserwatorzy widzą, że deklaracje zamieniają się w decyzje.', by: 'Redakcja KBR' },
      { t: 'h2', x: 'Pytania do dyskusji' },
      { t: 'list', items: ['Które wskaźniki pozwalają ocenić, że kryzys wszedł w fazę odbudowy?', 'Kto w organizacji powinien odpowiadać za komunikację z grupą obserwatorów?', 'Jak uniknąć sytuacji, w której plan naprawczy jest wyłącznie działaniem PR?'] }
    ]
  },
  {
    id: 'project-manager-w-grze', format: 'article', topic: 'zarzadzanie', access: 'premium',
    title: 'Project manager w grze. Jak symulacje rozwijają kompetencje?',
    lead: 'Gry symulacyjne pozwalają ćwiczyć decyzje, których koszt w prawdziwym projekcie byłby zbyt wysoki. Sprawdzamy, kiedy ta metoda działa najlepiej.',
    authors: [{ id: 'tomasz-zielinski', role: 'autor' }], date: '2026-09-22', readTime: 6,
    image: 'cyber-zespol.jpg', imageAlt: 'Zespół pracujący przy komputerach w ciemnej sali',
    body: [
      { t: 'p', x: 'Kierownik projektu rzadko ma okazję przećwiczyć decyzję o przesunięciu budżetu albo zatrzymaniu etapu, zanim podejmie ją naprawdę. Symulacje dają bezpieczne środowisko, w którym konsekwencje widać w ciągu kilkudziesięciu minut, a nie miesięcy.' },
      { t: 'p', x: 'Najlepsze scenariusze nie odtwarzają rzeczywistości w każdym szczególe. Koncentrują się na kilku napięciach, z którymi zespoły mierzą się najczęściej: zakresie, czasie, jakości i relacjach z interesariuszami.' },
      { t: 'h2', x: 'Kiedy symulacja ma sens' },
      { t: 'list', items: ['gdy zespół ma przećwiczyć decyzje podejmowane pod presją czasu,', 'gdy trzeba zobaczyć skutki kompromisów między zakresem a budżetem,', 'gdy uczestnicy potrzebują wspólnego języka do rozmowy o ryzyku.'] },
      { t: 'quote', x: 'W symulacji wolno się pomylić. To najtańsze miejsce, żeby nauczyć się rozpoznawać sygnały ostrzegawcze.', by: 'Tomasz Zieliński' },
      { t: 'h2', x: 'Rola omówienia' },
      { t: 'p', x: 'Sama rozgrywka to połowa wartości. Druga połowa to omówienie, w którym uczestnicy łączą swoje decyzje z wynikami i przenoszą wnioski do codziennej pracy. Bez tej części symulacja łatwo staje się wyłącznie ciekawą zabawą.' }
    ]
  },
  {
    id: 'scenariusze-zamiast-prognoz', format: 'article', topic: 'strategia', access: 'metered',
    title: 'Strategia w czasach niepewności: scenariusze zamiast prognoz',
    lead: 'Planowanie scenariuszowe pomaga zarządom przygotować się na kilka wersji przyszłości jednocześnie. Pokazujemy, jak zacząć bez rozbudowanego działu analiz.',
    authors: [{ id: 'tomasz-zielinski', role: 'autor' }], date: '2026-09-18', readTime: 8,
    image: 'hero-plan-ogolny.jpg', imageAlt: 'Plan zagospodarowania przestrzennego z zaznaczonymi obszarami', imagePos: '70% 50%',
    body: [
      { t: 'p', x: 'Prognoza odpowiada na pytanie, co najprawdopodobniej się wydarzy. Scenariusz odpowiada na inne: co zrobimy, jeśli wydarzy się coś, czego nie przewidujemy. W okresach dużej zmienności to drugie pytanie bywa ważniejsze.' },
      { t: 'h2', x: 'Cztery kroki na początek' },
      { t: 'figure', src: 'case-tlo.jpg', alt: 'Schemat: Proces planowania scenariuszowego', cap: 'Proces planowania scenariuszowego.' },
      { t: 'p', x: 'Warsztat scenariuszowy nie wymaga zaawansowanych narzędzi. Wymaga natomiast zaangażowania osób, które widzą organizację z różnych perspektyw – od sprzedaży po finanse.' },
      { t: 'quote', x: 'Dobry scenariusz nie jest przepowiednią. Jest próbą generalną decyzji, które być może trzeba będzie podjąć.', by: 'Tomasz Zieliński' },
      { t: 'p', x: 'Wynikiem pracy nie jest jeden plan, ale zestaw opcji i sygnałów, które pozwalają szybciej rozpoznać, w którą stronę zmierza otoczenie.' }
    ]
  },

  /* ----------------------------------------------------------- NAJNOWSZE */
  {
    id: 'portfel-projektow-kiedy-stop', format: 'article', topic: 'zarzadzanie', access: 'metered',
    title: 'Portfel projektów: kiedy powiedzieć „stop”?',
    lead: 'Zatrzymanie projektu bywa trudniejsze niż jego rozpoczęcie. Proponujemy kryteria, które pomagają podjąć tę decyzję na czas.',
    authors: [{ id: 'tomasz-zielinski', role: 'autor' }], date: '2026-09-26', readTime: 5,
    image: 'case-tlo.jpg', imageAlt: 'Dokumenty z wykresami i lupa',
    body: [
      { t: 'p', x: 'W wielu organizacjach projekty trwają dłużej, niż uzasadniają to ich wyniki. Powodem nie jest brak danych, lecz brak momentu, w którym ktoś ma obowiązek zadać pytanie o sens dalszej pracy.' },
      { t: 'h2', x: 'Punkty kontrolne zamiast intuicji' },
      { t: 'p', x: 'Pomaga ustalenie z góry, przy jakich warunkach projekt wraca do komitetu sterującego: przekroczenie budżetu, zmiana założeń rynkowych albo utrata sponsora biznesowego.' },
      { t: 'list', items: ['Czy założenia z uzasadnienia biznesowego są nadal aktualne?', 'Czy koszt kontynuacji jest niższy niż wartość, którą projekt jeszcze może dostarczyć?', 'Czy zasoby nie przyniosłyby większej wartości w innym projekcie?'] },
      { t: 'p', x: 'Decyzja o zatrzymaniu nie musi oznaczać porażki. Często jest dowodem dojrzałości zarządzania portfelem.' }
    ]
  },
  {
    id: 'controlling-strategiczny', format: 'article', topic: 'finanse', access: 'premium',
    title: 'Controlling strategiczny w średniej firmie: od budżetu do decyzji',
    lead: 'Budżet mówi, ile wydamy. Controlling strategiczny pomaga zrozumieć, czy wydajemy na to, co naprawdę buduje przewagę.',
    authors: [{ id: 'piotr-nowak', role: 'autor' }], date: '2026-09-24', readTime: 7,
    image: 'magazyn-ai-organizacja.jpg', imageAlt: 'Portret kobiety w dżinsowej koszuli na granatowym tle', imagePos: '50% 30%',
    body: [
      { t: 'p', x: 'W średnich firmach controlling często sprowadza się do porównania wykonania z planem. To ważne, ale niewystarczające, gdy zarząd musi wybierać między kilkoma kierunkami rozwoju.' },
      { t: 'h2', x: 'Trzy pytania controllingu strategicznego' },
      { t: 'list', items: ['Które inicjatywy realnie wspierają cele strategiczne?', 'Jakie wskaźniki wyprzedzające sygnalizują zmianę trendu?', 'Gdzie firma utrzymuje koszty, które nie tworzą wartości dla klienta?'] },
      { t: 'p', x: 'Odpowiedzi na te pytania wymagają współpracy finansów z właścicielami procesów. Controller staje się partnerem w rozmowie o priorytetach, a nie tylko autorem raportów.' },
      { t: 'p', x: 'Dobrym początkiem jest kwartalny przegląd portfela inicjatyw z jasnym podziałem na te, które należy przyspieszyć, utrzymać lub wygasić.' }
    ]
  },
  {
    id: 'sukcesja-w-zarzadzie', format: 'article', topic: 'przedsiebiorczosc', access: 'metered',
    title: 'Jak przygotować firmę na sukcesję w zarządzie',
    lead: 'Plan sukcesji to nie lista nazwisk, lecz proces rozwijania ludzi i przekazywania odpowiedzialności. Wyjaśniamy, od czego zacząć.',
    authors: [{ id: 'marta-wisniewska', role: 'autor' }], date: '2026-09-20', readTime: 6,
    image: 'lider-czyta.jpg', imageAlt: 'Mężczyzna w garniturze czytający książkę w fotelu',
    body: [
      { t: 'p', x: 'Sukcesja w zarządzie najczęściej staje się tematem wtedy, gdy jest już pilna. Tymczasem najlepsze rezultaty daje proces rozpoczęty kilka lat wcześniej.' },
      { t: 'h2', x: 'Elementy dobrego planu' },
      { t: 'pull', x: 'Plan sukcesji przygotowany w ostatniej chwili jest tylko listą nazwisk. Dobry plan to kilka lat rozwijania ludzi.' },
      { t: 'list', items: ['kryteria oceny gotowości kandydatów,', 'ścieżki rozwoju obejmujące realną odpowiedzialność,', 'rola rady nadzorczej i właścicieli w procesie,', 'plan komunikacji wobec zespołu i partnerów.'] },
      { t: 'p', x: 'Transparentny proces zmniejsza niepewność w organizacji i pozwala utrzymać ciągłość relacji z klientami.' }
    ]
  },

  /* ----------------------------------------------------- DLA SUBSKRYBENTÓW */
  {
    id: 'liderzy-czytaja-wiersze', format: 'article', topic: 'przywodztwo', access: 'premium',
    title: 'Umiem być ciszą. Czy współcześni liderzy czytają wiersze Rafała Wojaczka?',
    lead: 'Poezja nie daje gotowych odpowiedzi, ale uczy uważności na język i emocje. Sprawdzamy, dlaczego coraz więcej programów rozwoju liderów sięga po literaturę.',
    authors: [{ id: 'marta-wisniewska', role: 'autor' }], date: '2026-08-28', readTime: 10,
    image: 'lider-czyta.jpg', imageAlt: 'Mężczyzna w garniturze czytający książkę przy oknie',
    body: [
      { t: 'p', x: 'W programach rozwoju kadry zarządzającej od lat dominują studia przypadków i dane. Coraz częściej pojawia się jednak element, który na pierwszy rzut oka nie pasuje do świata biznesu: wspólne czytanie literatury.' },
      { t: 'p', x: 'Chodzi o ćwiczenie uważności. Tekst poetycki wymaga zatrzymania, tolerowania niejednoznaczności i słuchania różnych interpretacji – czyli umiejętności, których liderzy potrzebują w rozmowach z zespołem.' },
      { t: 'h2', x: 'Język, który nie upraszcza' },
      { t: 'p', x: 'Menedżerowie na co dzień posługują się językiem skrótów: wskaźników, statusów i rekomendacji. Poezja działa odwrotnie – pokazuje, że jedno zdanie może mieć kilka warstw znaczeń. To dobre przygotowanie do trudnych rozmów, w których liczy się nie tylko treść, ale i sposób mówienia.' },
      { t: 'quote', x: 'Lider, który potrafi znieść chwilę ciszy w rozmowie, daje innym przestrzeń do powiedzenia rzeczy naprawdę ważnych.', by: 'dr Marta Wiśniewska' },
      { t: 'h2', x: 'Jak wprowadzić tę praktykę' },
      { t: 'list', items: ['krótkie teksty czytane na początku spotkania zespołu,', 'rozmowa o interpretacjach bez oceniania „dobrych” i „złych” odpowiedzi,', 'powiązanie wniosków z konkretnymi sytuacjami w pracy.'] },
      { t: 'figure', src: 'wybor-etyczny.jpg', alt: 'Świetlista smuga na ciemnym tle', cap: 'Uważność na niuanse języka pomaga w prowadzeniu trudnych rozmów. Ilustracja poglądowa.' },
      { t: 'p', x: 'Efekty takich warsztatów trudno mierzyć prostymi wskaźnikami. Uczestnicy opisują je jednak podobnie: rzadziej przerywają, częściej dopytują i uważniej słuchają osób, które mówią ciszej.' }
    ]
  },
  {
    id: 'szybki-urzad-dobry-urzad', format: 'article', topic: 'technologie', access: 'premium',
    title: 'Czy szybki urząd to dobry urząd?',
    lead: 'Automatyzacja i narzędzia AI skracają czas obsługi spraw. Pytamy, jak mierzyć jakość usług publicznych, aby szybkość nie stała się jedynym celem.',
    authors: [{ id: 'anna-nowak', role: 'autor' }, { id: 'marta-wisniewska', role: 'ekspert' }], date: '2026-08-28', readTime: 8,
    image: 'urzad-czas.jpg', imageAlt: 'Zaskoczona kobieta przy biurku z budzikiem', imagePos: '50% 35%',
    body: [
      { t: 'p', x: 'Cyfryzacja administracji przyniosła wyraźną poprawę: wiele spraw można załatwić bez wizyty w urzędzie, a część decyzji zapada szybciej. Kolejnym krokiem jest wykorzystanie narzędzi AI do obsługi zapytań i przygotowywania projektów pism.' },
      { t: 'p', x: 'Szybkość jest jednak tylko jednym z wymiarów jakości. Obywatel oczekuje również zrozumiałej decyzji, możliwości zadania pytania i poczucia, że jego sprawa została potraktowana indywidualnie.' },
      { t: 'h2', x: 'Mierniki, które warto dodać' },
      { t: 'list', items: ['odsetek spraw zakończonych bez konieczności uzupełnień,', 'zrozumiałość uzasadnień oceniana przez odbiorców,', 'liczba odwołań i ich przyczyny,', 'dostępność kontaktu z osobą prowadzącą sprawę.'] },
      { t: 'quote', x: 'Automatyzacja powinna uwalniać czas urzędników na sprawy wymagające oceny, a nie zastępować rozmowę tam, gdzie jest potrzebna.', by: 'dr Marta Wiśniewska, ekspertka' },
      { t: 'h2', x: 'Rola nadzoru nad modelami' },
      { t: 'p', x: 'Każde narzędzie AI użyte w procesie administracyjnym wymaga jasnego przypisania odpowiedzialności. Urzędnik musi wiedzieć, na jakiej podstawie system zaproponował rozstrzygnięcie, i mieć realną możliwość jego zmiany.' },
      { t: 'p', x: 'Dobrą praktyką jest też regularny przegląd próbki spraw obsłużonych z udziałem automatyzacji – nie tylko pod kątem błędów, ale również tego, czy decyzje pozostają zrozumiałe dla adresatów.' }
    ]
  },
  {
    id: 'cyberodpornosc-kompetencja-zarzadu', format: 'article', topic: 'technologie', access: 'premium',
    title: 'Cyberodporność jako kompetencja zarządu',
    lead: 'Incydent bezpieczeństwa to dziś test przywództwa, a nie tylko działu IT. Opisujemy, jak zarządy przygotowują się do sytuacji kryzysowych.',
    authors: [{ id: 'katarzyna-lewandowska', role: 'autor' }], date: '2026-08-28', readTime: 9,
    image: 'cyber-zespol.jpg', imageAlt: 'Zespół analityków przy monitorach w ciemnej sali',
    body: [
      { t: 'p', x: 'Jeszcze niedawno cyberbezpieczeństwo było traktowane jako specjalistyczny obszar technologii. Dziś coraz więcej organizacji uznaje je za element odporności całego biznesu – obok płynności finansowej i ciągłości łańcucha dostaw.' },
      { t: 'p', x: 'Zmienia się też rola zarządu. Nie chodzi o znajomość szczegółów technicznych, ale o umiejętność podejmowania decyzji w warunkach niepełnej informacji i presji czasu.' },
      { t: 'pull', x: 'Incydent bezpieczeństwa sprawdza nie systemy, lecz to, jak szybko zarząd potrafi podjąć decyzję bez pełnej wiedzy.' },
      { t: 'h2', x: 'Ćwiczenia sztabowe' },
      { t: 'figure', src: 'case-tlo.jpg', alt: 'Schemat: Przebieg ćwiczenia sztabowego', cap: 'Przebieg ćwiczenia sztabowego.' },
      { t: 'p', x: 'Ćwiczenia pozwalają sprawdzić, czy procedury działają w praktyce i czy wszyscy członkowie zarządu wiedzą, jaka jest ich rola w pierwszych godzinach kryzysu.' },
      { t: 'quote', x: 'Plan reagowania, którego nikt nie przećwiczył, jest tylko dokumentem.', by: 'Katarzyna Lewandowska' },
      { t: 'p', x: 'Organizacje, które regularnie ćwiczą takie scenariusze, szybciej podejmują decyzje o komunikacji i łatwiej utrzymują zaufanie klientów.' }
    ]
  },
  {
    id: 'wybor-miedzy-slusznym-a-latwym', format: 'article', topic: 'odpowiedzialny', access: 'premium',
    title: 'Mugole, dementorzy i niewinni czarodzieje, czyli o wyborze między tym, co słuszne, a tym, co łatwe',
    lead: 'Popkultura dostarcza zaskakująco trafnych metafor dylematów etycznych w organizacjach. Rozmawiamy o tym, jak ład korporacyjny wspiera trudne decyzje.',
    authors: [{ id: 'piotr-nowak', role: 'autor' }], date: '2026-08-28', readTime: 11,
    image: 'wybor-etyczny.jpg', imageAlt: 'Świetlista czerwona smuga na ciemnym tle',
    body: [
      { t: 'p', x: 'Każda organizacja ma sytuacje, w których łatwiej jest nie zauważyć problemu. Opóźnione zgłoszenie nieprawidłowości, przemilczane ryzyko czy decyzja podjęta „na skróty” rzadko wynikają ze złej woli – częściej z presji wyników i niejasnych zasad.' },
      { t: 'p', x: 'Metafory zaczerpnięte z popularnych opowieści pomagają rozmawiać o tych mechanizmach bez wskazywania winnych. Pozwalają nazwać lęk, konformizm i odwagę w sposób zrozumiały dla wszystkich.' },
      { t: 'h2', x: 'Ład korporacyjny jako wsparcie' },
      { t: 'p', x: 'Dobrze zaprojektowane zasady nadzoru nie służą wyłącznie kontroli. Dają pracownikom oparcie, gdy muszą podjąć decyzję niepopularną, ale słuszną.' },
      { t: 'list', items: ['czytelne kanały zgłaszania nieprawidłowości,', 'ochrona osób zgłaszających,', 'przykład ze strony zarządu i rady nadzorczej.'] },
      { t: 'quote', x: 'Kultura organizacyjna sprawdza się w momencie, w którym uczciwy wybór kosztuje.', by: 'Piotr Nowak' }
    ]
  },

  /* --------------------------------------------------------- MAGAZYN 03/2026 */
  {
    id: 'ai-zdolnosc-organizacyjna', format: 'article', topic: 'ai', access: 'premium', issue: '2026-03',
    title: 'AI jako zdolność organizacyjna, nie projekt IT',
    lead: 'Firmy, które traktują sztuczną inteligencję jako jednorazowe wdrożenie, rzadko osiągają trwałe efekty. Pokazujemy, jak budować kompetencję, która rośnie razem z organizacją.',
    authors: [{ id: 'anna-nowak', role: 'autor' }, { id: 'tomasz-zielinski', role: 'autor' }, { id: 'katarzyna-lewandowska', role: 'autor' }, { id: 'piotr-nowak', role: 'autor' }, { id: 'marta-wisniewska', role: 'ekspert' }, { id: 'pola-lea', role: 'ekspert' }], date: '2026-09-15', readTime: 12,
    image: 'magazyn-ai-organizacja.jpg', imageAlt: 'Portret kobiety w dżinsowej koszuli na granatowym tle', imagePos: '50% 30%',
    body: [{"t":"p","x":"Wiele firm rozpoczęło pracę ze sztuczną inteligencją od projektów pilotażowych. Część przyniosła obiecujące wyniki, ale niewiele z nich zmieniło sposób, w jaki organizacja podejmuje decyzje. Problem rzadko leży w samej technologii. Zarządy traktują AI jak wdrożenie systemu – z budżetem, harmonogramem i datą zakończenia – podczas gdy jej wartość rośnie dopiero wtedy, gdy staje się codzienną umiejętnością zespołów."},
      {"t":"p","x":"Z rozmów z menedżerami średnich i dużych firm wynika, że organizacje, które zbudowały trwałą przewagę, różnią się od pozostałych w trzech obszarach."},
      {"t":"split","src":"cyber-zespol.jpg","pos":"60% 50%","alt":"Zespół analityków przy monitorach","cap":"Wartość AI rośnie, gdy z modeli korzystają zespoły w wielu procesach jednocześnie.","blocks":[{"t":"p","x":"Po pierwsze, **odpowiedzialność za efekty leży w biznesie.** Właścicielem projektu nie jest dział IT, lecz menedżer procesu, który ma zyskać na zmianie. To on określa, co oznacza sukces, i to on decyduje, kiedy model jest wystarczająco dobry, by z niego korzystać na co dzień."},
      {"t":"pull","x":"Wartość sztucznej inteligencji nie rośnie z liczbą wdrożeń, lecz z liczbą decyzji, które dzięki niej zapadają lepiej i szybciej."},
      {"t":"p","x":"Po drugie, **dane są traktowane jak wspólny zasób.** W firmach, które utknęły na etapie pilotaży, każdy zespół buduje własne zestawienia i własne definicje wskaźników. Tam, gdzie AI działa na szeroką skalę, obowiązują wspólne zasady: wiadomo, kto odpowiada za jakość danych, kto ma do nich dostęp i jak zgłaszać błędy."},
      {"t":"p","x":"Po trzecie, **kompetencje rozwija się szeroko, a nie punktowo.** Zamiast kilkuosobowego zespołu ekspertów organizacje uczą pracy z modelami setki pracowników – od analityków po kierowników sprzedaży. Dzięki temu pomysły na zastosowania pojawiają się tam, gdzie widać realne problemy, a nie tylko w centrali."}]},
      {"t":"figure","src":"magazyn-ai-organizacja.jpg","pos":"50% 30%","alt":"Portret kobiety na granatowym tle","cap":"Fot. materiały Akademii Leona Koźmińskiego (zdjęcie poglądowe)."},
      {"t":"h2","x":"Od pilotażu do zdolności organizacyjnej"},
      {"t":"p","x":"Przejście od pojedynczych projektów do trwałej zdolności nie wymaga dużej reorganizacji. Wymaga kilku decyzji, które zarząd może podjąć od razu:"},
      {"t":"points","items":[{"title":"Wyznacz właścicieli procesów","x":"Menedżerowie odpowiadają za wykorzystanie AI w swoim obszarze i rozliczają się z efektów biznesowych, a nie technicznych."},{"title":"Ustal wspólne zasady pracy z danymi","x":"Jedna definicja kluczowych wskaźników i jasny podział odpowiedzialności za ich jakość."},{"title":"Mierz wykorzystanie, a nie liczbę projektów","x":"Miarą postępu jest odsetek decyzji wspieranych przez modele, a nie liczba uruchomionych pilotaży."}]},
      {"t":"p","x":"Firmy, które przyjmą tę perspektywę, przestaną pytać, czy kolejny projekt się zwrócił. Zaczną pytać, w których decyzjach wciąż polegają wyłącznie na intuicji – i dlaczego."}]
  },
  {
    id: 'nowy-kontrakt-lidera', format: 'article', topic: 'ludzie', access: 'metered', issue: '2026-03',
    title: 'Nowy kontrakt lidera z zespołem',
    lead: 'Oczekiwania pracowników wobec przełożonych zmieniły się szybciej niż modele przywództwa. Jak wygląda niepisana umowa między liderem a zespołem?',
    authors: [{ id: 'piotr-nowak', role: 'autor' }], date: '2026-09-15', readTime: 9,
    image: 'lider-czyta.jpg', imageAlt: 'Mężczyzna w garniturze czytający książkę', imagePos: '40% 50%',
    body: [{"t":"p","x":"Każdy zespół ma niepisany kontrakt z liderem: zbiór wzajemnych oczekiwań dotyczących autonomii, informacji, wsparcia i odpowiedzialności. W ostatnich latach jego treść zmieniła się szybciej niż modele przywództwa, którymi posługuje się większość organizacji. Praca hybrydowa, rosnąca niepewność i nowe pokolenie pracowników sprawiły, że to, co jeszcze niedawno uchodziło za skuteczne zarządzanie, dziś bywa odbierane jako kontrola."},
      {"t":"p","x":"Zmiana oczekiwań wynika z trzech głównych przesłanek."},
      {"t":"p","x":"Po pierwsze, **autonomia zamiast nadzoru.** Zespoły pracujące w rozproszeniu nie mogą czekać na akceptację każdej decyzji. Oczekują jasno określonych celów i swobody w wyborze sposobu ich realizacji."},
      {"t":"figure","layout":"side-left","src":"lider-czyta.jpg","pos":"40% 50%","alt":"Mężczyzna w garniturze czytający książkę","cap":"Lider, który dzieli się kontekstem, szybciej buduje zaufanie zespołu."},
      {"t":"p","x":"Po drugie, **informacja zamiast hierarchii.** Pracownicy chcą rozumieć, dlaczego podejmowane są decyzje, a nie tylko poznawać ich skutki. Lider, który dzieli się kontekstem, buduje zaufanie szybciej niż ten, który dzieli się wyłącznie poleceniami."},
      {"t":"pull","x":"Zespół nie oczekuje od lidera, że będzie znał wszystkie odpowiedzi. Oczekuje, że powie wprost, czego jeszcze nie wie."},
      {"t":"p","x":"Po trzecie, **rozwój zamiast oceny.** Coroczna rozmowa oceniająca przestaje wystarczać. Pracownicy oczekują regularnej informacji zwrotnej i rozmów o tym, czego mogą się nauczyć w kolejnych miesiącach."},
      {"t":"h2","x":"Jak odnowić kontrakt z zespołem"},
      {"t":"points","items":[{"title":"Zbuduj środowisko pracy przyjazne dla mózgu","x":"Ogranicz liczbę równoległych zadań i chroń czas na pracę wymagającą skupienia."},{"title":"Rozmawiaj o oczekiwaniach wprost","x":"Raz na kwartał sprawdź z zespołem, czy wzajemne oczekiwania wciąż są aktualne."}]},
      {"t":"p","x":"Nowy kontrakt nie powstaje w wyniku jednej rozmowy. To seria małych zmian w codziennych praktykach, które z czasem zmieniają sposób współpracy. Poniższa tabela zbiera najważniejsze z nich."},
      {"t":"figure","src":"case-tlo.jpg","alt":"Schemat: Jak przejść od kontroli do przywództwa opartego na zaufaniu","cap":"Jak przejść od kontroli do przywództwa opartego na zaufaniu"},
      {"t":"p","x":"Liderzy, którzy świadomie odnowią kontrakt ze swoimi zespołami, zyskają coś cenniejszego niż posłuszeństwo: zaangażowanie ludzi, którzy rozumieją, dokąd zmierza organizacja, i chcą mieć wpływ na drogę, którą do tego celu dojdzie."}]
  },
  {
    id: 'ryzyko-modeli-rada-nadzorcza', format: 'article', topic: 'zarzadzanie', access: 'premium', issue: '2026-03',
    title: 'Ryzyko modeli w języku rady nadzorczej',
    lead: 'Modele statystyczne i AI wpływają na kluczowe decyzje biznesowe. Jak rada nadzorcza może sprawować nad nimi skuteczny nadzór bez specjalistycznej wiedzy technicznej?',
    authors: [{ id: 'piotr-nowak', role: 'autor' }, { id: 'anna-nowak', role: 'ekspert' }], date: '2026-09-15', readTime: 10,
    image: 'urzad-czas.jpg', imageAlt: 'Biurko z budzikiem i notatnikiem', imagePos: '50% 80%',
    body: [
      { t: 'p', x: 'Modele wspierają decyzje kredytowe, cenowe i operacyjne. Ich błędy mogą przekładać się na straty finansowe, ryzyko regulacyjne i utratę zaufania klientów. Mimo to w wielu radach nadzorczych temat pojawia się rzadko.' },
      { t: 'p', x: 'Rada nie musi rozumieć matematyki modeli. Powinna jednak zadawać pytania, które pozwalają ocenić, czy organizacja panuje nad ryzykiem.' },
      { t: 'h2', x: 'Pięć pytań rady nadzorczej' },
      { t: 'list', items: ['Które decyzje w firmie opierają się na modelach?', 'Kto odpowiada za każdy z nich i jak często jest weryfikowany?', 'Jakie są znane ograniczenia modeli i jak je kompensujemy?', 'Co się dzieje, gdy model zawiedzie?', 'Jak raportujemy ryzyko modeli do zarządu i rady?'] },
      { t: 'quote', x: 'Nadzór nad modelami to kolejna odsłona starego pytania: czy wiemy, na jakiej podstawie podejmujemy decyzje?', by: 'Piotr Nowak' },
      { t: 'p', x: 'Regularny raport o ryzyku modeli, przygotowany w języku biznesowym, pozwala radzie włączyć ten temat do standardowego cyklu nadzoru.' }
    ]
  },

  /* ---------------------------------------------------- STUDIA PRZYPADKÓW */
  {
    id: 'zarzadzanie-portfelem-inwestycyjnym', format: 'case', topic: 'finanse', access: 'metered',
    title: 'Na czym polega zarządzanie portfelem inwestycyjnym? Poznaj skuteczne strategie inwestycyjne',
    lead: 'Studium przypadku pokazuje, jak zespół finansowy średniej firmy uporządkował zasady inwestowania nadwyżek płynności.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-08-20', readTime: 8,
    image: 'case-tlo.jpg', imageAlt: 'Dokumenty z wykresami i lupa', caseLogo: 2,
    body: [
      { t: 'p', x: 'Nadwyżki finansowe w firmie produkcyjnej przez lata utrzymywano na lokatach krótkoterminowych. Zmiana otoczenia stóp procentowych skłoniła zarząd do przeglądu tej praktyki.' },
      { t: 'h2', x: 'Punkt wyjścia' },
      { t: 'p', x: 'Zespół finansowy określił trzy cele: bezpieczeństwo kapitału, płynność potrzebną do finansowania bieżącej działalności oraz umiarkowany wzrost wartości środków.' },
      { t: 'list', items: ['podział środków na część operacyjną i rezerwową,', 'limity dla poszczególnych klas aktywów,', 'kwartalny przegląd portfela z udziałem zarządu.'] },
      { t: 'h2', x: 'Pytania do dyskusji' },
      { t: 'list', items: ['Jak pogodzić cel płynności z celem wzrostu wartości?', 'Kto powinien zatwierdzać zmiany polityki inwestycyjnej?'] }
    ]
  },
  {
    id: 'analiza-finansowa-etapy', format: 'case', topic: 'finanse', access: 'premium',
    title: 'Na czym polega analiza finansowa i jakie są jej etapy?',
    lead: 'Na przykładzie firmy handlowej pokazujemy, jak przeprowadzić analizę finansową krok po kroku i wykorzystać ją w rozmowie z bankiem.',
    authors: [{ id: 'alk', role: 'autor' }, { id: 'piotr-nowak', role: 'ekspert' }], date: '2026-08-14', readTime: 10,
    image: 'case-tlo.jpg', imageAlt: 'Dokumenty z wykresami i lupa', caseLogo: 3,
    body: [
      { t: 'p', x: 'Firma handlowa planowała rozbudowę sieci magazynów i potrzebowała finansowania dłużnego. Bank oczekiwał rzetelnej analizy sytuacji finansowej, a zarząd chciał przy okazji lepiej zrozumieć źródła rentowności.' },
      { t: 'p', x: 'Zespół przyjął klasyczną ścieżkę analizy: od struktury bilansu, przez płynność i rentowność, po przepływy pieniężne.' },
      { t: 'h2', x: 'Etapy analizy' },
      { t: 'figure', src: 'case-tlo.jpg', alt: 'Schemat: Etapy analizy finansowej', cap: 'Etapy analizy finansowej.' },
      { t: 'p', x: 'Najcenniejszym wnioskiem okazało się rozpoznanie, które grupy produktów wiążą najwięcej kapitału obrotowego.' }
    ]
  },
  {
    id: 'finansowanie-duzych-inwestycji', format: 'case', topic: 'finanse', access: 'metered',
    title: 'Jak pomaga finansować duże inwestycje?',
    lead: 'Studium przypadku o wyborze struktury finansowania dla wieloletniego projektu infrastrukturalnego.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-08-07', readTime: 7,
    image: 'case-tlo.jpg', imageAlt: 'Dokumenty z wykresami i lupa', caseLogo: 4,
    body: [
      { t: 'p', x: 'Duże inwestycje wymagają połączenia kilku źródeł finansowania. Kluczowe jest dopasowanie ich harmonogramu do etapów projektu i przepływów, które projekt będzie generował.' },
      { t: 'h2', x: 'Opcje rozważane przez zarząd' },
      { t: 'list', items: ['kredyt inwestycyjny z okresem karencji,', 'finansowanie ze środków własnych w pierwszym etapie,', 'partnerstwo z inwestorem branżowym.'] },
      { t: 'p', x: 'Ostateczna struktura łączyła kredyt z wkładem własnym, a decyzję o partnerstwie odłożono do zakończenia pierwszego etapu.' }
    ]
  },

  /* ------------------------------------------------------------- PODCASTY */
  {
    id: 'zjazd-absolwentow-mba-2026', format: 'podcast', topic: 'przywodztwo', access: 'metered', duration: 32,
    title: 'Zjazd Absolwentów i Absolwentek MBA 2026',
    lead: 'Rozmowy z uczestnikami zjazdu o tym, jak zmieniły się ich ścieżki zawodowe i co z programu MBA okazało się najbardziej przydatne.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-09-10',
    image: 'podcast-mba.jpg', imageAlt: 'Mężczyzna w koszulce MBA Reunion siedzący na ławce z widokiem na góry',
    body: [
      { t: 'p', x: 'W odcinku rozmawiamy z absolwentami różnych edycji programu MBA. Pytamy o decyzje zawodowe, które podjęli po studiach, i o umiejętności, które okazały się najważniejsze.' },
      { t: 'h2', x: 'W tym odcinku' },
      { t: 'list', items: ['dlaczego sieć kontaktów bywa ważniejsza niż dyplom,', 'jak zmienia się rola menedżera średniego szczebla,', 'co absolwenci poradziliby osobom rozpoczynającym program.'] },
      { t: 'p', x: 'Transkrypcja odcinka zostanie udostępniona po zatwierdzeniu formatu materiałów multimedialnych.' }
    ]
  },
  {
    id: 'vlog-pierwszy-dzien-na-uczelni', format: 'video', topic: 'ludzie', access: 'metered', duration: 16,
    title: 'VLOG: PIERWSZY DZIEŃ NA UCZELNI! *co i gdzie będę studiować?*',
    lead: 'Studencka relacja z pierwszego dnia na kampusie: budynki, sale, biblioteka i pierwsze wrażenia.',
    authors: [{ id: 'pola-lea', role: 'autor' }], date: '2026-09-05',
    image: 'wideo-vlog.jpg', imageAlt: 'Studentka nagrywająca vlog na tle budynku uczelni',
    body: [
      { t: 'p', x: 'Materiał wideo z cyklu studenckich relacji. Autorka oprowadza po kampusie i opowiada o pierwszych zajęciach.' }
    ]
  },
  {
    id: 'szkolnictwo-oczami-rektora', format: 'podcast', topic: 'innowacje', access: 'premium', duration: 102,
    title: 'Szkolnictwo oczami Grzegorza Mazurka, Rektora Akademii Leona Koźmińskiego',
    lead: 'Długa rozmowa o przyszłości edukacji menedżerskiej, roli uczelni biznesowych i zmianach, jakie przynosi rozwój technologii.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-08-30',
    image: 'podcast-rektor.jpg', imageAlt: 'Mężczyzna przemawiający przy mównicy na tle ścianki uczelni',
    body: [
      { t: 'p', x: 'Pełny odcinek podcastu dostępny dla subskrybentów. W opisie przedstawiamy zakres tematów poruszonych w rozmowie.' },
      { t: 'h2', x: 'Zakres rozmowy' },
      { t: 'list', items: ['rola uczelni biznesowej w zmieniającej się gospodarce,', 'kompetencje menedżerów w najbliższej dekadzie,', 'współpraca nauki i praktyki biznesowej.'] }
    ]
  },
  {
    id: 'forum-inspiracji-cx', format: 'video', topic: 'marketing', access: 'metered', duration: 23,
    title: 'Forum inspiracji i praktyki Customer Experience',
    lead: 'Zapis wystąpień z forum poświęconego projektowaniu doświadczeń klientów.',
    authors: [{ id: 'alk', role: 'autor' }], date: '2026-06-10',
    image: 'wideo-forum-cx.jpg', imageAlt: 'Plakat Forum Inspiracji i Praktyki Customer Experience',
    body: [
      { t: 'p', x: 'Wybrane fragmenty forum, na którym praktycy i badacze rozmawiali o mierzeniu i projektowaniu doświadczeń klientów.' }
    ]
  }
];

/* Wydania magazynu */
KBR.data.issues = [
  { id: '2026-03', label: 'Zima 2026', title: 'How AI Is Shaping Strategy', cover: 'magazyn-okladka-kbr.jpg', current: true,
    coverHeadline: 'How AI<br>Is Shaping<br>Strategy', coverSide: ['Prof. Grzegorz W. Kołodko', 'Geopolitical changes and their impact'],
    description: 'Numer poświęcony technologiom, sztucznej inteligencji i nowemu spojrzeniu na przywództwo.',
    toc: ['ai-zdolnosc-organizacyjna', 'nowy-kontrakt-lidera', 'ryzyko-modeli-rada-nadzorcza'],
    tocMore: [
      { section: 'Technologia', title: 'STEP: europejska odpowiedź na wyścig o technologie krytyczne', author: 'Katarzyna Lewandowska' },
      { section: 'Strategia', title: 'Suwerenność technologiczna a konkurencyjność polskich firm', author: 'Tomasz Zieliński' },
      { section: 'Finanse', title: 'Jak wyceniać inwestycje w sztuczną inteligencję', author: 'Piotr Nowak' },
      { section: 'Ludzie i organizacja', title: 'Kompetencje przyszłości w zarządach spółek', author: 'Marta Wiśniewska' },
      { section: 'Prawo', title: 'AI Act w praktyce: obowiązki, które wchodzą w życie w 2026 roku', author: 'Anna Nowak' },
      { section: 'Rozmowa numeru', title: 'Technologia to decyzja strategiczna, nie zakup', author: 'Redakcja KBR' },
      { section: 'Felieton', title: 'Czego menedżerowie mogą nauczyć się od inżynierów', author: 'Jan Chmielewski' }
    ],
    featureImage: { 'ai-zdolnosc-organizacyjna': 'magazyn-ai-organizacja.jpg', 'nowy-kontrakt-lidera': 'lider-czyta.jpg', 'ryzyko-modeli-rada-nadzorcza': 'urzad-czas.jpg' } },
  { id: '2026-02', label: 'Nr 02 / 2026', archived: true, title: 'Zespoły, które wygrywają: jak budować wysoką efektywność',
    description: 'Sprawdzone sposoby na zespoły, które dowożą wyniki bez wypalenia.',
    articles: ['Czy warto powołać tymczasowego prezesa?', 'Pracownicy szukają wsparcia u AI. To ryzykowne', 'Rytm dobowy zespołu jako przewaga konkurencyjna', 'Feedback, który naprawdę działa', 'Jak mierzyć efektywność pracy hybrydowej', 'Zespoły projektowe w administracji publicznej', 'Rozmowa numeru: kultura wysokiej odpowiedzialności', 'Felieton: pochwała nudnych spotkań'] },
  { id: '2026-01', label: 'Nr 01 / 2026', archived: true, title: 'Fałszywa zgoda: dlaczego transformacje się rozpadają',
    description: 'Liderzy często wydają się zgadzać, choć w rzeczywistości myślą inaczej. Wtedy zmiana traci impet.',
    articles: ['Pułapka fałszywej zgody', 'Co firmy źle rozumieją w prawach decyzyjnych', 'Siła strategicznego skupienia', 'Zarząd, który mówi jednym głosem', 'Transformacja cyfrowa bez działu transformacji', 'Jak rozpoznać opór ukryty za zgodą', 'Rozmowa numeru: zmiana zaczyna się od rozmowy', 'Felieton: odwaga, by powiedzieć „nie”'] },
  { id: '2025-04', label: 'Nr 04 / 2025', archived: true, title: 'Dlaczego wielkie innowacje zaczynają się od małych eksperymentów',
    description: 'Jak organizacje testują pomysły szybko, tanio i bez paraliżu decyzyjnego.',
    articles: ['Portfel eksperymentów zamiast jednego wielkiego zakładu', 'Kiedy pilotaż staje się pułapką', 'Innowacje w firmach rodzinnych', 'Budżet na porażki: jak finansować eksperymenty', 'Laboratoria innowacji w bankach', 'Współpraca korporacji ze startupami', 'Rozmowa numeru: od pomysłu do produktu w 90 dni', 'Felieton: ciekawość jako kompetencja'] },
  { id: '2025-03', label: 'Nr 03 / 2025', archived: true, title: 'Nowa geografia łańcuchów dostaw',
    description: 'Nearshoring, ryzyko geopolityczne i odporność operacyjna polskich firm.',
    articles: ['Nearshoring: szansa dla Europy Środkowej', 'Odporność zamiast optymalizacji kosztów', 'Jak mapować ryzyko dostawców drugiego rzędu', 'Magazyn jako polisa ubezpieczeniowa', 'Cyfrowy bliźniak łańcucha dostaw', 'ESG w relacjach z dostawcami', 'Rozmowa numeru: logistyka po kryzysie', 'Felieton: lokalnie znaczy bezpieczniej?'] },
  { id: '2025-02', label: 'Nr 02 / 2025', archived: true, title: 'Przywództwo w epoce niepewności',
    description: 'Jak podejmować decyzje, gdy prognozy przestają działać.',
    articles: ['Decyzje przy niepełnych danych', 'Komunikacja zarządu w kryzysie', 'Liderzy, którzy słuchają: praktyka zamiast deklaracji', 'Scenariusze w praktyce rady nadzorczej', 'Zaufanie jako waluta organizacji', 'Jak nie przegapić słabych sygnałów', 'Rozmowa numeru: przywództwo w czasie zmian', 'Felieton: pokora w gabinecie prezesa'] }
];

/* Wydarzenia i edukacja – zapisy prowadzą do zewnętrznych serwisów uczelni. */
KBR.data.events = [
  { id: 'dzien-otwarty-prawo-ai', category: 'Dni otwarte - studia podyplomowe', title: 'Dzień Otwarty Online studiów podyplomowych "Prawo sztucznej inteligencji"', date: '29 września, godz. 18:00', place: 'Online', image: 'wydarzenie-prawo-ai.jpg', imageAlt: 'Grafika wydarzenia: Studia podyplomowe Prawo sztucznej inteligencji, Open Day Online' },
  { id: 'festiwal-finansow-osobistych', category: 'Edukacja i rynek pracy', title: 'Festiwal Finansów Osobistych Invest Cuffs', date: '06 października, godz. 10:00', place: 'Poznań Congress Center', image: 'wydarzenie-festiwal.jpg', imageAlt: 'Grafika wydarzenia: Festiwal Finansów Osobistych, Finanse nie muszą być skomplikowane' },
  { id: 'webinar-ai-summer-academy', category: 'Kursy i szkolenia', title: 'Webinar kursu "AI Summer Academy"', date: '29 września, godz. 18:00', place: 'Online', image: 'wydarzenie-ai-academy.jpg', imageAlt: 'Grafika wydarzenia: dłonie trzymające symbol AI' },
  { id: 'inauguracja-2026-2027', category: 'Edukacja i rynek pracy', title: 'Inauguracja Roku Akademickiego 2026/2027 w Akademii Leona Koźmińskiego', date: '05 października, godz. 10:00', place: 'Warszawa', image: 'wydarzenie-inauguracja.jpg', imageAlt: 'Grafika wydarzenia: Inauguracja Roku Akademickiego 2026/2027' }
];

/* Oferta ALK (demonstracyjna) – strony programów prowadzą do serwisu uczelni. */
KBR.data.offer = [
  { id: 'executive-mba', kind: 'MBA', title: 'Executive MBA', lead: 'Dwuletni program dla menedżerów wyższego szczebla: strategia, finanse, przywództwo.', href: 'https://www.kozminski.edu.pl/pl' },
  { id: 'pp-prawo-ai', kind: 'Studia podyplomowe', title: 'Prawo sztucznej inteligencji', lead: 'Regulacje AI, odpowiedzialność i ochrona danych w praktyce firm i administracji.', href: 'https://www.kozminski.edu.pl/pl' },
  { id: 'pp-controlling', kind: 'Studia podyplomowe', title: 'Controlling i zarządzanie finansami', lead: 'Budżetowanie, controlling strategiczny i analiza finansowa dla praktyków.', href: 'https://www.kozminski.edu.pl/pl' },
  { id: 'kurs-ai-summer', kind: 'Kurs', title: 'AI Summer Academy', lead: 'Intensywny kurs o zastosowaniach sztucznej inteligencji w zarządzaniu.', href: 'https://www.kozminski.edu.pl/pl' },
  { id: 'kurs-przywodztwo', kind: 'Szkolenie', title: 'Przywództwo w czasie zmian', lead: 'Szkolenie dla liderów zespołów: komunikacja, decyzje, odporność organizacji.', href: 'https://www.kozminski.edu.pl/pl' }
];

/* Rozmieszczenie materiałów na stronie głównej (odpowiednik wyboru redakcji w CMS). */
KBR.data.home = {
  lead: 'gmina-plan-ogolny',
  picks: ['wiarygodnosc-po-kryzysie', 'project-manager-w-grze', 'scenariusze-zamiast-prognoz'],
  latest: ['portfel-projektow-kiedy-stop', 'controlling-strategiczny', 'sukcesja-w-zarzadzie'],
  premium: ['liderzy-czytaja-wiersze', 'szybki-urzad-dobry-urzad', 'cyberodpornosc-kompetencja-zarzadu', 'wybor-miedzy-slusznym-a-latwym'],
  cases: ['wiarygodnosc-po-kryzysie', 'zarzadzanie-portfelem-inwestycyjnym', 'analiza-finansowa-etapy', 'finansowanie-duzych-inwestycji'],
  media: ['zjazd-absolwentow-mba-2026', 'vlog-pierwszy-dzien-na-uczelni', 'szkolnictwo-oczami-rektora', 'forum-inspiracji-cx']
};
