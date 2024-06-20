import { ArrowDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/Util/formatPreco";

const ProductItemXg = ({ id, nome, desconto, preco, imagem }) => {
  return (
    <Link to={`/product/${id}`} className="w-full h-full" href="">
      <div className="w-full space-y-2">
        <div className="relative aspect-square w-full  bg-cover bg-no-repat bg-center bg-w-full" style={{ backgroundImage: `url(${imagem})` }}>
          {desconto > 0 && (
            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
              <span className="text-xs font-semibold">baixou</span>
              <ArrowDownIcon size={12} />
            </div>
          )}
        </div>

        <div>
          <h2 className="truncate text-base">{nome}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">{formatCurrency(preco)}</h3>
            {desconto > 0 && <span className="text-xs text-muted-foreground line-through">{formatCurrency(preco + desconto)}</span>}
          </div>

          <span className="block text-xs text-muted-foreground">Vila do artesão</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItemXg;
