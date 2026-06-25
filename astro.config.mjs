import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://newway-xyz.github.io',
  base: '/support-center/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'zh', 'es', 'ru'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
});
