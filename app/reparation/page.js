import Navbar from "../NavBar";
import HeaderSimple from "../headerSimple";
import Footer from "../Footer";
import dynamic from "next/dynamic";
import RootLayout from "../layout";

// const DynamicCarousel = dynamic(() => import("../MyCarousel"), {
//   ssr: false,
// });

const Reparation = () => {
  const pageTitle = "Réparation";
  const pageDescription =
    "Réparation des toitures, remplacement des tuiles, ardoises, tôles";

  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      {/* <DynamicCarousel images={images}/> */}

      <Footer />
    </RootLayout>
  );
};

export default Reparation;
