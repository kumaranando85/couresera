(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyShoppingController',ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var buylist = this;
		buylist.emptymessage = "Everything is bought!";
		buylist.tobuy = ShoppingListCheckOffService.gettobuy();
		console.log(buylist.tobuy);
		buylist.addtobought = function(index){
			var item = buylist.tobuy[index];
			ShoppingListCheckOffService.switchcart(index,item);
		}
	}


	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var boughtlist = this;
		boughtlist.emptymessage = "Nothing bought yet."
		boughtlist.bought = ShoppingListCheckOffService.getbought();
		console.log("Now",boughtlist.emptymessage);
	}

	function ShoppingListCheckOffService(){
		var service = this;
		var items = [{
			name: "cookies",
			quantity: "10"
		},
		{
			name: "chips",
			quantity: "20"
		},
		{
			name: "Drinks",
			quantity: "30"
		},
		{
			name: "Coke",
			quantity: "40"
		},
		{
			name: "Pepto Bismol",
			quantity: "50"
		}];
		var bought = [];

		service.gettobuy = function(){return items};
		service.getbought = function(){return bought};
		service.switchcart = function switchcart(index,item){
			items.splice(index,1);
			bought.push(item);
			console.log(items);
			console.log("Bought");
			console.log(bought);
		};
	}
})();