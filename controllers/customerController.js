const Customer = require('../models/customer');

function index(req, res, next) {
    Customer.find().then((customers) => res.render('customers', { title: 'Customers', customers: customers }));
}

function renderOne(req, res, next) {
    let customerId = req.params.id;
    Customer.findOne({ customerid: customerId }).then(c => res.render('customer', { newCustomer: false, customer: c }));
}

function create(req, res, next) {
    let customer = new Customer({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        emailaddress: req.body.emailaddress,
        encryptedpassword: req.body.encryptedpassword,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        ziporpostalcode: req.body.ziporpostalcode,
        country: req.body.country,
        areacode: req.body.areacode,
        phonenumber: req.body.phonenumber
    });
    customer.save().then((cust) => res.json(cust));
}

function update(req, res, next) {
    let customerid = req.params.id;
    Customer.findOne({ customerid: customerid }).then((cust) => {
        cust.lastName = req.body.lastname ? req.body.lastname : cust.lastName;
        cust.firstName = req.body.firstname ? req.body.firstname : cust.firstName;
        cust.emailAddress = req.body.emailaddress ? req.body.emailaddress : cust.emailAddress;
        cust.encryptedPassword = req.body.encryptedpassword ? req.body.encryptedpassword : cust.encryptedPassword;
        cust.street = req.body.street ? req.body.street : cust.street;
        cust.city = req.body.city ? req.body.city : cust.city;
        cust.state = req.body.state ? req.body.state : cust.state;
        cust.zipOrPostalCode = req.body.ziporpostalcode ? req.body.ziporpostalcode : cust.zipOrPostalcode;
        cust.country = req.body.country ? req.body.country : cust.country;
        cust.areaCode = req.body.areacode ? req.body.areacode : cust.areacode;
        cust.phoneNumber = req.body.phonenumber ? req.body.phonenumber : cust.phoneNumber;

        cust.save().then((c) => res.json(c));
    });
}

function destroy(req, res, next) {
    let customerid = req.params.id;
    Customer.remove({ customerid: customerid }).then(c => res.json(c));
}

module.exports = {index, renderOne, create, update, destroy};