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

function destroy(req, res, next) {
    let artistid = req.params.id;
    Artist.remove({ artistid: artistid }).then((actor) => res.json(actor));
}

function create(req, res, next) {
    let artist = new Artist({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        nationality: req.body.nationality,
        dateofbirth: req.body.dateofbirth,
        datedeceased: req.body.datedeceased
    });
    artist.save().then(a => res.json(a));
}

function update(req, res, next) {
    let artistid = req.params.id;
    Artist.findOne({ artistid: artistid }).then((artist) => {
        artist.lastName = req.body.lastname ? req.body.lastname : artist.lastName;
        artist.firstName = req.body.firstname ? req.body.firstname : artist.firstName;
        artist.nationality = req.body.nationality ? req.body.nationality : artist.nationality;
        artist.dateOfBirth = req.body.dateofbirth ? req.body.dateofbirth : artist.dateOfBirth;
        artist.dateDeceased = req.body.datedeceased ? req.body.datedeceased : artist.dateDeceased;
        artist.save().then((a) => res.json(a));
    });
}

function addWork(req, res, next) {
    let artistid = req.params.id;
    Artist.findOne({ artistid: artistid }).then((artist) => {
        artist.addWork({
            title: req.body.title,
            copy: req.body.copy,
            medium: req.body.medium,
            description: req.body.description
        }).then((artist) => res.json(artist));
    });
}


module.exports = {
    index, one, destroy, create, update, addWork
};