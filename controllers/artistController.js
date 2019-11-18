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

function destroy(req, res, next){
    let artistid = req.params.id;
    Artist.remove({artistid: artistid}).then((actor) => res.json(actor));
}

function create(req, res, next){
    let artist = new Artist({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        nationality: req.body.nationality,
        dateofbirth: req.body.dateofbirth,
        datedeceased: req.body.datedeceased
    });
    artist.save().then(a => res.json(a));
}


module.exports = {
    index, one, destroy, create
};