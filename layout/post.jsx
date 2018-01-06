import React from 'react';
import PostNav from './_partial/PostNav.jsx';
import Disqus from './_partial/Disqus.jsx';

export default ({page, theme, paginator}) => {
  return (
    <div className="post">
      <article dangerouslySetInnerHTML={{__html: page.content}} />
      <PostNav page={page} />
      <Disqus />
    </div>
  );
}
