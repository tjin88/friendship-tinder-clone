import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';
// import swipedDB from '../';

function TinderCards () {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people)

    const swiped = (cardName, swiperName, direction ) => {
        console.log('removing: ' + cardName);
        console.log(cardName + ' was swiped ' + direction);
        // swipedDB(cardName, swiperName, direction);
        // setLastDirection(direction);
    }

    const outOfFrame = (cardName) => {
        console.log(cardName + " left the screen");
    }

    return (
        <div className = "tinderCards">
            <div className = "tinderCards__cardContainer">
                <TinderCard
                    className = 'default'
                    key = "default"
                    preventSwipe = {['up', 'down','left','right']}
                >
                    <div style = {{ color: "green" }} className = 'defaultCard'>
                        <h3>All Done!</h3>
                    </div>
                    {/* if person.swiped == user.name --> pop-up appears: Matched! */}
                </TinderCard>
                {people.map((person) => (
                    // <div className = "cardAndBio">
                    <TinderCard
                       className = 'swipe'
                       key = {person.name}
                       preventSwipe = {['up', 'down']}
                       onSwipe = {(dir) => swiped(dir, person.name)}
                       onCardLeftScreen = {() => outOfFrame(person.name)} 
                    >
                        <div style = {{ backgroundImage: `url(${person.imgUrl})` }} className = 'card'>
                            <h3>{person.name}</h3>
                        </div>
                        {/* if person.swiped == user.name --> pop-up appears: Matched! */}
                    </TinderCard>
                    // {/* <h3 color = "black">{person.bio}</h3> */}
                    // </div>
                ))}
            </div>

            
        </div>
    );
}

export default TinderCards;
