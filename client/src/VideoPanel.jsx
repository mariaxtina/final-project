import React, {Component} from 'react';

const VideoPanel = React.createClass({
  render() {
    console.log("Rendering <VideoPanel/>");
    return (
      <div className="video-panel">
        <video id="webcam"></video>
      </div>
    );
  }
});

export default VideoPanel;
