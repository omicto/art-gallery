const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = Schema({
    transactionid: Number,
    dateacquired: String,
    acquisitionprice: Number,
    askingprice: Number,
    datesold: String,
    salesprice: Number,
    customerid: Number,
    workid: Number
});

class Transaction {

    constructor(dateacquired, acquisitionprice, askingprice, datesold, salesprice, customerid, workid) {
        this.transactionid = this.getLargestTransactionId() + 1;
        this.dateacquired = dateacquired;
        this.acquisitionprice = acquisitionprice;
        this.askingprice = askingprice;
        this.datesold = datesold;
        this.salesprice = salesprice;
        this.customerid = customerid;
        this.workid = workid;
    }

    getLargestTransactionId(){
        let largest = this.find().sort({transactionid:-1}).limit(1);
        return largest.transactionId;
    }

    get transactionId() {
        return this.transactionid;
    }
    set dateAcquired(v) {
        this.dateacquired = v;
    }
    get dateAcquired() {
        return this.dateacquired;
    }
    set acquisitionPrice(v) {
        this.acquisitionprice = v;
    }
    get acquisitionPrice() {
        return this.acquisitionprice;
    }
    set askingPrice(v) {
        this.askingprice = v;
    }
    get askingPrice() {
        return this.askingprice;
    }
    set dateSold(v) {
        this.datesold = v;
    }
    get dateSold() {
        return this.datesold;
    }
    set salesPrice(v) {
        this.salesprice = v;
    }
    get salesPrice() {
        return this.salesprice;
    }
    set customerId(v) {
        this.customerid = v;
    }
    get customerId() {
        return this.customerid;
    }
    set workId(v) {
        this.workid = v;
    }
    get workId() {
        return this.workid;
    }
}

transactionSchema.loadClass(Transaction);
module.exports = mongoose.model('Transaction', transactionSchema);
