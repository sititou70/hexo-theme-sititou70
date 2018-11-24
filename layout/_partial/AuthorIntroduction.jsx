import React from 'react';

export default ({config, theme}) => {
  return (
    <div className="author_introduction">
      <div className="author_introduction__main_container">
        <img src="/images/auther.jpg" />
        <div>
          <h2>{config.author}</h2>
          <p>{theme.author_introduction}</p>
        </div>
      </div>
      <div className="author_introduction__links">
        <a href={`https://twitter.com/${theme.twitter_id}`} rel="me" className="fa fa-twitter" />
        <a href={`https://github.com/${theme.github_id}`} rel="me" className="fa fa-github" />
        <a href={`https://www.facebook.com/profile.php?id=${theme.facebook_id}`} rel="me" className="fa fa-facebook-official" />
      </div>
    </div>
  );
}
