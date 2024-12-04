import { useEffect, useState } from "react";
import { PlaylistEmptyBox } from "../components/Element.js";
import { PlaylistAndBirds } from "../components/Playlist.js";
import { PageBar } from "../components/Skeleton";
import { GetCurrentUserPlaylist } from "../services/spotify.js";

export default function PlaylistSearchPage() {
  const [savePlaylist, setPlaylist] = useState(); //stocke et met à jour la liste des playlists de l'utilisateur

  useEffect(() => {
    GetCurrentUserPlaylist().then(setPlaylist); //cherche la liste des playlists de l'utilisateur
  }, []);

  return (
    <>
      <PageBar name="🐣 L'oiseau de ma playlist 🐥" />
      {/* Affiche les différentes playlists de l'utilisateur et renvoie sur leur page oiseau */}
      <PlaylistAndBirds playlists={savePlaylist} />
      {/* Permet un meilleur affichage (pouvoir scroller jusqu'en bas et voir toutes les informations) */}
      <PlaylistEmptyBox />
    </>
  );
}
