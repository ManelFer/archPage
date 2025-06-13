
import { Redes } from "./section/redes"
import { Perfil } from "./section/perfil"
import { DrawerComponent } from "./section/drawer"


export default function Cartao() {
    return(
        <div>
            <div className="bg-[#EFE8D899] p-6 m-6 rounded-lg shadow-lg max-w-sm w-full">
                <Redes />
                <Perfil />
                <DrawerComponent />
                <p className="text-gray-700 mt-4 mb-4 text-sm leading-relaxed font-montserrat text-center">Seu espaço com identidade, aconchego e funcionalidade.</p>

            </div>
        </div>
    )
}