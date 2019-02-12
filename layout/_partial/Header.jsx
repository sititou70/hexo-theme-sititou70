import React from 'react';

export default ({page, config}) => {
  const sub_header = page.__index ? <span className="header__sub">{config.subtitle}</span> : <a href="/" className="header__sub">{config.title}</a>;
  const main_header_text = page.__index ? config.title : page.title;
  const date_header =
    page.date !== undefined
      ?
        <p className="header__date">
          {page.date.format("YYYY/MM/DD")}
        </p>
      : null;
  const updated_header =
    page.updated !== undefined
    && !page.updated.isSame(page.date, "day")
      ?
        <p className="header__updated">
          {page.updated.format("YYYY/MM/DD")}更新
        </p>
      : null;

  return (
    <header className="header">
      <div>{sub_header}</div>
      <h1 className="header__main">{main_header_text}</h1>
      {date_header}
      {updated_header}
    </header>
  );
}
