import React from 'react';
import { Head } from 'next/document';
import stylesheet from '../static/css/style.sass';

const Meta = () => (
  <Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <title><%= projectName %></title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="mask-icon" href="/static/images/logo/website_icon.svg" color="black" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="apple-touch-icon-precomposed" sizes="228x228" href="/static/images/favicon/icon-228.png" />
    <link rel="apple-touch-icon-precomposed" sizes="195x195" href="/static/images/favicon/icon-195.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/images/favicon/icon-152.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/images/favicon/icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="128x128" href="/static/images/favicon/icon-128.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/images/favicon/icon-120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="96x96" href="/static/images/favicon/icon-96.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/images/favicon/icon-72.png" />
    <link rel="apple-touch-icon-precomposed" href="/static/images/favicon/icon-57.png" />
    <link rel="shortcut icon" href="/images/favicon/icon.ico" />
  </Head>
);

export default Meta;
