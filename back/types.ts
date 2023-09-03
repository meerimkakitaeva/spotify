export interface IArtist {
    id: string,
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
    id: string,
    name: string,
    artist: string,
    releaseDate: string,
    image?: string | null,
}

export interface IAlbumMutation {
    name: string,
    artist: string,
    releaseDate: string,
    image?: string | null,
}

export interface ITrack {
    id: string,
    name: string,
    album: string,
    duration: string,
}

export interface ITrackMutation {
    name: string,
    album: string,
    duration: string,
}