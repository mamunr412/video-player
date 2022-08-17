import './App.css';
import { useEffect, useState } from 'react';
import { ReactVideoPlayer } from 'video-player-for-react';
import 'video-player-for-react/dist/index.css';
// import Map from './page/Map';

function App() {
  const [video, setVidedo] = useState([]);
  const [singleVideo, setSingleVideo] = useState('');

  useEffect(() => {
    fetch(
      `https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/`
    )
      .then((res) => res.json())
      .then((data) => {
        setVidedo(data);
      });
  }, []);

  return (
    <div className='App' style={{ marginLeft: '20%' }}>
      <div>
        <ReactVideoPlayer
          width='928px'
          url={singleVideo}
          type='video/mp4'
          poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
        />
      </div>
      <div>
        {video.map((v) => {
          console.log(v);
          return (
            <div key={v.id}>
              <ul>
                <li
                  onClick={() => setSingleVideo(v.link)}
                  style={{ cursor: 'pointer' }}
                >
                  {v.link}
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      <div>{/* <Map /> */}</div>
    </div>
  );
}

export default App;
