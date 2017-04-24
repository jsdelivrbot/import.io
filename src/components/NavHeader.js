import React from 'react';
import { Link } from 'react-router';

const NavHeader = () =>  {
  return (
    <nav  className='navbar '>
      <Link to='/' className='navbar-brand' ><img className='logo' src='../../assets/import-io-logo.svg'/></Link>
      <ul className='nav navbar-nav' >
        <li className='nav-item'>
          <Link className='nav-link' to='/invoices'>Invoices</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavHeader;