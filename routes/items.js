var router = require('express').Router();

var Item = require('../models/itemsmodel.js');


router.get('/', function(request, response){
  Item.find({}, function(err, items){
    if(err){
    console.log(err);
    response.sendStatus(500);
  } else {
    response.send(items);
  }
});
});


router.post('/addItem', function(request, response){
  console.log('Creating Item');
  var data = request.body;

  var newItem = new Item({
    item_name: data.item_name,
    item_qty: data.item_qty
  });

  newItem.save(function(err){
    if(err){
      console.log('There was a problem saving: ', err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

router.delete('/removeById/:id', function(request, response){
  var id = request.params.id;
  console.log(id);

  Item.findById(id, function(err, item){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      item.remove(function(err){
        if(err){
          log(err);
        }
      });
      console.log('Item has been Deleted');
      response.sendStatus(200);
    }
  });
});

module.exports = router;
