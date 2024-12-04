import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppNavigation, AppRoutes, Header } from "../components/Skeleton.js";
import {
  getUserData,
  loginSpotify,
  logoutSpotify,
  refreshSpotify,
} from "../services/spotify.js";

function App() {
  const [user, setUser] = useState(); //stocke les informations de l'utilisateur
  useEffect(() => {
    getUserData().then(setUser);
  }, []); // on récupère les informations de l'utilisateur

  return (
    <>
      <div>
        {/* Header permettant à l'utilisateur de se connecter/déconnecter et de rafraîchir 
        la page à n'importe quel endroit dans l'application */}
        <Header
          user={user}
          loginSpotify={loginSpotify}
          logoutSpotify={logoutSpotify}
          refreshSpotify={refreshSpotify}
        ></Header>

        {/* BrowserRouter permettant d'afficher la page souhaitée */}
        <BrowserRouter>
          <AppRoutes />
          <AppNavigation />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
