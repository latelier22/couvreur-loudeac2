import Navbar from "../NavBar";
import Footer from "../Footer";
import HeaderSimple from "../headerSimple";
import MyLightBox from "../MyLightBox";

const Travaux = () => {

  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];


  return (
    <>
      <Navbar />
      <MyLightBox images={images} />

      <Footer />
    </>
  );
};

export default Travaux;