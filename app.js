var express = require("express");
var app = express();

var MongoClient = require("mongodb").MongoClient;

var fs = require("fs");

var multer = require("multer");
var upload = multer({dest: "./uploads"});

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/images");

var connection = mongoose.connection;

var gfs; 

var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

app.use(express.static("client"));

connection.once("open", function () {
    gfs = Grid(connection.db);
    app.get("/", function (req, res) {
        res.render("home");
    });

    app.post("/", upload.single("avatar"), function (req, res, next) {
        var writestream = gfs.createWriteStream({
            filename: req.file.originalname
        });

        fs.createReadStream("./uploads/" + req.file.filename)
            .on("end", function () { fs.unlink("./uploads" + req.file.filename, function (err) { res.send("success") })})
                .on("err", function () { res.send("Error uploading image")})
                    .pipe(writestream);
    });

    app.get("/:filename", function (req, res) { 
        var readstream = gfs.createReadStream({filename: req.params.filename});
        readstream.on("error", function (err) {
            res.send("No image found with that title");
        });
        readstream.pipe(res);
    });
});



app.listen(3000);
console.log("listening on 3000")