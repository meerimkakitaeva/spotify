import express from "express";
import mongoose from "mongoose";
import {imagesUpload} from "../multer";
import {IAlbum, IAlbumMutation} from "../types";
import Album from "../models/Album";

const albumsRoutes = express.Router();

albumsRoutes.get('/', async (req, res) => {
    try {
        const albums: IAlbum[] = await Album.find();
        res.send(albums);
    } catch (e) {
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
