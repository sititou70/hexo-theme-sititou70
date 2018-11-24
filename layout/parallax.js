const scroll_handler = () => {
  const scroll = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  document.body.style.backgroundPosition = `0 ${scroll * 100}%`
};

document.addEventListener("scroll", scroll_handler);
scroll_handler();

