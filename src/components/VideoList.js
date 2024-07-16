import React, { useEffect, useState } from 'react';
import { getVideos, deleteVideo } from '../api';
import VideoItem from './VideoItem';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await getVideos();
    setVideos(response.data);
  };

  const handleDelete = async (id) => {
    await deleteVideo(id);
    fetchVideos();
  };

  return (
    <div>
      <h2>Videos</h2>
      <div className="video-list">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
