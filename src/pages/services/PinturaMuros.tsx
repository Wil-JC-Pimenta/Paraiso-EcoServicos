import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-01.jpg",
    alt: "Pintura de Muros - Imagem 1"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-02.jpg",
    alt: "Pintura de Muros - Imagem 2"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-03.jpg",
    alt: "Pintura de Muros - Imagem 3"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-04.jpg",
    alt: "Pintura de Muros - Imagem 4"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-05.jpg",
    alt: "Pintura de Muros - Imagem 5"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-06.jpg",
    alt: "Pintura de Muros - Imagem 6"
  },
  {
    src: "/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-07.jpg",
    alt: "Pintura de Muros - Imagem 7"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-08.jpg",
    alt: "Pintura de Muros - Imagem 8"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-09.jpg",
    alt: "Pintura de Muros - Imagem 9"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-10.jpg",
    alt: "Pintura de Muros - Imagem 10"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-11.jpg",
    alt: "Pintura de Muros - Imagem 11"
  },
  {
    src: "/img/pintura-de-muros-e-fachadas/pintura-de-muros-e-fachadas-12.jpg",
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
