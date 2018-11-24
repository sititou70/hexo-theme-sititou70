import React from 'react';
import fs from 'fs';
import path from 'path';

import Head from './_partial/Head.jsx';
import Header from './_partial/Header.jsx';
import Aside from './_partial/Aside.jsx';
import Footer from './_partial/Footer.jsx';
import GoogleAnalytics from './_partial/GoogleAnalytics.jsx';

export default props => {
  const parallax = fs.readFileSync(path.join(props.theme.theme_path, "./layout/parallax.js")).toString();

  return (
    <html>
      <Head {...props} />
      <body>
        <Header {...props} />
        <div className="container">
          <main dangerouslySetInnerHTML={{__html: props.body}} />
          <Aside {...props} />
        </div>
        <Footer {...props} />
        <GoogleAnalytics {...props} />
        <script dangerouslySetInnerHTML={{__html: parallax}} />
      </body>
    </html>
  );
}

