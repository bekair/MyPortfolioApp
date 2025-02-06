/* eslint-disable */
type Locales = typeof import("locales/en.json");
type TrLocales = typeof import("locales/tr.json");
type NlLocales = typeof import("locales/nl.json");
type PlLocales = typeof import("locales/pl.json");

declare interface IntlLocales extends Locales, TrLocales, NlLocales {}