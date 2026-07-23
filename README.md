# 3-hour-clock

A clock that divides the day into 8 sections of 3 hours each, as an
alternative to the 12-hour AM/PM convention. Built with [p5.js](https://p5js.org/).

**▶ Live: https://funkekaiser.github.io/3-hour-clock/**

Each section is labelled with an eighth fraction (⅛, ⅜, ⅝, ⅞) prefixed by
`a`/`p` (before/after noon), and shown alongside a conventional clock face for
comparison.

## Run locally

No build step — open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

p5.js is loaded from a CDN, so an internet connection is required on first load.
