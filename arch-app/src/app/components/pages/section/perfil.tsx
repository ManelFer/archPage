import Image from "next/image";
import perfil from "../../../../../public/perfil.png";

export const Perfil = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-md shadow-lg max-w-sm w-full font-montserrat">
      <div className="w-32 h-32 relative bg-[#725C3F] border-4 rounded-full mb-4 overflow-hidden">
        <Image
          src={perfil}
          alt="Perfil"
          fill
          className="rounded-full object-cover "
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 font-montserrat">Luiza França</h2>
      <p className="text-gray-700 mb-4 font-montserrat">Projetos residenciais | comerciais.</p>
      <p className="text-gray-500 text-sm border-b border-dotted border-gray-400 w-fit">@arq.luizafranca</p>
    </div>
  );
};
