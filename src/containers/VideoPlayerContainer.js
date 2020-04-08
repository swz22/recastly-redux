import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// var VideoPlayerContainer = () => {};

// define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStoreToProps = state => {
  return {
    video: state.currentVideo
  };
};

const VideoPlayerContainer = connect(mapStoreToProps)(VideoPlayer);

export default VideoPlayerContainer;