import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Imagens locais da galeria (01 a 12)
const galleryImages = [
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-01.jpg",
    alt: "Manutenção de Jardins - Imagem 1"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-02.jpg",
    alt: "Manutenção de Jardins - Imagem 2"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-03.jpg",
    alt: "Manutenção de Jardins - Imagem 3"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-04.jpg",
    alt: "Manutenção de Jardins - Imagem 4"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-05.jpg",
    alt: "Manutenção de Jardins - Imagem 5"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-06.jpg",
    alt: "Manutenção de Jardins - Imagem 6"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-07.jpg",
    alt: "Manutenção de Jardins - Imagem 7"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-08.jpg",
    alt: "Manutenção de Jardins - Imagem 8"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-09.jpg",
    alt: "Manutenção de Jardins - Imagem 9"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-10.jpg",
    alt: "Manutenção de Jardins - Imagem 10"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-11.jpg",
    alt: "Manutenção de Jardins - Imagem 11"
  },
  {
    src: "/public/img/manutencao-de-jardins/manutencao-de-jardins-12.jpg",
    alt: "Manutenção de Jardins - Imagem 12"
  }
];

const ManutencaoJardins = () => {
  return (
    <ServiceLayout title="Manutenção de Jardins">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Seu jardim, sempre vivo e encantador. Na Paraíso EcoServiços, fazemos
          poda, limpeza, adubação e tudo que seu verde precisa para crescer
          saudável e harmonioso.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada em jardinagem oferece serviços completos de
          manutenção que incluem corte de grama, poda técnica de arbustos e
          árvores, controle de pragas, adubação periódica e irrigação adequada.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com técnicas sustentáveis de jardinagem, priorizando o
          equilíbrio do ecossistema do seu jardim e utilizando produtos que não
          agridem o meio ambiente, mantendo seu espaço verde bonito e saudável.
        </p>
        <p className="text-lg mb-6">
          Oferecemos planos de manutenção regulares (semanal, quinzenal ou
          mensal), adaptados ao tamanho e às necessidades específicas do seu
          jardim, garantindo que ele esteja sempre impecável e exuberante.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ManutencaoJardins;
