import { useParams } from "react-router-dom";
import ProductImage from "../Cards/product-image";
import ProductDetails from "../Cards/product-details";
import Produtos from "../../datas/produtos.json";

const ProductInfo = () => {
  const { id } = useParams();

  // Encontre o produto com base no ID
  const product = Produtos.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <div className="max-w-4xl	mx-auto ]">
        {/* Passe o ID e os dados do produto para os componentes */}

        <ProductImage productId={product.id} productImage={product.imagem} />
        <ProductDetails id={product.id} nome={product.nome_do_produto} preco={product.preço} desconto={product.desconto} descricao={product.descrição} imagem={product.imagem} />
      </div>
    </>
  );
};

export default ProductInfo;
