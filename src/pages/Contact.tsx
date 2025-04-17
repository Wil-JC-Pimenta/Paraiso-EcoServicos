
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="flex-1 md:ml-64 transition-all">
          <main className="py-8 px-4">
            <section className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl font-bold text-conservale-dark mb-6">Fale com a Gente! 🌿</h1>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <p className="text-lg mb-4">
                  A sua chácara, lote ou propriedade merece o cuidado de quem entende e ama o que faz. Fale com a Paraíso EcoServiços Residencial & Rural e solicite agora mesmo seu orçamento sem compromisso!
                </p>
                <p className="text-lg mb-0">
                  Estamos prontos para te atender com agilidade, atenção e um serviço de qualidade que valoriza cada detalhe do seu espaço.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-conservale-dark mb-4">Entre em Contato</h2>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="flex items-start mb-4">
                      <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Endereço</h3>
                        <p>Chácara Areia Grossa – Santana do Paraíso (MG)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">WhatsApp</h3>
                        <p>(31) 99682-5009</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                        <Instagram size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Instagram</h3>
                        <p>@paraiso.ecoservicos</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-conservale-dark text-white p-2 rounded-full mr-4 flex-shrink-0">
                        <Facebook size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Facebook</h3>
                        <p>Paraíso EcoServiços</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-conservale-dark mb-4">Envie uma Mensagem</h2>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    {submitted ? (
                      <div className="text-center py-4">
                        <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                          <p className="font-semibold">Mensagem enviada com sucesso!</p>
                          <p>Entraremos em contato o mais breve possível.</p>
                        </div>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="bg-conservale-dark text-white px-6 py-2 rounded-md hover:bg-conservale-light transition-colors"
                        >
                          Enviar nova mensagem
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block mb-1 font-medium">Nome</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="phone" className="block mb-1 font-medium">Telefone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          />
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="subject" className="block mb-1 font-medium">Assunto</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          >
                            <option value="">Selecione um assunto</option>
                            <option value="orçamento">Solicitar Orçamento</option>
                            <option value="dúvida">Dúvida sobre serviços</option>
                            <option value="visita">Agendar Visita</option>
                            <option value="outro">Outro assunto</option>
                          </select>
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="message" className="block mb-1 font-medium">Mensagem</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md"
                          ></textarea>
                        </div>
                        
                        <button
                          type="submit"
                          className="w-full bg-conservale-dark text-white px-6 py-2 rounded-md hover:bg-conservale-light transition-colors"
                        >
                          Enviar Mensagem
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-conservale-dark mb-4">Localização</h2>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Mapa será carregado aqui
                  </div>
                </div>
                <p className="text-center">
                  Atendemos em toda a região do Vale do Aço: Ipatinga, Coronel Fabriciano, Timóteo e cidades adjacentes.
                </p>
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

export default Contact;
