import LogoSVG from "./LogoSVG";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className="flex flex-row justify-between items-center gap-[1vh] p-[1vh] px-24 border-b-[1px]">
      <Button variant="outline" size="icon">
        <LogoSVG
          height="28"
          width="28"
          color={
            theme === "light"
              ? "black"
              : theme === "dark" && "system"
              ? "white"
              : null
          }
        />
      </Button>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
