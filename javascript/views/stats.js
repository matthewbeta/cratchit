var StatsView = Backbone.View.extend({

	className: "main",

	events: {
		"click .addItem": "addItem",
	},

	template: "#stats",

	initialize: function() {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "destroy", this.render);
	},

	helpers: {

		sum: function(arr) {
			var total = arr.reduce(function(pv, cv) {
				return pv + cv;
			}, 0);
			return parseFloat(total).toFixed(2);
		},

		total: function(arr) {
			all =  _.pluck(arr, "amount");
			nums = _.map(all, function(num) { 
				return parseFloat(num);
			});
			return this.sum(nums);
		},

		dateRange: function(arr, days) {
			now = new Date();
			then = new Date(now.setDate(now.getDate()-days));
			range = _.filter(arr, function(item) {
				return then < new Date(item.saveDate);
			});
			return this.total(range);
		},
	},	

	render: function() {
		var data = {
			collection: this.collection.toJSON()
		};
		_.extend(data, this.helpers);
		var html = _.template($(this.template).html(), data);
		this.$el.html(html);

		return this;
	},

	addItem: function(e) {
		e.preventDefault();
		Backbone.Events.trigger("router:navigate", "/");
	}

});