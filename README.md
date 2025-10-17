# mui-themes-extand

`mui-themes-extand` bundles multiple branded Material UI v6 themes together with a drop-in `<ThemeProvider />`, so you can switch entire palettes, typography, and component overrides with a single prop. It is designed for projects that serve several companies or white-label products from the same code base.

## Features

- Prebuilt themes for 19 medical and finance brands that extend the standard MUI palette
- Drop-in theme switching with the provided `<ThemeProvider name="…" />`
- Helper `makeCustomTheme()` for on-demand theme generation outside of React
- TypeScript typings for `ThemeName` and `ThemeConfig`
- Ships with `CssBaseline` and `StyledEngineProvider` so styles are applied consistently

## Installation

```bash
yarn add mui-themes-extand
# or
npm install mui-themes-extand
```

## Quick start

```tsx
import ThemeProvider from "mui-themes-extand";
import { Button, Typography } from "@mui/material";

export function App() {
  return (
    <ThemeProvider name="mobimed">
      <Typography variant="h4">Welcome</Typography>
      <Button color="primary" variant="contained">
        Continue
      </Button>
    </ThemeProvider>
  );
}
```

If you omit the `name` prop, or pass an unknown value, the provider falls back to the default `mobimed` theme.

## API

- **`<ThemeProvider name?: ThemeName; theme?: Theme>`**  
  Wrap your component tree to apply one of the bundled themes. Provide a `name` to pick a preset or pass a fully prepared MUI `theme` object to override everything manually. When both `name` and `theme` are defined, the generated theme is used.

- **`makeCustomTheme(name?: ThemeName): Theme`**  
  Generate a MUI `Theme` instance on demand (for tests, Storybook, or server-side rendering). When called without a name it returns the default theme.

- **`ThemeName` / `ThemeConfig`**  
  TypeScript types that describe the available theme identifiers and configuration shape returned by the factory.

## Available themes

The following `ThemeName` values are currently bundled:

```
mobimed, drAnna, gms, medincenter, medswiss, mediadoc, minfin, pimu,
ncn, sibgmu, mositalmed, skyfert, white_fang, kalinchenko, celt,
vetcenter, sm, medincenter_old, test
```

Use `name="test"` when you need a compact neutral palette for debugging.

## Customisation tips

- Override individual tokens by wrapping the provider with `ThemeProvider` from `@mui/material/styles` and using `createTheme(existingTheme, overrides)`.
- Extend the palette or component overrides by cloning one of the exported `ThemeConfig` objects and applying your changes before passing it to `makeCustomTheme`.
- Combine with route-based or context-based logic to switch the brand theme at runtime (e.g. based on tenant ID).

## Development

```bash
yarn
yarn build        # bundles library (vite + tsc)
yarn test         # runs vitest suite
```

The build outputs both CommonJS and ES modules to `dist/`. Remember to rebuild before publishing so the package consumers receive the compiled themes.

## Contributing

Pull requests are welcome. If you need another theme or run into an issue, open an issue or send a PR.

---

## README на русском

`mui-themes-extand` — это набор готовых тем Material UI v6 с собственным `<ThemeProvider />`, который позволяет переключать палитры, типографику и оверрайды компонентов одним пропсом. Библиотека нужна, когда одно приложение обслуживает несколько брендов или white-label клиентов.

## Возможности

- 19 преднастроенных тем для медицинских и финансовых брендов с расширенной палитрой MUI
- Простое переключение тем через `<ThemeProvider name="…" />`
- Хелпер `makeCustomTheme()` для генерации темы вне React
- Типы TypeScript `ThemeName` и `ThemeConfig`
- Подключение `CssBaseline` и `StyledEngineProvider` для корректного первоначального рендеринга стилей

## Установка

```bash
yarn add mui-themes-extand
# или
npm install mui-themes-extand
```

## Быстрый старт

```tsx
import ThemeProvider from "mui-themes-extand";
import { Button, Typography } from "@mui/material";

export function App() {
  return (
    <ThemeProvider name="mobimed">
      <Typography variant="h4">Добро пожаловать</Typography>
      <Button color="primary" variant="contained">
        Продолжить
      </Button>
    </ThemeProvider>
  );
}
```

Если проп `name` не передан или содержит неизвестное значение, по умолчанию используется тема `mobimed`.

## API

- **`<ThemeProvider name?: ThemeName; theme?: Theme>`**  
  Оборачивает дерево компонентов и применяет одну из готовых тем. Передайте `name`, чтобы выбрать пресет, или отдайте полностью собранный объект `theme`, если хотите управлять всем вручную. При одновременной передаче `name` и `theme` используется сгенерированная тема.

- **`makeCustomTheme(name?: ThemeName): Theme`**  
  Возвращает экземпляр темы MUI без участия React (подходит для тестов, Storybook или серверного рендеринга). Без аргумента возвращается тема по умолчанию.

- **`ThemeName` / `ThemeConfig`**  
  Типы TypeScript для списка доступных идентификаторов и структуры конфигурации темы.

## Доступные темы

```
mobimed, drAnna, gms, medincenter, medswiss, mediadoc, minfin, pimu,
ncn, sibgmu, mositalmed, skyfert, white_fang, kalinchenko, celt,
vetcenter, sm, medincenter_old, test
```

Тема `test` подходит для отладки благодаря спокойной нейтральной палитре.

## Как настраивать под себя

- Наследуйте существующую тему, оборачивая компоненты собственным `ThemeProvider` из `@mui/material/styles` и вызывая `createTheme(existingTheme, overrides)`.
- Скопируйте любой `ThemeConfig`, внесите правки в палитру/типографику/оверайды и передайте результат в `makeCustomTheme`.
- Меняйте тему на лету по контексту: например, переключайте брендинг по идентификатору клиента или домену.

## Разработка

```bash
yarn
yarn build        # сборка библиотеки (vite + tsc)
yarn test         # запуск тестов vitest
```

Сборка формирует CommonJS и ES-модули в папке `dist/`. Перед публикацией не забудьте пересобрать проект, чтобы потребители пакета получили актуальные файлы.

## Контрибьюции

Пул-реквесты приветствуются. Если нужна новая тема или вы нашли проблему, создайте issue или отправьте PR.
