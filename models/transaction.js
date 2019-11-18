const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const transactionSchema = Schema({
    dateacquired: String,
    acquisitionprice: Number,
    askingprice: Number,
    datesold: String,
    salesprice: Number,
    customerid: Number,
    workid: Number
});

transactionSchema.plugin(AutoIncrement, {inc_field: 'transactionid', start_req: 200});

class Transaction {

    constructor(dateacquired, acquisitionprice, askingprice, datesold, salesprice, customerid, workid) {
        this.dateacquired = dateacquired;
        this.acquisitionprice = acquisitionprice;
        this.askingprice = askingprice;
        this.datesold = datesold;
        this.salesprice = salesprice;
        this.customerid = customerid;
        this.workid = workid;
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
