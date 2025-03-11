import ItemCarrinho from "@/data/model/ItemCarrinho";
import useCarrinho from "@/hooks/useCarrinho";
import Real from "@/utils/Real";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React from "react";

interface ItemCarrinhoCardProps {
  item: ItemCarrinho;
}

export default function ItemCarrinhoCard({ item }: ItemCarrinhoCardProps) {

    const {addItem, removeItem} = useCarrinho()

  return (
    <div className="flex bg-black rounded-md p-2 gap-5">
      <span>{item.produto.nome}</span>
      <div className=" flex items-center gap-2">
        <button className="flex justify-center items-center h-5 w-5 bg-red-500 rounded-sm" onClick={() => removeItem(item.produto.id)}>
            <IconMinus/>
        </button>
        <span>{item.quantidade}</span>
        <button className="flex justify-center items-center h-5 w-5 bg-green-500 rounded-sm" onClick={() => addItem(item.produto)}>
            <IconPlus/>
        </button>
      </div>
      <div className="font-black px-2 rounded-sm">{Real.format(item.quantidade * item.produto.preco)}</div>
    </div>
  );
}
