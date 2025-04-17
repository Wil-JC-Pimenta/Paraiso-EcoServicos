
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Número de telefone no formato internacional
    const phoneNumber = "5531996825009";
    // Mensagem pré-definida (opcional)
    const message = "Olá! Gostaria de solicitar um orçamento.";
    
    // Cria a URL para a API do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-30"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </button>
  );
};

export default WhatsAppButton;
