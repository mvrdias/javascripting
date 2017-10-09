// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

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
    }
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
    }
  },
  printPlaylists: function() {
    for (var playlist in this.playlists) {
      var currentPlaylist = this.playlists[playlist];

      var id, name, tracks;
      ({id, name, tracks} = currentPlaylist);

      console.log(`${id}: ${name} - ${tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (var track in this.tracks) {
      var currentTrack = this.tracks[track];

      var id, name, album, artist;
      ({id, name, album, artist} = currentTrack);

      console.log(`${id}: ${name} by ${artist} (${album})`);
    }
  },
  printPlaylist: function(playlistId) {
    var currentPlaylist = this.playlists[playlistId];

    var playlistId, playlistName;
    ({id: playlistId, name: playlistName, tracks} = currentPlaylist);

    console.log(`${playlistId}: ${playlistName} - ${tracks.length} tracks`);

    for (trackId of tracks) {
      var currentTrack = this.tracks[trackId];

      var trackId, trackName, artist, album;
      ({id: trackId, name: trackName, artist, album} = currentTrack);

      console.log(`${trackId}: ${trackName} by ${artist} (${album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    var playlistTracks = this.playlists[playlistId].tracks;
    if(playlistTracks.every(id => id !== trackId)) {
      playlistTracks.push(trackId);
    }
  },
  addTrack: function(name, artist, album) {
    var newTrackId = uid();
    this.tracks[newTrackId] = {
      id: "t" + newTrackId,
      name: name,
      artist: artist,
      album: album
    }
  },
  addPlaylist: function(name) {
    var newPlayListId = uid();
    this.playlists[newPlayListId] = {
      id: "p" + newPlayListId,
      name: name,
      tracks : []
    }
  }
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}