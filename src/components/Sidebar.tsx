
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { name: "Limpeza de Chácaras", path: "/servicos/limpeza-de-chacaras" },
  { name: "Conservação de Lotes", path: "/servicos/conservacao-de-lotes" },
  { name: "Pintura de Muros e Fachadas", path: "/servicos/pintura-de-muros-e-fachadas" },
  { name: "Pintura de Cercas", path: "/servicos/pintura-de-cercas" },
  { name: "Pintura de Grades e Portões", path: "/servicos/pintura-de-grades-e-portoes" },
  { name: "Manutenção de Jardins", path: "/servicos/manutencao-de-jardins" },
  { name: "Plantio de Mudas", path: "/servicos/plantio-de-mudas" },
  { name: "Reparos Elétricos", path: "/servicos/reparos-eletricos" },
  { name: "Reparos Hidráulicos", path: "/servicos/reparos-hidraulicos" },
  { name: "Serralheria Leve", path: "/servicos/serralheria-leve" }
];

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-conservale-dark text-white w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Nossos Serviços</h2>
          <button 
            onClick={toggleSidebar} 
            className="p-1 rounded-full hover:bg-conservale-light md:hidden"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  className="block py-2 px-4 rounded hover:bg-white/10 transition-colors"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleSidebar();
                    }
                  }}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
