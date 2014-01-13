var AddView = Backbone.View.extend({

	tagName: "form",

	className: "add-form main",

	events: {
		"click button": "save",
	},

	initialize: function() {

		
	},

	render: function() {
		var template = _.template( $("#add").html() );
		this.$el.html( template( this.model.toJSON() ) );
		return this;
	},


	save: function(e) {
		e.preventDefault();

		var saving = $("#amountInput").autoNumeric("get");

		if (saving !== "") {
		if (saving !== "" && saving !== "0") {
			this.collection.add(this.model);
			this.model.save({
				amount: saving,
				saveDate: new Date()
				}, {
					success: function(model, response, options) {
						Backbone.Events.trigger("router:navigate", "stats" );
					},
					error: function(model, response, options) {
						console.error("Couldn't save "+ model + " because " + response);
					}
			});
		} else {
			$("#warning").removeAttr("hidden");
			$("button").addClass("wobble").on(
				"webkitAnimationEnd oanimationend msAnimationEnd animationend",
				function() {
					$(this).removeClass("wobble");
				});
			$("#warning").removeAttr("hidden").addClass("pulse").on(
				"webkitAnimationEnd oanimationend msAnimationEnd animationend",
				function() {
					$(this).removeClass("pulse").attr("hidden", "hidden");
				});
		}
	}

});