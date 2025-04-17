import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-01.jpg",
    alt: "Pintura de Cercas - Imagem 1"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-02.jpg",
    alt: "Pintura de Cercas - Imagem 2"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-03.jpg",
    alt: "Pintura de Cercas - Imagem 3"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-04.jpg",
    alt: "Pintura de Cercas - Imagem 4"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-05.jpg",
    alt: "Pintura de Cercas - Imagem 5"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-06.jpg",
    alt: "Pintura de Cercas - Imagem 6"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-07.jpg",
    alt: "Pintura de Cercas - Imagem 7"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-08.jpg",
    alt: "Pintura de Cercas - Imagem 8"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-09.jpg",
    alt: "Pintura de Cercas - Imagem 9"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-10.jpg",
    alt: "Pintura de Cercas - Imagem 10"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-11.jpg",
    alt: "Pintura de Cercas - Imagem 11"
  },
  {
    src: "/img/pintura-de-cercas/pintura-de-cercas-12.jpg",
    alt: "Pintura de Cercas - Imagem 12"
  }
];

const PinturaCercas = () => {
  return (
    <ServiceLayout title="Pintura de Cercas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Um toque de cor e proteção para o seu perímetro. Na Paraíso
          EcoServiços, pintamos cercas com acabamento profissional e
          durabilidade, protegendo e embelezando sua propriedade.
        </p>
        <p className="text-lg mb-4">
          Nossas técnicas especializadas de pintura para cercas incluem o
          preparo adequado do material (lixamento, remoção de ferrugem em cercas
          metálicas, aplicação de fundo preparador), seguido da aplicação de
          tintas específicas para cada tipo de material.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com cercas de madeira, metálicas, alambrados e outros
          materiais, sempre utilizando produtos adequados que aumentam a vida
          útil e mantêm a beleza por muito mais tempo.
        </p>
        <p className="text-lg mb-6">
          Além da estética, a pintura regular de cercas é fundamental para sua
          conservação, prevenindo danos causados por intempéries, umidade e
          exposição contínua ao sol.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PinturaCercas;
