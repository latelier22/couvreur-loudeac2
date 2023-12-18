// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
import dynamic from "next/dynamic";
import Header from "./header";
import Caroussel from "./Caroussel";

const DynamicComponent = dynamic(() => import("./mycomponent"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <Header/>
      <DynamicComponent />
      
    </>
  );
};

export default Home;