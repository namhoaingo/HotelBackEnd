module.exports function Period(){
	var Period = function (checkinDate, checkoutDate){
		var _checkinDate;
		var _checkoutDate;
		var _duration;

		_checkinDate = checkinDate;
		_checkoutDate = checkoutDate;

		Object.defineProperty(this, 'CheckinDate', {
			get: function (){ return _checkinDate; },
			set: function (checkinDate) {
				_checkinDate = checkinDate;
			}
		});

		Object.defineProperty(this, 'CheckoutDate', {
			get: function (){ return _checkoutDate; },
			set: function (checkoutDate) {
				_checkoutDate = checkoutDate;
			}
		});

		Object.defineProperty(this, 'Duration', {
			get: function(){
				return _checkoutDate - _checkinDate;
			}
		})
	};

}