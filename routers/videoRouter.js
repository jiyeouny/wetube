import express from "express";
import routes from "../routes";
import {
	videos,
	upload,
	videoDetail,
	editVideo,
	deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
// videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
// videoRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));
// videoRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
// videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
