import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Eye, Heart, Leaf, Shield } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const About = () => {
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
              <h1 className="text-4xl font-bold text-conservale-dark mb-6">
                Sobre a Paraíso EcoServiços
              </h1>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <p className="text-lg mb-4">
                  A Paraíso EcoServiços Residencial & Rural nasceu com o
                  propósito de oferecer soluções sustentáveis e de alta
                  qualidade para o cuidado, manutenção e valorização de
                  propriedades residenciais e rurais. Atendemos com excelência
                  em toda a região do Vale do Aço, com uma equipe comprometida
                  em transformar espaços em verdadeiros paraísos.
                </p>
                <p className="text-lg mb-4">
                  Nosso diferencial está no atendimento personalizado, baseado
                  na escuta ativa, agilidade, transparência e foco total na
                  experiência do cliente. Valorizamos cada detalhe e aplicamos
                  as melhores práticas de marketing de relacionamento para criar
                  laços duradouros com nossos clientes, gerando confiança e
                  fidelização.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <ImageGallery
                  images={[
                    {
                      src: "/public/img/homepage/home-image.png",
                      alt: "Home Image"
                    }
                  ]}
                />
                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-conservale-dark text-white p-4 rounded-full mb-4">
                    <Leaf size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-conservale-dark mb-3">
                    Missão
                  </h2>
                  <p>
                    Oferecer serviços especializados e sustentáveis para
                    ambientes residenciais e rurais, com foco na qualidade, no
                    respeito ao meio ambiente e na total satisfação do cliente.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-conservale-dark text-white p-4 rounded-full mb-4">
                    <Eye size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-conservale-dark mb-3">
                    Visão
                  </h2>
                  <p>
                    Ser referência no Vale do Aço em serviços ecológicos e
                    personalizados para residências e propriedades rurais,
                    reconhecida pelo compromisso com o cliente, a natureza e a
                    inovação.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-conservale-dark text-white p-4 rounded-full mb-4">
                    <Heart size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-conservale-dark mb-3">
                    Valores
                  </h2>
                  <p>
                    Excelência no Atendimento, Sustentabilidade, Confiança,
                    Transparência, Inovação, Eficiência e Valorização Regional.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-conservale-dark mb-4">
                  Nossos Valores em Detalhe
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Excelência no Atendimento
                      </h3>
                      <p>
                        O cliente está no centro de tudo. Oferecemos suporte
                        humanizado e soluções sob medida.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                      <Leaf size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Sustentabilidade</h3>
                      <p>
                        Trabalhamos com práticas conscientes que respeitam o
                        meio ambiente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Confiança e Transparência
                      </h3>
                      <p>Relacionamentos construídos com ética e clareza.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Inovação e Eficiência
                      </h3>
                      <p>
                        Buscamos sempre as melhores ferramentas e técnicas para
                        atender com agilidade e qualidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start md:col-span-2">
                    <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">
                        Valorização Regional
                      </h3>
                      <p>
                        Atuamos com orgulho no Vale do Aço, respeitando a
                        cultura e as necessidades locais.
                      </p>
                    </div>
                  </div>
                </div>
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

export default About;
