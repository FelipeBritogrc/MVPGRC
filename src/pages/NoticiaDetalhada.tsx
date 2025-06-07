
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";

const NEWS = [
  {
    id: "1",
    title: "Nova Loja Inaugurada em Manaíra",
    subtitle: "Expansão do Grupo RedeCompras traz novas oportunidades para a comunidade",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    summary: "A RedeCompras celebrou a inauguração da nova unidade em Manaíra, trazendo ofertas e oportunidades para toda a comunidade.",
    content: `A RedeCompras celebrou a inauguração da nova unidade em Manaíra, João Pessoa, marcando mais um importante marco na expansão da empresa na Paraíba. O evento reuniu autoridades locais, colaboradores e clientes em uma cerimônia que destacou o compromisso da empresa com o desenvolvimento da região.

A nova loja foi projetada seguindo os mais modernos conceitos de varejo, oferecendo uma experiência de compra diferenciada aos clientes. Com área total de 2.500m², o espaço conta com corredores amplos, iluminação LED eficiente e setores organizados para facilitar a navegação dos consumidores.

Durante a inauguração, foram oferecidas promoções especiais para os primeiros clientes, além de atividades para toda a família. A presença de parceiros estratégicos reforçou a importância desta nova unidade para o fortalecimento da rede de relacionamentos comerciais da empresa.

O projeto arquitetônico da loja incorpora tecnologias sustentáveis, incluindo sistema de reaproveitamento de água e painéis solares para redução do consumo energético. Estas iniciativas fazem parte do compromisso do Grupo RedeCompras com a responsabilidade ambiental.

A nova unidade gerou aproximadamente 80 novos empregos diretos para a comunidade local, desde posições operacionais até cargos de liderança. Todos os colaboradores passaram por treinamento especializado para garantir o alto padrão de atendimento que caracteriza a marca.`,
    date: "22/05/2024",
    readTime: "5 min",
    author: "Equipe de Comunicação"
  },
  {
    id: "2",
    title: "Corrida Saudável reuniu mais de 800 participantes",
    subtitle: "Evento anual promove saúde e bem-estar na comunidade paraibana",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80",
    summary: "Evento promovido pelo Grupo RedeCompras em apoio à saúde e bem-estar de funcionários e clientes.",
    content: `A tradicional Corrida Saudável do Grupo RedeCompras superou todas as expectativas ao reunir mais de 800 participantes em sua edição 2024. O evento, que aconteceu no Parque Solon de Lucena, em João Pessoa, demonstrou mais uma vez o comprometimento da empresa com a promoção da saúde e qualidade de vida.

A corrida contou com percursos de 5km e 10km, atendendo tanto corredores iniciantes quanto atletas mais experientes. Além dos colaboradores da empresa, o evento atraiu clientes, familiares e membros da comunidade, criando um ambiente de confraternização e esporte.

Durante a manhã do evento, foram realizadas atividades complementares como aulas de alongamento, avaliação nutricional gratuita e distribuição de materiais educativos sobre alimentação saudável. Estas ações reforçaram o caráter educativo da iniciativa.

A premiação contemplou os três primeiros colocados de cada categoria, além de reconhecimentos especiais para o participante mais idoso, a maior família participante e outros prêmios que valorizaram a participação e o espírito esportivo.

Os recursos arrecadados com as inscrições foram destinados a instituições beneficentes da região, demonstrando como o esporte pode ser uma ferramenta de transformação social. Este aspecto solidário tem sido uma marca registrada do evento ao longo de suas edições.`,
    date: "12/03/2024",
    readTime: "4 min",
    author: "Departamento de RH"
  },
  {
    id: "3",
    title: "Campanha do Alimento bate recorde de arrecadação",
    subtitle: "Solidariedade da comunidade resulta em maior doação da história da empresa",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    summary: "Solidariedade e colaboração marcaram a campanha deste ano. Confira os resultados!",
    content: `A Campanha do Alimento 2023 da RedeCompras alcançou resultados históricos, arrecadando mais de 15 toneladas de alimentos não perecíveis e produtos de higiene. Este resultado representa um crescimento de 40% em relação ao ano anterior, demonstrando o crescente engajamento da comunidade com as ações sociais da empresa.

A campanha, que durou três meses, mobilizou todas as unidades da rede, colaboradores e clientes em uma grande corrente de solidariedade. Pontos de coleta foram estrategicamente posicionados nas lojas, facilitando a participação dos doadores e maximizando os resultados.

Os itens arrecadados foram cuidadosamente separados e distribuídos para 15 instituições beneficentes da Grande João Pessoa, incluindo creches, asilos e organizações que atendem famílias em situação de vulnerabilidade social. Cada instituição recebeu uma cesta personalizada de acordo com suas necessidades específicas.

Durante a entrega das doações, equipes da RedeCompras acompanharam de perto a distribuição, garantindo que os alimentos chegassem diretamente às famílias que mais precisam. Momentos emocionantes marcaram estas visitas, reforçando o impacto positivo da iniciativa.

O sucesso da campanha motivou a empresa a planejar ações ainda mais ambiciosas para 2024, incluindo parcerias com novos atores sociais e a expansão do programa para outras regiões de atuação da empresa.`,
    date: "28/07/2023",
    readTime: "4 min",
    author: "Setor de Responsabilidade Social"
  }
];

const RELATED_NEWS = [
  { id: "2", title: "Corrida Saudável reuniu mais de 800 participantes", date: "12/03/2024" },
  { id: "3", title: "Campanha do Alimento bate recorde de arrecadação", date: "28/07/2023" },
];

const NoticiaDetalhada = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticia = NEWS.find(item => item.id === id);

  if (!noticia) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col justify-center items-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#282e76] mb-2">Notícia não encontrada</h2>
            <button onClick={() => navigate('/newsletter')} className="text-[#0d7c3d] font-semibold mt-2 hover:underline">
              Voltar para Notícias
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Filter related news to exclude current article
  const relatedArticles = RELATED_NEWS.filter(article => article.id !== id);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <button 
            onClick={() => navigate('/newsletter')} 
            className="inline-flex items-center gap-2 text-[#282e76] hover:text-[#0d7c3d] font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Notícias
          </button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          {/* Article Meta */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {noticia.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {noticia.readTime} de leitura
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {noticia.author}
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#282e76] mb-4 leading-tight">
              {noticia.title}
            </h1>
            {noticia.subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {noticia.subtitle}
              </p>
            )}
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={noticia.img} 
              alt={noticia.title} 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {noticia.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-[#282e76] mb-6">
                Outras Notícias
              </h3>
              <div className="grid gap-4">
                {relatedArticles.map((article) => (
                  <div 
                    key={article.id}
                    onClick={() => navigate(`/noticias/${article.id}`)}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#0d7c3d] hover:shadow-md transition-all cursor-pointer group"
                  >
                    <h4 className="font-semibold text-[#282e76] group-hover:text-[#0d7c3d] transition-colors mb-1">
                      {article.title}
                    </h4>
                    <span className="text-sm text-gray-600">{article.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalhada;
