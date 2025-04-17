import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-01.jpg",
    alt: "Pintura de Grades - Imagem 1"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-02.jpg",
    alt: "Pintura de Grades - Imagem 2"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-03.jpg",
    alt: "Pintura de Grades - Imagem 3"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-04.jpg",
    alt: "Pintura de Grades - Imagem 4"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-05.jpg",
    alt: "Pintura de Grades - Imagem 5"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-06.jpg",
    alt: "Pintura de Grades - Imagem 6"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-07.jpg",
    alt: "Pintura de Grades - Imagem 7"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-08.jpg",
    alt: "Pintura de Grades - Imagem 8"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-09.jpg",
    alt: "Pintura de Grades - Imagem 9"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-10.jpg",
    alt: "Pintura de Grades - Imagem 10"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-11.jpg",
    alt: "Pintura de Grades - Imagem 11"
  },
  {
    src: "/public/img/pintura-de-grades/pintura-de-grade-12.jpg",
    alt: "Pintura de Grades - Imagem 12"
  }
];

const PinturaGrades = () => {
  return (
    <ServiceLayout title="Pintura de Grades e Portões">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Detalhes que fazem toda a diferença. Na Paraíso EcoServiços, tratamos
          grades e portões com os cuidados que eles merecem, garantindo estética
          e resistência contra o tempo.
        </p>
        <p className="text-lg mb-4">
          Nosso processo de pintura para grades e portões inicia com uma
          preparação meticulosa da superfície, incluindo remoção de ferrugem,
          lixamento e aplicação de fundo anticorrosivo, seguido de pintura com
          produtos específicos para metais.
        </p>
        <p className="text-lg mb-4">
          Utilizamos técnicas avançadas e produtos de alta qualidade que
          garantem uma pintura uniforme, sem escorrimentos, com excelente
          cobertura e alta durabilidade, mesmo em áreas expostas às condições
          climáticas adversas.
        </p>
        <p className="text-lg mb-6">
          Além de renovar a aparência, a pintura adequada de grades e portões
          aumenta significativamente sua vida útil, protegendo contra corrosão e
          desgaste, e valoriza a estética geral da sua propriedade.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PinturaGrades;
