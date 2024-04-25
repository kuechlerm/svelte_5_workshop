# Svelte 5 Workshop

## Ziele

- Svelte 5 kennen lernen
- ein sehr brauchbares "WebApp" Setup kennen lernen

## Voraussetzungen

- node 18+
- npm - besser pnpm
- VS Code
  - "Svelte for VS Code" Plugin (svelte.svelte-vscode)
  - (optional) "Version Lens" Plugin (pflannery.vscode-versionlens)
  - (optional) "Playwright Test for VSCode" (ms-playwright.playwright)
  - (optional) "Vitest" (vitest.explorer)

## Basis-Setup

- SvelteKit Projekt mit Svelte 5 installieren (hier bereits erledigt)
  - `npm create svelte@latest projekt-name`
  - alle Optionen auswählen
- run `pnpm i` um lockfile zu erzeugen
- `packages.json` ändern
  - Versionen fixieren (^ enfernen)
  - Update-Skript `update:packages` hinzufügen (funktioniert nur mit pnpm)
- run `pnpm update:packages` oder "Version Lens" Plugin (pflannery.vscode-versionlens) nutzen
  - nur geeignete packages updaten, z.B. wird eslint 9.x.x aktuell noch nicht unterstützt
  - nur während Alpha-Phase svelte-package manuell auf akutelle Version setzen
- run `pnpm dev`, um initiales Setup zu testen
- tailwind hinzufügen

  - run `npx svelte-add@latest tailwindcss`
  - "hütchen" in `package.json` entfernen
  - `pnpm i` wiederholen

## Test-Setup

TODO

## Svelte 4 zu Svelte 5

### Motivation

- Magie vs magisch
- Signals
- weiter Design-Einsichten

### Konzepte

- component

  - reactive variable -> $state
  - "$:"-variable -> $derived
  - "$:"-Block -> $effect

- component composition

  - export let variables -> $props
  - event-dispatcher -> $props
  - slots -> #snippet + $props

- global state
  - readable, writable, derived -> $state, $derived, $effect

### Code

- Projekt öffnen
- erstes Code-Beispiel ist in src/routes/01_component
