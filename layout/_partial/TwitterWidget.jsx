import React from 'react';

export default ({theme}) => {
  const script = `
    <a class="twitter-timeline" href="https://twitter.com/${theme.twitter_id}" data-widget-id="${theme.twitter_widget_id}">@${theme.twitter_id}のツイート</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
  `;

  return (
    <div className="twitter_widget" dangerouslySetInnerHTML={{__html: script}} />
  );
}
