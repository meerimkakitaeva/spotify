import express from "express";
import TrackHistory from "../models/TrackHistory";
import Track from "../models/Track";
import mongoose from "mongoose";
import auth, {IRequestWithUser} from "../middleware/auth";

const tracksHistoryRouter = express.Router();

tracksHistoryRouter.get('/', auth, async (req, res, next) => {
    try {
        const user = (req as IRequestWithUser).user;

        const history = await TrackHistory.find({ user })
            .populate('track')
            .sort({ datetime: -1 });

        res.send(history);
    } catch (e) {
        next(e);
    }
});

tracksHistoryRouter.post('/', auth,  async (req, res, next) => {
    try {
        const trackId = req.body.track;
        const user = (req as IRequestWithUser).user._id;

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