export function Popularity(playlist) {
  //fonction qui calcule la popularité moyenne des chansons qui composent la playlist passée en argument

  let popularityMean = 0;
  let totalTracksWithPopularity = 0; //Nombre de musique ayant une popularité définit dans la playlist

  playlist.tracks.items.map((track) => {
    //Pour chaque musique dans la playlist, on vérifie que sa popularité existe et est un nombre entier
    if (
      track.track.popularity != undefined &&
      Number.isInteger(track.track.popularity) == true
    ) {
      popularityMean += track.track.popularity;
      totalTracksWithPopularity++; // Incrémenter le compteur des pistes avec une popularité non nulle
    }
  });
  if (totalTracksWithPopularity > 0) {
    popularityMean = parseInt(popularityMean / totalTracksWithPopularity);
  }
  return popularityMean;
}

export function PlaylistDuration(playlist) {
  //fonction qui calcule la durée moyenne des chansons qui composent la playlist passée en argument
  let durationMean = 0;
  let totalTracksWithDuration = 0;
  playlist.tracks.items.map((track) => {
    if (
      track.track.duration_ms != undefined &&
      Number.isInteger(track.track.duration_ms) == true
    ) {
      durationMean = durationMean + track.track.duration_ms;
      totalTracksWithDuration++;
    }
  });
  if (totalTracksWithDuration > 0) {
    durationMean = parseInt(durationMean / (totalTracksWithDuration * 1000));
  }
  return durationMean;
}

export function ReleaseDateMean(playlist) {
  //fonction qui calcule la date moyenne de sortie des chansons qui composent la playlist passée en argument
  let releaseDate = 0;
  let totalTracksWithDate = 0;
  let date;
  playlist.tracks.items.map((track) => {
    if (track.track.album.release_date != undefined) {
      date = new Date(track.track.album.release_date); //on créer une date avec les informations donné par l'API
      releaseDate = releaseDate + date.getFullYear(); //on récupère uniquement l'année
      totalTracksWithDate++;
    }
  });
  if (totalTracksWithDate>0)
  {
    releaseDate = parseInt(releaseDate / totalTracksWithDate);
  }
  return releaseDate;
}
