import React from "react";
import Capitulo from "../model/Capitulo";
import AulaItem from "./AulaItem";
import useCurso from "../hooks/useCurso";

interface CapituloItemProps {
    capitulo: Capitulo
}

export default function CapituloItem({capitulo} : CapituloItemProps) {

  const {aulaAtual} = useCurso()
  return (
    <div>
      <div className="flex gap-3 bg-zinc-900 p-4 items-center">
        <div className="flex justify-center items-center h-9 w-9 rounded-full border border-zinc-400 bg-black">{capitulo.ordem}</div>
        <span className="font-black text-zinc-100 text-xl">{capitulo.titulo}</span>
      </div>
      <div className="flex flex-col p-4 bg-zinc-800 gap-3">{capitulo.aulas.map((aula) => {
        return <AulaItem key={aula.ordem} aula={aula} selecionada={aulaAtual.ordem === aula.ordem}/>
      })}</div>
    </div>
  );
}
