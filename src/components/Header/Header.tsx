import * as React from 'react';
import './Header.scss';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

const Header = () => (
    <Navbar className='pr-navbar'>
        <NavbarBrand className='pr-navbar-brand'>
            <h4 className='pr-header'> Pull Request Dashboard </h4>
        </NavbarBrand>
    </Navbar>
);
export default Header;
