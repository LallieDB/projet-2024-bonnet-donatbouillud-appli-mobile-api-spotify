import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import buttonStyle from "../components/StyleComposant.js";
import PlaylistBirdSearchPage from "../pages/PlaylistBirdSearchPage.js";
import PlaylistPage from "../pages/PlaylistPage.js";
import PlaylistSearchPage from "../pages/PlaylistSearchPage";
import AllBirdsPage from "../pages/AllBirdsPages";
import { isLogged } from "../services/spotify.js";

import {
  AppBar,
  CircularProgress,
  Grid,
  TextField,
  Toolbar,
} from "@mui/material";
import YourBirdPage from "../pages/YourBirdPage.js";

export function AppNavigation() {
  // permet de faire la nav bar en bas de l'écran
  // avec tous les éléments nécessaires
  // Il y a deux onglets : Playlist et Mon oiseau
  const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "black" }}
      >
        <BottomNavigationAction
          label="Playlists"
          icon={
            <LibraryMusicIcon
              style={{ color: value === 0 ? "white" : "grey" }}
            />
          }
          component={Link}
          to="/"
          style={{ color: value === 0 ? "white" : "grey" }}
        />
        <BottomNavigationAction
          label="Mon oiseau"
          icon={
            <FlutterDashIcon
              style={{ color: value === 1 ? "white" : "grey" }}
            />
          }
          component={Link}
          to="/playlistBirds"
          style={{ color: value === 1 ? "white" : "grey" }}
        />
        <BottomNavigationAction
          label="Tous les oiseaux"
          icon={
            <PsychologyAltIcon
              style={{ color: value === 2 ? "white" : "grey" }}
            />
          }
          component={Link}
          to="/allBirds"
          style={{ color: value === 2 ? "white" : "grey" }}
        />
      </BottomNavigation>
    </Paper>
  );
}

export function AppRoutes() {
  // retourne le chemin lorsque l'on clique sur un lien Link
  return (
    <Routes>
      <Route path="/" element={<PlaylistSearchPage />} />
      <Route path="/playlistBirds" element={<PlaylistBirdSearchPage />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
      <Route path="/bird/:id" element={<YourBirdPage />} />
      <Route path="/allBirds" element={<AllBirdsPage />} />
    </Routes>
  );
}

export function PageBar({ name }) {
  // permet de faire le cadre du haut de la page, name étant le nom de la page que l'on doit afficher
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", marginBottom: 20 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export function Header({ user, loginSpotify, logoutSpotify, refreshSpotify }) {
  // Header présent sur toute les pages
  return (
    <>
      <Box sx={{ bgcolor: "#1ED760", p: 2, borderRadius: 1 }}>
        <Typography variant="h1" align="center" sx={{ color: "black" }}>
          Fais comme l'oiseau
        </Typography>
        {isLogged() ? (
          <Typography variant="body1" align="center" sx={{ color: "black" }}>
            Bienvenue {user?.display_name}. -(^v^)-
          </Typography>
        ) : (
          <Typography variant="body1" align="center" sx={{ color: "blcak" }}>
            Vous n'êtes pas connecté.
          </Typography>
        )}

        <div style={{ textAlign: "center" }}>
          {" "}
          {/* Centre les boutons horizontalement */}
          <button style={buttonStyle.black} onClick={loginSpotify}>
            Login
          </button>
          <button style={buttonStyle.black} onClick={logoutSpotify}>
            Logout
          </button>
          <button style={buttonStyle.black} onClick={refreshSpotify}>
            Refresh
          </button>
        </div>
      </Box>
    </>
  );
}
