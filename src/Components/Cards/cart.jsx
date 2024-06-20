import { useEffect, useState } from "react";
import CartItem from "./cart-item";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { formatCurrency } from "@/Util/formatPreco";

import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../ui/alert-dialog";
import { Link } from "react-router-dom";

const Cart = ({ setAtualizaProdutos, atualizaProdutos }) => {
  const [produtosNaSacola, setProdutosNaSacola] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedProdutosNaSacola = sessionStorage.getItem("produtosNaSacola");
    if (storedProdutosNaSacola) {
      setProdutosNaSacola(JSON.parse(storedProdutosNaSacola));
    }
  }, []);

  const removerProduto = (id) => {
    setProdutosNaSacola((produtosAnteriores) => {
      console.log("Produtos anteriores:", produtosAnteriores); // Log para depuração
      const produtosAtualizados = produtosAnteriores.filter((produto) => produto.idProduto !== id);
      console.log("Produtos atualizados:", produtosAtualizados); // Log para depuração
      sessionStorage.setItem("produtosNaSacola", JSON.stringify(produtosAtualizados));
      return produtosAtualizados;
    });
    setAtualizaProdutos(!atualizaProdutos);
  };

  useEffect(() => {
    let soma = 0;
    produtosNaSacola.map((produto) => {
      soma += produto.precoFinal;
    });
    setTotal(soma);
  }, [produtosNaSacola]);

  return (
    <>
      <div className="flex h-full flex-col py-5">
        <>
          <div className="flex-auto space-y-4">
            {produtosNaSacola.length > 0 ? (
              produtosNaSacola.map((produto) => (
                <CartItem
                  key={produto.idProduto}
                  nome={produto.nomeProduto}
                  id={produto.idProduto}
                  preco={produto.precoFinal}
                  quantidade={produto.quantidade}
                  imagem={produto.imagemUrl}
                  removerProduto={removerProduto}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-center">Sua sacola está vazia...</p>
            )}
          </div>

          {/* TOTAIS */}
          <div className="mt-6">
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(total)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Descontos</span>
                  <span>- R$ 0,00</span>
                </div>

                {/* <Separator className="h-[0.5px]" /> */}

                {/* <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Entrega</span>

                  <span className="uppercase text-primary">Grátis</span>
                </div> */}

                <Separator />

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FINALIZAR PEDIDO */}
          <Link to={"/checkout"}>
            <Button className="mt-6 w-full">Finalizar pedido</Button>
          </Link>
        </>
      </div>

      {/* <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja finalizar seu pedido?</AlertDialogTitle>
            <AlertDialogDescription>Ao finalizar seu pedido, você concorda com os termos e condições da nossa plataforma.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleFinishOrderClick} disabled={isSubmitLoading}>
              {isSubmitLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Finalizar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}
    </>
  );
};

export default Cart;
