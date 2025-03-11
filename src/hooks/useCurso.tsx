import CursoContext from "@/context/CursoContext";
import { useContext } from "react";


export default function useCurso() {
  return useContext(CursoContext);
}
