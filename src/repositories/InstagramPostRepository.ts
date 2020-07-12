import InstagramPost from '@/interfaces/InstagramPost';
import axios from 'axios';

export default class InstagramPostRepositoryRepository {

    public async get(): Promise<InstagramPost[]> {
        const response = await axios.get('https://us-central1-christian-griffin-frontend.cloudfunctions.net/getInstagramPosts');
        return response.data;
    }
}
