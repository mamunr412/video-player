
import './App.css';
import { useEffect, useState } from 'react';
import { ReactVideoPlayer } from 'video-player-for-react'
import 'video-player-for-react/dist/index.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const [video,setVidedo]=useState([])
  const [singleVideo,setSingleVideo]=useState('')

  useEffect(()=>{
    fetch(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/`)
    .then(res=>res.json()).then(data=>{
      setVidedo(data)
    })
  },[])

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className="App">
      
<div>
<ReactVideoPlayer
      width='928px'
      url={singleVideo}
      type='video/mp4'
      poster='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
      
    />
</div>
<div>
 {video.map(v=>{
  console.log(v)
  return <div key={v.id}>
    <ul>
      <li onClick={()=>setSingleVideo(v.link)} style={{ cursor:'pointer'}}>{v.link}</li>
    </ul>
  </div>
 })} 
</div>


<div>
<div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
</div>


    </div>
  );
}

export default App;
