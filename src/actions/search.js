import searchYouTube from "../lib/searchYouTube.js";
import changeVideoList from "./videoList.js";
import changeVideo from "./currentVideo.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

//TODO:  Write an asynchronous action to handle a video search!

var handleVideoSearch = (q) => {
  return (dispatch) => {
    //write dispatch for asynchronous action
    searchYouTube({ key: YOUTUBE_API_KEY, query: q}, (data) => {
      dispatch(changeVideoList(data));
    });
  };
};

export default handleVideoSearch;
