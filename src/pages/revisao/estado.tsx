import Area from "@/components/template/Area";
import React, { useState } from "react";

export default function RevisaoEstado() {

  const [texto, setTexto] = useState("Estado Controlado!");

  return (
    <div className="p-20 ">
      <Area titulo="Revisão Estado" cor="sky">
        <input type="text" className="input" value={texto} onChange={(e) => setTexto(e.target.value)} />

        <span className="ml-20">{texto}</span>
      </Area>
    </div>
  );
}
