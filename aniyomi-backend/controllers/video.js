const Video = require("../models/video");

exports.getVideoById = (req, res, next, id) => {
    Video.findById(id).exec((err, vid) => {
        if (err) {
            return res.status(400).json({
                error: "Video not found in DB"
            });
        }
        req.video = vid;
        next();
    });
};

exports.createVideo = (req, res) => {
    const video = new Video(req.body);
    video.save((err, video) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save category in DB"
            });
        }
        res.json({ video });
    });
};

exports.getVideo = (req, res) => {
    return res.json(req.video);
};


exports.getAllVideo = (req, res) => {
    Video.find().exec((err, videos) => {
        if (err) {
            return res.status(400).json({
                error: "NO categories found"
            });
        }
        res.json(videos);
    });
};

exports.updateVideo = (req, res) => {
    const video = req.video;
    video.name = req.body.name;

    video.save((err, updatedVideo) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to update video"
            });
        }
        res.json(updatedVideo);
    });
};


exports.removeVideo = (req, res) => {
    const video = req.video;
    video.remove((err, video) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete this video"
            });
        }
        res.json({
            message: "Successfull deleted"
        });
    });
};
