import { Redes } from "./section/redes";
import { Perfil } from "./section/perfil";
import { DrawerComponent } from "./section/drawer";

export default function Cartao() {
  return (
    <div className="w-[90%] max-w-sm bg-[#EFE8D899] p-6 rounded-lg shadow-lg text-center backdrop-blur-md">
      <Redes />
      <Perfil />
      <DrawerComponent />
      <p className="text-gray-700 mt-4 mb-4 text-sm leading-relaxed font-montserrat">
        Seu espaço com identidade, aconchego e funcionalidade.
      </p>
    </div>
  );
}
