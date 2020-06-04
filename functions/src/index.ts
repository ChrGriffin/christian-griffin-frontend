import { https, config } from 'firebase-functions';
import axios from 'axios';

export const getInstagramPosts = https.onRequest(async(request, response) => {
 await axios.get(
     `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${config().instagram.access_token}`
 );

 response.send("Hello from Firebase!");
});
