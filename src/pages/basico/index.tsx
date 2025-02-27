import Mais from "@/components/basico/Mais";
import Menos from "@/components/basico/Menos";
import Valor from "@/components/basico/Valor";
import { ContadorProvider } from "@/context/ContadorContext";
import React from "react";

export default function ExemploBasico() {
  return (
    <ContadorProvider>
      <div className="p-20 flex flex-col gap-5">
        <Valor />
        <div className="flex gap-5">
          <Menos />
          <Mais />
        </div>
      </div>
    </ContadorProvider>
  );
}
