Meteor.methods({
	"searchContent": function(searchterm, searchType) {
		check(searchterm, String);
		check(searchType, String);


		if (searchType !== "Music") {
			var type = (searchType === "Filme") ? "movie" : "tv";

			try {
				var result = Meteor.call("TMDBSearch", searchterm, type)
			} catch (error) {
				console.log("TMDBSearch Error -> " + error.message);
				return [];
			}
			return result;
		} else {
			return [];
		}	
	},
	"searchOptions": function () {
		var options = [];

		if (Settings.find({}).fetch()[0].searchOptionsMOVIES) {
			options.push("Filme");
		}

		if (Settings.find({}).fetch()[0].searchOptionsTV) {
			options.push("Serien");
		}

		return options;
	}
});
