import Navbar from "@/components/Navbar";
import LogoMarquee from "@/components/LogoMarquee";
import HeaderGap from "./HeaderGap";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderGap />
      <LogoMarquee />
    </>
  );
};

export default Header;
