import express from "express";
import Artist from "../models/Artist";
import mongoose from "mongoose";
import {imagesUpload} from "../multer";
import {IArtist, IArtistMutation} from "../types";

const artistsRoutes = express.Router();

artistsRoutes.get('/', async (req, res) => {
   try {
       const artists: IArtist[] = await Artist.find();
       res.send(artists);
   } catch (e) {
       return res.sendStatus(500);
   }
});

artistsRoutes.post('/', imagesUpload.single('image'), async (req, res, next) => {
   const artistData: IArtistMutation = {
       name: req.body.name,
       description: req.body.description,
       image: req.file ? req.file.filename : null,
   };

   const artist = new Artist(artistData);

   try {
       await artist.save();
       res.send(artist);
   } catch (e) {
       if (e instanceof mongoose.Error.ValidationError) {
           return res.status(400).send(e);
       }
       next (e);
   }

});

export default artistsRoutes;


