angular.module('groceryApp', []);

angular.module('groceryApp').controller('ItemController', ['$http', function($http){
  vm = this;

  vm.message = "Hello";

}]);
