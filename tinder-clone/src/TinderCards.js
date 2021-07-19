import React, { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';
// import swipedDB from '../';

function TinderCards () {
    const [people, setPeople] = useState([]);
    const [lastDirection, setLastDirection] = useState();
    const [currentPerson, setCurrentPerson] = useState();
    const alreadyRemoved = [];

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, cardName ) => {
        console.log(cardName + ' was swiped ' + direction);
        setLastDirection(direction)
        setCurrentPerson(cardName)
        // alreadyRemoved.push(cardName)
    }

    const outOfFrame = (cardName) => {
        console.log(cardName + " left the screen");
        alreadyRemoved.push(cardName)
    }

    // const swipe = (dir) => {
    //     // console.log("already Removed = " + alreadyRemoved)
    //     const cardsLeft = people.filter(person => !alreadyRemoved.includes(person.name))
    //     // console.log("cardsLeft:" + cardsLeft)
    //     if (cardsLeft.length) {
    //       const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
    //       const index = people.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
    //       alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
    //     //   console.log("index = " + index  + ", people[index].name = " + people[index].name + ", alreadyRemoved = " + alreadyRemoved)
    //       people[index].name.swipe(dir) // Swipe the card!
    //     //   setPeople(people);
    //     }
    //   }

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
                       className = 'default swipe'
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

            {/* <div className='buttons'>
                    <button onClick={() => swipe('left')}>Swipe left!</button>
                    <button onClick={() => swipe('right')}>Swipe right!</button>
            </div> */}

            {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection} on {currentPerson}</h2> : <h2 className='infoText'>Swipe a card to get started!</h2>}

        </div>
    );
}

export default TinderCards;
