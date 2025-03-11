import Produto from "@/data/model/Produto";
import useCarrinho from "@/hooks/useCarrinho";
import Real from "@/utils/Real";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

interface ProdutorCardProps {
  produto: Produto;
}

export default function ProdutoCard({ produto }: ProdutorCardProps) {

  const {addItem} =useCarrinho()
  return (
    <div className=" flex flex-col gap-3 p-2 bg-black rounded-md overflow-hidden">
      <Image
        src={produto.imagem}
        alt="imagem do produto"
        width={300}
        height={150}
        className="rounded-md"
      />
      <div className="flex justify-between items-center px-4">
        <span className="font-black text-xl">{produto.nome}</span>
        <span className="text-green-400">{Real.format(produto.preco)}</span>
      </div>
      <p className="px-4 text-sm text-zinc-400">{produto.descricao}</p>
      <button className="flex justify-center gap-2 btn-info" onClick={() => addItem(produto)}>
        <IconShoppingCart /> Adicionar
      </button>
    </div>
  );
}
