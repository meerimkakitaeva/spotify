import mongoose, {Schema} from "mongoose";
import User from "./User";
import Track from "./Track";
import {ITrackHistory} from "../types";

const TrackHistorySchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async (value: mongoose.Types.ObjectId) => await User.findById(value),
            message: "User does not exist"
        },
    },
    track: {
        type: mongoose.Types.ObjectId,
        ref: 'Track',
        required: true,
        validate: {
            validator: async (value: mongoose.Types.ObjectId) => await Track.findById(value),
            message: "Track does not exist"
        }
    },
    datetime: {
        type: Date,
        required: true,
    }
});


const TrackHistory = mongoose.model<ITrackHistory>('TrackHistory', TrackHistorySchema);
export default TrackHistory;