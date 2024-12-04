import { Avatar, Divider, Grid, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import buttonStyle from "../components/StyleComposant.js";
import { playSound } from "./SoundEffect.js";

export function PlaylistAvatar({ playlist, width, height }) {
  // Permet de faire l'affichage de l'avatar (image/illustration)
  // de la playlist donnée
  return (
    <Avatar
      alt={playlist.name}
      src={playlist.images[0].url}
      sx={{
        width: width,
        height: height,
        border: "2px solid black",
      }}
    />
  );
}

export function PlaylistTitle({ playlist }) {
  return (
    <ListItemText
      primary={playlist.name}
      primaryTypographyProps={{
        fontWeight: "bold",
        sx: { ml: 2 },
      }}
    />
  );
}

export function PlaylistDescription({ playlist }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {playlist.description === "" && (
        <li>
          <strong>Description :</strong> <i>Pas de description disponible</i>
        </li>
      )}
      {playlist.description !== "" && (
        <li>
          <strong>Description :</strong> {playlist.description}
        </li>
      )}
      <li>
        <strong>Appartient à :</strong> {playlist.owner.display_name}
      </li>
    </ul>
  );
}

export function PlaylistBird() {
  // Phrases possibles
  const phrases = [
    " Cliquez pour connaître votre oiseau !",
    " Cui Cui 🦃 !",
    " 🐔 Cot cot coooooot",
    " Cocorico ! 🐓",
    " Pingwin 🐧",
    " 🐣 Piou 🐥 Piou 🐤 Piou",
    " Coin coin 🦆",
    " 🦜 🦚 🐦‍⬛ 🐦 ",
  ];

  // Choix aléatoire d'une phrase
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  return <p>{randomPhrase}</p>;
}

export function PlaylistEmptyBox() {
  return <Box component="section" height={50}></Box>;
}

//

export function TrackAvatar({ track }) {
  return (
    <Avatar
      alt={track.track.name}
      src={track.track.album.images[0].url}
      sx={{
        width: 50,
        height: 50,
        border: "2px solid black",
      }}
    />
  );
}

export function TrackRecommendationAvatar({ track }) {
  return (
    <Avatar
      alt={track.name}
      src={track.album.images[0].url}
      sx={{
        width: 50,
        height: 50,
        border: "2px solid black",
      }}
    />
  );
}
export function TrackRecommandationTitle({ track }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {track.name === "" && (
        <li>
          <strong>Description :</strong> <i>Pas de description disponible</i>
        </li>
      )}
      {track.name !== "" && (
        <li>
          <strong>{track.name}</strong>
        </li>
      )}
      <li>{track.artists[0].name}</li>
    </ul>
  );
}

export function TrackRecommandationAlbumName({ track }) {
  return (
    <ListItemText
      primary={track.album.name}
      primaryTypographyProps={{
        // fontWeight: "bold",
        sx: { ml: 2, color: "#616161" },
      }}
    />
  );
}
export function TrackRecommandationDuration({ track }) {
  return (
    <ListItemText
      primary={<DurationCalcul track={track} />}
      primaryTypographyProps={{
        // fontWeight: "bold",
        sx: { ml: 2, color: "#616161" },
      }}
    />
  );
}
export function TrackTitle({ track }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {track.track.name === "" && (
        <li>
          <strong>Description :</strong> <i>Pas de description disponible</i>
        </li>
      )}
      {track.track.name !== "" && (
        <li>
          <strong>{track.track.name}</strong>
        </li>
      )}
      <li>{track.track.artists[0].name}</li>
    </ul>
  );
}

export function TrackAlbumName({ track }) {
  return (
    <ListItemText
      primary={track.track.album.name}
      primaryTypographyProps={{
        // fontWeight: "bold",
        sx: { ml: 2, color: "#616161" },
      }}
    />
  );
}

export function TrackDuration({ track }) {
  return (
    <ListItemText
      primary={<DurationCalcul track={track.track} />}
      primaryTypographyProps={{
        // fontWeight: "bold",
        sx: { ml: 2, color: "#616161" },
      }}
    />
  );
}

function DurationCalcul({ track }) {
  const duration_ms = track.duration_ms;
  const minute = Math.floor(duration_ms / 60000);
  const seconde = Math.floor((duration_ms - minute * 60000) / 1000);
  return (
    <p>
      {minute}:{seconde}
    </p>
  );
}

export function PlaylistTopDescription({ playlist }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <PlaylistAvatar playlist={playlist} width={200} height={200} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <PlaylistParagraph playlist={playlist} />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}

function PlaylistParagraph({ playlist }) {
  return (
    <div>
      <h2>{playlist.name}</h2>
      <p>
        <strong>{playlist.tracks.total}</strong> musiques dans cette playlist
      </p>
      <p>{playlist.description}</p>
      <p>
        Créée par <strong>{playlist.owner.display_name}</strong>
      </p>
      <button
        style={buttonStyle.green}
        onClick={() => {
          window.location.href = "/bird/" + playlist.id;
        }}
      >
        Découvrez l'oiseau qui se cache derrière cette playlist !
      </button>
    </div>
  );
}

export function PlaylistDescriptionStat({
  playlist,
  numbertracks,
  popularity,
  duration,
  date,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <PlaylistAvatar playlist={playlist} width={200} height={200} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <PlaylistDetailStat
          playlist={playlist}
          numbertracks={numbertracks}
          popularity={popularity}
          duration={duration}
          date={date}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}

function PlaylistDetailStat({
  playlist,
  numbertracks,
  popularity,
  duration,
  date,
}) {
  const handleClick = () => {
    playSound();
  };
  return (
    <div>
      <h2>
        Votre playlist <strong>''{playlist.name}''</strong> en détail
      </h2>
      <ul style={{ lineHeight: "1.5" }}>
        <li>
          Nombre de chansons dans la playlist : <strong>{numbertracks}</strong>
        </li>
        <li>
          Popularité moyenne de la playlist : <strong>{popularity}</strong>
        </li>
        <li>
          Durée moyenne des chansons : <strong>{duration} secondes</strong>
        </li>
        <li>
          La date moyenne de sortie des albums de vos chansons :{" "}
          <strong>{date}</strong>
        </li>
      </ul>
      <button
        style={buttonStyle.green}
        onClick={() => {
          handleClick();

          window.location.href = "/playlist/" + playlist.id;
        }}
      >
        Découvrez les chansons qui composent votre playlist !
      </button>
    </div>
  );
}
