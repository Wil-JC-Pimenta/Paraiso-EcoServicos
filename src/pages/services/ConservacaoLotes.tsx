import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Imagens locais da galeria (01 a 12)
const galleryImages = [
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-01.jpg",
    alt: "Conservação de Lotes - Imagem 1"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-02.jpg",
    alt: "Conservação de Lotes - Imagem 2"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-03.jpg",
    alt: "Conservação de Lotes - Imagem 3"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-04.jpg",
    alt: "Conservação de Lotes - Imagem 4"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-05.jpg",
    alt: "Conservação de Lotes - Imagem 5"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-06.jpg",
    alt: "Conservação de Lotes - Imagem 6"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-07.jpg",
    alt: "Conservação de Lotes - Imagem 7"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-08.jpg",
    alt: "Conservação de Lotes - Imagem 8"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-09.jpg",
    alt: "Conservação de Lotes - Imagem 9"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-10.jpg",
    alt: "Conservação de Lotes - Imagem 10"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-11.jpg",
    alt: "Conservação de Lotes - Imagem 11"
  },
  {
    src: "/public/img/conservacao-de-lotes/conservacao-de-lotes-12.jpg",
    alt: "Conservação de Lotes - Imagem 12"
  }
];

const ConservacaoLotes = () => {
  return (
    <ServiceLayout title="Conservação de Lotes">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Evite o mato alto e o acúmulo de sujeira. Na Paraíso EcoServiços,
          mantemos seu lote limpo, seguro e bem cuidado, com rotinas de
          conservação que valorizam o terreno e evitam problemas futuros.
        </p>
        <p className="text-lg mb-4">
          Nossos serviços de conservação de lotes incluem capina regular,
          remoção de vegetação invasora, controle de pragas, limpeza de resíduos
          e manutenção contínua que valoriza o seu patrimônio e atende às
          exigências municipais.
        </p>
        <p className="text-lg mb-4">
          Com um lote bem conservado, você evita multas, previne a proliferação
          de animais peçonhentos e valoriza sua propriedade, tornando-a mais
          atraente tanto para uso pessoal quanto para futuros compradores.
        </p>
        <p className="text-lg mb-6">
          Oferecemos planos de manutenção regulares ou serviços pontuais,
          adaptados às suas necessidades e ao tamanho do seu terreno.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ConservacaoLotes;
