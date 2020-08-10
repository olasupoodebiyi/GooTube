import express from "express";
import routes from "./routes";

const videoRouter = express.Router();

const { videos, upload, videoDetail, editVideo, deleteVideo } = routes;

videoRouter.get(videos, (req, res) => res.send("Videos"));
videoRouter.get(upload, (req, res) => res.send("Upload"));
videoRouter.get(videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(editVideo, (req, res) => res.send("Edit Video"));
videoRouter.get(deleteVideo, (req, res) => res.send("Delete Video"));

export default videoRouter;
