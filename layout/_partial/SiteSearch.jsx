import React from 'react';

export default ({config, theme}) => {
  const script = `
  (() => {
    const input = document.querySelector('.site_search > input');
    const search = () => input.value !== '' ? window.open(\`https://www.google.co.jp/search?q=\${input.value}+site:${config.url}\`, '_brank') : null;
    document.querySelector('.site_search > button').addEventListener('click', search);
    document.querySelector('.site_search > input').addEventListener('keypress', e => e.keyCode === 13 ? search() : null);
  })();
  `;

  return (
    <div>
      <div className="site_search">
        <input type="text" size="1" />
        <button className="fa fa-search" />
      </div>
      <script dangerouslySetInnerHTML={{__html: script}} />
    </div>
  );
}
