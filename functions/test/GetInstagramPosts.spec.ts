import { expect } from 'chai';
import { getInstagramPosts } from '../src';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';

const test = require('firebase-functions-test')();
const instagramResponse = require('./fixtures/instagram_api_response.json');

const axiosMock = new MockAdapter(axios);
test.mockConfig({instagram: {access_token: 'geralt_of_rivia'}});

describe('firebase.getInstagramPosts', () => {

    beforeEach(() => {
        axiosMock.onGet('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=geralt_of_rivia')
            .replyOnce(200, JSON.stringify(instagramResponse));
    });

    it('makes a request to my Instagram page', async () => {
        // @ts-ignore
        getInstagramPosts({}, { send: (content: string) => {}});

        await flushPromises();
        expect(axiosMock.history.get.length).to.equal(1);
    });

    it('returns a JSON response with Instagram posts', (done) => {
        // @ts-ignore
        getInstagramPosts({}, { send: (content: []) => {
            expect(content).to.deep.equal(require('./fixtures/transformed_instagram_api_response.json'));
            done();
        }});
    });

    afterEach(() => {
        axiosMock.reset();
    });
});
