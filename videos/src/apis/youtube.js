import axios from 'axios';

const KEY = 'AIzaSyCh3Rgeupy0TnG9C9axo5c60FAeMkfEhX4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
