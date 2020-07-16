import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import InstagramPostRepository from '@/repositories/InstagramPostRepository';

const axiosMock = new MockAdapter(axios);

describe('InstagramPostRepository', () => {

    beforeEach(() => {
        axiosMock.reset();
    });

    it('makes a request to the API for Instagram posts', async () => {
        axiosMock.onGet('https://christiangriffin.ca/api/christian-griffin/instagram-posts')
            .replyOnce(200, {
                status: 'success',
                data: [],
            });

        await (new InstagramPostRepository()).get();

        expect(axiosMock.history.get.length).to.equal(1);
        expect(axiosMock.history.get[0].url).to
            .equal('https://christiangriffin.ca/api/christian-griffin/instagram-posts');
    });

    it('returns an array of Instagram posts', async () => {
        axiosMock.onGet('https://christiangriffin.ca/api/christian-griffin/instagram-posts')
            .replyOnce(200, {
                status: 'success',
                data: [
                    {
                        image: 'geralt_of_rivia.jpg',
                        caption: 'Geralt of Rivia',
                        url: 'http://geralt.of/rivia',
                    },
                    {
                        image: 'yennefer_of_vengerberg.jpg',
                        caption: 'Yennefer of Vengerberg',
                        url: 'http://yennefer.of/vengerberg',
                    },
                ],
            });

        const instagramPosts = await (new InstagramPostRepository()).get();

        expect(instagramPosts).to.deep.equal([
            {
                image: 'geralt_of_rivia.jpg',
                caption: 'Geralt of Rivia',
                url: 'http://geralt.of/rivia',
            },
            {
                image: 'yennefer_of_vengerberg.jpg',
                caption: 'Yennefer of Vengerberg',
                url: 'http://yennefer.of/vengerberg',
            },
        ]);
    });
});
