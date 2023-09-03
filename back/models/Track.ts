import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    album: {
        type: mongoose.Types.ObjectId,
        ref: 'Album',
        required: true,
    },
    duration : {
        type: String,
        required: true,
    },
});

const Track = mongoose.model('Track', TrackSchema);
export default Track;