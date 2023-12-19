import Navbar from "../NavBar";
import HeaderSimple from "../headerSimple";
import Footer from "../Footer";
import dynamic from "next/dynamic";


const DynamicCarousel = dynamic(() => import("../MyCarousel"), {
  ssr: false,
});

const Reparation = () => {

  const images = [
    { src: "photo-maconnerie1.png", alt: "Description 1" },
    { src: "photo-maconnerie2.png", alt: "Description 2" },
    { src: "photo-maconnerie3.png", alt: "Description 3" },
  ];

  return (
    <>
      <Navbar />

      <DynamicCarousel images={images}/>

      <Footer />
    </>
  );
};

export default Reparation;
