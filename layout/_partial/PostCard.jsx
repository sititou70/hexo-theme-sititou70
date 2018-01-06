import React from 'react';

export default ({document, theme}) => {
  const content_image_tag = (/<img.*?src=".+?".*?>/).exec(document.content);
  const image_attrs = content_image_tag !== null
  ? {
      src: (/src="(.+?)"/).exec(content_image_tag),
      alt: (/alt="(.+?)"/).exec(content_image_tag),
    }
  : null;
  const image = content_image_tag != null
    ? <img 
        src={`${document.path}${image_attrs.src[1]}`}
        alt={image_attrs.alt[1]} />
    : null;
  const title = document.title;
  const intro = document.content.replace(/<.*?>/g, ' ').slice(0, theme.postcard_intro_length - 1) + '…';

  return (
    <a className="post_card" href={document.path}>
      {image}
      <h2>{title}</h2>
      <span>{document.date.format('YYYY/MM/DD')}</span>
      <p>{intro}</p>
    </a>
  );
}
