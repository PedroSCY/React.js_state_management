
import useCurso from "@/hooks/useCurso";
import Estatistica from "./Estatistica";

export default function Estatisticas() {
  const {
    qtdeDeAulas,
    qtdeDeAulasConcluidas,
    duracaoTotal,
    duracaoConcluida,
    percentualConclusao,
  } = useCurso();

  return (
    <div className="flex w-4/5 h-24 bg-zinc-700 rounded-lg justify-around items-center">
      <Estatistica valor={qtdeDeAulas} texto="Qtde Aulas" />
      <Estatistica valor={qtdeDeAulasConcluidas} texto="Aulas Concluidas" />
      <Estatistica valor={duracaoTotal} texto="Duração Total" />
      <Estatistica valor={duracaoConcluida} texto="Duração Concluida" />
      <Estatistica valor={`${percentualConclusao}%`} texto="Perc. Conclusão" />
    </div>
  );
}
