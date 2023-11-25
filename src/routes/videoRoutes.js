import express from 'express';
import { createVideo, getVideo,getVideoId,getVideoType,getVideoByType,getVideoPage,getCommentVideo,commentVideo } from '../controllers/videocontroller.js';

const videoRoute = express.Router();

// nơi quản lý API của đối tượng
videoRoute.get("/get-video", getVideo)
videoRoute.post("/create-video", createVideo)
videoRoute.get("/get-video-id/:video_id",getVideoId)


videoRoute.get("/get-video-by-type/:typeId",getVideoByType)
// /video/get-video-type
videoRoute.get("/get-video-type", getVideoType)

// API get video pagination
videoRoute.get("/get-video-page/:page",getVideoPage)
// API get comment video
videoRoute.get("/get-comment-video/:videoId", getCommentVideo)
// API comment video
videoRoute.post("/comment-video", commentVideo)




export default videoRoute;