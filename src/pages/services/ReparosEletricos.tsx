import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?electrical,repair&sig=${i}`,
  alt: `Reparos Elétricos - Imagem ${i + 1}`
}));

const ReparosEletricos = () => {
  return (
    <ServiceLayout title="Reparos Elétricos">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Segurança e funcionalidade para sua residência ou propriedade rural. Na Paraíso EcoServiços, executamos pequenos reparos elétricos com responsabilidade técnica e foco na prevenção.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe realiza serviços como instalação e substituição de tomadas, interruptores, disjuntores, reparos em chuveiros elétricos, troca de lâmpadas e instalação de novas luminárias, além de identificação e solução de problemas como curtos-circuitos.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com foco total na segurança, seguindo as normas técnicas vigentes e utilizando materiais de qualidade que garantem durabilidade e confiabilidade nas instalações elétricas do seu imóvel.
        </p>
        <p className="text-lg mb-6">
          Além dos reparos, oferecemos orientações sobre consumo consciente, identificação de riscos elétricos e manutenção preventiva, ajudando você a evitar problemas futuros e garantir a segurança da sua família ou colaboradores.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ReparosEletricos;
