import express from "express";
import Artist from "../models/Artist";
import mongoose from "mongoose";
import {IArtist, IArtistMutation, ITrack, ITrackMutation} from "../types";
import Track from "../models/Track";

const tracksRoutes = express.Router();

tracksRoutes.get('/', async (req, res) => {
    try {
        const tracks: ITrack[] = await Track.find();
        res.send(tracks);
    } catch (e) {
        return res.sendStatus(500);
    }
});

tracksRoutes.post('/', async (req, res, next) => {
    const trackData: ITrackMutation = {
        name: req.body.name,
        album: req.body.album,
        duration: req.body.duration,
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

