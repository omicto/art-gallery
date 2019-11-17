const Artist = require('../models/artist');

function index(req, res, next) {
    Artist.find().then((artists) => res.render('artists', { title: 'Artists', artists: artists }));
}

function one(req, res, next) {
    let id = req.params.id;
    Artist.findOne({ artistid: id }).then((artist) => res.render('artist', {
        title: artist.firstName + ' ' + artist.lastName + ' | Information',
        artist: artist
    }));
}

module.exports = {
    index, one
};