import path from 'path';
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    return [
      {
        path: '/'
      }
    ];
  },
  plugins: [
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/pages')
      }
    ],
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
