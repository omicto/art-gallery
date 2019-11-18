const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const customerSchema = {
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

customerSchema.plugin(AutoIncrement, {inc_field: 'customerid', start_req: 1000});


class Customer {

    constructor(firstname, lastname, emailaddress, encryptedpassword,
        street, city, state, ziporpostalcode, country, areacode, phonenumber) {
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