Template.item.helpers({
  'first': function () {
    return this.index == 0;
  },
  'posterExists' : function () {
    return this.poster_path != "";
  },
  'isTV' : function () {
    return this.media_type === "tv";
  },
  'isRequested' : function () {
    if (this.media_type === "tv") {
      var doc = TV.findOne({id: this.id});
      if (!doc) {
        return false;
      } else if (doc.status.downloaded > 0) {
        return "bereits auf Plex!"
      } else {
        return "bereits in Wunsch-Liste!"
      }
    }
    else if (this.media_type === "movie") {
      var doc = Movies.findOne({id: this.id});
      if (!doc) {
        return false;
      } else if (doc.downloaded) {
        return "bereits auf Plex!"
      } else {
        return "bereits in Wunsch-Liste!"
      }
    }
  }
})
