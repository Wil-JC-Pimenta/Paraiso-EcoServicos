import { useState } from "react";
import { Menu } from "lucide-react";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-conservale-dark text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-conservale-light transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="text-2xl font-bold">
            Paraíso EcoServiços
            <span className="block text-sm font-normal">
              Residencial & Rural
            </span>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-conservale-light transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-conservale-light transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="hover:text-conservale-light transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-conservale-light transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
