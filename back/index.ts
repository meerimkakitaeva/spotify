import express from 'express';
import cors from 'cors';
import * as mongoose from "mongoose";
import artistsRoutes from "./routers/artists";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/artists', artistsRoutes);

const run = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/spotify');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(e => console.error(e));