import ServiceLayout from "@/components/ServiceLayout";
import ImageGallery from "@/components/ImageGallery";

// Sample images for the gallery
const galleryImages = Array(12).fill(null).map((_, i) => ({
  src: `https://source.unsplash.com/random/800x600?lot,maintenance,land&sig=${i}`,
  alt: `Conservação de Lotes - Imagem ${i + 1}`
}));

const ConservacaoLotes = () => {
  return (
    <ServiceLayout title="Conservação de Lotes">
      <div className="mb-8">
        <p className="text-lg mb-4">
          Evite o mato alto e o acúmulo de sujeira. Na Paraíso EcoServiços, mantemos seu lote limpo, seguro e bem cuidado, com rotinas de conservação que valorizam o terreno e evitam problemas futuros.
        </p>
        <p className="text-lg mb-4">
          Nossos serviços de conservação de lotes incluem capina regular, remoção de vegetação invasora, controle de pragas, limpeza de resíduos e manutenção contínua que valoriza o seu patrimônio e atende às exigências municipais.
        </p>
        <p className="text-lg mb-4">
          Com um lote bem conservado, você evita multas, previne a proliferação de animais peçonhentos e valoriza sua propriedade, tornando-a mais atraente tanto para uso pessoal quanto para futuros compradores.
        </p>
        <p className="text-lg mb-6">
          Oferecemos planos de manutenção regulares ou serviços pontuais, adaptados às suas necessidades e ao tamanho do seu terreno.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-conservale-dark mb-4">Galeria de Imagens</h2>
      <ImageGallery images={galleryImages} />
    </ServiceLayout>
  );
};

export default ConservacaoLotes;
