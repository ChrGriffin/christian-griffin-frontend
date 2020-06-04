import { expect } from 'chai';
import { getInstagramPosts } from '../src';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';
const test = require('firebase-functions-test')();

const axiosMock = new MockAdapter(axios);
test.mockConfig({instagram: {access_token: 'geralt_of_rivia'}});

describe('firebase.getInstagramPosts', () => {

    it('makes a request to Christian\s Instagram page', async () => {
        axiosMock.onGet('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=geralt_of_rivia')
            .replyOnce(200);

        // @ts-ignore
        getInstagramPosts({}, { send: (content: string) => {}});

        await flushPromises();

        expect(axiosMock.history.get.length).to.equal(1);
    });

    afterEach(() => {
        axiosMock.reset();
    })
});
