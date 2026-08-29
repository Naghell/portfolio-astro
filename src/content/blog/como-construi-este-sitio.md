---
title: "Cómo construí este sitio: dos idiomas, dos temas, un solo set de páginas"
description: "Cómo battaglino.dev resuelve el ruteo bilingüe sin duplicar una sola página, y qué entendí mal sobre los focus rings en el camino."
pubDate: 2026-08-29
tags: ["astro", "i18n", "accesibilidad"]
lang: "es"
translationKey: "building-this-site"
---

Rehice este sitio para que hiciera tres cosas que antes no podía: hablar español, tener tema claro, y dejar de mentir sobre dónde trabajo. Las dos primeras son las interesantes.

## Un solo set de páginas, dos idiomas

La forma obvia de hacer bilingüe un sitio en Astro es duplicar `src/pages` en `src/pages/es`. Eso significa que cada cambio de layout se hace dos veces, y tarde o temprano una copia se desincroniza.

Los rest parameters de Astro lo evitan. Una ruta en `src/pages/[...lang]/about.astro` con este `getStaticPaths`:

```js
export const getStaticPaths = () => [
  { params: { lang: undefined } },
  { params: { lang: "es" } },
];
```

emite `/about` y `/es/about` desde un solo archivo. `undefined` colapsa el segmento por completo, así que el inglés se queda con la raíz y el español recibe el prefijo. Cada página de este sitio está escrita una sola vez.

El texto vive en `src/i18n/ui.ts`, y los archivos de datos exportan `(lang) => data` en vez de una constante.

## La barra final que partió cada URL en dos

El build emite URLs con formato de directorio, así que el canonical decía `/es/about/`. Mis links de `hreflang` se armaban con otro helper y decían `/es/about`. Para un buscador esas son dos URLs distintas, y un `hreflang` que apunta a una URL no canónica se ignora.

Ahora un solo helper produce todas las rutas internas, y siempre termina en barra. Vale la pena revisarlo en tu propio sitio: mirá el código fuente y compará el canonical contra los alternates, carácter por carácter.

## Temas: elegí un solo mecanismo

La regla que me ahorró tiempo: nunca dejes que `prefers-color-scheme` defina algunos tokens y una clase defina otros. Acá la clase `.dark` en `<html>` es el único mecanismo. Un script inline resuelve la preferencia del sistema y la convierte en esa clase antes del primer pintado, así que no hay flash.

La parte que más me gusta es la salida. Si cambiás al valor que tu sistema ya usa, el sitio *borra* la preferencia guardada en vez de guardarla. Volvés a seguir a tu sistema operativo, y si a la noche ponés la notebook en oscuro, el sitio te acompaña.

Hay un detalle más. Cambiar de tema repinta color, fondo, borde y sombra de casi todos los elementos a la vez, y si cada uno tiene una transición se disparan todas juntas y el cambio se emborrona. Suprimir las transiciones por un solo frame hace que corte en seco.

## Lo que entendí mal

A las tarjetas del bento les puse un focus ring con las utilidades separadas de Tailwind: `focus-visible:outline`, `outline-2`, `outline-offset-2`, `outline-ring`. Al llegar con Tab, la tarjeta mostraba el ring por defecto del navegador en vez del mío.

Las clases estaban en el elemento. Las reglas estaban en la hoja de estilos. Solo aplicaba `outline-style`.

La causa era otra clase que yo mismo había puesto en el mismo elemento: un `transition-[--tw-gradient-from,--tw-gradient-to,border-color]` arbitrario. Además era inútil: los stops de un gradiente son custom properties y, sin registrarlas, no animan. O sea que una transición que nunca funcionó estaba rompiendo un focus ring tres utilidades más allá.

Borrarla arregló las dos cosas. Ahora el ring es un shorthand declarado una sola vez, que es más difícil de romper.

## La moraleja

Lo encontré solo porque recorrí la página con un teclado real en Playwright y leí el `outline` computado en cada parada, en vez de asumir que con las clases alcanzaba. La verificación llevó un minuto. Mirando no lo hubiera visto.
