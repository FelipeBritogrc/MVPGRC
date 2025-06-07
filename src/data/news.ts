
import { NewsItem } from '@/types';

export const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    title: "Nova Loja Inaugurada em Manaíra",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    summary: "A RedeCompras celebrou a inauguração da nova unidade em Manaíra, trazendo ofertas e oportunidades para toda a comunidade.",
    content: "A RedeCompras inaugurou sua mais nova loja em Manaíra, marcando um importante marco na expansão da empresa na região. O evento contou com a presença de autoridades locais e clientes fiéis.",
    date: "22/05/2024",
    category: "Expansão"
  },
  {
    id: "2",
    title: "Corrida Saudável reuniu mais de 800 participantes",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    summary: "Evento promovido pelo Grupo RedeCompras em apoio à saúde e bem-estar de funcionários e clientes.",
    content: "A Corrida Saudável 2024 foi um grande sucesso, reunindo mais de 800 participantes em uma manhã de atividade física e confraternização. O evento promove a importância dos hábitos saudáveis.",
    date: "12/03/2024",
    category: "Eventos"
  },
  {
    id: "3",
    title: "Campanha do Alimento bate recorde de arrecadação",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    summary: "Solidariedade e colaboração marcaram a campanha deste ano. Confira os resultados!",
    content: "A Campanha do Alimento 2023 arrecadou mais de 10 toneladas de alimentos, superando todas as expectativas e ajudando centenas de famílias em situação de vulnerabilidade social.",
    date: "28/07/2023",
    category: "Social"
  },
  {
    id: "4",
    title: "Programa de Sustentabilidade avança em 2024",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    summary: "Iniciativas ambientais do grupo já reduziram significativamente o impacto ambiental das operações.",
    content: "O Programa de Sustentabilidade do Grupo RedeCompras implementou diversas iniciativas verdes, incluindo redução de plástico, energia solar e gestão de resíduos, resultando em 30% menos emissões.",
    date: "10/04/2024",
    category: "Sustentabilidade"
  },
  {
    id: "5",
    title: "Treinamento e Desenvolvimento em foco",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    summary: "Investimentos em capacitação profissional beneficiam mais de 1000 colaboradores.",
    content: "O programa de Treinamento e Desenvolvimento da empresa capacitou mais de 1000 colaboradores em 2024, oferecendo cursos técnicos, liderança e desenvolvimento pessoal.",
    date: "05/04/2024",
    category: "RH"
  },
  {
    id: "6",
    title: "Expansão Digital: Novos Apps Lançados",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    summary: "RC+ e Cliente Arretado chegam com benefícios exclusivos para facilitar a vida dos clientes.",
    content: "Os novos aplicativos RC+ e Cliente Arretado foram lançados com funcionalidades inovadoras, incluindo programa de fidelidade, ofertas personalizadas e compras online.",
    date: "01/04/2024",
    category: "Tecnologia"
  }
];

export const NEWS_CATEGORIES = ["Todas", "Expansão", "Eventos", "Social", "Sustentabilidade", "RH", "Tecnologia"];

export const ITEMS_PER_PAGE = 6;
