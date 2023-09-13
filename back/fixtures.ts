import mongoose from "mongoose";
import config from "./config";
import Artist from "./models/Artist";
import Track from "./models/Track";
import Album from "./models/Album";

const run = async () => {
  await mongoose.connect(config.db);
  const db = mongoose.connection;

  try {
    await db.dropCollection('users');
    await db.dropCollection('albums');
    await db.dropCollection('tracks');
    await db.dropCollection('artists');
    await db.dropCollection('track_history');
  } catch (e) {
    console.log('Collection were not present, skipping drop ...');
  }

  const [firstArtist, secondArtist] = await Artist.create({
    name: 'The Weeknd',
    description: 'The most popular pop-star in the world',
    image: 'fixtures/theWeeknd.jpg'
  }, {
    name: 'Ariana Grande',
    description: 'The most popular female singer',
    image: 'fixtures/Grande.jpg'
  });

  const [first, second, third, fourth] = await Album.create({
    name: 'Starboy',
    artist: firstArtist._id,
    releaseDate: '2016',
    image: 'fixtures/starboy.jpg',
  }, {
    name: 'After Hours',
    artist: firstArtist._id,
    releaseDate: '2020',
    image: 'fixtures/afterHours.jpg',
  }, {
    name: 'Positions',
    artist: secondArtist._id,
    releaseDate: '2020',
    image: 'fixtures/positions.jpg',
  }, {
    name: 'Thank U, Next',
    artist: secondArtist._id,
    releaseDate: '2019',
    image: 'fixtures/thankUNext.jpg',
  });

  await Track.create({
    name: 'Party Monster',
    album: first._id,
    trackNumber: '1',
    duration : '4:09',
  }, {
    name: 'Reminder',
    album: first._id,
    trackNumber: '2',
    duration : '3:39',
  }, {
    name: 'Sidewalks',
    album: first._id,
    trackNumber: '3',
    duration : '3:51',
  }, {
    name: 'I Feel It Coming',
    album: first._id,
    trackNumber: '4',
    duration : '4:29',
  }, {
    name: 'In Your Eyes',
    album: second._id,
    trackNumber: '1',
    duration : '3:58',
  }, {
    name: 'Heartless',
    album: second._id,
    trackNumber: '2',
    duration : '3:18',
  }, {
    name: 'After Hours',
    album: second._id,
    trackNumber: '3',
    duration : '6:01',
  }, {
    name: 'Too Late',
    album: second._id,
    trackNumber: '4',
    duration : '4:00',
  }, {
    name: 'Motive',
    album: third._id,
    trackNumber: '1',
    duration : '2:48',
  }, {
    name: 'pov',
    album: third._id,
    trackNumber: '2',
    duration : '3:22',
  }, {
    name: 'obvious',
    album: third._id,
    trackNumber: '3',
    duration : '2:27',
  }, {
    name: 'just like magic',
    album: third._id,
    trackNumber: '4',
    duration : '2:30',
  }, {
    name: 'thank u, next',
    album: fourth._id,
    trackNumber: '1',
    duration : '3:27',
  }, {
    name: 'NASA',
    album: fourth._id,
    trackNumber: '2',
    duration : '3:02',
  }, {
    name: 'fake smile',
    album: fourth._id,
    trackNumber: '3',
    duration : '3:29',
  }, {
    name: 'imagine',
    album: fourth._id,
    trackNumber: '4',
    duration : '3:32',
  });

  await db.close();
};

run().catch(console.error);