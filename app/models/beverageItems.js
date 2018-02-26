module.exports function BeverageItem() {
	var BeverageItem = function (item, quantity){
		var _item; 
		var _quantity;

		_item = item;
		_quantity = quantity;

		Object.defineProperty(this, "Item", {
			get: function() {
				return _item;
			},
			set: function(item){
				_item = item;
			}
		});

		Object.defineProperty(this, "Quantity", {
			get: function() {
				return _quantity;
			},
			set: function(quantity){
				_quantity = quantity;
			}
		})
	}
}