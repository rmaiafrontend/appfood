import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <form className="flex gap-2">
      <Input placeholder="Buscar produtos" className="border-none" />
      <Button size="icon" type="submit">
        <SearchIcon size={20} />
      </Button>
    </form>
  );
};

export default Search;
