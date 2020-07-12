import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import SpotifyCurrentlyPlayingRepository from '@/repositories/SpotifyCurrentlyPlayingRepository.ts';

const axiosMock = new MockAdapter(axios);

describe('SpotifyCurrentlyPlayingRepository', () => {

    beforeEach(() => {
        axiosMock.reset();
    });

    it('makes a request to the API for currently playing info', async () => {
        axiosMock.onGet('https://christiangriffin.ca/api/christian-griffin/currently-playing')
            .replyOnce(200, null);

        await (new SpotifyCurrentlyPlayingRepository()).get();

        expect(axiosMock.history.get.length).to.equal(1);
        expect(axiosMock.history.get[0].url).to
            .equal('https://christiangriffin.ca/api/christian-griffin/currently-playing');
    });

    it('returns a CurrentlyPlaying object if the endpoint responds with data', async () => {
        axiosMock.onGet('https://christiangriffin.ca/api/christian-griffin/currently-playing')
            .replyOnce(200, {
                data: {
                    name: 'Geralt of Rivia',
                    artist: 'Yennefer of Vengerberg',
                    album: 'The Witcher',
                    image: 'https://geralt.of/rivia',
                },
            });

        const currentlyPlaying = await (new SpotifyCurrentlyPlayingRepository()).get();

        expect(currentlyPlaying).to.deep.equal({
            name: 'Geralt of Rivia',
            artist: 'Yennefer of Vengerberg',
            album: 'The Witcher',
            image: 'https://geralt.of/rivia',
        });
    });

    it('returns null if the endpoint responds with null', async () => {
        axiosMock.onGet('https://christiangriffin.ca/api/christian-griffin/currently-playing')
            .replyOnce(200, null);

        const currentlyPlaying = await (new SpotifyCurrentlyPlayingRepository()).get();
        expect(currentlyPlaying).to.equal(null);
    });
});
