import { PlaylistEmptyBox } from "../components/Element.js";
import { BirdResult } from "../components/YourBird.js"
import { PageBar } from "../components/Skeleton";
import { AllBirdsDescription, AllBirdsTitles, images } from "../components/BirdData.js";


export default function PlaylistSearchPage() {
  const birds= [0,1,2,3,4,5,6,7,8,9];
  return (
    <>
      <PageBar name="🐣 Tous les oiseaux ! 🐥" />
      {/* Affiche les différents oiseaux de l'utilisateur */}
      <div>
        {birds.map((bird) => (
          <BirdResult
            key={bird}
            bird={bird}
            images={images}
            descriptions={AllBirdsDescription}
            titles={AllBirdsTitles}
          />
        ))}
      </div>
      {/* Permet un meilleur affichage (pouvoir scroller jusqu'en bas et voir toutes les informations) */}
      <PlaylistEmptyBox />
    </>
  );
}
