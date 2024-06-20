import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { formatCurrency } from "@/Util/formatPreco";

const CartItem = ({ id, imagem, nome, preco, quantidade, removerProduto }) => {
  const handleRemover = () => {
    console.log(id);
    removerProduto(id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* IMAGEM E INFO */}
        <div className="relative h-20 w-20  bg-cover bg-no-repat bg-center bg-w-full" style={{ backgroundImage: `url(${imagem})` }}></div>

        <div className="space-y-1">
          <h3 className="text-xs">{nome}</h3>

          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">{formatCurrency(preco)}</h4>
          </div>
          <div>
            <span className="text-sm ">
              {" "}
              quant. <b className="text-red-600">{quantidade}x</b>
            </span>
          </div>

          {/* QUANTIDADE */}
          {/* 
          <div className="flex items-center text-center">
            <Button size="icon" variant="ghost" className="h-7 w-7 border border-solid border-muted-foreground">
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="block w-8 text-xs">{quantidade}</p>
            <Button size="icon" className="h-7 w-7">
              <ChevronRightIcon size={16} />
            </Button>
          </div> */}
        </div>
      </div>

      {/* BOTÃO DE DELETAR */}
      <Button size="icon" variant="ghost" className="h-7 w-7 border border-solid border-muted-foreground" onClick={handleRemover}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
