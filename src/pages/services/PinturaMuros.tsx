import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-01.jpg",
    alt: "Pintura de Muros - Imagem 1"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-02.jpg",
    alt: "Pintura de Muros - Imagem 2"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-03.jpg",
    alt: "Pintura de Muros - Imagem 3"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-04.jpg",
    alt: "Pintura de Muros - Imagem 4"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-05.jpg",
    alt: "Pintura de Muros - Imagem 5"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-06.jpg",
    alt: "Pintura de Muros - Imagem 6"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-07.jpg",
    alt: "Pintura de Muros - Imagem 7"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-08.jpg",
    alt: "Pintura de Muros - Imagem 8"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-09.jpg",
    alt: "Pintura de Muros - Imagem 9"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-10.jpg",
    alt: "Pintura de Muros - Imagem 10"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-11.jpg",
    alt: "Pintura de Muros - Imagem 11"
  },
  {
    src: "/public/img/pintura-de-muros/pintura-de-muro-12.jpg",
    alt: "Pintura de Muros - Imagem 12"
  }
];

const PinturaMuros = () => {
  return (
    <ServiceLayout title="Pintura de Muros e Fachadas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Deixe a primeira impressão ainda mais marcante. Na Paraíso
          EcoServiços, renovamos muros e fachadas com técnicas modernas e tintas
          de qualidade, aumentando o valor visual e emocional do seu imóvel.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada realiza desde a preparação adequada da
          superfície (limpeza, aplicação de selador e correção de imperfeições)
          até a aplicação da pintura com acabamento perfeito e duradouro.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com tintas de alta qualidade, apropriadas para cada tipo
          de superfície e condição climática, garantindo maior durabilidade e
          resistência frente às intempéries do clima.
        </p>
        <p className="text-lg mb-6">
          Oferecemos consultoria de cores e acabamentos, ajudando você a
          escolher a melhor opção para valorizar sua propriedade e expressar sua
          personalidade através da aparência externa do seu imóvel.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PinturaMuros;
