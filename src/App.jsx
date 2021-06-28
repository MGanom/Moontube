import React, { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/SearchHeader';
import VideoList from './components/video_list/VideoList';
import styles from './App.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA1ZCTSgqHZeNmSwZfFjfEtWEyTgQrgh7M&part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyA1ZCTSgqHZeNmSwZfFjfEtWEyTgQrgh7M`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA1ZCTSgqHZeNmSwZfFjfEtWEyTgQrgh7M&part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyA1ZCTSgqHZeNmSwZfFjfEtWEyTgQrgh7M',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
