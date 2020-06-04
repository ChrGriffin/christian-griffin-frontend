import {https, config} from 'firebase-functions';
import axios from 'axios';
import InstagramApiPost from './interfaces/InstagramApiPost';
import InstagramPost from './interfaces/InstagramPost';
import InstagramPostTransformer from './transformers/InstagramPostTransformer';

export const getInstagramPosts = https.onRequest(async (request, response) => {
    const apiResponse = await axios
        .get(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${config().instagram.access_token}`)

    const transformer = new InstagramPostTransformer();
    const posts: InstagramPost[] = apiResponse.data.data.map((post: InstagramApiPost): InstagramPost => {
        return transformer.transform(post);
    });

    response.send(posts);
});
