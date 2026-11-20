# International Spark - web stranica (export)

Gotov dizajn početne stranice za **INTERNATIONAL SPARK j.d.o.o.** (elektroinstalacije, Hrvatska).
Slogan: **„Radimo. Gradimo."**

## Što je u paketu

```
index.html              ← cijela stranica, radi odmah (otvori u pregledniku)
assets/logo-mark.png    ← znak (munja u krugu), prozirna pozadina
assets/logo-full.png    ← originalni logo s nazivom
screenshots/            ← slike dizajna (desktop + mobitel) kao referenca
README.md               ← ovaj dokument + prompt za ChatGPT
```

`index.html` je jedna datoteka bez frameworka: čisti HTML + inline CSS, responzivno (radi na mobitelu).
Može se odmah staviti na hosting (Hostinger, Plus Hosting…) - uploadaj cijelu mapu u `public_html`.

## Dizajn sustav

**Stil:** čisti „Apple" izgled - puno bijelog prostora, veliki naslovi, zaobljene kartice, minimalno boja.

| Uloga | Boja |
|---|---|
| Brand navy (gumbi, istaknuta kartica) | `#022248` |
| Navy hover | `#0A3A73` |
| Brand žuta (samo naglasak: ikone, glavni CTA na crnom) | `#FDB403` |
| Tekst | `#1D1D1F` |
| Sekundarni tekst | `#6E6E73` |
| Prigušeni naslov (drugi red) | `#86868B` |
| Svijetlosiva podloga kartica | `#F5F5F7` |
| Tamna kartica | `#1D1D1F` |
| Kontakt blok | `#000000` |
| Linije | `#D2D2D7` |

**Font:** Inter (Google Fonts), fallback `-apple-system, SF Pro Display, system-ui`.
Naslovi bold 700, `letter-spacing` −0.03em; H1 `clamp(44px, 7vw, 88px)`.
**Radius:** gumbi 999px (pill), kartice 28px, veliki blokovi 32px.
**Širina sadržaja:** max 1080px, padding 24px.

## Struktura stranice

1. **Navigacija** - sticky, prozirna s blur efektom; logo + Usluge / O nama / Kontakt + gumb „Ponuda"
2. **Hero** - „Elektroinstalacije" / **Radimo. Gradimo.** / podnaslov / 2 gumba
3. **Logo blok** - veliki znak na sivoj podlozi + oznake (Energetika, Vatrodojava, Videonadzor, Kontrola pristupa, Ozvučenje)
4. **Usluge** (`#usluge`) - „Sve što struja treba. Na jednom mjestu." + 6 kartica (3×2, na mobitelu 1 stupac)
5. **O nama** (`#o-nama`)
6. **Kontakt** (`#kontakt`) - crni blok „Imate projekt?" + žuti gumb
7. **Footer** - © + OIB + slogan

## Što još treba popuniti

- `[TELEFON]`, `[E-MAIL]`, `[ADRESA]`, `[OIB]` - stvarni podaci firme
- `mailto:info@international-spark.hr` i `tel:+385000000000` - zamijeniti pravim
- Po želji: prave fotografije radova umjesto sivih kartica

---

## Prompt za ChatGPT (kopiraj i zalijepi zajedno s `index.html`)

> I'm attaching `index.html` - a finished, static one-page website for a Croatian electrical-installation company, INTERNATIONAL SPARK j.d.o.o. (slogan „Radimo. Gradimo."). Keep the existing design exactly: Apple-style minimal look, Inter font, colors navy #022248, yellow #FDB403 (accent only), text #1D1D1F, grey #6E6E73, light card background #F5F5F7, pill buttons, 28px rounded cards, max content width 1080px. All copy stays in Croatian.
>
> Please:
> 1. Move the inline styles into a single `styles.css` with CSS variables for the colors above, keeping the look pixel-identical.
> 2. Add a mobile hamburger menu for the navigation (below 640px).
> 3. Replace the contact block's buttons with a working contact form (ime, e-mail, telefon, poruka) that sends via Formspree (leave the form ID as a placeholder), plus click-to-call and e-mail links.
> 4. Add basic SEO: Open Graph tags, `lang="hr"`, LocalBusiness schema.org JSON-LD (Electrician) with placeholders for address, phone and OIB.
> 5. Add subtle fade-in-on-scroll animations (IntersectionObserver, respect `prefers-reduced-motion`).
> 6. Keep it plain HTML/CSS/JS - no frameworks - so it can be uploaded to shared hosting (public_html).
>
> Return the full files: `index.html`, `styles.css`, `script.js`.
