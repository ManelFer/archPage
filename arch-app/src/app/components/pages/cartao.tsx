import { Button } from "@/components/ui/button"

export default function Cartao() {
    return(
        <div>
            <div className="bg-white p-6 m-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4">Cartão</h2>
                <p className="text-gray-700 mb-4">Este é o componente Cartão.</p>
                <Button className="w-full bg-[#725C3F] text-white hover:bg-[#725C3F]">
                    Entre em contato
                </Button>
            </div>
        </div>
    )
}