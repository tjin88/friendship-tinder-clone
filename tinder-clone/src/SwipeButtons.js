import React, { useState } from 'react';
import './SwipeButtons.css';
// import ReplayIcon from '@material-ui/icons/Replay';
// import CloseIcon from '@material-ui/icons/Close';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import IconButton from '@material-ui/core/IconButton';
// import StarRateIcon from '@material-ui/icons/StarRate';
// import FlashOnIcon from '@material-ui/icons/FlashOn';
import axios from './axios';

function SwipeButtons () {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [biography, setBiography] = useState("");


    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/tinder/cards', {
            name: name,
            imgUrl: url,       //This was hard coded
            bio: biography,
        });

        setName("");
        setUrl("");
        setBiography("");
    }
    return (
        <div className = "swipeButtons">
            {/* <IconButton className = "swipeButtons__left">   {/* X --> No *****|}
                <CloseIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__repeat"> {/* reverse (re-see the person?) ****|}
                <ReplayIcon fontSize = "large"/>
            </IconButton>
            <IconButton className = "swipeButtons__right">  {/* Heart --> like ****|}
                <FavoriteIcon fontSize = "large" />
             </IconButton> */}
             <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" type="text"/>
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter the image url" type="text"/>
                <input value={biography} onChange={e => setBiography(e.target.value)} placeholder="Enter a biography!" type="text"/>
                <button onClick={sendMessage} type="submit">Add new profile</button>
            </form>
            {/* <IconButton className = "swipeButtons__star">   {/* Star --> Super like ****|}
                <StarRateIcon fontSize = "large" />
            </IconButton> */}
            {/* <IconButton className = "swipeButtons__lightning">  {/* lightning -->  Premium features (skip the line?) ****|}
                <FlashOnIcon fontSize = "large" />
            </IconButton> */}
        </div>
    );
}

export default SwipeButtons;