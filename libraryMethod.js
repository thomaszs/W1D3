var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    },
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    },
  },
  printPlaylists: function () {
    var justPlayLists = this.playlists;
    for (var key in justPlayLists) {
      console.log(key + ": " + justPlayLists[key].name + " - " + justPlayLists[key].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    var justTracks = this.tracks;
    for (var key in justTracks) {
      console.log(key + ": " + justTracks[key].name + " by " + justTracks[key].artist + " (" + justTracks[key].album + ")");
    }
  },
  printPlaylist: function (playlistId) {
    var playList = this.playlists[playlistId];
    console.log(playList.id + ": " + playList.name + " - " + playList.tracks.length + " tracks")
    for (var i = 0; i < playList.tracks.length; i++) {
      var trackId = playList.tracks[i];
      console.log(trackId + ": " + this.tracks[trackId].name + " by " + this.tracks[trackId].artist + " (" + this.tracks[trackId].album + ")");
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var targetTracks = this.tracks[trackId].id
    var targetPlayList = this.playlists[playlistId].tracks
    targetPlayList.push(targetTracks)
    console.log(targetPlayList);
  },
  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var newUid = this.uid();
    var newTrack = {
      id: newUid,
      name: name,
      artist: artist,
      album: album,
    }
    this.tracks[newUid] = newTrack;
    console.log(this.tracks)
  },
  addPlaylist: function (name) {
    var newUid = this.uid();
    var newPlaylist = {
      id: newUid,
      name: name,
      tracks: []
    }
    this[newUid] = newPlaylist;
    console.log(library)
  }
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function (query) {

}