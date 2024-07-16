import React, { useState } from 'react';
import { addVideo, updateVideo } from '../api';
import { useHistory, useParams } from 'react-router-dom';

const VideoForm = ({ video }) => {
  const [title, setTitle] = useState(video ? video.title : '');
  const [description, setDescription] = useState(video ? video.description : '');
  const [thumbnail, setThumbnail] = useState(video ? video.thumbnail : '');
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const videoData = { title, description, thumbnail };

    if (video) {
      await updateVideo(id, videoData);
    } else {
      await addVideo(videoData);
    }

    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Thumbnail URL"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        required
      />
      <button type="submit">{video ? 'Actualizar' : 'Registrar'} Video</button>
    </form>
  );
};

export default VideoForm;
