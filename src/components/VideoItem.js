import React from 'react';

const VideoItem = ({ video, onDelete }) => {
  return (
    <div className="video-item">
      <img src={video.thumbnail} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button onClick={() => onDelete(video.id)}>Eliminar</button>
    </div>
  );
};

export default VideoItem;
