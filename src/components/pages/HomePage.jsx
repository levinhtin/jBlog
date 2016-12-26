import React from 'react';
import {MasterLayout} from 'components/layouts';
import Article from 'components/forms/article';
import Pagination from 'components/commons/pagination';

class HomePage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <div>
          <Article/>
          <Pagination/>
        </div>
      </MasterLayout>
    )
  }
}

export default HomePage;