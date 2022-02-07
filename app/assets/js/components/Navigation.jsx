import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return <nav className='navbar'>
    <Link className='brand-logo' to="/">Home</Link>
    {/* <Link to="detail">Detail</Link> */}
    <ul className="right">
      <li><Link to="about">About Project</Link></li>
    </ul>
  </nav>;
};

export default Navigation;
