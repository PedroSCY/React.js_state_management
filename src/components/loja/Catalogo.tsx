
import useCatalogo from "@/hooks/useCatalogo";
import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";

export default function Catalogo() {

    const catalogo = useCatalogo()

  function renderizarProdutos() {
    return catalogo.produtos.map((prod) => {
      return <ProdutoCard key={prod.id} produto={prod} />;
    });
  }

  return (
    <Area titulo="Catálogo" cor="purple">
      <div className="flex flex-wrap gap-4 justify-around roun">{renderizarProdutos()}</div>
    </Area>
  );
}
