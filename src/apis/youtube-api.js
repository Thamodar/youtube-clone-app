import axios from 'axios';

const youtube = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3',
});

export default youtube;