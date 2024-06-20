"use client";
import { Link } from "react-router-dom"; // Importe o Link do React Router
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";

const ProductImage = ({ productImage }) => {
  return (
    <div className="relative h-[360px] w-full bg-cover bg-no-repeat bg-center bg-w-full" style={{ backgroundImage: `url(${productImage})` }}>
      <Link to="/">
        <Button className="absolute left-4 top-4 rounded-full bg-white text-foreground hover:text-white" size="icon">
          <ChevronLeftIcon />
        </Button>
      </Link>
    </div>
  );
};

export default ProductImage;
