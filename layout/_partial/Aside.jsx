import React from 'react';
import AuthorIntroduction from './AuthorIntroduction.jsx';
import PostList from './PostList.jsx';
import SiteSearch from './SiteSearch.jsx';
import TwitterWidget from './TwitterWidget.jsx';

export default props => {
  return (
    <aside>
      <AuthorIntroduction {...props} />
      <PostList {...props} />
      <SiteSearch {...props} />
      <TwitterWidget {...props} />
    </aside>
  );
}
