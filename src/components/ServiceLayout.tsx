
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ title, children }: ServiceLayoutProps) => {
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
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link to="/servicos" className="inline-flex items-center text-conservale-light hover:underline mb-4">
                  <ArrowLeft className="mr-1" size={16} />
                  Voltar para Serviços
                </Link>
                <h1 className="text-4xl font-bold text-conservale-dark">{title}</h1>
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceLayout;
