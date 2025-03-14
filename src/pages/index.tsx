import MenuItem from "@/components/template/MenuItem";
import { IconArrowsDownUp, IconForms, IconNumbers, IconPlayerPlay, IconShoppingCart } from "@tabler/icons-react";

export default function Home() {
  return (
    <div
      className="
      flex flex-col justify-center items-center h-screen 
      bg-gradient-to-br from-zinc-800 to-black gap-20"
    >
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Grenciamento de </span>
        <span className="font-black bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Estado</span>
      </div>
      <div className="flex flex-wrap justify-around container">
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado" />
        <MenuItem icone={<IconArrowsDownUp />} texto="Comunicação" url="/revisao/comunicacao" />
        <MenuItem icone={<IconNumbers />} texto="Básico" url="/basico" />
        <MenuItem icone={<IconShoppingCart />} texto="Loja" url="/loja" />
        <MenuItem icone={<IconPlayerPlay/>} texto="Curso" url="/curso" />
      </div>
    </div>
  );
}
