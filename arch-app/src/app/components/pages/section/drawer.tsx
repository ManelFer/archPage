import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Redes } from "./redes";
import { CarouselSection } from "./carousel";

export function DrawerComponent(){
    const description = [
        {
            Description: "Consultoria, projeto arquitetônico, projeto de reforma e projeto de ambientação para residências e pequenos comércios"
        },
    ];
    return (
        <Drawer>
            <DrawerTrigger className="w-full bg-[#725C3F] rounded-lg p-2 text-white hover:bg-[#725C3F]">
                    Entre em contato
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Arquiteta Luiza França </DrawerTitle>
                    <DrawerDescription className="mb-4">
                        Projetos residenciais e comerciais.
                    </DrawerDescription>
                    <Redes />
                    {description.map((description, index) => (
                        <div key={index}>
                            <DrawerDescription className="mb-4">{description.Description}</DrawerDescription>
                        </div>
                    ))}
                    <CarouselSection />
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
} 