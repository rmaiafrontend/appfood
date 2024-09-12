import React, { useState } from "react";

import ProductItemXg from "../Cards/product-item-xg";
import { CategoryList } from "./category-list";
import produtos from "../../datas/produtos.json";

export function ListProdutos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoryClick = (categoria) => {
    setCategoriaSelecionada(categoria === 0 ? null : categoria);
  };

  const produtosFiltrados = categoriaSelecionada ? produtos.filter((produto) => produto.categoria === categoriaSelecionada) : produtos;

  return (
    <>
      <CategoryList onCategoryClick={handleCategoryClick} />
      <div className="mt-4 flex justify-center w-full">
        <div className="grid grid-cols-2 gap-4 max-w-screen-lg w-full">
          {produtosFiltrados.map((produto) => (
            <ProductItemXg key={produto.id} id={produto.id} nome={produto.nome_do_produto} preco={produto.preço} desconto={produto.desconto} imagem={produto.imagem} />
          ))}
        </div>
      </div>
    </>
  );
}
