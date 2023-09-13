export interface IAlbum {
    _id: string,
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

