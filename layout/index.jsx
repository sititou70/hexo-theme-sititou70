import React from 'react';
import PostCard from './_partial/PostCard.jsx';

export default ({page, theme, paginator}) => {
  const post_cards = page.posts.data.map(x => <PostCard document={x} theme={theme} key={x.title} />);
  
  return (
    <div className="index">
      {page.current !== 1 ? <div className="page_nav" dangerouslySetInnerHTML={{__html: paginator({
        next_text: `<i class="fa fa-chevron-right" aria-hidden="true"></i>`,
        prev_text: `<i class="fa fa-chevron-left" aria-hidden="true"></i>`,
      })}} /> : null}
      <div className="post_cards">
        {post_cards}
      </div>
      <div className="page_nav" dangerouslySetInnerHTML={{__html: paginator({
        next_text: `<i class="fa fa-chevron-right" aria-hidden="true"></i>`,
        prev_text: `<i class="fa fa-chevron-left" aria-hidden="true"></i>`,
      })}} />
    </div>
  );
}

