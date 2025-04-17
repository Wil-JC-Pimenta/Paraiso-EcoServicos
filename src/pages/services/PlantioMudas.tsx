import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?planting,seedling&sig=${i}`,
  alt: `Plantio de Mudas - Imagem ${i + 1}`
}));

const PlantioMudas = () => {
  return (
    <ServiceLayout title="Plantio de Mudas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Traga mais vida ao seu espaço com o plantio de árvores e plantas ornamentais. Na Paraíso EcoServiços, ajudamos na escolha ideal para o ambiente e fazemos o plantio com técnica e carinho.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe oferece consultoria completa para seleção das espécies mais adequadas ao seu espaço, considerando fatores como clima, solo, incidência solar, necessidades de manutenção e o efeito paisagístico desejado.
        </p>
        <p className="text-lg mb-4">
          Realizamos o plantio técnico com preparação adequada do solo, adubação específica para cada espécie, e orientações completas sobre os cuidados necessários para o desenvolvimento saudável das plantas.
        </p>
        <p className="text-lg mb-6">
          Trabalhamos com uma grande variedade de espécies nativas e adaptadas, incluindo árvores frutíferas, plantas ornamentais, flores sazonais e espécies que atraem pássaros e borboletas, transformando seu espaço em um verdadeiro paraíso natural.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PlantioMudas;
