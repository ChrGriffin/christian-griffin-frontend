import InstagramPost from '../interfaces/InstagramPost';
import InstagramApiPost from '../interfaces/InstagramApiPost';
import MediaType from '../enums/MediaType';

export default class InstagramPostTransformer {

    public transform(apiPost: InstagramApiPost): InstagramPost {
        return {
            image: apiPost.media_type === MediaType.image ? apiPost.media_url : apiPost.thumbnail_url as string,
            url: apiPost.permalink,
            caption: apiPost.caption || null,
        };
    }
}
