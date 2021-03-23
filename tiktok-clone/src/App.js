import React, {useState, useEffect} from "react";
import './App.css';
import Video from './Video';
import db from './firebase';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() =>{
    //fires once when the component loads BUT never after
    //if we have [videos] fires once when the component loads AND when videos changes
    db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => 
      doc.data())
      ))
  }, [videos])
  
    return ( <div className = "app" >
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => {
            <Video
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}
            />
          }
        )}
        
        </div>
        </div>
    );
}

export default App;