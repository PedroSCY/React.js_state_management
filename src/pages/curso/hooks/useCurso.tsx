import { useContext } from "react";
import CursoContext from "../context/CursoContext";

export default function useCurso() {
  return useContext(CursoContext)
}
