import mongoose from "mongoose";
import Artist from "./Artist";

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
        validate: {
            validator: async (value: mongoose.Types.ObjectId) => await Artist.findById(value),
            message: "Artist does not exist"
        },
    },
    releaseDate: {
        type: String,
        required: true,
    },
    image: String,
});

const Album = mongoose.model('Album', AlbumSchema);
export default Album;