import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header () {
    return (
        <div className = "header">
            <h2>I am Header</h2>
            <PersonIcon />
            {/* <PersonIcon fontSize="large" className="header__icon"/> */}
        </div>
    );
}

export default Header;