import React from 'react';
import PostCard from './PostCard.jsx';

export default ({site, theme}) => {
  const post_cards = site.posts.data
    .sort((x1, x2) => x2.date - x1.date)
    .filter((x, i) => i < theme.latest_articles_num)
    .map(x =>
      <PostCard
        document={x}
        theme={theme}
        simple
        key={x.title}
      />
    );

  return (
    <div className="latest_article">
      <h2>最新の記事</h2>
      { post_cards }
    </div>
  );
}
