import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { 
  Flower, 
  Leaf, 
  PaintRoller, 
  Brush, 
  ShieldCheck, 
  Sprout, 
  TreeDeciduous, 
  Lightbulb,
  Droplet,
  Wrench
} from "lucide-react";

const services = [
  {
    title: "Limpeza de Chácaras",
    description: "Seu refúgio merece estar sempre limpo e acolhedor. Cuidamos da limpeza geral da sua chácara com agilidade e responsabilidade, preparando o espaço para lazer, eventos ou descanso.",
    icon: Leaf,
    path: "/servicos/limpeza-de-chacaras"
  },
  {
    title: "Conservação de Lotes",
    description: "Evite o mato alto e o acúmulo de sujeira. Mantemos seu lote limpo, seguro e bem cuidado, com rotinas de conservação que valorizam o terreno e evitam problemas futuros.",
    icon: ShieldCheck,
    path: "/servicos/conservacao-de-lotes"
  },
  {
    title: "Pintura de Muros e Fachadas",
    description: "Deixe a primeira impressão ainda mais marcante. Renovamos muros e fachadas com técnicas modernas e tintas de qualidade, aumentando o valor visual e emocional do seu imóvel.",
    icon: PaintRoller,
    path: "/servicos/pintura-de-muros-e-fachadas"
  },
  {
    title: "Pintura de Cercas",
    description: "Um toque de cor e proteção para o seu perímetro. Pintamos cercas com acabamento profissional e durabilidade, protegendo e embelezando sua propriedade.",
    icon: Brush,
    path: "/servicos/pintura-de-cercas"
  },
  {
    title: "Pintura de Grades e Portões",
    description: "Detalhes que fazem toda a diferença. Tratamos grades e portões com os cuidados que eles merecem, garantindo estética e resistência contra o tempo.",
    icon: PaintRoller,
    path: "/servicos/pintura-de-grades-e-portoes"
  },
  {
    title: "Manutenção de Jardins",
    description: "Seu jardim, sempre vivo e encantador. Fazemos poda, limpeza, adubação e tudo que seu verde precisa para crescer saudável e harmonioso.",
    icon: Flower,
    path: "/servicos/manutencao-de-jardins"
  },
  {
    title: "Plantio de Mudas",
    description: "Traga mais vida ao seu espaço com o plantio de árvores e plantas ornamentais. Ajudamos na escolha ideal para o ambiente e fazemos o plantio com técnica e carinho.",
    icon: Sprout,
    path: "/servicos/plantio-de-mudas"
  },
  {
    title: "Reparos Elétricos",
    description: "Segurança e funcionalidade para sua residência ou propriedade rural. Executamos pequenos reparos elétricos com responsabilidade técnica e foco na prevenção.",
    icon: Lightbulb,
    path: "/servicos/reparos-eletricos"
  },
  {
    title: "Reparos Hidráulicos",
    description: "Nada de vazamentos, entupimentos ou dor de cabeça. Soluções rápidas e eficazes para a parte hidráulica do seu espaço.",
    icon: Droplet,
    path: "/servicos/reparos-hidraulicos"
  },
  {
    title: "Serralheria Leve",
    description: "Soluções sob medida em serralheria leve para portões, grades, suportes e estruturas simples, com acabamento profissional e entrega no prazo.",
    icon: Wrench,
    path: "/servicos/serralheria-leve"
  }
];

const Services = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="flex-1 md:ml-64 transition-all">
          <main className="py-8 px-4">
            <section className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl font-bold text-conservale-dark mb-6">Nossos Serviços</h1>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <p className="text-lg mb-4">
                  Na Paraíso EcoServiços, cada serviço é pensado para transformar, valorizar e cuidar do seu patrimônio com responsabilidade e atenção aos detalhes. Atuamos com agilidade, profissionalismo e aquele toque especial de quem entende do que faz.
                </p>
                <p className="text-lg">
                  Conheça nossas soluções e escolha cuidar do seu espaço com quem realmente se importa com o seu bem-estar e o visual da sua propriedade:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.path}
                    className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-start">
                      <div className="bg-conservale-dark text-white p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-conservale-light transition-colors">
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-conservale-dark mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-semibold mb-4">🔧 Seu espaço merece cuidado de verdade. Fale com a gente e agende uma visita técnica!</p>
                <p className="text-lg">📞 Atendimento personalizado e com orçamento sem compromisso.</p>
                <Link
                  to="/contato"
                  className="inline-block bg-conservale-dark text-white px-6 py-3 rounded-md hover:bg-conservale-light transition-colors mt-4 shadow-md"
                >
                  Entre em contato
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
