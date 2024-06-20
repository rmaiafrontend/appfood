import { useState, useEffect } from "react";
import ProductList from "../Lists/product-list";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import Cart from "./cart";
import { formatCurrency } from "@/Util/formatPreco";

const ProductDetails = ({ id, nome, preco, descricao, desconto, imagem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantProdutos, setQuantProdutos] = useState(0);
  const [produtosNaSacola, setProdutosNaSacola] = useState([]);
  const [atualizaProdutos, setAtualizaProdutos] = useState(true);

  useEffect(() => {
    setQuantProdutos(0);
    const storedProdutosNaSacola = sessionStorage.getItem("produtosNaSacola");
    if (storedProdutosNaSacola) {
      setProdutosNaSacola(JSON.parse(storedProdutosNaSacola));
    }
  }, [atualizaProdutos]);

  useEffect(() => {
    if (produtosNaSacola.length > 0) {
      sessionStorage.setItem("produtosNaSacola", JSON.stringify(produtosNaSacola));
    }
  }, [produtosNaSacola]);

  function addCart() {
    if (quantProdutos == 0) {
      return alert("Você precisa adicionar a quantidade de produtos.");
    }

    const produto = {
      idProduto: id,
      nomeProduto: nome,
      precoFinal: preco * quantProdutos,
      quantidade: quantProdutos,
      imagemUrl: imagem,
    };

    // Usando a função de atualização do estado para adicionar o novo produto à sacola
    setProdutosNaSacola((produtosAnteriores) => {
      // Verifica se o produto já existe no carrinho
      const produtoExistente = produtosAnteriores.find((p) => p.idProduto === produto.idProduto);

      if (produtoExistente) {
        // Atualiza a quantidade e o preço final do produto existente
        return produtosAnteriores.map((p) => (p.idProduto === produto.idProduto ? { ...p, quantidade: produto.quantidade, precoFinal: p.precoFinal + produto.precoFinal } : p));
      } else {
        // Adiciona o novo produto ao carrinho
        return [...produtosAnteriores, produto];
      }
    });

    setIsCartOpen(true);
  }

  function addProdutos() {
    setQuantProdutos(quantProdutos + 1);
  }

  function removeProdutos() {
    if (quantProdutos != 0) {
      setQuantProdutos(quantProdutos - 1);
    }
  }

  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5">
        {/* NOME DO PRODUTO */}
        <h1 className="mb-2 mt-1 px-5 text-xl font-semibold">{nome}</h1>

        {/* PREÇO DO PRODUTO E QUANTIDADE */}
        <div className="flex justify-between px-5">
          {/* PREÇO COM DESCONTO */}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{formatCurrency(preco)}</h2>
              {/* {product.discountPercentage > 0 && <DiscountBadge product={product} />} */}
            </div>

            {/* PREÇO ORIGINAL */}
            {desconto > 0 && <p className="text-sm text-muted-foreground">De: {formatCurrency(preco + desconto)}</p>}
          </div>

          {/* QUANTIDADE */}
          <div className="flex items-center gap-3 text-center">
            <Button size="icon" variant="ghost" className="border border-solid border-muted-foreground" onClick={removeProdutos}>
              <ChevronLeftIcon />
            </Button>
            <span className="w-4">{quantProdutos}</span>
            <Button size="icon" onClick={addProdutos}>
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        {/* <div className="px-5">
          <DeliveryInfo restaurant={product.restaurant} />
        </div> */}

        <div className="mt-6 space-y-3 px-5">
          <h3 className="font-semibold">Sobre</h3>
          <p className="text-sm text-muted-foreground">{descricao}</p>
        </div>

        <div className="mt-6 space-y-3">
          <h3 className="px-5 font-semibold">Produtos em promoção</h3>
          <ProductList />
        </div>

        <div className="mt-6 px-5">
          <Button className="w-full font-semibold" onClick={addCart}>
            Adicionar à sacola
          </Button>
        </div>
      </div>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-[90vw]">
          <SheetHeader>
            <SheetTitle className="text-left">Sacola</SheetTitle>
          </SheetHeader>
          <Cart setAtualizaProdutos={setAtualizaProdutos} atualizaProdutos={atualizaProdutos} />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductDetails;
