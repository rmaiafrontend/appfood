import { useState } from "react";
import Header from "../Layout/Header";
import Search from "../Layout/Search";
import PromoBanner from "../Cards/promo-banner";
import ProductList from "../Lists/product-list";
import { ListProdutos } from "../Lists/ListProdutos";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { CategoryList } from "../Lists/category-list";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import Cart from "../Cards/cart";

export function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function OpenCart() {
    setIsCartOpen(true);
  }

  return (
    <>
      <div className="max-w-4xl	mx-auto">
        {/* Header */}
        <Header OpenCart={OpenCart} />

        {/* Barra de Pesquisa */}
        <div className="px-5 pt-6">
          <Search />
        </div>

        {/* Banner Promoção */}
        <div className="px-5 pt-6">
          <a>
            <PromoBanner src="/banner-pizza.svg" />
          </a>
        </div>

        {/* Lista de produtos com desconto */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between px-5">
            <h2 className="font-semibold">Pedidos Recomendados</h2>
            <Button variant="ghost" className="h-fit p-0 text-primary hover:bg-transparent" asChild>
              {/* <a href="">
              Ver todos
              <ChevronRightIcon size={16} />
            </a> */}
            </Button>
          </div>
          <ProductList />
        </div>

        {/* Banner Promoção */}
        <div className="px-5 pt-6">
          <a>
            <PromoBanner src="/banner-burger.svg" />
          </a>
        </div>

        {/* Lista de categorias */}
        {/* <div className="space-y-4 pt-6">
        <CategoryList />
      </div> */}

        <div className="px-5 pt-6 pb-[40px]">
          <ListProdutos />
        </div>

        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
          <SheetContent className="w-[90vw]">
            <SheetHeader>
              <SheetTitle className="text-left">Sacola</SheetTitle>
            </SheetHeader>
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
