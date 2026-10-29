# Aktualizacja KBR – 29.10.2026 (build 20261029-12)

Skopiuj całą zawartość folderu `kbr-vercel` do katalogu głównego repozytorium (zastąp pliki), potem:

```
git add -A
git commit -m "KBR 29.10: aktualizacja stylów, nagłówka, panelu demo i dokumentacji"
git push
```

Vercel wdroży zmiany automatycznie po pushu na `main`.

Pliki zmienione po ostatniej aktualizacji:

- `index.html` – nowe wersje plików (`?v=20261029-12`), odświeżenie cache.
- `assets/css/layout.css`
- `assets/css/pages.css`
- `assets/js/ui/components.js`
- `assets/js/demo/demo-panel.js`
- `dokumentacja/funkcjonalnosci-platformy.html`
- `dokumentacja/decyzje-i-materialy.html`
- `dokumentacja/powiadomienia-i-e-maile.html`
- `dokumentacja/sciezka-uzytkownika.html`
- `docs/jotform/README.md` – kod pakietu `premium` (zamiast `pelny`).

Pozostałe pliki (`assets/js/*`, `assets/img`, `assets/fonts`, `vercel.json`) bez zmian treści.
