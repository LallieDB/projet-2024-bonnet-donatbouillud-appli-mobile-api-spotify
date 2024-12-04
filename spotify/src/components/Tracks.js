import { Divider, Grid, List } from "@mui/material";
import {
  PlaylistTopDescription,
  TrackAlbumName,
  TrackAvatar,
  TrackDuration,
  TrackTitle,
} from "./Element.js";

export function TracksList({ playlist }) {
  // console.log("===============================================");
  // console.log(playlist);
  if (playlist == null || playlist.tracks.items == null)
    return <p>Veuillez patientez !</p>;
  return (
    <>
      <PlaylistTopDescription playlist={playlist} />

      <List>
        {playlist.tracks.items.map((track) => (
          <TracksItem key={track.track.id} track={track} />
        ))}
      </List>
    </>
  );
}

function TracksItem({ track }) {
  // permet de gérer l'affichage d'une playlist :
  // on peut d'abord voir une image de la music, puis son titre
  // + artist, et enfin le nom de l'album et la durée
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div>
            <TrackAvatar track={track} />
          </div>
          <div style={{ width: "80%" }}>
            <TrackTitle track={track} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              width: "80%",
              borderRight: "1px solid #ccc",
              borderLeft: "1px solid #ccc",
            }}
          >
            <TrackAlbumName track={track} />
          </div>
          <div style={{ textAlign: "right" }}>
            <TrackDuration track={track} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}
