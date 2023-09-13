// export interface IAlbum {
//     _id: string,
//     name: string,
//     artist: string,
//     releaseDate: string,
//     image?: string | null,
// }

export interface IAlbumMutation {
    name: string,
    artist: string,
    releaseDate: string,
    image?: string | null,
}

export interface IArtist {
    _id: string,
    name: string,
    description?: string,
    image?: string | null,
}

export interface IArtistMutation {
    name: string,
    description?: string,
    image?: string | null,
}

// {
//     "_id": "65020e4157b3691680e694f7",
//     "name": "Positions",
//     "artist": {
//     "_id": "65020e4057b3691680e694f2",
//         "name": "Ariana Grande",
//         "description": "The most popular female singer",
//         "image": "fixtures/Grande.jpg",
//         "__v": 0
// },
//     "releaseDate": "2020",
//     "image": "fixtures/positions.jpg",
//     "__v": 0
// },

export interface IAlbum {
    _id: string,
    name: string,
    artist : {
        name: string,
        description?: string,
        image?: string | null,
    },
    releaseDate: string,
    image?: string | null,
}

