// components/Fundo.tsx
import Image from "next/image";
import fundo1 from "../../../public/fundo1.jpeg"; 
import Cartao from "./pages/cartao"; 

export default function Fundo() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={fundo1}
        alt="Fundo"
        fill // substitui layout="fill"
        style={{ objectFit: "cover" }} // substitui objectFit="cover"
        priority // opcional: para carregar mais rápido
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Cartao />
      </div>
    </div>
  );
}
