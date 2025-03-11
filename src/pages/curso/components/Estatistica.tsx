import React from "react";

interface EstatisticaProps {
    texto: string
    valor: number | string
}

export default function Estatistica({texto, valor} : EstatisticaProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-black">{valor}</span>
      <span className="text-sm text-zinc-400">{texto}</span>
    </div>
  );
}
