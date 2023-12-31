import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import RootLayout from "../layout";

const Fuite = () => {
  const pageTitle = "Fuite de toit";
  const pageDescription =
    "UNE FUITE OU UNE FISSURE DANS VOTRE TOITURE ? Il faut agir vite ! Nous intervenons 7/7 J - 24/24h en cas d'urgences ou fuites de votre toitur, pose de bâche en urgence, mise hors d'eau, remplacement des tuiles, ardoises";
  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <HeaderSimple/>

      <Footer />
    </RootLayout>
  );
};

export default Fuite;