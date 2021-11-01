import path from 'path';
import React from 'react';

import { getBase, getFields } from './src/helpers';

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
    const countdownBase = await getBase('📆 Schedule')
      .select({ maxRecords: 1 })
      .firstPage();
    const [countdownField] = getFields(countdownBase);
    const dayOneBase = await getBase('📆 Schedule')
      .select({ view: 'Day One schedule' })
      .firstPage();
    const dayTwoBase = await getBase('📆 Schedule')
      .select({ view: 'Day Two schedule' })
      .firstPage();
    const schedule = [
      {
        id: 'dayOne',
        title: 'Day One',
        subtitle: 'February 18',
        events: getFields(dayOneBase)
      },
      {
        id: 'dayTwo',
        title: 'Day Two',
        subtitle: 'February 19',
        events: getFields(dayTwoBase)
      }
    ];
    const speakersBase = await getBase('🎤 Speakers')
      .select({
        view: 'All speakers',
        fields: ['Name', 'Role', 'Company', 'Image'],
        filterByFormula: 'AND({Confirmed?}, {Speaking at})'
      })
      .firstPage();
    const speakers = getFields(speakersBase);
    const sponsorsBase = await getBase('💸 Sponsors').select().firstPage();
    const sponsors = sponsorsBase.map(record => {
      return {
        name: record.fields.Name,
        image: record.fields.Image[0].url,
        url: record.fields.URL
      };
    });

    return [
      {
        path: '/',
        getData: () => {
          return {
            startDate: countdownField.start,
            schedule,
            speakers,
            sponsors
          };
        }
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
