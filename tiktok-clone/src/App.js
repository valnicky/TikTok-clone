import React from "react";
import './App.css';
import Video from './Video';

function App() {
    return ( <div className = "app" >
      <div className="app__videos">
        <Video
        url=""
        channel=""
        description=""
        song=""
        likes=""
        message={}
        shares={}
        />
        <Video/>
        </div>
        </div>
    );
}

export default App;