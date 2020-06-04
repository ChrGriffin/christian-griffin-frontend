import { expect } from 'chai';
import InstagramApiPost from '../../src/interfaces/InstagramApiPost';
import MediaType from '../../src/enums/MediaType';
import InstagramPostTransformer from '../../src/transformers/InstagramPostTransformer';

const imagePost: InstagramApiPost = {
    id: '1',
    media_url: 'https://geralt.rv/image.jpg',
    permalink: 'https://geralt.rv',
    media_type: MediaType.image,
    caption: 'Wind\s howling.'
};
const videoPost: InstagramApiPost = {
    id: '1',
    media_url: 'https://yennefer.vb/image.mp4',
    permalink: 'https://yennefer.vb',
    media_type: MediaType.video,
    caption: 'Wind\s howling.',
    thumbnail_url: 'https://yennefer.vb/image.jpg'
}

describe('InstagramPostTransformer.ts', () => {

    it('transforms an image post to the expected format', () => {
        const transformer = new InstagramPostTransformer();
        expect(transformer.transform(imagePost)).to.deep.equal({
            image: imagePost.media_url,
            url: imagePost.permalink,
            caption: imagePost.caption
        });
    });

    it('transforms a video post to the expected format', () => {
        const transformer = new InstagramPostTransformer();
        expect(transformer.transform(videoPost)).to.deep.equal({
            image: videoPost.thumbnail_url,
            url: videoPost.permalink,
            caption: videoPost.caption
        });
    });
})
