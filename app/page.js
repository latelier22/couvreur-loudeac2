// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
import dynamic from "next/dynamic";
import Navbar from "./NavBar";
import MyComp from "./MyComp";
import HeaderSimple from "./headerSimple";
import Footer from "./Footer";



const DynamicComponent = dynamic(() => import("./mycomponent"), {
  ssr: false,
});

const DynamicHeader = dynamic(() => import("./header"), {
  ssr: false,
});

const DynamicHeaderImage = dynamic(() => import("./headerSimple"), {
  ssr: false,
});


const DynamicAnim = dynamic(() => import("./MyAnim"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
    <Navbar/>
      {/* <DynamicHeader/> */}
      {/* <MyComp/> */}
      <HeaderSimple/>
      <Footer/>
    </>
  );
};

export default Home;