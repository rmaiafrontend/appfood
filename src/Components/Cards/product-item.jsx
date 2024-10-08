import { ArrowDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/Util/formatPreco";

const ProductItem = ({ id, nome, preco, desconto, image }) => {
  console.log(image);
  return (
    <Link to={`/product/${id}`} className="min-w-[150px]">
      <div className="w-full space-y-2">
        <div className={`relative aspect-square w-full bg-cover bg-no-repeat bg-center bg-w-full rounded-md`} style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] text-white">
            <span className="text-xs font-semibold">Baixou</span>
            <ArrowDownIcon size={12} />
          </div>
        </div>

        <div>
          <h2 className="truncate text-sm">{nome}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">{formatCurrency(preco)}</h3>
            {/* {product.discountPercentage > 0 && ( */}
            <span className="text-xs text-muted-foreground line-through">{formatCurrency(preco + desconto)}</span>
            {/* )} */}
          </div>

          <span className="block text-xs text-muted-foreground">Vila do artesão</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
