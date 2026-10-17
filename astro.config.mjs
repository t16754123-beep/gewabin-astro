import { defineConfig } from 'astro/config';
import searchDiscovery from './integrations/search-discovery.mjs';
export default defineConfig({
 site: 'https://gewabin-evaporative-condenser.pages.dev',
 output: 'static',
 trailingSlash: 'always',
 integrations: [searchDiscovery()],
 devToolbar: { enabled: false },
});
