const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = {
    customerid: Number,
    lastname: String,
    firstname: String,
    emailaddress: String,
    encryptedpassword: String,
    street: String,
    city: String,
    state: String,
    ziporpostalcode: String,
    country: String,
    areacode: String,
    phonenumber: String,
}

class Customer {
    set lastName(v){
        this.lastname = v;
    }
    get lastName(){
        return lastname;
    }
    set firstName(v){
        this.firstname = v;
    }
    get firstName(){
        return firstname;
    }
    set emailAddress(v){
        this.emailaddress = v;
    }
    get emailAddress(){
        return emailaddress;
    }
    set encryptedPassword(v){
        this.encryptedpassword = v;
    }
    get encryptedPassword(){
        return encryptedpassword;
    }
    set street(v){
        this.street = v;
    }
    get street(){
        return street;
    }
    set city(v){
        this.city = v;
    }
    get city(){
        return city;
    }
    set state(v){
        this.state = v;
    }
    get state(){
        return state;
    }
    set zipOrPostalCode(v){
        this.ziporpostalcode = v;
    }
    get zipOrPostalCode(){
        return ziporpostalcode;
    }
    set country(v){
        this.country = v;
    }
    get country(){
        return country;
    }
    set areaCode(v){
        this.areacode = v;
    }
    get areaCode(){
        return areacode;
    }
    set phoneNumber(v){
        this.phonenumber = v;
    }
    get phoneNumber(){
        return phonenumber;
    }
}

customerSchema.loadClass(Customer);
module.exports = mongoose.model('Customer', customerSchema);