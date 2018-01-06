import React from 'react';

export default ({config}) => {
  return <footer>© {(new Date()).getFullYear()} {config.author}</footer>;
}
