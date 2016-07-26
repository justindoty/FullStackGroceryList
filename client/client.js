//didnt get the edit function hooked up. Ran out of time.



angular.module('groceryApp', []);

angular.module('groceryApp').controller("ItemController", ['$http', function($http){
  var vm = this;

  vm.addItem = function(){
    var sendData = {};

    sendData.item_name = vm.item_name;
    sendData.item_qty = vm.item_qty;

    console.log('Clicked and Added!!!');
    $http.post('/items/addItem', sendData).then(handleSuccess, handleFailure);
    vm.getItems();
  };

  vm.getItems = function(){
    $http.get('/items').then(function(response){
      console.log('Success:', response);
      vm.items = response.data;
    }, function(response){
      console.log('err', response);
    });
  };


  vm.deleteItem = function(id){
    console.log('Delete pressed: ID - ', id);
    $http.delete('items/removeById/' + id).then(function(response){
      console.log('Success: ', response);
      vm.getItems();
    });
  };

  vm.getItems();

  function handleSuccess(response){
    console.log('Item Add Success: ', response);
  }
  function handleFailure(response){
    console.log('Item Add Failure: ', response);
  }

}]);
