import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-01.jpg",
    alt: "Reparos Hidráulicos - Imagem 1"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-02.jpg",
    alt: "Reparos Hidráulicos - Imagem 2"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-03.jpg",
    alt: "Reparos Hidráulicos - Imagem 3"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-04.jpg",
    alt: "Reparos Hidráulicos - Imagem 4"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-05.jpg",
    alt: "Reparos Hidráulicos - Imagem 5"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-06.jpg",
    alt: "Reparos Hidráulicos - Imagem 6"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-07.jpg",
    alt: "Reparos Hidráulicos - Imagem 7"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-08.jpg",
    alt: "Reparos Hidráulicos - Imagem 8"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-09.jpg",
    alt: "Reparos Hidráulicos - Imagem 9"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-10.jpg",
    alt: "Reparos Hidráulicos - Imagem 10"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-11.jpg",
    alt: "Reparos Hidráulicos - Imagem 11"
  },
  {
    src: "/public/img/reparos-hidraulicos/reparos-hidraulicos-12.jpg",
    alt: "Reparos Hidráulicos - Imagem 12"
  }
];

const ReparosHidraulicos = () => {
  return (
    <ServiceLayout title="Reparos Hidráulicos">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Nada de vazamentos, entupimentos ou dor de cabeça. Na Paraíso
          EcoServiços, oferecemos soluções rápidas e eficazes para a parte
          hidráulica do seu espaço.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe especializada realiza serviços como reparo de vazamentos,
          desentupimento de pias, ralos e vasos sanitários, substituição de
          torneiras e registros, instalação de chuveiros e duchas, e manutenção
          preventiva em toda a rede hidráulica.
        </p>
        <p className="text-lg mb-4">
          Utilizamos equipamentos modernos e técnicas eficientes para
          identificação precisa dos problemas, permitindo soluções menos
          invasivas e mais duradouras, minimizando transtornos e custos
          desnecessários.
        </p>
        <p className="text-lg mb-6">
          Também prestamos serviços de manutenção em bombas d'água, sistemas de
          irrigação e encanamentos externos em propriedades rurais, garantindo o
          funcionamento adequado de todo o sistema hidráulico da sua
          propriedade.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ReparosHidraulicos;
