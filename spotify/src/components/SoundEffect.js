import Bird1 from "../assets/Bird1.mp3";
import Bird2 from "../assets/Bird2.mp3";
import Bird3 from "../assets/Bird3.mp3";
import Bird4 from "../assets/Bird4.mp3";
import CookieSong from "../assets/CookieSong.mp3";
import Pingwin from "../assets/Pingwin.mp3";

export function playSound() {
  const audioFiles = [Bird1, Bird2, Bird3, Bird4, CookieSong, Pingwin];
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const selectedAudio = new Audio(audioFiles[randomIndex]);
  selectedAudio.play();
}
