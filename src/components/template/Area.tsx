import React, { ReactNode } from "react";

interface AreaProps {
  titulo: string;
  sumario?: string;
  children?: ReactNode;
  cor: string;
}

export default function Area(props: AreaProps) {
  return (
    <div
      className={`flex flex-col items-center rounded-md w-full bg-${props.cor}-500`}
    >
      <div
        className={`flex items-center ${
          props.sumario ? "justify-between" : "justify-center"
        } bg-black bg-opacity-20 w-full h-14 text-3xl font-black opacity-70`}
      >
        <span className="px-4">{props.titulo}</span>
        {props.sumario && (
          <span className="flex items-center px-4 bg-black bg-opacity-20 h-full">
            {props.sumario}
          </span>
        )}
      </div>
      <div className="p-7">{props.children}</div>
    </div>
  );
}
