// Renders the app into dist/index.html, so crawlers and AI agents get the full content without running JavaScript
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const indexPath = `${root}dist/index.html`
const serverDir = `${root}dist-ssr`

const { render, faq } = await import(pathToFileURL(`${serverDir}/entry-server.js`).href)

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const template = await readFile(indexPath, 'utf8')
for (const placeholder of ['<div id="root"></div>', '<!--faq-json-ld-->']) {
  if (!template.includes(placeholder)) throw new Error(`Missing ${placeholder} in dist/index.html`)
}

const html = template
  .replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
  .replace('<!--faq-json-ld-->', () =>
    `<script type="application/ld+json">\n${JSON.stringify(faqJsonLd, null, 2).replace(/</g, '\\u003c')}\n    </script>`)

await writeFile(indexPath, html)
await rm(serverDir, { recursive: true, force: true })
console.log('Prerendered dist/index.html')
