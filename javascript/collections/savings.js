var Savings = Backbone.Collection.extend({
	model: Saving,
	localStorage: new Backbone.LocalStorage('cratchit'),
	
	today: function() {
		
	},

	lastSeven: function() {
		return; 
	},

	lastThirty: function() {
		return; 
	},

	total: function() {
		return; 
	},

	sum: function(arr) {
		
	}

});