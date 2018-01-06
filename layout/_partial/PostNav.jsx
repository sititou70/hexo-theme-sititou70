import React from 'react';

const PostLink = ({document, className}) => <a href={document.path} className={className} >{document.title}</a>;

export default ({page}) => {
  return (
    <div className="post_nav">
      { page.prev !== undefined ? <PostLink document={page.prev} className="prev" /> : null }
      { page.next !== undefined ? <PostLink document={page.next} className="next" /> : null }
    </div>
  );
}
