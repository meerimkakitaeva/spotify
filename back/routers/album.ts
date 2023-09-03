import express from "express";
import mongoose from "mongoose";
import {imagesUpload} from "../multer";
import {IAlbumMutation} from "../types";
import Album from "../models/Album";

const albumsRoutes = express.Router();

albumsRoutes.get('/', async (req, res) => {
    try {
        if (req.query.artist) {
            const artist = await Album.find({ artist: req.query.artist }).populate('artist');
            res.send(artist);
        } else {
            const albums = await Album.find().populate('artist');
            res.send(albums);
        }
    } catch (e) {
        return res.status(500).send(e);
    }
});

albumsRoutes.get('/:id', async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('artist');

        if (!album) {
            return res.sendStatus(404);
        }

        return res.send(album);
    } catch {
        return res.sendStatus(500);
    }
});

albumsRoutes.post('/', imagesUpload.single('image'), async (req, res, next) => {
    const albumData: IAlbumMutation = {
        name: req.body.name,
        artist: req.body.artist,
        releaseDate: req.body.releaseDate,
        image: req.file ? req.file.filename : null,
    };

    const album = new Album(albumData);

    try {
        await album.save();
        res.send(album);
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(e);
        }
        next (e);
    }

});

export default albumsRoutes;
