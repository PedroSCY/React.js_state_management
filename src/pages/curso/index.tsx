import React from "react";
import { CursoProvider } from "../../context/CursoContext";
import Sala from "../../components/curso/Sala";

export default function Curso() {
  return (
    <CursoProvider>
      <Sala />
    </CursoProvider>
  );
}
