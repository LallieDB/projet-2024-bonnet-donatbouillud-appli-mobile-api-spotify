import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaylistEmptyBox } from "../components/Element.js";
import { PageBar } from "../components/Skeleton.js";
import { YourBird } from "../components/YourBird.js";
import { GetPlaylist } from "../services/spotify.js";

export default function YourBirdPage() {
  const { id } = useParams(); //On récupère l'id de la playlist
  const [playlist, setPlaylist] = useState(); //la playlist de l'utilisateur

  useEffect(() => {
    GetPlaylist(id).then(setPlaylist); //on récupère la playlist de l'utilisateur avec son identifiant à travers une promesse
  }, []);

  return (
    <>
      <PageBar
        name={`🐣 Le(s) oiseau(x) de votre playlist ''${
          playlist && playlist.name ? playlist.name : ""
        }'' 🐥`}
      />
      {/* Affiche la playlists de l'utilisateur */}
      <YourBird playlist={playlist}></YourBird>
       {/* Permet un meilleur affichage (pouvoir scroller jusqu'en bas et voir toutes les informations) */}
      <PlaylistEmptyBox />
    </>
  );
}
