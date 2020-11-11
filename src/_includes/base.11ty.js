exports.render = (data) => {
  return /*html*/ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${data.title} | Oliver's portfolio</title>
        <link href="/assets/css/base.css" rel="stylesheet">
      </head>
      <body>
        <header class="site-header">
          <a href="/" aria-label="Home">
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </a>
          <nav style="--delay: 0.35s">
            <a href="/blog">Blog</a>
          </nav>
        </header>
        <main>
          ${data.content}
        </main>
      </body>
    </html>
  `;
};
