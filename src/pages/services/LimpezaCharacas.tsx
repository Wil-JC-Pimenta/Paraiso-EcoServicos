import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Imagens locais da galeria (01 a 12)
const galleryImages = [
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-01.jpg",
    alt: "Limpeza de Chácaras - Imagem 1"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-02.jpg",
    alt: "Limpeza de Chácaras - Imagem 2"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-03.jpg",
    alt: "Limpeza de Chácaras - Imagem 3"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-04.jpg",
    alt: "Limpeza de Chácaras - Imagem 4"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-05.jpg",
    alt: "Limpeza de Chácaras - Imagem 5"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-06.jpg",
    alt: "Limpeza de Chácaras - Imagem 6"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-07.jpg",
    alt: "Limpeza de Chácaras - Imagem 7"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-08.jpg",
    alt: "Limpeza de Chácaras - Imagem 8"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-09.jpg",
    alt: "Limpeza de Chácaras - Imagem 9"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-10.jpg",
    alt: "Limpeza de Chácaras - Imagem 10"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-11.jpg",
    alt: "Limpeza de Chácaras - Imagem 11"
  },
  {
    src: "/public/img/limpeza-de-chacaras/limpeza-de-chacara-12.jpg",
    alt: "Limpeza de Chácaras - Imagem 12"
  }
];

const LimpezaCharacas = () => {
  return (
    <ServiceLayout title="Limpeza de Chácaras">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Seu refúgio merece estar sempre limpo e acolhedor. Na Paraíso
          EcoServiços, cuidamos da limpeza geral da sua chácara com agilidade e
          responsabilidade, preparando o espaço para lazer, eventos ou descanso.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada realiza a remoção de mato alto, limpeza de
          áreas de lazer, remoção de entulhos e detritos, proporcionando um
          ambiente limpo e organizado para você aproveitar sua propriedade rural
          com tranquilidade.
        </p>
        <p className="text-lg mb-4">
          Utilizamos equipamentos modernos e técnicas eficientes que garantem um
          resultado impecável, respeitando a natureza e preservando as
          características naturais do seu espaço.
        </p>
        <p className="text-lg mb-6">
          Entre em contato conosco para agendar uma visita técnica e receber um
          orçamento personalizado para as necessidades específicas da sua
          chácara.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default LimpezaCharacas;
