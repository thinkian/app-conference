import React from 'react';

// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org

const config = {
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>App Conference</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      'react-static-plugin-sass',
      {
        includePaths: ['...']
      }
    ]
  ],
  silent: true
};

export default config;
