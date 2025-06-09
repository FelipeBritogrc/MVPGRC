export interface BrandData {
  id: string;
  name: string;
  logo: string;
  alt: string;
  description: string;
  category: string;
  website?: string;
  established?: string;
}

export const BRANDS_DATA: BrandData[] = [
  {
    id: "redecompras-com",
    name: "RedeCompras.com",
    logo: "/lovable-uploads/8277ca17-f990-4bd7-8de8-8d7bec7ba92c.png",
    alt: "RedeCompras.com",
    description: "Plataforma de e-commerce do Grupo RedeCompras com entrega rápida e segura",
    category: "E-commerce",
    website: "https://redecompras.com.br",
    established: "2019"
  },
  {
    id: "bomqueso",
    name: "BomQuéSó",
    logo: "/lovable-uploads/f00a120f-b13a-4ecd-9cec-9dd1521e882b.png",
    alt: "BomQuéSó",
    description: "Rede de atacarejo com foco em qualidade e preços acessíveis para toda família",
    category: "Atacarejo",
    established: "2012"
  },
  {
    id: "tao-nosso",
    name: "Tão Nosso Alimentos",
    logo: "/lovable-uploads/1755bb09-82bc-4174-9435-17b3ec68d8ca.png",
    alt: "Tão Nosso Alimentos",
    description: "Marca própria de alimentos com qualidade premium e preços justos",
    category: "Marca Própria",
    established: "2018"
  },
  {
    id: "campina-atacado",
    name: "Campina Atacado",
    logo: "/lovable-uploads/34c8c08e-9061-4dab-9657-02258d9e470c.png",
    alt: "Campina Atacado",
    description: "Atacado especializado para revenda com ampla variedade de produtos",
    category: "Atacado",
    established: "2015"
  },
  {
    id: "redecompras",
    name: "RedeCompras",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "RedeCompras",
    description: "Marca matriz do grupo empresarial, referência em varejo na Paraíba",
    category: "Varejo",
    established: "1991"
  },
  {
    id: "rc-plus",
    name: "RC+",
    logo: "/lovable-uploads/93b64577-c63e-48fe-b09a-0aa165a7f468.png",
    alt: "RC+",
    description: "Programa de fidelidade com cashback e benefícios exclusivos",
    category: "Fidelidade",
    established: "2020"
  },
  {
    id: "cliente-arretado",
    name: "Cliente Arretado",
    logo: "/lovable-uploads/ed8adf86-dde9-4369-9d42-eddc2e64f519.png",
    alt: "Cliente Arretado",
    description: "Clube de vantagens com descontos especiais e promoções exclusivas",
    category: "Benefícios",
    established: "2019"
  },
  {
    id: "grc-express",
    name: "GRC Express",
    logo: "/lovable-uploads/7f84376a-a95e-416b-ae1f-b3e19d7f15f5.png",
    alt: "GRC Express",
    description: "Serviço de entrega rápida e logística integrada do grupo",
    category: "Logística",
    established: "2021"
  }
];