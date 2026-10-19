import React from 'react';
import { Seo, JsonLd } from '@/components/sections';
import { homeWebPageSchema, localBusinessSchema } from '@/data/schemas';

import HomeV4 from '@/components/home/HomeV4';

// "Mariox Home v4" design. It brings its own header, footer, chapter rail,
// loader, cursor and 3D canvas, so `bare` tells _app to skip the site chrome.
// The page renders server-side; GSAP, Lenis and three.js load in the browser.

export default function Home() {
  return (
    <>
      <Seo
        title="Website And Mobile App Development Company | Web Development Services"
        description="Our skilled Website and Mobile App Development services maximize your internet exposure. We create innovative solutions for your needs for an easy and engaging user interface. Our unique web development tactics boost your brand's internet presence."
      />
      <JsonLd id="home-webpage" data={homeWebPageSchema} />
      <JsonLd id="home-localbusiness" data={localBusinessSchema} />
      <HomeV4 />
    </>
  );
}

Home.bare = true;
