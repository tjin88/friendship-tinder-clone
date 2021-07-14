import React from 'react';
import './Header.css';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ForumIcon from  '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Header () {
    return (
        <div className = "header">
            <IconButton>
                <PersonOutlineIcon fontSize = "large" className = "header__icon"/>
            </IconButton>

            <IconButton>
                <img
                    className = "header__logo"
                    src = "https://www.citypng.com/public/uploads/preview/-11595270396ei6vchptvb.png"
                    alt = ""
                />
            </IconButton>

            {/* <IconButton>
                <WhatshotIcon fontSize = "large" className = "header__fireIcon"/>
            </IconButton> */}

            <IconButton>
                <ForumIcon fontSize = "large" className = "header__icon"/>
            </IconButton>
            {/* <PersonIcon fontSize="large" className="header__icon"/> */}
        </div>
    );
}

export default Header;