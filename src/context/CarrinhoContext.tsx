import ItemCarrinho from "@/data/model/ItemCarrinho";
import Produto from "@/data/model/Produto";
import React, { createContext, ReactNode, useState } from "react";

interface CarrinhoContextProps {
  itens: ItemCarrinho[];
  valorTotal: number;
  addItem: (produto: Produto) => void;
  removeItem: (id: number) => void;
  limpar: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps>({
  itens: [],
  valorTotal: 0,
  addItem: () => {},
  removeItem: () => {},
  limpar: () => {},
});

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);

  function addItem(produto: Produto) {
    const item = itens.find((i) => i.produto.id === produto.id) ?? {
      produto,
      quantidade: 0,
    };
    const novoItem = { ...item, quantidade: item.quantidade + 1 };
    const outrosItens = itens.filter((i) => i.produto.id !== produto.id);
    setItens([...outrosItens, novoItem].sort(ordenarItem));
  }

  function ordenarItem(a: ItemCarrinho, b: ItemCarrinho) {
    return a.produto.nome > b.produto.nome ? 1 : -1;
  }

  function removeItem(id: number) {
    const novosItens = itens
      .map((item) => {
        return item.produto.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item;
      })
      .filter((item) => item.quantidade > 0);
    setItens(novosItens);
  }

  function limpar() {
    setItens([])
  }

  function calcularValorTotal() {
    return itens.reduce((total: number, item: ItemCarrinho) => {
      return total + item.produto.preco * item.quantidade;
    }, 0);
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        addItem,
        removeItem,
        get valorTotal() {
          return calcularValorTotal();
        },
        limpar
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export default CarrinhoContext;
