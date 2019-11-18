const Transaction = require('../models/transaction');
const Artist = require('../models/artist');


function index(req, res, next) {
    Transaction.find().then(transactions => {
        transactions.forEach(t => {
            Artist.findOne({ 'works.workid': workId }, { 'works.$': 1 })
                .then(a => res.json({ workinfo: a.works[0] }))
                .catch((err) => res.status(404).json('Not found'));
        });
        res.render('transactions', { title: 'Sales', transactions: transactions });
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

module.exports = { index, create, destroy }