import { useTheme } from "@/components/theme-provider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeaderGap = () => {
  // const { theme } = useTheme();
  return (
    <div className="flex flex-row border-b-[0.1vh] py-[2vh] px-[10vh]">
      <div className="flex flex-col justify-center font-urbanist-regular text-6xl h-[25vh] w-[35vw] gap-[2vh]">
        <span className="text-[#999]">Frontend Developer</span>
        <span className="font-urbanist-medium">SAAD</span>
      </div>
      <div className="flex h-[25vh] w-[30vw]">
        <Card className="flex items-center justify-center flex-1">test</Card>
      </div>
      <div className="flex flex-col justify-center font-urbanist-medium text-6xl h-[25vh] w-[35vw] gap-[2vh]">
        <span className="pl-[0.4vh]">LETS</span>
        <span className="flex flex-row">
          <Button
            variant="outline"
            className="flex text-6xl py-[3vh] px-[0.4vh]"
          >
            WORK TOGETHER
          </Button>
        </span>
      </div>
    </div>
  );
};

export default HeaderGap;

// <div className="flex flex-row items-center px-[10vh] border-b-[0.1vh] py-[2vh]">
//   <div>
//     <ul className="flex flex-col justify-center items">
//       <span className="overflow-hidden">
//         <li className="text-[4vh] text-[#999] font-urbanist-medium">
//           Frontend Developer
//         </li>
//       </span>
//       <span className="overflow-hidden font-urbanist-semibold text-[10vh]">
//         <li>SAAD</li>
//       </span>
//     </ul>
//   </div>
//   <div>
//     <Card className="flex text-lg items-center justify-center w-[25vw] h-[25vh]">
//       {theme === "dark" ? "black-space" : "white-space"}
//     </Card>
//   </div>
//   <div className="flex flex-col items-start font-urbanist-medium text-[6vh]">
//     <span className="flex justify-center items-center gap-[2vh]">
//       LET'S
//     </span>
//     <span>
//       <Button variant="ghost" className="text-[6vh]">
//         WORK
//       </Button>
//     </span>
//   </div>
// </div>
