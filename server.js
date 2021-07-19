import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import Cards from './dbCards.js'

// App Config
const app = express();
const port = process.env.PORT || 8002   // Mistake??
const connection_url = `mongodb+srv://admin:DEwa7w7Cg0ZTPvuZ@cluster0-tester.lnm4d.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares
app.use(express.json())
app.use(cors());


// DB config
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req,res) => res.status(200).send('hello tristan'));

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/cards', (req,res) => {
    Cards.find((err,data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Listener
app.listen(port,() => console.log(`Listening on localhost: ${port}`));
// app.listen(port)

/* user: admin, password: DEwa7w7Cg0ZTPvuZ "tinderdb" = database name*/

/* export const swipedDB = (cardName, swiperName, direction) => {
    app.post('/tinder/cards', (req,res) => {
        const dbSwipeDirection = [swiperName, direction];     // This name is of the swiper
        if (direction.equals("right") || direction.equals("left")) {    //tests the edge cases of up or down
            const query = { name: cardName };
            const updateDocument = {
              $push: { swipe: {swiperName: swiperName, direction: direction} }
            };

            // const result = await direction.updateOne(query, updateDocument);    //This is to be added to the card
            const result = direction.updateOne(query, updateDocument);    //This is to be added to the card
        }
    })
} */