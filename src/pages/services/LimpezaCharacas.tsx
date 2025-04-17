import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?garden,cleaning,farm&sig=${i}`,
  alt: `Limpeza de Chácaras - Imagem ${i + 1}`
}));

const LimpezaCharacas = () => {
  return (
    <ServiceLayout title="Limpeza de Chácaras">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Seu refúgio merece estar sempre limpo e acolhedor. Na Paraíso EcoServiços, cuidamos da limpeza geral da sua chácara com agilidade e responsabilidade, preparando o espaço para lazer, eventos ou descanso.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada realiza a remoção de mato alto, limpeza de áreas de lazer, remoção de entulhos e detritos, proporcionando um ambiente limpo e organizado para você aproveitar sua propriedade rural com tranquilidade.
        </p>
        <p className="text-lg mb-4">
          Utilizamos equipamentos modernos e técnicas eficientes que garantem um resultado impecável, respeitando a natureza e preservando as características naturais do seu espaço.
        </p>
        <p className="text-lg mb-6">
          Entre em contato conosco para agendar uma visita técnica e receber um orçamento personalizado para as necessidades específicas da sua chácara.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default LimpezaCharacas;
