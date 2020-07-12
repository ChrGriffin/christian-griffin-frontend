import CurrentlyPlaying from '@/interfaces/CurrentlyPlaying';
import axios from 'axios';

export default class SpotifyCurrentlyPlayingRepository {

    public async get(): Promise<null|CurrentlyPlaying> {
        const response = await axios.get('https://christiangriffin.ca/api/christian-griffin/currently-playing');
        return response.data && response.data.data
            ? response.data.data
            : null;
    }
}
