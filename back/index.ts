import express from 'express';
import cors from 'cors';
import * as mongoose from "mongoose";
import artistsRoutes from "./routers/artists";
import albumsRoutes from "./routers/album";
import tracksRoutes from "./routers/tracks";
import usersRouter from "./routers/users";
import tracksHistoryRouter from "./routers/trackHistory";
import config from "./config";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/artists', artistsRoutes);
app.use('/albums', albumsRoutes);
app.use('/tracks', tracksRoutes);
app.use('/users', usersRouter);
app.use('/track_history', tracksHistoryRouter);

const run = async () => {
    await mongoose.connect(config.db);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(e => console.error(e));