export interface StoreData {
  id: number;
  name: string;
  endereco: string;
  horario: string;
  telefone: string;
  coordenadas: { lat: number; lng: number };
  categoria: "Varejo" | "Atacarejo";
  imagem: string;
  servicos: string[];
  diferenciais: string[];
}

export const LOJAS_DATA: StoreData[] = [
  {
    id: 1,
    name: "RedeCompras Feira de Flores",
    endereco: "R. Cel. João Lourenço Porto, 374 - Centro, Campina Grande - PB, 58400-240",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83) 2102-5300",
    coordenadas: { lat: -7.219730792429764, lng: -35.87982559066057 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Frios e Laticínios", "Farmácia"],
    diferenciais: ["Estacionamento gratuito", "Acessibilidade completa", "Wi-Fi gratuito"]
  },
  {
    id: 2,
    name: "RedeCompras Catedral",
    endereco: "Av. Mal. Floriano Peixoto, 912 - Centro, Campina Grande - PB, 58400-180",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 14h",
    telefone: "(83) 2102-5331",
    coordenadas: { lat: -7.218130357576768, lng: -35.880751062308306 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Frios e Laticínios"],
    diferenciais: ["Localização central", "Atendimento personalizado", "Produtos regionais"]
  },
  {
    id: 3,
    name: "RedeCompras Avenida Canal",
    endereco: "R. Marcílio Dias, 325 - Centro, Campina Grande - PB, 58400-190",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 13h",
    telefone: "(83) 3341-6341",
    coordenadas: { lat: -7.217975842288795, lng: -35.87648254696501 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Conveniência"],
    diferenciais: ["Compras rápidas", "Localização estratégica", "Atendimento ágil"]
  },
  {
    id: 4,
    name: "RedeCompras Catolé",
    endereco: "R. Alzira Figueirêdo, 400 - Sandra Cavalcante, Campina Grande - PB, 58410-755",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 18h",
    telefone: "(83) 2102-5335",
    coordenadas: { lat: -7.242437055150501, lng: -35.87816676045716 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Frios e Laticínios", "Hortifrúti"],
    diferenciais: ["Amplo estacionamento", "Seção gourmet", "Produtos orgânicos"]
  },
  {
    id: 5,
    name: "RedeCompras Malvinas",
    endereco: "R. Olindina Pereira dos Santos, 412 - Malvinas, Campina Grande - PB, 58432-664",
    horario: "Segunda a Sábado: 7h às 20h | Domingo: 7h às 16h",
    telefone: "(83) 3310-5000",
    coordenadas: { lat: -7.2490931833155265, lng: -35.92825688880762 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Farmácia"],
    diferenciais: ["Atendimento familiar", "Produtos locais", "Preços competitivos"]
  },
  {
    id: 6,
    name: "RedeCompras Intermares",
    endereco: "Av. Mar Vermelho, 89 - Intermares, Cabedelo - PB, 58102-120",
    horario: "Segunda a Sábado: 7h às 21h | Domingo: 7h às 20h",
    telefone: "(83) 99336-3659",
    coordenadas: { lat: -7.045062149378756, lng: -34.842281631623194 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Frios e Laticínios", "Conveniência"],
    diferenciais: ["Vista para o mar", "Produtos frescos", "Ambiente climatizado"]
  },
  {
    id: 7,
    name: "RedeCompras Aeroclube",
    endereco: "R. Francisco Leocádio Ribeiro Coutinho, 601 - Aeroclube, João Pessoa - PB, 58036-450",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83) 3246-6601",
    coordenadas: { lat: -7.084907754658828, lng: -34.84552210463792 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Frios e Laticínios", "Farmácia", "Hortifrúti"],
    diferenciais: ["Loja conceito", "Tecnologia avançada", "Experiência premium"]
  },
  {
    id: 8,
    name: "RedeCompras Partage Shopping",
    endereco: "Av. Brasília, 1000 - Universitário, Campina Grande - PB, 58429-900",
    horario: "Segunda a Sábado: 10h às 22h | Domingo: 14h às 20h",
    telefone: "(83) 2102-5340",
    coordenadas: { lat: -7.2159, lng: -35.9101 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria", "Açougue", "Conveniência", "Seção Gourmet"],
    diferenciais: ["Dentro do shopping", "Estacionamento coberto", "Conceito moderno"]
  },
  {
    id: 9,
    name: "RedeCompras Manaíra MegaShop",
    endereco: "Av. Gov. Flávio Ribeiro Coutinho, 805 - Manaíra, João Pessoa - PB, 58038-000",
    horario: "Segunda a Sábado: 9h às 22h | Domingo: 12h às 21h",
    telefone: "(83) 2102-5345",
    coordenadas: { lat: -7.0969, lng: -34.8417 },
    categoria: "Varejo",
    imagem: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Padaria Artesanal", "Açougue Premium", "Seção Gourmet", "Conveniência"],
    diferenciais: ["Conceito premium", "Produtos importados", "Localização nobre"]
  },
  {
    id: 10,
    name: "BomQuéSó Liberdade",
    endereco: "R. Odon Bezerra, 459 - Liberdade, Campina Grande - PB, 58414-160",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83) 2102-5312",
    coordenadas: { lat: -7.236049011833299, lng: -35.89467718744217 },
    categoria: "Atacarejo",
    imagem: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Atacado", "Varejo", "Padaria", "Açougue", "Hortifrúti"],
    diferenciais: ["Preços de atacado", "Compras em grande quantidade", "Estacionamento amplo"]
  },
  {
    id: 11,
    name: "BomQuéSó Dinamérica",
    endereco: "Av. Dinamérica Alves Correia, 751 - Santa Cruz, Campina Grande - PB, 58417-095",
    horario: "Segunda a Sábado: 7h às 22h | Domingo: 7h às 20h",
    telefone: "(83) 2102-5342",
    coordenadas: { lat: -7.240184107390968, lng: -35.90991188475078 },
    categoria: "Atacarejo",
    imagem: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    servicos: ["Atacado", "Varejo", "Padaria", "Açougue", "Frios e Laticínios"],
    diferenciais: ["Maior variedade", "Preços competitivos", "Atendimento especializado"]
  }
];