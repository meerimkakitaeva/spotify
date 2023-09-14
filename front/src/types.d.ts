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

export interface ITrack {
    _id: string,
    name: string,
    album: string,
    duration: string,
    trackNumber: string,
}

