import { Instagram, Linkedin } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export const Redes = () => {
  return (
    <div className="flex space-x-4 justify-center mb-4">
      <a href="https://www.instagram.com/arq.luizafranca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
        <Instagram className="h-6 w-6 text-gray-700 hover:text-gray-900" />
      </a>
      <a href="https://www.linkedin.com/in/anna-luiza-frança-moura-913385344/" target="_blank" rel="noopener noreferrer">
        <Linkedin className="h-6 w-6 text-gray-700 hover:text-gray-900" />
      </a>
      <a href="https://wa.me/5579996524316" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp className="h-6 w-6 text-gray-700 hover:text-gray-900" />
      </a>
    </div>
  );
};
