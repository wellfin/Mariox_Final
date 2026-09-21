import { Html, Head, Main, NextScript } from 'next/document';
import { hoverCss } from '@/lib/css';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T3RJVNV');`,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CWSN20GJ4F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CWSN20GJ4F');
          `,
          }}
        />

        {/* Google Ads conversion tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-11065360955/7n7CCLmx7-IZELuEsJwp',
                'event_callback': callback
              });
              return false;
            }
          `,
          }}
        />

        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="fNhjAqSUHKGJbu2qiqNIWMSh5TX8GI_fnkSkKOs3M2Y" />

        {/* ClickTrue tracking */}
        <script async src="https://ob.brilliantchap.com/i/9773024d6129b63139a46920087cb2da.js" className="ct_clicktrue"></script>

        {/* Design typefaces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#08070A" />

        <style id="mx-hover" dangerouslySetInnerHTML={{ __html: hoverCss() }} />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3RJVNV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* ClickTrue tracking (noscript) */}
        <noscript>
          <iframe
            src="https://ob.brilliantchap.com/ns/9773024d6129b63139a46920087cb2da.html?ch="
            width="0"
            height="0"
            style={{ display: 'none' }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
