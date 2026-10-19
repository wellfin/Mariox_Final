import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { organizationSchema } from '@/data/site';
import 'react-phone-input-2/lib/style.css';
import '@/styles/globals.css';

export default function MarioxWebsite({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mariox Software — Digital product engineering</title>
        <script
          type="application/ld+json"
          key="organization-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      {/* Pages marked `bare` (the v4 home page) ship their own header,
          footer, cursor and canvas, so the site chrome is skipped. */}
      {Component.bare ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
