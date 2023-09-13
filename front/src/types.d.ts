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
