import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?garden,maintenance&sig=${i}`,
  alt: `Manutenção de Jardins - Imagem ${i + 1}`
}));

const ManutencaoJardins = () => {
  return (
    <ServiceLayout title="Manutenção de Jardins">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Seu jardim, sempre vivo e encantador. Na Paraíso EcoServiços, fazemos poda, limpeza, adubação e tudo que seu verde precisa para crescer saudável e harmonioso.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada em jardinagem oferece serviços completos de manutenção que incluem corte de grama, poda técnica de arbustos e árvores, controle de pragas, adubação periódica e irrigação adequada.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com técnicas sustentáveis de jardinagem, priorizando o equilíbrio do ecossistema do seu jardim e utilizando produtos que não agridem o meio ambiente, mantendo seu espaço verde bonito e saudável.
        </p>
        <p className="text-lg mb-6">
          Oferecemos planos de manutenção regulares (semanal, quinzenal ou mensal), adaptados ao tamanho e às necessidades específicas do seu jardim, garantindo que ele esteja sempre impecável e exuberante.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ManutencaoJardins;
