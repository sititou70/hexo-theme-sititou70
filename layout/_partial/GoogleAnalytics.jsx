import React from 'react';

export default ({theme}) => {
  const ga_script = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', '${theme.google_analytics_id}', 'auto');
      if(localStorage.getItem('${theme.google_analytics_developer_key}') !== 'true')ga('send', 'pageview');`;
  
  return (
    <script dangerouslySetInnerHTML={{__html: ga_script}} />
  );
}
