var Router = Backbone.Router.extend({
  initialize: function() {
			var self = this;
			this._setupCollection();
			Backbone.Events.on("router:navigate", function(url) {
        self.navigate(url, { trigger: true });
      });
    },

		routes: {
			"": "index",
			"stats": "stats"
		},

		_setupCollection: function() {
			if(this.collection) return;
			this.collection = new Savings();
			this.collection.fetch();
		},

		_renderView: function(view) {
			$('#app').html(view.render().el);
		},

		index: function() {
			var saving = new Saving();
			var view = new AddView({ 
				model: saving,
				collection: this.collection
			});
			this._renderView(view);
			$("#amountInput").autoNumeric( "init", {aSep: '', aSign: '£', vMin: '0', wEmpty: 'sign', lZero: 'allow'} );

		},

		stats: function() {
			var view = new StatsView({
				collection: this.collection
			});
			this._renderView(view);
		}
});