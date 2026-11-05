# Aktualizacja KBR – 05.11.2026 (build 20261105-32)

Skopiuj całą zawartość folderu `kbr-vercel` do katalogu głównego repozytorium (zastąp pliki), potem:

```
git add -A
git commit -m "KBR 05.11: brandbook (Noto Serif, kolory), nowe ceny, paragon/KSeF, typografia PL, poprawki"
git push
```

Vercel wdroży zmiany automatycznie po pushu na `main`.

## Co się zmieniło

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
- `docs/` (instrukcja Jotform – nowe ceny)
- `index.html` (wersje plików `?v=20261105-32`)
- `ZMIANY.md`

Bez zmian: `assets/img/`, `assets/fonts/`, `vercel.json`, `.gitignore`, `WDROZENIE.md`.
Nowy folder na reklamy: `assets/img/reklamy/` – wgraj pliki, gdy będą gotowe (lista w `assets/js/config.js`, sekcja `ads`).

Do zrobienia poza repozytorium: zmiana cen produktów w panelu Jotform (180 zł, 480 zł).
