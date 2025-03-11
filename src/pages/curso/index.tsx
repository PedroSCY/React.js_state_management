import React from "react";
import { CursoProvider } from "./context/CursoContext";
import Sala from "./components/Sala";

export default function Curso() {
  return (
    <CursoProvider>
      <Sala />
    </CursoProvider>
  );
}
