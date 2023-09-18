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

export interface RegisterMutation {
    username: string,
    password: string,
}

export interface IUser {
    _id: string,
    username: string,
    password: string,
    token?: string,
}

export interface RegisterResponse {
    user: IUser;
    message: string;
}

export interface ValidationError {
    errors: {
        [key: string]: {
            name: string,
            message: string,
        }
    },
    message: string,
    name: string,
    _message: string,
}

export interface LoginMutation {
    username: string,
    password: string,
}

export interface GlobalError {
    error: string,
}

export interface ITrackHistory {
    user: string,
    track: string,
    datetime: Date,
    _id: string,
}

export interface ITrackWithId {
    track: string
}

export interface IHistory {
    _id: string,
    user: string,
    track: {
        _id: string,
        name: string,
        album: string,
        trackNumber: string,
        duration: string,
    },
    datetime: string,
}

