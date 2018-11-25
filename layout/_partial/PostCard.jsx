import React from 'react';

export default ({document, theme, id, simple}) => {
  const content_image_tag = (/<img.*?src=".+?".*?>/).exec(document.content);
  const image_attrs = content_image_tag !== null
  ? {
      src: (/src="(.+?)"/).exec(content_image_tag),
      alt: (/alt="(.+?)"/).exec(content_image_tag),
    }
  : null;
  const image = content_image_tag != null
    ?
      <div
        className="img_container"
      >
        <img 
          src={`${document.path}${image_attrs.src[1]}`}
          alt={image_attrs.alt[1]}
        />
      </div>
    : null;
  const title = document.title;

  return (
    <a
      className={`post_card ${simple ? "is-simple" : ""}`}
      href={document.path}
      id={id}
    >
      { image }
      <span>{ document.date.format('YYYY/MM/DD') }</span>
      <h2>{ title }</h2>
    </a>
  );
}
