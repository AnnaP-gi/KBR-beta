# Zakup subskrypcji KBR: formularz zamówienia i bramka płatności

Zamówienie składa się we własnym formularzu serwisu KBR (`#/zamowienie`). Płatność obsługuje bramka operatora płatności podłączona do backendu KBR (operator do wyboru, np. PayU, Przelewy24, Stripe). Do czasu podania adresu backendu (`KBR.config.payment.initUrl`) serwis działa w **trybie demonstracyjnym**: wynik płatności wybiera się ręcznie na stronie statusu.

## 1. Przebieg zakupu

1. `#/subskrypcja`: użytkownik wybiera pakiet. Niezalogowany przechodzi przez rejestrację lub logowanie, a wybór zostaje zachowany.
2. `#/zamowienie`: serwis tworzy zamówienie przypisane do konta (numer, konto, pakiet, netto, VAT 8%, brutto). Użytkownik uzupełnia dane, adres dostawy (pakiety z wydaniem drukowanym), opcjonalnie dane do faktury i zgody.
3. „Zamawiam i płacę”: serwis zapisuje dane zamówienia i wywołuje `POST initUrl` z `{ orderId, returnUrl }`. Backend tworzy transakcję u operatora i zwraca `{ redirectUrl }`. Serwis przekierowuje do bramki.
4. Po płatności operator przekierowuje na `returnUrl` (`#/zamowienie/status?nr=…`). Strona pokazuje „Czekamy na potwierdzenie płatności” i sama się odświeża.
5. Operator wysyła powiadomienie (webhook) do backendu KBR. Backend weryfikuje płatność i dopiero wtedy aktywuje dostęp na 12 miesięcy. Strona statusu pokazuje „Subskrypcja jest aktywna” z datą ważności.

Samo złożenie zamówienia ani powrót z bramki **nie nadają dostępu**.

## 2. Konfiguracja (`assets/js/config.js`)

```js
payment: {
  operator: 'PayU',                       // nazwa pokazywana przy płatności (opcjonalnie)
  initUrl: 'https://<api-kbr>/payments',  // endpoint tworzący transakcję
  returnUrl: '#/zamowienie/status?nr={orderId}'
}
```

Kwoty liczy serwis z `plans[].prices.year` (netto) i `purchase.vatRate` (0,08). Backend musi liczyć kwotę sam, z własnego cennika, a nie przyjmować jej z przeglądarki.

## 3. Backend: utworzenie transakcji

`POST /payments` (`{ orderId, returnUrl }`, sesja zalogowanego użytkownika):

- sprawdza, że zamówienie należy do zalogowanego konta i ma status `created` lub `awaiting_payment`,
- wylicza kwotę brutto z cennika (netto + VAT 8%) i tworzy transakcję u operatora z opisem „Kozminski Business Review, pakiet …, 12 miesięcy”,
- zapisuje identyfikator transakcji przy zamówieniu i zwraca `{ redirectUrl }`.

## 4. Backend: potwierdzenie płatności (wymagane)

1. Adres powiadomień u operatora: `https://<api-kbr>/webhooks/payments`.
2. Po otrzymaniu powiadomienia serwer:
   - weryfikuje podpis powiadomienia i ponownie pobiera status transakcji z API operatora,
   - porównuje kwotę i pakiet z zamówieniem; przy niezgodności ustawia status `review`,
   - przy statusie opłaconym ustawia `paid`, nadaje dostęp na 12 miesięcy, zapisuje adres dostawy i dane do faktury,
   - przy odrzuceniu lub anulowaniu ustawia `failed` / `canceled`,
   - działa idempotentnie: ponowne powiadomienie nie przedłuża dostępu.
3. Odpowiednik w prototypie: `KBR.server.paymentWebhook` w `assets/js/services/account.js`.

## 5. Wygląd

Formularz, kroki, podsumowanie i stany są w kodzie serwisu: `assets/js/pages/purchase.js` i `assets/css/pages.css` (sekcja „Zakup – formularz zamówienia i bramka płatności”). Wygląd strony bramki ustawia się w panelu operatora (logo, kolory KBR), o ile operator na to pozwala.

## 6. Do potwierdzenia

- Wybór operatora płatności i dostępne metody (BLIK, karta, przelew).
- E-mail potwierdzający zamówienie wysyła serwis KBR; potwierdzenie transakcji wysyła operator.
