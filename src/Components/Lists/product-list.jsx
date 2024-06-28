import React from "react";
import ProductItem from "../Cards/product-item";
import ListaProdutos from "../../datas/produtos.json";

const ProductList = () => {
  const produtosComDesconto = ListaProdutos.filter((produto) => produto.desconto > 0);

  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {produtosComDesconto.map((produto) => (
        <ProductItem key={produto.id} id={produto.id} nome={produto.nome_do_produto} preco={produto.preço} desconto={produto.desconto} image={produto.imagem} />
      ))}
    </div>
  );
};

export default ProductList;
