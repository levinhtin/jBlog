import React from 'react';

class Footer extends React.Component {
 
  render() {
    return (
      <footer className="site-footer">
        <div className="inner">
             <section className="copyright">All content copyright <a href="/">Ghost</a> &copy; 2016 &bull; All rights reserved.</section>
             <section className="poweredby">Proudly published with <a className="icon-ghost" href="http://ghost.org">Ghost</a> in <a href="https://github.com/mityalebedev/The-Shell">The Shell</a> theme.</section>
        </div>
      </footer>
    );
  }
}
export default Footer;