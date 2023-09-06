import express from "express";
import User from "../models/User";
import TrackHistory from "../models/TrackHistory";
import Track from "../models/Track";
import mongoose from "mongoose";

const tracksHistoryRouter = express.Router();

tracksHistoryRouter.post('/', async (req, res, next) => {
    const token = req.get('Authorization');
    const trackId = req.body.track;

    if (!token) {
        return res.status(401).send({ error: 'No token' });
    }

    try {
        const user = await User.findOne({ token });

        if (!user) {
            return res.status(401).send({ error: 'Wrong token!' });
        }

        const track = await Track.findById(trackId);

        if (!track) {
            return res.status(404).send({ error: 'Track not found' });
        }

        const trackHistory = new TrackHistory({
            user: user._id,
            track: trackId,
            datetime: new Date(),
        });

        await trackHistory.save();
        return res.send(trackHistory);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(e);
        }
        next (e);
    }
});

export default tracksHistoryRouter;