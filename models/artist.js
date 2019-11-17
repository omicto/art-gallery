const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artistid: Number,
    lastname: String,
    firstname: String,
    nationality: String,
    dateofbirth: Number,
    datedeceased: Number,
    works: [{
        workid: Number,
        title: String,
        copy: String,
        medium: String,
        description: String
    }]
});

class Artist {
    constructor(artistid, lastname, firstname, nationality, dateofbirth, datedeceased, works){
        this.artistid = this.getLargestArtistId() + 1;
        this.lastname = lastname;
        this.firstname = firstname;
        this.nationality = nationality;
        this.dateofbirth = dateofbirth;
        this.datedeceased = datedeceased;
        this.works = works;
    }

    get artistId(){
        return this.artistid;
    }

    static getLargestArtistId(){
        let largest = this.find().sort({artistid:-1}).limit(1);
        return largest.artistid;
    }

    get lastName(){
        return this.lastname;
    }

    set lastName(i){
        this.lastname = i;
    }

    get firstName(){
        return this.firstname;
    }

    set firstName(i){
        this.firstname = i;
    }

    get dateOfBirth(){
        return this.dateofbirth;
    }

    set dateOfBirth(i){
        this.dateofbirth = i;
    }
    get dateDeceased(){
        return this.datedeceased;
    }

    set dateDeceased(i){
        this.datedeceased = i;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    addWork(work){
        this.findOneAndUpdate({artistid: this.artistId}, {'$push' : {"works" : work}});
    }
}

artistSchema.loadClass(Artist);
module.exports = mongoose.model('Artist', artistSchema);