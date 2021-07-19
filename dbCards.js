import mongoose from 'mongoose'

const cardSchema = mongoose.Schema ({
    name: String,
    imgUrl: String,
    bio: String,
    swipe: {
        swiperName: String,
        direction: String,
    },
})

export default mongoose.model('cards', cardSchema);