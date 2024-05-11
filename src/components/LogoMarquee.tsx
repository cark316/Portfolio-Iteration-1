import { react, figma, html5, css3, javascript, tailwindcss } from "./svg";
import Marquee from "react-fast-marquee";
import { Button } from "./ui/button";

const LogoMarquee = () => {
  const logoList = [
    { logo: html5, name: "HTML5" },
    { logo: css3, name: "CSS3" },
    { logo: javascript, name: "Javascript" },
    { logo: react, name: "ReactJS" },
    { logo: tailwindcss, name: "TailwindCSS" },
    { logo: figma, name: "Figma" },
  ];
  return (
    <div className="flex justify-center xl:mx-[50vh] lg:mx-[30vh] md:mx-[20vh]">
      <Marquee speed={250} autoFill>
        <ul className="flex flex-row gap-2">
          {logoList.map((item, index) => (
            <li key={item.name} className={index === 0 ? "pl-2" : undefined}>
              <Button
                variant="ghost"
                className="flex justify-center items-center h-16 "
              >
                <img src={item.logo} alt="logo" height="48" width="48" />
              </Button>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
