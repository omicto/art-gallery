const Transaction = require('../models/transaction');
const Customer = require('../models/customer');
const Artist = require('../models/artist');


function index(req, res, next) {
    Transaction.find().then(transactions => {
        res.render('transactions', { title: 'Transactions', transactions: transactions });
    });
}

function renderForm(req, res, next){
    Customer.find().then((customers) => {
        Artist.find().then((artists) => {
           res.render('transaction-form', {
               customers: customers,
               artists: artists,
               title: 'Add a new transaction'
           }); 
        });
    });
}

function create(req, res, next) {
    let transaction = new Transaction({
        dateacquired: req.body.dateacquired,
        acquisitionprice: req.body.acquisitionprice,
        askingprice: req.body.askingprice,
        datesold: req.body.datesold,
        salesprice: req.body.salesprice,
        customerid: req.body.customerid,
        workid: req.body.workid
    });
    transaction.save().then(t => res.json(t));
}

// TODO
// function update(req, res, next){
// 
// }

function destroy(req, res, next) {
    let transactionid = req.params.id;
    Transaction.remove({ transactionid: transactionid }).then((t) => res.json(t));
}

module.exports = { index, create, destroy, renderForm }