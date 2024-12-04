import { Divider, Grid, List, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  PlaylistAvatar,
  PlaylistBird,
  PlaylistDescription,
  PlaylistTitle,
} from "./Element";
import { playSound } from "./SoundEffect.js";

export function PlaylistList({ playlists }) {
  //Permet l'affichage des playlists pour la page PLAYLIST quand les playlists sont récupérées à l'aide de l'API
  if (playlists == null) return <p>Aucune playlists pour le moment !</p>;
  return (
    <List>
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </List>
  );
}

export function PlaylistAndBirds({ playlists }) {
  //Permet l'affichage des playlists pour la page MONOISEAU quand les playlists sont récupérées à l'aide de l'API
  if (playlists == null) return <p>Aucune playlists pour le moment !</p>;
  return (
    <List>
      {playlists.map((playlist) => (
        <ListOfPlaylistLinkToBird key={playlist.id} playlist={playlist} />
      ))}
    </List>
  );
}

function PlaylistItem({ playlist }) {
  // permet de gérer l'affichage des playlists pour la page PLAYLIST :
  // on peut d'abord voir une image de la playlist, puis son titre
  // et enfin un courte description (description + créateur)
  return (
    <ListItemButton component={Link} to={"/playlist/" + playlist.id}>
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
              <PlaylistAvatar playlist={playlist} width={50} height={50} />
            </div>
            <div style={{ width: "50%" }}>
              <PlaylistTitle playlist={playlist} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ borderLeft: "1px solid #ccc" }}>
            <PlaylistDescription playlist={playlist} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </ListItemButton>
  );
}

function ListOfPlaylistLinkToBird({ playlist }) {
  // permet de gérer l'affichage des playlists pour la page MON OISEAU :
  // on peut d'abord voir une image de la playlist, puis son titre
  // et enfin un courte description (description + créateur)
  const handleClick = () => {
    playSound();
  };
  return (
    <ListItemButton
      component={Link}
      to={"/bird/" + playlist.id}
      onClick={handleClick}
    >
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
              <PlaylistAvatar playlist={playlist} width={50} height={50} />
            </div>
            <div style={{ width: "50%" }}>
              <PlaylistTitle playlist={playlist} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <PlaylistBird />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </ListItemButton>
  );
}
