(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListService.gettoBuyItems();
  
  toBuyList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var boughtList = this;

  boughtList.items = ShoppingListService.getBoughtItems();  
}


function ShoppingListService() {
  var service = this;

  // Fixed list of shopping items
  var toBuyItems = [{name:'apples', quantity:'1 kg'},
                    {name:'potatoes', quantity:'2 kg'},
                    {name:'rice', quantity:'1 kg'},
                    {name:'avocados', quantity:'4'},
                    {name:'tomatoes', quantity:'1 kg'}];
  var boughtItems = [];

  service.removeItem = function (itemIndex) {
    // get item to be removed from buying list
    var item = {
      name: '',
      quantity: ''
    };

    item = toBuyItems[itemIndex];
    // add it to bought list
    boughtItems.push(item);
    // remove item from buying list
    toBuyItems.splice(itemIndex, 1);
  };

  service.gettoBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };   
}

})();
