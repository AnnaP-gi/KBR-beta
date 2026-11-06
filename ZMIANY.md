# Aktualizacja KBR – 06.11.2026 (build 20261106-109)

Skopiuj całą zawartość folderu `kbr-vercel` do katalogu głównego repozytorium (zastąp pliki), potem:

```
git add -A
git commit -m "KBR 06.11: zakup bez Jotform (bramka płatności), VAT 8%, dane do faktur, kwartalnik, nagłówek z inicjałem, poprawki hover i mobile"
git push
```

Vercel wdroży zmiany automatycznie po pushu na `main`.

## Co się zmieniło

- Jotform: usuń z repozytorium folder `docs/jotform/` (`git add -A` ujmie usunięcie).
- Nagłówek po zalogowaniu: kwadrat z pierwszą literą imienia zamiast ikony (też w profilu). Mobile: hamburger przy prawej krawędzi, równe odstępy profil – „Subskrybuj” – menu; na wąskich ekranach mniejsze logo i przyciski (bez nachodzenia).
- Hover w obie strony: tytuł lub opis artykułu → przybliżenie zdjęcia i podkreślenie tytułu; zdjęcie → podkreślenie tytułu. „Zobacz spis treści” bez podkreślenia; animacja strzałek przy „Wszystkie artykuły” i liczbie materiałów w tematach.
- Krzyżyki zamykania bez tła na hover – zmiana koloru (jasne tło: #1F3580; ciemne tło: przygaszona biel).
- Reklama 336 × 280 także przy aktywacji konta, odzyskaniu dostępu i ustawianiu nowego hasła.
- Reset hasła: link ważny 24 godziny. Zmiana hasła z profilu kończy się komunikatem „Twoje hasło zostało prawidłowo zaktualizowane.”
- Moje dane: zmiana e-maila przez prośbę na prenumerata@kozminski.edu.pl. Moja subskrypcja: usunięta informacja o źródle uprawnień; bez subskrypcji – „Możesz czytać wyłącznie materiały otwarte.” Historia wysyłek: równe odstępy.
- Newsletter: mniejszy odstęp u góry, większe odstępy przy zgodzie, hover linku w zgodzie.
- Stopka na wąskich telefonach bez przewijania w poziomie.
- Narzędzia demo: stan „Premium + po wysłanych przesyłkach” (historia wysyłek).
- Magazyn: kwartalnik, 4 wydania w roku (teksty, porównanie pakietów, harmonogram wysyłek: marzec, czerwiec, wrzesień, grudzień). Aktualny numer: Nr 03 / 2026 zamiast „Zima 2026”.
- Moje dane: panel „Dane do faktur” (widoczny po pierwszym opłaconym zakupie z fakturą) – zapis firmy, NIP i adresu; dane wypełniają formularz zamówienia. W zamówieniu opcja „Zapisz dane do faktury w moim koncie”.
- Zakup bez Jotform: własny formularz zamówienia w serwisie i bramka płatności podłączona bezpośrednio (`config.js` → `payment`, opis w `docs/platnosci/README.md`). Folder `docs/jotform/` usunięty.
- VAT 8% doliczany w podsumowaniu zamówienia: netto, VAT i brutto w zakupie, na paragonie i w historii zamówień. Strona subskrypcji bez zmian (ceny + VAT).
- Ścieżka zakupu: aktualny krok oznaczony złotem; większe odstępy między sekcjami formularza „Dane i płatność”.
- Niebieskie linki i napisy na hover w jednym kolorze – przyciemniony niebieski #1F3580 (`--c-hover`). Przyciski tekstowe (np. „Wróć do pakietów”) na hover zmieniają tylko kolor tekstu.
- Aktywacja konta: reklama 336 × 280 jak przy logowaniu i rejestracji.
- Brandbook Kozminski University: font szeryfowy Noto Serif, tytuły w Deep Waters (#030928), tekst Deep Waters 70% (#4F5369), zgodność z WCAG 2.2.
- Nowe ceny pakietów: Cyfrowy 120 zł, Drukowany 180 zł, Premium + 480 zł.
- Profil (Moja subskrypcja): zakup z fakturą – informacja, że faktura jest w KSeF; zakup bez faktury – przycisk „Pobierz paragon” (wydruk / zapis PDF). Kolumna „Dokument” w historii zamówień.
- Ikony po lewej stronie tekstu (np. „Wyloguj się”, „Pobierz paragon”) przesuwają się na hover w lewo.
- Typografia PL: krótkie słowa (a, i, o, u, w, z, do, na, że…) nie zostają na końcu linii – automatycznie dla każdej treści, także z CMS.
- Subskrypcja: treść kart pakietów nie wychodzi poza ramkę.
- Strona główna, Tematy: liczba materiałów wyśrodkowana względem nazwy tematu.
- Reklamy w artykule na sztywno (konfiguracja `KBR.config.ads`, pliki w `assets/img/reklamy/`): w treści 728×90 na komputerze/tablecie i 300×250 na telefonie; kolumna boczna 300×250. Strona główna i Tematy: baner 970×250 (telefon 300×250).
- WCAG 2.2: ikony społecznościowe w stopce min. 24×24 px, fokus nie chowa się pod przyklejonym menu, język strony ustawiany zawsze; daty na jasnoniebieskim tle przyciemnione (#5F677E, 5,2:1).
- Mobile: większe pole dotyku linków tekstowych (tematy, tagi, autor, „Więcej z tematu”, „Zmień adres”), etykiety „Reklama”, „Udostępnij”, „Premium” 12 px.
- W centrum uwagi (telefon): odstęp między zdjęciem a tematem, linia pozioma między artykułami.
- Przyciski zamykania (pasek górny, komunikaty, okna, czytnik magazynu): jednakowa ikona 20 px, pole dotyku 40–44 px.
- Telefon: kliknięcie w profil przy otwartym menu zamyka menu i rozwija profil (i odwrotnie).
- Wyszukiwarka (telefon): „Wszystko” w pierwszej linii, „Artykuły” i „Autorzy i eksperci” poniżej.
- Wyszukiwarka: przycisk „Szukaj” w polu (granatowy, niebieski przy aktywnym polu) – wyszukiwanie po Enter lub kliknięciu.
- Pole wyszukiwania: odstęp 12 px tekstu od krzyżyka czyszczenia i krzyżyka od przycisku „Szukaj”.
- Czytnik magazynu (telefon i tablet): jedna strona na całą szerokość ekranu, mniejszy odstęp od paska, strzałki na stronie, pokazują się po dotknięciu podglądu; przesuwanie palcem przewraca strony.
- Przyciski-strzałki (czytnik magazynu, Punkt widzenia, spis treści magazynu, kafle tematów): kwadratowe, bez zaokrągleń; w czytniku na telefonie/tablecie na środku wysokości strony.
- Dokumentacja: paragony wystawiane automatycznie od startu, do pobrania w profilu, bez zestawienia dla księgowości; codzienne zestawienie tylko dla faktur (dane sprzedaży + dane do faktury).
- Czytnik magazynu: krzyżyk zamykania bez obramowania.
- Kontakt: usunięte zdania o media kicie i czasie odpowiedzi redakcji.
- Panel wysyłki w profilu: usunięte zdanie o pierwszym egzemplarzu po opłaceniu.

## Foldery i pliki do podmiany

Podmień w repozytorium w całości:

- `assets/css/`
- `assets/js/`
- `dokumentacja/` (ścieżka użytkownika – nowe ceny; dokumenty sprzedaży i funkcjonalności – paragony automatyczne; podgląd mobile)
- `docs/` (nowa instrukcja `docs/platnosci/` zamiast `docs/jotform/` – usuń stary folder)
- `index.html` (wersje plików `?v=20261106-109`)
- `ZMIANY.md`

Bez zmian: `assets/img/`, `assets/fonts/`, `vercel.json`, `.gitignore`, `WDROZENIE.md`.
Nowy folder na reklamy: `assets/img/reklamy/` – wgraj pliki, gdy będą gotowe (lista w `assets/js/config.js`, sekcja `ads`).

Do zrobienia poza repozytorium: wybór operatora płatności i backend (utworzenie transakcji, webhook) – `docs/platnosci/README.md`.

## Oferta – do rozwoju w kolejnym etapie
Usunięte z oferty i porównania pakietów (do przywrócenia po wdrożeniu funkcji):
- Zapisywanie artykułów do czytania offline
- Aplikacja mobilna KBR na iOS i Android
- Dostęp do ekskluzywnych treści Premium
- Wyselekcjonowane studia przypadków Akademii Leona Koźmińskiego
Szczegóły: dokumentacja/decyzje-i-materialy.html, sekcja „Oferta – do rozwoju w kolejnym etapie”.

## Nowa reklama: logowanie i rejestracja (large rectangle 336 × 280)
- Plik: `assets/img/reklamy/logowanie-336x280.jpg` (zalecany w 2×: 672 × 560 px, maks. 150 KB).
- Konfiguracja: `KBR.config.ads.login` w `assets/js/config.js` (link: `href`, tekst alternatywny: `alt`).
- Na komputerze po prawej od formularza; na telefonie i tablecie pod formularzem, skalowana do szerokości ekranu.
- Łącznie 6 plików reklam (było 5).
