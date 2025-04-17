import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-01.jpg",
    alt: "Plantio de Mudas - Imagem 1"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-02.jpg",
    alt: "Plantio de Mudas - Imagem 2"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-03.jpg",
    alt: "Plantio de Mudas - Imagem 3"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-04.jpg",
    alt: "Plantio de Mudas - Imagem 4"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-05.jpg",
    alt: "Plantio de Mudas - Imagem 5"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-06.jpg",
    alt: "Plantio de Mudas - Imagem 6"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-07.jpg",
    alt: "Plantio de Mudas - Imagem 7"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-08.jpg",
    alt: "Plantio de Mudas - Imagem 8"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-09.jpg",
    alt: "Plantio de Mudas - Imagem 9"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-10.jpg",
    alt: "Plantio de Mudas - Imagem 10"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-11.jpg",
    alt: "Plantio de Mudas - Imagem 11"
  },
  {
    src: "/public/img/plantio-de-mudas/plantio-de-muda-12.jpg",
    alt: "Plantio de Mudas - Imagem 12"
  }
];

const PlantioMudas = () => {
  return (
    <ServiceLayout title="Plantio de Mudas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Traga mais vida ao seu espaço com o plantio de árvores e plantas
          ornamentais. Na Paraíso EcoServiços, ajudamos na escolha ideal para o
          ambiente e fazemos o plantio com técnica e carinho.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe oferece consultoria completa para seleção das espécies
          mais adequadas ao seu espaço, considerando fatores como clima, solo,
          incidência solar, necessidades de manutenção e o efeito paisagístico
          desejado.
        </p>
        <p className="text-lg mb-4">
          Realizamos o plantio técnico com preparação adequada do solo, adubação
          específica para cada espécie, e orientações completas sobre os
          cuidados necessários para o desenvolvimento saudável das plantas.
        </p>
        <p className="text-lg mb-6">
          Trabalhamos com uma grande variedade de espécies nativas e adaptadas,
          incluindo árvores frutíferas, plantas ornamentais, flores sazonais e
          espécies que atraem pássaros e borboletas, transformando seu espaço em
          um verdadeiro paraíso natural.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PlantioMudas;
