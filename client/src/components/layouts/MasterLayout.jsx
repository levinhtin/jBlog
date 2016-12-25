import React from 'react';
import Header from 'layout/partials/Header.jsx';
import Footer from 'layout/partials/Footer.jsx';

class MasterLayout extends React.Component {

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    console.log(childrenWithProps);
    return (
      <div className="wrapper-container">
        <Header/>
        <div className="container">
          {childrenWithProps}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default MasterLayout;
