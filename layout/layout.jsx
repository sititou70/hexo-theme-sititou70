import React from 'react';

import Head from './_partial/Head.jsx';
import Header from './_partial/Header.jsx';
import Aside from './_partial/Aside.jsx';
import Footer from './_partial/Footer.jsx';
import GoogleAnalytics from './_partial/GoogleAnalytics.jsx';

export default props => {
  return (
    <html>
      <Head {...props} />
      <body>
        <img className="bg" src="/images/bg.svg" />
        <Header {...props} />
        <div className="container">
          <main dangerouslySetInnerHTML={{__html: props.body}} />
          <Aside {...props} />
        </div>
        <Footer {...props} />
        <GoogleAnalytics {...props} />
      </body>
    </html>
  );
}

