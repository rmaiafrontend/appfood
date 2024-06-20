import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const Header = ({ OpenCart }) => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <img src="/logo.svg" alt="logo" className="h-[40px] w-[100px]" />
      <Button size="icon" variant="outline" className="bg-transparent border-none" onClick={OpenCart}>
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
