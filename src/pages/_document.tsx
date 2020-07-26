// ./pages/_document.js
import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=640, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta name="Description" content="Online tournaments." />
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="https://web.playtwin.com" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
          <script> </script>
        </body>
      </html>
    )
  }
}
