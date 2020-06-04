import MediaType from '../enums/MediaType';

export default interface InstagramApiPost {
    id: string;
    media_url: string;
    permalink: string;
    media_type: MediaType;
    thumbnail_url?: string;
    caption?: string;
}
