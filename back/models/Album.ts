import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Types.ObjectId,
        ref: 'Artist',
        required: true,
    },
    releaseDate: {
        type: String,
        required: true,
    },
    image: String,
});

const Album = mongoose.model('Album', AlbumSchema);
export default Album;