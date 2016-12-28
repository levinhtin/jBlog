import React from 'react';
import Article from './Article.jsx';
import Pagination from 'components/commons/pagination';

class Articles extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Pagination />
      </div>
    );
  }
}

export default Articles;