var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;
//reducer - takes a current state and returns a new state (through the action)