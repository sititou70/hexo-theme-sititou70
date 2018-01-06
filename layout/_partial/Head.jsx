import React from 'react';

export default ({page, theme, open_graph}) => {
  const title = `${page.title !== undefined ? `${page.title} | ` : ''}sititou70`;

  const head_html = `
    <meta charSet="UTF-8" />
    <title>${title}</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    ${open_graph({
      twitter_id: theme.twitter_id,
    })}
    <link rel="stylesheet" href="/css/root.css" />
    <link rel="shortcut icon" type="image/x-icon" href="/css/images/favicon.ico" />
  `;
  
  return (
    <head dangerouslySetInnerHTML={{__html: head_html}} />
  );
}
