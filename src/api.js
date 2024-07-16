import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/your-username/aluraflix',
});

export const getVideos = () => api.get('/videos');
export const addVideo = (video) => api.post('/videos', video);
export const deleteVideo = (id) => api.delete(`/videos/${id}`);
export const updateVideo = (id, video) => api.put(`/videos/${id}`, video);
