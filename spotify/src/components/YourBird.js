import {
  Avatar,
  Divider,
  Grid,
} from "@mui/material";

import { AllBirdsTitles, AllBirdsDescription, images } from "./BirdData";

import { PlaylistDescriptionStat } from "./Element";
import {
  Popularity,
  PlaylistDuration,
  ReleaseDateMean,
} from "./PlaylistInformations";
import { useState, useEffect } from "react";
import { GetRecommendations } from "../services/spotify";
import { RecommendationTracksList } from "./RecommandationTracks";

export function YourBird({ playlist }) {
  //Si on a pas encore la réponse de l'API sur la playlist, on attend
  if (playlist == null || playlist.tracks.items == null)
    return <p>Votre oiseau est en train d'être généré, veuillez patientez.</p>;

  //On récupère les informations propres à la playlist
  const popularity = Popularity(playlist);
  const playlistDuration = PlaylistDuration(playlist);
  const totalTracks = playlist.tracks.total;
  const releaseDateMean = ReleaseDateMean(playlist);
  //On récupère le(s) oiseau(x) correspondant(s) à la playlist
  const birds = FindYourBird(
    popularity,
    totalTracks,
    playlistDuration,
    releaseDateMean
  );
  //On retourne l'affichage selon les oiseaux de la playlist et les informations de la playlist
  return (
    <BirdDisplay
      birds={birds}
      titles={AllBirdsTitles}
      descriptions={AllBirdsDescription}
      numbertracks={totalTracks}
      popularity={popularity}
      duration={playlistDuration}
      date={releaseDateMean}
      images={images}
      playlist={playlist}
    />
  );
}

function FindYourBird(popularity, totalTracks, duration, releaseDate) {
  //fonction qui renvoie sous forme de liste, tous les index correspondants aux différents oiseaux de la playlist
  let birds = [];
  let index = 0;
  if (totalTracks < 5) {
    birds[index] = 0;
    index++;
  }
  if (totalTracks > 80) {
    birds[index] = 1;
    index++;
  }
  if (popularity > 60) {
    birds[index] = 2;
    index++;
  }
  if (popularity < 35) {
    birds[index] = 3;
    index++;
  }
  if (duration < 150) {
    birds[index] = 4;
    index++;
  }
  if (duration > 250) {
    birds[index] = 5;
    index++;
  }
  if (releaseDate <= 1900) {
    birds[index] = 6;
    index++;
  }
  if (releaseDate >= 1900 && releaseDate <= 2000) {
    birds[index] = 7;
    index++;
  }
  if (releaseDate >= 2020) {
    birds[index] = 8;
    index++;
  }
  if (index == 0) {
    birds[index] = 9;
    index++;
  }
  return birds;
}

function BirdDisplay({
  birds,
  descriptions,
  titles,
  numbertracks,
  popularity,
  duration,
  date,
  images,
  playlist,
}) {
  //fonction qui renvoie les informations sur la playlist et sur le(s) oiseau(x) de la playlist
  return (
    <>
      {/* Informations de la playlist */}
      <PlaylistDescriptionStat
        playlist={playlist}
        numbertracks={numbertracks}
        popularity={popularity}
        duration={duration}
        date={date}
      />
      {/* Informations sur le(s) oiseau(x) de la playlist */}
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Le(s) oiseau(x) de cette playlist
      </h2>
      <Divider />
      <div>
        {birds.map((bird) => (
          <BirdResult
            key={bird}
            bird={bird}
            images={images}
            descriptions={descriptions}
            titles={titles}
          />
        ))}
      </div>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        Le(s) recommendation(s) pour votre playlist
      </h2>
      <Divider />
      <TracksRecommendation
        seed_playlist={playlist.tracks.items[0].track.id}
        seed_duration={duration*1000}
        seed_popularity={popularity}
      />
    </>
  );
}
function TracksRecommendation({ seed_playlist, seed_duration, seed_popularity }) {
  const [tracksRecommendation, setTracksRecommendation] = useState();
  useEffect(() => {
    GetRecommendations(seed_playlist, seed_duration-10000, seed_duration+1000, seed_popularity-10, seed_popularity+10).then(
      setTracksRecommendation
    );
  }, [seed_playlist, seed_duration]);
  console.log(tracksRecommendation);
  return(<RecommendationTracksList recommendations={tracksRecommendation}/>);
}

export function BirdResult({ bird, titles, images, descriptions }) {
  //fonction qui renvoie en mettant en forme les informations sur l'oiseau mis en paramètre
  return (
    <Grid container spacing={2} key={bird}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            height: "100%",
          }}
        >
          <Avatar
            alt={titles[bird]}
            src={images[bird]}
            sx={{
              width: 200,
              height: 200,
              border: "2px solid black",
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div>
          <h2>{titles[bird]}</h2>
          <p>{descriptions[bird]}</p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}
