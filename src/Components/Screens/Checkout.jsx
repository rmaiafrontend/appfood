import Header from "../Layout/Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { formatCurrency } from "@/Util/formatPreco";
import { ChevronLeftIcon } from "lucide-react";

const Checkout = () => {
  const [valorSelecionado, setValorSelecionado] = useState("");
  const [value, setValue] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    cidade: "",
    cep: "",
    metodoPagamento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      metodoPagamento: value,
    }));
  }, [value]);

  const getProdutosNaSacola = () => {
    const storedProdutosNaSacola = sessionStorage.getItem("produtosNaSacola");
    if (storedProdutosNaSacola) {
      return JSON.parse(storedProdutosNaSacola);
    } else {
      return [];
    }
  };

  const montarMensagemWhatsApp = () => {
    const produtosNaSacola = getProdutosNaSacola();
    const { nome, telefone, endereco, cidade, cep, metodoPagamento } = formData;

    let mensagem = "Pedido Delivery:\n";
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Telefone: ${telefone}\n`;
    mensagem += `Endereço: ${endereco}\n`;
    mensagem += `Cidade: ${cidade}\n`;
    mensagem += `CEP: ${cep}\n`;
    mensagem += `Método de pagamento: ${metodoPagamento}\n\n`;

    mensagem += "Produtos:\n";
    produtosNaSacola.forEach((produto, index) => {
      mensagem += `${index + 1}. ${produto.nomeProduto} - Quantidade: ${produto.quantidade} - Preço: ${formatCurrency(produto.precoFinal)}\n`;
    });

    mensagem += `\nTotal: ${formatCurrency(calcularTotal())}`;

    return encodeURIComponent(mensagem); // Codifica a mensagem para ser usada no link do WhatsApp
  };

  const calcularTotal = () => {
    const produtosNaSacola = getProdutosNaSacola();
    return produtosNaSacola.reduce((total, produto) => total + produto.precoFinal * produto.quantidade, 0);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Header />

        <div className="p-8">
          <Link to="/">
            <ChevronLeftIcon />
          </Link>
          <h1 className="text-lg font-semibold mt-5">Fazer Checkout</h1>
          <Separator className="my-4" />
          <div className="mb-4">
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="border-none mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="telefone">Telefone</Label>
            <Input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" className="border-none mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="endereco">Endereço</Label>
            <Input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço" className="border-none mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" className="border-none mt-1" />
          </div>
          <div className="mb-4">
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} placeholder="CEP" className="border-none mt-1" />
          </div>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Como deseja pagar?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pix">Pix</SelectItem>
              <SelectItem value="Cartão de crédito">Cartão de crédito</SelectItem>
              <SelectItem value="Dinheiro">Dinheiro</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            className="mt-4 w-full"
            onClick={() => {
              const mensagemWhatsApp = montarMensagemWhatsApp();
              const linkWhatsApp = `https://wa.me/?text=${mensagemWhatsApp}`;
              window.open(linkWhatsApp, "_blank");
            }}
          >
            Finalizar no WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
