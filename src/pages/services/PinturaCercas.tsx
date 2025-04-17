import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-01.jpg",
    alt: "Pintura de Cercas - Imagem 1"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-02.jpg",
    alt: "Pintura de Cercas - Imagem 2"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-03.jpg",
    alt: "Pintura de Cercas - Imagem 3"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-04.jpg",
    alt: "Pintura de Cercas - Imagem 4"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-05.jpg",
    alt: "Pintura de Cercas - Imagem 5"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-06.jpg",
    alt: "Pintura de Cercas - Imagem 6"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-07.jpg",
    alt: "Pintura de Cercas - Imagem 7"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-08.jpg",
    alt: "Pintura de Cercas - Imagem 8"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-09.jpg",
    alt: "Pintura de Cercas - Imagem 9"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-10.jpg",
    alt: "Pintura de Cercas - Imagem 10"
  },
  {
    src: "/public/img/pintura-de-cercas/pintura-de-cerca-11.jpg",
    alt: "Pintura de Cercas - Imagem 11"
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
