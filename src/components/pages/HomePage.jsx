import React from 'react';
import {MasterLayout} from 'components/layouts';
import {Articles} from 'components/forms/article';
import Pagination from 'components/commons/pagination';

class HomePage extends React.Component {
  render() {
    return (
      <MasterLayout>
        <div>
          <Articles/>
        </div>
      </MasterLayout>
    );
  }
}

export default HomePage;