import { useEffect, useState } from "react";
import { PlaylistEmptyBox } from "../components/Element.js";
import { PlaylistList } from "../components/Playlist";
import { PageBar } from "../components/Skeleton";
import { GetCurrentUserPlaylist } from "../services/spotify.js";

export default function PlaylistSearchPage() {
  const [savePlaylist, setPlaylist] = useState(); //les playlists de l'utilisateur

  useEffect(() => {
    GetCurrentUserPlaylist().then(setPlaylist);  //on récupère les playlists de l'utilisateur avec son identifiant à travers une promesse
  }, []);

  //-------------------------------
  // Retour de la page "Playlists"
  // Cette page présente l'ensemble des playlists de l'utilisateur sous forme
  // d'une liste.
  return (
    <>
      <PageBar name="🎼 Vos Playlists 🎹" />
      <PlaylistList playlists={savePlaylist} />
      <PlaylistEmptyBox />
    </>
  );
}
