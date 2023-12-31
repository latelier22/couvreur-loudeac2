import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import MyLightBox from "../MyLightBox";
import RootLayout from "../layout";

const Travaux = () => {

  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];


  const pageTitle = "Travaux divers";
  const pageDescription =
    "Petits travaux de maconnerie, mur en pierre, parpaings, brique, allée, pavés pierre, pavés autobloquant, petite dalle, terrasse";
  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />
      <MyLightBox images={images} />

      <Footer />
    </RootLayout>
  );
};

export default Travaux;