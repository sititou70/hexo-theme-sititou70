import React from 'react';
import LatestArticles from './_partial/LatestArticles.jsx';
import Disqus from './_partial/Disqus.jsx';

export default ({page, site, theme, paginator}) => {
  return (
    <div className="post">
      <article dangerouslySetInnerHTML={{__html: page.content}} />
      <Disqus />
      <LatestArticles site={site} theme={theme} />
    </div>
  );
}
