if (Meteor.isServer) {
	Meteor.publish('settings', function () {
    if(this.userId) return Settings.find();
	});

	Meteor.publish('movies', function () {
		if (this.userId) {
			return Filme.find({});
		} else {
			return Filme.find({}, {fields: {user: 0}});
		}
	})

	Meteor.publish("tv", function(){
		if (this.userId) {
			return TV.find({});
		} else {
			return TV.find({}, {fields: {user: 0}});
		}
	});

};
