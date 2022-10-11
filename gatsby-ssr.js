import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/nexa-bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
     <link
      rel="preload"
      href="/fonts/nexa-light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}