import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?metalwork,welding&sig=${i}`,
  alt: `Serralheria Leve - Imagem ${i + 1}`
}));

const SerralheriaLeve = () => {
  return (
    <ServiceLayout title="Serralheria Leve">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Soluções sob medida em serralheria leve para portões, grades, suportes e estruturas simples. Na Paraíso EcoServiços, oferecemos serviços com acabamento profissional e entrega no prazo.
        </p>
        <p className="text-lg mb-4">
          Nossa equipe executa trabalhos como fabricação e instalação de pequenos portões, grades de proteção, corrimãos, suportes para plantas, pequenas estruturas metálicas e reparos em elementos metálicos já existentes.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com diferentes tipos de metais e acabamentos, oferecendo soluções personalizadas que atendem às suas necessidades específicas de segurança, funcionalidade e estética.
        </p>
        <p className="text-lg mb-6">
          Cada projeto é desenvolvido com atenção aos detalhes, desde a medição precisa até o acabamento final, incluindo tratamento anticorrosivo e pintura de qualidade que garantem durabilidade e beleza ao resultado.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default SerralheriaLeve;
