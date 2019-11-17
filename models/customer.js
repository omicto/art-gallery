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

    constructor(firstname, lastname, emailaddress, encryptedpassword,
        street, city, state, ziporpostalcode, country, areacode, phonenumber) {
        this.customerid = this.getLargestCustomerId() + 1;
        this.lastname = lastname;
        this.firstname = firstname;
        this.emailaddress = emailaddress;
        this.encryptedpassword = encryptedpassword;
        this.street = street;
        this.city = city;
        this.state = state;
        this.ziporpostalcode = ziporpostalcode;
        this.country = country;
        this.areacode = areacode;
        this.phonenumber = phonenumber;
    }

    static getLargestCustomerId(){
        let largest = this.find().sort({customerid:-1}).limit(1);
        return largest.customerid;
    }

    get customerId() {
        return this.customerid;
    }

    set lastName(v) {
        this.lastname = v;
    }
    get lastName() {
        return lastname;
    }
    set firstName(v) {
        this.firstname = v;
    }
    get firstName() {
        return firstname;
    }
    set emailAddress(v) {
        this.emailaddress = v;
    }
    get emailAddress() {
        return emailaddress;
    }
    set encryptedPassword(v) {
        this.encryptedpassword = v;
    }
    get encryptedPassword() {
        return encryptedpassword;
    }
    set zipOrPostalCode(v) {
        this.ziporpostalcode = v;
    }
    get zipOrPostalCode() {
        return ziporpostalcode;
    }
    set areaCode(v) {
        this.areacode = v;
    }
    get areaCode() {
        return areacode;
    }
    set phoneNumber(v) {
        this.phonenumber = v;
    }
    get phoneNumber() {
        return phonenumber;
    }
}

customerSchema.loadClass(Customer);
module.exports = mongoose.model('Customer', customerSchema);