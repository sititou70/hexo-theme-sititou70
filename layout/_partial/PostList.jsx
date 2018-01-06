import React from 'react';

export default ({site}) => {
  const posts = site.posts.data.sort((x, y) => y.date.valueOf() - x.date.valueOf());

  let grouped_posts = [[posts[0]]];
  for(let i = 1; i < posts.length; i++){
    if(posts[i].date.year() !== grouped_posts[grouped_posts.length - 1][0].date.year()){
      grouped_posts = [...grouped_posts, [posts[i]]];
    }else{
      grouped_posts[grouped_posts.length - 1].push(posts[i]);
    }
  }

  const script = `
  (() => {
    const button = document.querySelector('.post_list_more_button');
    button.addEventListener('click', () => {
      button.style.display = 'none';
      document.querySelector('.post_list').classList.remove('is-post-list-close');
    })
  })()`;

  return (
    <div className="post_list_wrapper">
      <ul className="post_list is-post-list-close">
        {
          grouped_posts.map(x =>
            <li key={x[0].date.year()}>
              <span>{x[0].date.year()}</span>
              <ul>
                {
                  x.map(y => 
                    <li key={y.title}><a href={y.path}>{y.title}</a></li>
                  )
                }
              </ul>
            </li>
          )
        }
      </ul>
      <a className="post_list_more_button fa fa-chevron-down" />
      <script dangerouslySetInnerHTML={{__html: script}} />
    </div>
  );
}
