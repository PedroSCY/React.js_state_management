import { IconVideo } from "@tabler/icons-react";
import Aula from "../../data/model/Aula";
import AulaConclusao from "./AulaConclusao";
import useCurso from "@/hooks/useCurso";

interface AulaProps {
  aula: Aula;
  selecionada: boolean;
}

export default function AulaItem({ aula, selecionada }: AulaProps) {
  const { selecionarAula, alternarConclusaoAula } = useCurso();

  return (
    <div className="flex gap-2 items-center py-1">
      <AulaConclusao
        concluida={aula.concluida ?? false}
        onClick={() => alternarConclusaoAula(aula)}
      />
      <div
        className="flex flex-col flex-1 cursor-pointer"
        onClick={() => selecionarAula(aula)}
      >
        <span
          className={` text-sm font-bold ${selecionada && "text-yellow-400"}`}
        >
          {aula.ordem}. {aula.titulo}
        </span>
        <span className="text-xs text-zinc-400 -mt-1">
          Duração de {Math.floor(aula.duracao / 60)}m
        </span>
      </div>
      <IconVideo size={20} className="text-zinc-500" />
    </div>
  );
}
