
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-conservale-dark text-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Paraíso EcoServiços</h2>
            <p className="text-white/80">Residencial & Rural</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <address className="not-italic">
                Areia Grossa, Santana do Paraíso - MG
              </address>
            </div>
            
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <a 
                href="https://wa.me/5531996825009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-conservale-light transition-colors"
              >
                (31) 99682-5009
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Paraíso EcoServiços - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
