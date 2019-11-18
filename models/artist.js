const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const log4js = require('log4js');
const logger = log4js.getLogger();

const artistSchema = new Schema({
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

artistSchema.plugin(AutoIncrement, {inc_field: 'artistid', start_seq: 25});
artistSchema.plugin(AutoIncrement, {id: 'workId',inc_field: 'works.workid', start_seq: 1000});


class Artist {
    constructor( lastname, firstname, nationality, dateofbirth, datedeceased, works){
        this.lastname = lastname;
        this.firstname = firstname;
        this.nationality = nationality;
        this.dateofbirth = dateofbirth;
        this.datedeceased = datedeceased;
    }

    get artistId(){
        return this.artistid;
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
        return this.findOneAndUpdate({artistid: this.artistId}, {'$push' : {"works" : work}});
    }
}

artistSchema.loadClass(Artist);
module.exports = mongoose.model('Artist', artistSchema);