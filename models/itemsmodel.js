var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  item_name: String,
  item_qty: Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
