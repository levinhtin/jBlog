import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
 
  render() {
    return (
      <header id="site-head">
        <div className="vertical animated bounceInDown">
          <div id="site-head-content" className="inner">
            <h1 className="blog-title">Ghost</h1>
            <h2 className="blog-description">In The Shell</h2>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;