const preprocess = require('svelte-preprocess')
const adapter = require('@sveltejs/adapter-static')

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    router: false,
    hydrate: false,
    prerender: {
      enabled: true,
      crawl: true,
    },
    amp: false,
  },
}
