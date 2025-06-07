
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Users, Building, Handshake, Globe, Leaf, Camera, BookOpen } from "lucide-react";

const Ethics = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-[#2545B8] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2545B8]">Ética e Valores</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos princípios e diretrizes que orientam cada decisão e ação do Grupo RedeCompras
          </p>
        </section>

        {/* Propósito Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#2545B8] mb-10 text-center">Nosso Propósito</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0d7c3d]">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-[#0d7c3d] mr-3" />
                <h3 className="text-xl font-bold text-[#0d7c3d]">Nosso Negócio</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Promover Experiências, Relacionamentos e Ambiência
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#2545B8]">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-[#2545B8] mr-3" />
                <h3 className="text-xl font-bold text-[#2545B8]">Nossa Missão</h3>
              </div>
              <p className="text-gray-700">
                Gerar experiências no consumo promovendo o bem estar, a conveniência e a inovação, 
                construindo assim relacionamentos duradouros com clientes, colaboradores, parceiros 
                e a comunidade ao nosso redor.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0d7c3d]">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-[#0d7c3d] mr-3" />
                <h3 className="text-xl font-bold text-[#0d7c3d]">Nossa Visão</h3>
              </div>
              <p className="text-gray-700">
                Alcançar a liderança entre as empresas paraibanas em excelência de atendimento 
                e resultados sustentáveis.
              </p>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#2545B8] mb-10 text-center">Nossos Valores</h2>
          <div className="grid gap-6">
            {[
              {
                title: "1. Excelência no Atendimento",
                description: "Buscamos encantar nossos clientes em cada detalhe, proporcionando uma experiência de compras única combinando qualidade, inovação e atenção genuína às suas necessidades."
              },
              {
                title: "2. Integridade",
                description: "A integridade é nosso compromisso absoluto: fazemos sempre o certo, garantindo transparência e confiança em cada interação."
              },
              {
                title: "3. Cuidado e Valorização das Pessoas",
                description: "Cada pessoa é essencial para nosso sucesso – cuidamos, respeitamos e valorizamos quem faz parte da nossa jornada."
              },
              {
                title: "4. Responsabilidade Socioambiental",
                description: "Reduzir, reutilizar e reciclar começa com você: contribua para um futuro mais sustentável e faça a diferença."
              },
              {
                title: "5. Humildade e Respeito",
                description: "Valorizamos o respeito e a humildade, aprendendo com cada pessoa e fortalecendo nosso crescimento por meio do trabalho em equipe."
              },
              {
                title: "6. Crença em Deus",
                description: "Nossa fé em Deus nos permite caminhar com confiança, sabendo que cada passo é guiado por um propósito maior."
              },
              {
                title: "7. Atitude de Dono",
                description: "Agimos com paixão e responsabilidade, cuidando de cada detalhe e fazendo acontecer com propósito e dedicação."
              }
            ].map((valor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#2545B8] hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-[#2545B8] mb-3">{valor.title}</h3>
                <p className="text-gray-700 leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diretrizes Éticas Section */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-10 w-10 text-[#2545B8] mr-4" />
              <h2 className="text-3xl font-bold text-[#2545B8]">Diretrizes Éticas e Conduta Corporativa</h2>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-[#0d7c3d] mb-4">1. Introdução</h3>
              <p className="text-gray-700 leading-relaxed">
                O compromisso com a ética, a honestidade, a transparência e a justiça são prioridade. 
                Acima de tudo respeitamos às leis e regulamentações, tratando com dignidade e clareza 
                nossos clientes, colaboradores, fornecedores, concorrentes, órgãos públicos, imprensa 
                e toda a comunidade. O relacionamento entre todos deve ser capaz de reforçar nossa base 
                para que nossa história permaneça íntegra e forte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Clientes */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-[#2545B8] mr-3" />
                  <h3 className="text-xl font-bold text-[#2545B8]">2. Clientes</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  A relação com nossos clientes deve ser sempre pautada ao respeito e cordialidade. 
                  Dentro de nossas lojas, todo colaborador deve saber se portar como um verdadeiro anfitrião.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Prestar informações verdadeiras com agilidade e transparência</p>
                  <p>• Comprometer-se com os direitos do consumidor</p>
                  <p>• Combater qualquer tipo de violência, discriminação e preconceito</p>
                  <p>• Entender as necessidades dos clientes</p>
                </div>
              </div>

              {/* Fornecedores */}
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-[#0d7c3d] mr-3" />
                  <h3 className="text-xl font-bold text-[#0d7c3d]">3. Fornecedores</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Queremos que nossos fornecedores apliquem os mesmos princípios estabelecidos 
                  neste Código de Ética e Conduta.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Cumprir todas as leis e diretrizes aplicáveis</p>
                  <p>• Conduzir negócios com ética e honestidade</p>
                  <p>• Tolerância zero a suborno ou corrupção</p>
                  <p>• Respeitar direitos humanos e normas trabalhistas</p>
                  <p>• Proteger informações confidenciais (LGPD)</p>
                </div>
              </div>

              {/* Concorrentes */}
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-purple-600">4. Concorrentes</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Promovemos a concorrência justa e leal em todos os nossos negócios.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Respeito aos concorrentes</p>
                  <p>• Proibido comentários depreciativos</p>
                  <p>• Proteção de informações proprietárias</p>
                  <p>• Não divulgação de informações comerciais</p>
                </div>
              </div>

              {/* Administração Pública */}
              <div className="bg-red-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-bold text-red-600">5. Administração Pública</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Interação ética e transparente com a administração pública, repudiando qualquer ato de corrupção.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Proibido dar ou receber pagamentos/presentes</p>
                  <p>• Tratamento respeitoso com órgãos públicos</p>
                  <p>• Neutralidade política</p>
                  <p>• Registro de reuniões em ata</p>
                </div>
              </div>

              {/* Imprensa e Mídias Sociais */}
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Camera className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-orange-600">6. Imprensa e Mídias Sociais</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cuidamos da nossa relação com a imprensa e exposição nas redes sociais para manter nossa credibilidade.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Proteção da imagem da empresa</p>
                  <p>• Entrevistas apenas com autorização</p>
                  <p>• Proteção de informações de clientes</p>
                  <p>• Comunicação oficial pela diretoria</p>
                </div>
              </div>

              {/* Meio Ambiente */}
              <div className="bg-emerald-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-bold text-emerald-600">7. Meio Ambiente</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Preservação do meio ambiente e uso sustentável dos recursos naturais na condução dos negócios.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Questionar atividades não sustentáveis</p>
                  <p>• Relatar riscos ambientais imediatamente</p>
                  <p>• Evitar desperdício de recursos naturais</p>
                  <p>• Promover reciclagem eficaz</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-[#0d7c3d] mb-4">8. Responsabilidade Social</h3>
              <p className="text-gray-700 leading-relaxed">
                Fazemos parte de uma comunidade, por isso devemos estar atentos às demandas e oportunidades 
                que surjam para melhor servi-la. Acreditamos que a dedicação às causas que promovem 
                transformações sociais é a maneira mais direta de fazer a diferença. A oportunidade de 
                gerar emprego, o interesse em contribuir com o desenvolvimento e a prática de condutas 
                honestas e íntegras são formas de demonstrar nossa presença e preocupação com a sociedade.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-[#2545B8] text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Compromisso com a Excelência</h2>
          <p className="text-lg opacity-90">
            Estes valores e diretrizes não são apenas palavras, mas o fundamento de todas as nossas ações 
            e decisões. Juntos, construímos um futuro mais ético e sustentável.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Ethics;
