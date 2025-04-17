const MainContent = () => {
  return (
    <main className="py-8 px-4">
      <section id="inicio" className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-conservale-dark mb-6">
          Paraíso EcoServiços - Soluções em Manutenção
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">
            Bem-vindo à <strong>Paraíso EcoServiços</strong>, sua parceira
            completa em manutenção residencial e rural. Oferecemos soluções
            personalizadas para garantir o bom funcionamento e a conservação do
            seu patrimônio.
          </p>
          <img
            src="/lovable-uploads/1ccc3cc2-61dd-4341-811a-1e4c666ae1fe.png"
            alt="Paraíso EcoServiços - Logo"
            className="mx-auto max-w-xs mb-4"
          />
          <p className="mb-4">
            Com profissionais qualificados e anos de experiência no mercado,
            entregamos serviços de
            <strong> alta qualidade</strong> que atendem às necessidades
            específicas de cada cliente.
          </p>
        </div>
        <div className="mt-8 bg-gray-200 rounded-lg p-4">
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <img
              src="/public/img/homepage/home-image.png"
              alt="Paraíso EcoServiços - Logo"
              className="mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-auto h-auto mb-4"
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Sobre Nós
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="mb-4">
            A Paraíso EcoServiços nasceu da paixão por soluções eficientes e
            trabalho de qualidade. Há mais de 10 anos no mercado, nossa missão é
            proporcionar tranquilidade e satisfação através de serviços de
            manutenção confiáveis e duradouros.
          </p>
          <p className="mb-4">
            Nosso compromisso com a <strong>excelência</strong> e{" "}
            <strong>atendimento personalizado</strong> nos tornou referência no
            setor de manutenção residencial e rural na região.
          </p>
        </div>
      </section>

      <section id="servicos" className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Nossos Serviços
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-conservale-dark">
              Manutenção Residencial
            </h3>
            <p>
              Cuidamos da sua casa com serviços completos de manutenção. Desde
              pequenos reparos até reformas mais amplas, garantimos que seu lar
              esteja sempre em perfeitas condições.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-conservale-dark">
              Manutenção Rural
            </h3>
            <p>
              Soluções especializadas para propriedades rurais, incluindo
              manutenção de cercas, sistemas de irrigação, estruturas e
              equipamentos específicos para o campo.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-conservale-dark">
              Instalações Elétricas
            </h3>
            <p>
              Serviços elétricos seguros e eficientes, desde novas instalações
              até reparos, sempre seguindo as normas técnicas e garantindo a
              segurança da sua família ou negócio.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-conservale-dark">
              Encanamento e Hidráulica
            </h3>
            <p>
              Resolvemos qualquer problema hidráulico com rapidez e eficiência,
              evitando danos maiores e garantindo o funcionamento adequado de
              todo o sistema de água.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#contato"
            className="inline-block bg-conservale-dark text-white px-6 py-3 rounded-md hover:bg-conservale-light transition-colors shadow-md"
          >
            Solicite um orçamento
          </a>
        </div>
      </section>

      {/* New Marketing Content */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Cuidamos da Sua Chácara Como Se Fosse Nossa!
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            <strong>
              Você tem uma chácara, lote ou casa na região de Ipatinga e Vale do
              Aço e precisa de serviços de confiança?
            </strong>
          </p>
          <div className="mb-4">
            <p className="font-semibold mb-2">Oferecemos:</p>
            <ul className="list-none pl-4">
              <li className="mb-1">
                ✅ Limpeza e conservação de chácaras e lotes
              </li>
              <li className="mb-1">
                ✅ Pintura de muros, cercas, grades e portões
              </li>
              <li className="mb-1">
                ✅ Manutenção de jardins e plantio de mudas
              </li>
              <li className="mb-1">✅ Reparos elétricos e hidráulicos</li>
              <li className="mb-1">
                ✅ Serralheria leve com acabamento profissional
              </li>
            </ul>
          </div>
          <p className="font-semibold">
            💪 Serviço com agilidade, capricho e preço justo.
          </p>
          <p className="font-semibold">
            📞 Chama no WhatsApp e faça seu orçamento sem compromisso!
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Soluções Completas para seu Espaço no Vale do Aço
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <p className="mb-4">
            <strong>
              🚧 Olá, pessoal do Vale do Aço! Está precisando dar aquele trato
              na chácara ou lote?
            </strong>
          </p>
          <div className="mb-4">
            <p className="font-semibold mb-2">
              Nós fazemos de tudo um pouco pra deixar seu espaço em dia:
            </p>
            <ul className="list-none pl-4">
              <li className="mb-1">🧹 Limpeza geral</li>
              <li className="mb-1">🎨 Pintura de muros, cercas e grades</li>
              <li className="mb-1">🌱 Jardinagem e plantio de mudas</li>
              <li className="mb-1">
                💡 Conserto de tomadas, chuveiros, lâmpadas
              </li>
              <li className="mb-1">🚿 Reparos hidráulicos</li>
              <li className="mb-1">
                🛠️ Pequenos serviços de serralheria (portões, grades, corrimão)
              </li>
            </ul>
          </div>
          <p className="mb-2 font-semibold">
            👷‍♂️ Profissionais da região, com compromisso e preço justo.
          </p>
          <p className="mb-2">
            📍Atendemos Ipatinga, Coronel Fabriciano, Timóteo e arredores.
          </p>
          <p className="font-semibold">✅ Orçamento grátis!</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Multi Serviços para sua Propriedade
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mb-6">
          <h3 className="text-2xl font-bold mb-3">
            🛠️ MULTI SERVIÇOS - Tudo para sua chácara, lote ou residência! 🛠️
          </h3>
          <p className="mb-4">
            <strong>📍 Ipatinga e região do Vale do Aço</strong>
          </p>
          <p className="mb-4">Oferecemos serviços com qualidade e confiança:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <p>🔹 Limpeza de chácaras e lotes</p>
            <p>🔹 Pintura de muros, grades, portões</p>
            <p>🔹 Manutenção de jardins e plantio de mudas</p>
            <p>🔹 Reparos elétricos (tomadas, bombas, iluminação externa)</p>
            <p>🔹 Reparos hidráulicos</p>
            <p>🔹 Serralheria leve: corrimão, portões, cercas e mais</p>
          </div>
          <p className="font-bold mb-2">🔧 Um contato, várias soluções!</p>
          <p className="font-semibold">
            📞 Ligue ou mande mensagem e agende uma visita!
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Valorize seu Espaço com Segurança
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4">
            🏡 Valorize seu espaço com quem entende do assunto!
          </h3>
          <p className="mb-4">
            Você sabia que uma manutenção simples pode evitar grandes prejuízos
            e ainda deixar seu imóvel muito mais bonito e seguro?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <p>💡 Troca de lâmpadas e tomadas</p>
            <p>🧼 Limpeza de lotes e chácaras</p>
            <p>🌿 Jardim renovado com plantio de mudas</p>
            <p>🎨 Pintura de muros, cercas, portões</p>
            <p>🔩 Serralheria leve com acabamento impecável</p>
          </div>
          <p className="mb-2">📍Atendimento em Ipatinga e todo Vale do Aço</p>
          <p className="font-bold mb-4">
            ✅ Confiança, qualidade e compromisso!
          </p>
          <p className="font-semibold">Chame agora e receba seu orçamento.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Serviços Profissionais para sua Propriedade
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold mb-4">
            ✅ Serviços de manutenção e conservação em Ipatinga e Vale do Aço
          </h3>
          <p className="mb-4 font-semibold">Especializados em:</p>
          <ul className="mb-4 list-disc pl-8">
            <li className="mb-2">Limpeza de chácaras e lotes</li>
            <li className="mb-2">Jardinagem e plantio de mudas</li>
            <li className="mb-2">
              Pintura de muros, fachadas, cercas e grades
            </li>
            <li className="mb-2">Reparos elétricos e hidráulicos</li>
            <li className="mb-2">
              Serralheria leve (grades, portões, corrimão)
            </li>
          </ul>
          <p className="mb-2">
            🔧 Trabalhamos com atenção aos detalhes e foco no resultado.
          </p>
          <p className="mb-4">
            🕒 Agendamentos rápidos e atendimento personalizado.
          </p>
          <p className="font-semibold">
            📞 Entre em contato agora e solicite seu orçamento!
          </p>
        </div>
      </section>

      <section id="contato" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-conservale-dark mb-6">
          Entre em Contato
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Estamos prontos para atender suas necessidades de manutenção. Entre
            em contato conosco pelos canais abaixo para agendar uma visita
            técnica ou solicitar um orçamento sem compromisso.
          </p>
          <p className="mb-4">
            Nossa equipe de atendimento está disponível de segunda a sexta, das
            8h às 18h, e aos sábados, das 8h às 12h.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
