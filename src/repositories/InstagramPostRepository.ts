import InstagramPost from '@/interfaces/InstagramPost';
import axios from 'axios';

export default class InstagramPostRepository {

    public async get(): Promise<InstagramPost[]> {
        const response = await axios.get('https://christiangriffin.ca/api/christian-griffin/instagram-posts');
        return response.data.data;
    }
}
