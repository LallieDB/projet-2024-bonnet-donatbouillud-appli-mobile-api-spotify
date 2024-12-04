import {
  TrackRecommandationAlbumName,
  TrackRecommandationDuration,
  TrackRecommandationTitle,
  TrackRecommendationAvatar,
} from "./Element";
import { Grid, List, Divider } from "@mui/material";

export function RecommendationTracksList({ recommendations }) {
  if (recommendations == null || recommendations.tracks == null)
    return <p>Veuillez patientez, les recommendations chargent!</p>;
  if (recommendations.tracks.length === 0)
    return <p>Il n'y a pas de recommendations pour vos goûts.</p>;
  return (
    <>
      <List>
        {recommendations.tracks.map((track) => (
          <RecommendationTracksItem key={track.id} track={track} />
        ))}
      </List>
    </>
  );
}

function RecommendationTracksItem({ track }) {
  // permet de gérer l'affichage d'une playlist recommandé:
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
            <TrackRecommendationAvatar track={track} />
          </div>
          <div style={{ width: "80%" }}>
            <TrackRecommandationTitle track={track} />
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
            <TrackRecommandationAlbumName track={track} />
          </div>
          <div style={{ textAlign: "right" }}>
            <TrackRecommandationDuration track={track} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}
