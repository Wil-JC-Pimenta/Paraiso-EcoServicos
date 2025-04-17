import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?wall,painting,facade&sig=${i}`,
  alt: `Pintura de Muros e Fachadas - Imagem ${i + 1}`
}));

const PinturaMuros = () => {
  return (
    <ServiceLayout title="Pintura de Muros e Fachadas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Deixe a primeira impressão ainda mais marcante. Na Paraíso EcoServiços, renovamos muros e fachadas com técnicas modernas e tintas de qualidade, aumentando o valor visual e emocional do seu imóvel.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada realiza desde a preparação adequada da superfície (limpeza, aplicação de selador e correção de imperfeições) até a aplicação da pintura com acabamento perfeito e duradouro.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com tintas de alta qualidade, apropriadas para cada tipo de superfície e condição climática, garantindo maior durabilidade e resistência frente às intempéries do clima.
        </p>
        <p className="text-lg mb-6">
          Oferecemos consultoria de cores e acabamentos, ajudando você a escolher a melhor opção para valorizar sua propriedade e expressar sua personalidade através da aparência externa do seu imóvel.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PinturaMuros;
