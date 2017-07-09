import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import Meta from '../components/Meta';

class Page extends Document {
  render() {
    return (
      <html lang="en">
        <Meta />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Page;
