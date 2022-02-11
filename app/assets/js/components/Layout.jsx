import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => {
  return (<>
    <Navigation />
        <div>{props.children}</div>
    {/* <Footer /> */}
  </>);
};

export default Layout;
