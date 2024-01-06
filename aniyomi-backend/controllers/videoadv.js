const Video = require("../models/video");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getVideoById = (req, res, next, id) => {
    Video.findById(id)
        .populate("category")
        .exec((err, video) => {
            if (err) {
                return res.status(400).json({
                    error: "Video not found"
                });
            }
            req.video = video;
            next();
        });
};

exports.createVideo = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }
        //destructure the fields
        const { name, category } = fields;

        if (!name || !category) {
            return res.status(400).json({
                error: "Please include all fields"
            });
        }

        let video = new Video(fields);

        //handle file here
        if (file.photo) {
            if (file.photo.size > 7000000) {
                return res.status(400).json({
                    error: "File size too big!"
                });
            }
            video.photo.data = fs.readFileSync(file.photo.path);
            video.photo.contentType = file.photo.type;
        }
        // console.log(video);

        //save to the DB
        video.save((err, video) => {
            if (err) {
                console.log(err),
                    res.status(400).json({
                        error: "Saving video in DB failed"
                    });
            }
            res.json(video);
        });
    });
};

exports.getVideo = (req, res) => {
    req.video.photo = undefined;
    return res.json(req.video);
};

//middleware
exports.photo = (req, res, next) => {
    if (req.video.photo.data) {
        res.set("Content-Type", req.video.photo.contentType);
        return res.send(req.video.photo.data);
    }
    next();
};

// delete controllers
exports.deleteVideo = (req, res) => {
    let video = req.video;
    video.remove((err, deletedVideo) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete the video"
            });
        }
        res.json({
            message: "Deletion was a success",
            deletedVideo
        });
    });
};

// delete controllers
exports.updateVideo = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "problem with image"
            });
        }

        //updation code
        let video = req.video;
        video = _.extend(video, fields);

        //handle file here
        if (file.photo) {
            if (file.photo.size > 7000000) {
                return res.status(400).json({
                    error: "File size too big!"
                });
            }
            video.photo.data = fs.readFileSync(file.photo.path);
            video.photo.contentType = file.photo.type;
        }
        // console.log(video);

        //save to the DB
        video.save((err, video) => {
            if (err) {
                res.status(400).json({
                    error: "Updation of video failed"
                });
            }
            res.json(video);
        });
    });
};

//video listing

exports.getAllVideos = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 20;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

    Video.find()
        .select("-photo")
        .populate("category")
        .sort([
            [sortBy, "asc"]
        ])
        .limit(limit)
        .exec((err, videos) => {
            if (err) {
                return res.status(400).json({
                    error: "NO VIDEO FOUND"
                });
            }
            res.json(videos);
        });
};

exports.getAllUniqueCategories = (req, res) => {
    Video.distinct("category", {}, (err, category) => {
        if (err) {
            return res.status(400).json({
                error: "NO category found"
            });
        }
        res.json(category);
    });
};