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
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  for (playlist in library.playlists) {
    var currentPlaylist = library.playlists[playlist];

    var id = currentPlaylist.id;
    var name = currentPlaylist.name;
    var trackCount = currentPlaylist.tracks.length;
    console.log(id + ": " + name + " - " + trackCount + " tracks");
  }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  for (track in library.tracks) {
    var currentTrack = library.tracks[track];

    var id = currentTrack.id;
    var name = currentTrack.name;
    var album = currentTrack.album;
    var artist = currentTrack.artist;
    console.log(id + ": " + name + " by " + artist + " (" + album + ")");
  }
}

// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
  var currentPlaylist = library.playlists[playlistId];

  var playlistName = currentPlaylist.name;
  var trackCount = currentPlaylist.tracks.length;
  var trackIds = currentPlaylist.tracks;

  console.log(playlistId + ": " + playlistName + " - " + trackCount + " tracks");

  for (var i = 0; i < trackIds.length; i++) {
    var currentTrack = library.tracks[trackIds[i]];

    var trackId = currentTrack.id;
    var trackName = currentTrack.name;
    var album = currentTrack.album;

    console.log(trackId + ": " + trackName + " (" + album + ")");
  }


}

function isDuplicate(list, item) {
  for (var i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return true;
    }
  }
  return false;
}


// printPlaylist('p02');
// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  var playlistTracks = library.playlists[playlistId].tracks;
  if (!isDuplicate(playlistTracks, trackId)) {
    playlistTracks.push(trackId);
  }
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function(name, artist, album) {
  var newTrackId = uid();
  library.tracks[newTrackId] = {
    id: "t" + newTrackId,
    name: name,
    artist: artist,
    album: album
  }
}




// adds a playlist to the library

var addPlaylist = function(name) {
  var newPlayListId = uid();
  library.playlists[newPlayListId] = {
    id: "p" + newPlayListId,
    name: name,
    tracks : []
  }
}




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}