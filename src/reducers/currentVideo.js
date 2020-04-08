import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type ===  "CHANGE_VIDEO") {
    return action.video;
    //state = newVideo
    //reducer should not mutate existing state (make new state variable and return that)
  }

  return state;
};

export default currentVideoReducer;