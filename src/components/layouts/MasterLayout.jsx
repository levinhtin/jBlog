import React from 'react';
import Header from 'components/layouts/partials/Header.jsx';
import Footer from 'components/layouts/partials/Footer.jsx';

class MasterLayout extends React.Component {

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    console.log(childrenWithProps);
    return (
      <div className="wrapper">
        <Header/>
        <main className="content" role="main">
          {childrenWithProps}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;
