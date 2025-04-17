import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = [
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-01.jpg",
    alt: "Reparos Elétricos - Imagem 1"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-02.jpg",
    alt: "Reparos Elétricos - Imagem 2"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-03.jpg",
    alt: "Reparos Elétricos - Imagem 3"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-04.jpg",
    alt: "Reparos Elétricos - Imagem 4"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-05.jpg",
    alt: "Reparos Elétricos - Imagem 5"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-06.jpg",
    alt: "Reparos Elétricos - Imagem 6"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-07.jpg",
    alt: "Reparos Elétricos - Imagem 7"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-08.jpg",
    alt: "Reparos Elétricos - Imagem 8"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-09.jpg",
    alt: "Reparos Elétricos - Imagem 9"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-10.jpg",
    alt: "Reparos Elétricos - Imagem 10"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-11.jpg",
    alt: "Reparos Elétricos - Imagem 11"
  },
  {
    src: "/public/img/reparos-eletricos/reparos-eletricos-12.jpg",
    alt: "Reparos Elétricos - Imagem 12"
  }
];

const ReparosEletricos = () => {
  return (
    <ServiceLayout title="Reparos Elétricos">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Segurança e funcionalidade para sua residência ou propriedade rural.
          Na Paraíso EcoServiços, executamos pequenos reparos elétricos com
          responsabilidade técnica e foco na prevenção.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe realiza serviços como instalação e substituição de
          tomadas, interruptores, disjuntores, reparos em chuveiros elétricos,
          troca de lâmpadas e instalação de novas luminárias, além de
          identificação e solução de problemas como curtos-circuitos.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com foco total na segurança, seguindo as normas técnicas
          vigentes e utilizando materiais de qualidade que garantem durabilidade
          e confiabilidade nas instalações elétricas do seu imóvel.
        </p>
        <p className="text-lg mb-6">
          Além dos reparos, oferecemos orientações sobre consumo consciente,
          identificação de riscos elétricos e manutenção preventiva, ajudando
          você a evitar problemas futuros e garantir a segurança da sua família
          ou colaboradores.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">
        Galeria de Imagens
      </h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ReparosEletricos;
