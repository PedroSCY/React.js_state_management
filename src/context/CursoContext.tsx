import { createContext, ReactNode, useState } from "react";
import Capitulo from "../data/model/Capitulo";
import CapituloData from "../data/constants/capitulos";
import Aula from "../data/model/Aula";
import CursoEstatisticas from "../data/model/CursoEstatisticas";

interface CursoContextProps {
  capitulos: Capitulo[];
  aulaAtual: Aula;
  qtdeDeAulas: number;
  qtdeDeAulasConcluidas: number;
  duracaoTotal: string;
  duracaoConcluida: string;
  percentualConclusao: number;
  selecionarAula: (aula: Aula) => void;
  alternarConclusaoAula: (aulaSelecionada: Aula) => void;
}

const CursoContext = createContext<CursoContextProps>({
  capitulos: [],
  aulaAtual: {} as Aula,
  qtdeDeAulas: 0,
  qtdeDeAulasConcluidas: 0,
  duracaoTotal: "",
  duracaoConcluida: "",
  percentualConclusao: 0,
  selecionarAula: () => {},
  alternarConclusaoAula: () => {},
});

export function CursoProvider({ children }: { children: ReactNode }) {
  const [capitulos, setCapitulos] = useState<Capitulo[]>(CapituloData);
  const [aulaAtual, setAulaAtual] = useState<Aula>(CapituloData[0].aulas[0]);

  const cursoEstatisticas = new CursoEstatisticas(capitulos);

  function alternarConclusaoAula(aulaSelecionada: Aula) {
    const novosCapitulos = capitulos.map((capitulo) => {
      const novasAulas = capitulo.aulas.map((aula) => {
        return aula.ordem === aulaSelecionada.ordem
          ? { ...aula, concluida: !(aula.concluida ?? false) }
          : aula;
      });
      return { ...capitulo, aulas: novasAulas };
    });
    setCapitulos(novosCapitulos);
  }

  function selecionarAula(aula: Aula) {
    setAulaAtual(aula);
  }

  return (
    <CursoContext.Provider
      value={{
        capitulos,
        aulaAtual,
        selecionarAula,
        alternarConclusaoAula,
        get qtdeDeAulas() {
          return cursoEstatisticas.qtdeDeAulas();
        },
        get qtdeDeAulasConcluidas() {
          return cursoEstatisticas.qtdeDeAulasConcluidas();
        },
        get duracaoTotal() {
          return cursoEstatisticas.duracaoTotal();
        },
        get duracaoConcluida() {
          return cursoEstatisticas.duracaoConcluida();
        },
        get percentualConclusao() {
          return cursoEstatisticas.percentualConclusao();
        },
      }}
    >
      {children}
    </CursoContext.Provider>
  );
}

export default CursoContext;
