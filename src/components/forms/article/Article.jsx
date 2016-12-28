import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <article className="post tag-getting-started">
        <header className="post-header">
          <span className="post-meta"><time dateTime="2014-01-07">07 Jan 2014</time> on <a href="/tag/getting-started/">Getting Started</a></span>
          <h2 className="post-title"><a href="/welcome-to-ghost/">Welcome to Ghost</a></h2>
        </header>
        <section className="post-excerpt">
          <p>You're in! Nice. We've put together a little post to introduce you to the Ghost editor and get you started.
          <br />
          Go ahead and edit this post to get going and learn how it all works! Getting Started Writing in markdown is really easy. In the left hand panel of Ghost,…</p>
        </section>
      </article>
    );
  }
}

export default Article;