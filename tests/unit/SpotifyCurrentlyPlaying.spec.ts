import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CurrentlyPlaying from '@/interfaces/CurrentlyPlaying';
import SpotifyCurrentlyPlaying from '@/components/SpotifyCurrentlyPlaying.vue';
import flushPromises from 'flush-promises';

// tslint:disable-next-line
class FakeRepository {
  public get(): Promise<null|CurrentlyPlaying> {
    return new Promise((resolve) => {
      resolve({
        name: 'Geralt of Rivia',
        artist: 'Yennefer of Vengerberg',
        album: 'The Witcher',
        image: 'https://geralt.of/rivia',
      });
    });
  }
}

// tslint:disable-next-line
class NullRepository {
  public get(): Promise<null|CurrentlyPlaying> {
    return new Promise((resolve) => {
      resolve(null);
    });
  }
}

describe('SpotifyCurrentlyPlaying.vue', () => {
  it('renders the currently playing Spotify track', async () => {
    const spotifyCurrentlyPlaying = shallowMount(SpotifyCurrentlyPlaying, {
      propsData: { currentlyPlayingRepository: new FakeRepository() },
    });

    await flushPromises();

    expect(spotifyCurrentlyPlaying.find('section').exists()).to.equal(true);

    expect(spotifyCurrentlyPlaying.find('section h4').exists()).to.equal(true);
    expect(spotifyCurrentlyPlaying.find('section h4').text()).to.equal('Geralt of Rivia');

    expect(spotifyCurrentlyPlaying.find('section h5.artist').exists()).to.equal(true);
    expect(spotifyCurrentlyPlaying.find('section h5.artist').text()).to.equal('Yennefer of Vengerberg');

    expect(spotifyCurrentlyPlaying.find('section h5.album').exists()).to.equal(true);
    expect(spotifyCurrentlyPlaying.find('section h5.album').text()).to.equal('The Witcher');

    expect(spotifyCurrentlyPlaying.find('section img').exists()).to.equal(true);
    expect(spotifyCurrentlyPlaying.find('section img').attributes().src).to.equal('https://geralt.of/rivia');
  });

  it('doesn\'t render the section if there is no currently playing Spotify track', async () => {
    const spotifyCurrentlyPlaying = shallowMount(SpotifyCurrentlyPlaying, {
      propsData: { currentlyPlayingRepository: new NullRepository() },
    });

    await flushPromises();

    expect(spotifyCurrentlyPlaying.find('section').exists()).to.equal(false);
  });
});
