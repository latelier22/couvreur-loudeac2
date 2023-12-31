import Navbar from "../NavBar";
import HeaderSimple from "../headerSimple";
import Footer from "../Footer";
import RootLayout from "../layout";

const Entretien = () => {
  const pageTitle = "Entretien";
  const pageDescription =
    "Entretien et nettoyage des toitures, murs, demoussage, supprimer le vert des toitures, remplacement des tuiles, ardoises";

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <HeaderSimple />

      <Footer />
    </RootLayout>
  );
};

export default Entretien;
