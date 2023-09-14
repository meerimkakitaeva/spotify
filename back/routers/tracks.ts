import express from "express";
import mongoose from "mongoose";
import {ITrack, ITrackMutation} from "../types";
import Track from "../models/Track";

const tracksRoutes = express.Router();

tracksRoutes.get('/', async (req, res) => {
    try {
        if (req.query.album) {
            const album = await Track.find({album: req.query.album}).populate('album').sort({trackNumber: 1});
            res.send(album);
        } else {
            const tracks: ITrack[] = await Track.find().populate('album');
            res.send(tracks);
        }
    } catch (e) {
        return res.sendStatus(500);
    }
});

tracksRoutes.post('/', async (req, res, next) => {
    const trackData: ITrackMutation = {
        name: req.body.name,
        album: req.body.album,
        duration: req.body.duration,
        trackNumber: req.body.trackNumber
    };

    const track = new Track(trackData);

    try {
        await track.save();
        res.send(track);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(e);
        }
        next (e);
    }

});

export default tracksRoutes;

