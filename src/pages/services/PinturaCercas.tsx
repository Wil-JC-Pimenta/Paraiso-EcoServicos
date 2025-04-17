import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?fence,painting&sig=${i}`,
  alt: `Pintura de Cercas - Imagem ${i + 1}`
}));

const PinturaCercas = () => {
  return (
    <ServiceLayout title="Pintura de Cercas">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Um toque de cor e proteção para o seu perímetro. Na Paraíso EcoServiços, pintamos cercas com acabamento profissional e durabilidade, protegendo e embelezando sua propriedade.
        </p>
        <p className="text-lg mb-4">
          Nossas técnicas especializadas de pintura para cercas incluem o preparo adequado do material (lixamento, remoção de ferrugem em cercas metálicas, aplicação de fundo preparador), seguido da aplicação de tintas específicas para cada tipo de material.
        </p>
        <p className="text-lg mb-4">
          Trabalhamos com cercas de madeira, metálicas, alambrados e outros materiais, sempre utilizando produtos adequados que aumentam a vida útil e mantêm a beleza por muito mais tempo.
        </p>
        <p className="text-lg mb-6">
          Além da estética, a pintura regular de cercas é fundamental para sua conservação, prevenindo danos causados por intempéries, umidade e exposição contínua ao sol.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default PinturaCercas;
