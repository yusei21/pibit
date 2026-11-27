// Todo o conteúdo do site fica aqui. Para atualizar textos, pessoas ou
// publicações, edite este arquivo — as páginas se ajustam sozinhas.

const img = (name) => `./assets/${name}`

export const site = {
  sigla: 'GEA',
  nome: 'Grupo de Pesquisa em Estudos Ambientais',
  instituicao: 'Instituto Federal do Maranhão — Campus São Luís Monte Castelo',
  laboratorio: 'Laboratório de Análises Cromatográficas (LAC)',
  logo: img('GEA_LOGO.png'),
  mapa:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.910580975354!2d-44.28041902579345!3d-2.536058797442313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f68fb03467a7f3%3A0xd973b822f4fb6dea!2sInstituto%20Federal%20do%20Maranh%C3%A3o%20-%20Campus%20S%C3%A3o%20Lu%C3%ADs%20%2F%20Monte%20Castelo!5e0!3m2!1spt-PT!2sbr!4v1743725102611!5m2!1spt-PT!2sbr',
  mapaLink: 'https://maps.google.com/?q=Instituto+Federal+do+Maranh%C3%A3o+Campus+Monte+Castelo',
}

export const nav = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/pesquisa', label: 'Pesquisa' },
  { to: '/equipe', label: 'Equipe' },
  { to: '/infraestrutura', label: 'Infraestrutura' },
  { to: '/contato', label: 'Contato' },
]

export const imagens = {
  hero: img('gabiMAQUINA.jpeg'),
  grupo: img('fotoGRUPO.jpeg'),
  campo: img('eltonRIO.jpeg'),
  lab: img('myrnaLAB.jpeg'),
  equipamento: img('equip_GEA.jpeg'),
  computador: img('ricardoPC.jpeg'),
  banner: img('bannerTeste.jpeg'),
  natilene: img('natilene.jpeg'),
}

export const numeros = [
  { valor: '20+', rotulo: 'anos de pesquisa ambiental' },
  { valor: '6', rotulo: 'linhas de pesquisa ativas' },
  { valor: '3', rotulo: 'sistemas cromatográficos' },
  { valor: '5', rotulo: 'docentes pesquisadores' },
]

export const missao =
  'Investigar a presença, o comportamento e os impactos dos compostos orgânicos emergentes no meio ambiente, utilizando métodos analíticos de ponta e promovendo a formação de pesquisadores capacitados para enfrentar os desafios da sustentabilidade e da preservação ambiental.'

export const visao =
  'Ser um grupo de referência nacional e internacional na análise de compostos orgânicos emergentes e biomonitoramento, contribuindo para o desenvolvimento de políticas ambientais, inovação tecnológica e formação de profissionais altamente qualificados.'

export const valores = [
  'Compromisso ambiental',
  'Excelência científica',
  'Inovação',
  'Formação de profissionais',
  'Interdisciplinaridade',
]

export const historico = {
  intro:
    'O Grupo de Pesquisa em Estudos Ambientais (GEA) foi criado com a visão de contribuir para o conhecimento e preservação do meio ambiente, impulsionado pela motivação de sua fundadora e líder, Natilene Mesquita Brito. Com uma dedicação profunda à química analítica e ambiental, o GEA iniciou-se com o objetivo de investigar e entender como compostos orgânicos emergentes e poluentes impactam os ecossistemas e, consequentemente, a saúde humana.',
  interdisciplinar:
    'A fundadora do GEA acreditava que uma abordagem interdisciplinar poderia desvendar mistérios ambientais ainda pouco compreendidos, promovendo a ciência como um aliado fundamental para a conservação ambiental.',
  visaoGrupo:
    'Com um foco claro na pesquisa aplicada, o GEA se dedica a estudos que envolvem compostos orgânicos voláteis e poluentes ambientais, buscando soluções sustentáveis para os problemas atuais. O grupo também promove a disseminação de conhecimentos científicos por meio de workshops, conferências e publicações acadêmicas.',
  objetivos: [
    'Investigar o impacto de compostos orgânicos emergentes no meio ambiente.',
    'Analisar o efeito de poluentes químicos na saúde humana.',
    'Desenvolver novas tecnologias para a monitorização ambiental.',
    'Promover a conscientização ambiental através de educação e ações comunitárias.',
  ],
  futuro:
    'O GEA continua a expandir seus horizontes, buscando parcerias com universidades internacionais e organizações ambientais para intensificar as pesquisas e ampliar o impacto de suas descobertas no mundo.',
}

export const fundadora = {
  nome: 'Profa. Dra. Natilene Mesquita Brito',
  cargo: 'Fundadora e coordenadora do GEA · Professora Titular do IFMA',
  foto: img('natilene.jpeg'),
  // Texto do site original (em terceira pessoa — não é uma citação direta)
  visao:
    'Ela acreditava que uma abordagem interdisciplinar poderia desvendar mistérios ambientais ainda pouco compreendidos, promovendo a ciência como um aliado fundamental para a conservação ambiental.',
  trajetoria: [
    'Pós-Doutorado em Análise de Poluentes Orgânicos Emergentes em Amostras Biológicas pelo Instituto Politécnico do Porto (2022).',
    'Doutora em Química (Química Analítica) pela Universidade de São Paulo (2005), Mestre em Química pela UNESP (2001) e graduada em Química Industrial pela UFMA (1998).',
    'Pró-Reitora de Pesquisa, Pós-Graduação e Inovação (PRPGI) do IFMA entre 2012 e 2020, e Diretora de Pesquisa, Pós-Graduação e Inovação de 2008 a 2012.',
    'Docente permanente do Programa de Pós-Graduação em Química (Mestrado e Doutorado em associação IFMA/UFMA) e do ProfÁgua — Mestrado Profissional em Gestão e Regulação de Recursos Hídricos, polo UEMA.',
  ],
  areas: [
    'Qualidade da água',
    'Pesticidas',
    'Poluentes orgânicos emergentes',
    'Cromatografia',
    'Validação de métodos analíticos',
    'Análise toxicológica de alimentos',
    'Educação ambiental',
  ],
  indiceH: 14,
}

export const linhasPesquisa = [
  {
    icone: 'FlaskConical',
    id: 'metodos',
    curto: 'Métodos analíticos',
    titulo: 'Métodos Analíticos e Bioanalíticos',
    texto:
      'Aperfeiçoamento de técnicas laboratoriais e instrumentais para a detecção e análise de substâncias químicas no meio ambiente e na saúde humana.',
  },
  {
    icone: 'Gauge',
    id: 'diagnostico',
    curto: 'Diagnóstico ambiental',
    titulo: 'Diagnóstico Ambiental por Indicadores Químicos',
    texto:
      'Aplicação de indicadores químicos para monitorar e avaliar a qualidade ambiental em diferentes ecossistemas.',
  },
  {
    icone: 'Sprout',
    id: 'pesticidas',
    curto: 'Pesticidas',
    titulo: 'Impactos de Pesticidas e Substâncias Sintéticas',
    texto:
      'Estudo dos efeitos de produtos químicos no solo, água, flora e fauna, visando a mitigação de riscos à saúde humana e ao ambiente.',
  },
  {
    icone: 'Wheat',
    id: 'alimentos',
    curto: 'Segurança alimentar',
    titulo: 'Segurança Alimentar',
    texto:
      'Investigação de contaminantes em alimentos e avaliação de riscos à saúde pública, com foco na prevenção de doenças alimentares.',
  },
  {
    icone: 'Fish',
    id: 'ecotox',
    curto: 'Ecotoxicologia',
    titulo: 'Ecotoxicologia Ambiental',
    texto:
      'Análise do impacto de substâncias tóxicas no meio ambiente e nos organismos, buscando estratégias para a conservação dos ecossistemas.',
  },
  {
    icone: 'Mountain',
    id: 'geoquimica',
    curto: 'Geoquímica',
    titulo: 'Geoquímica Ambiental e do Petróleo',
    texto:
      'Estudo dos processos químicos naturais e sua relação com a extração e uso de recursos fósseis, com foco em remediação ambiental.',
  },
]

// Pesquisas desenvolvidas ao longo de 20 anos + trabalhos publicados.
// Para adicionar uma publicação: { titulo, url, veiculo, ano }.
export const projetos = [
  {
    id: 'emergentes',
    titulo: 'Análise de Compostos Orgânicos Emergentes',
    resumo:
      'Fármacos, pesticidas e biocidas que afetam a qualidade das águas de rios e estuários.',
    texto:
      'Desde os primeiros anos, o GEA vem investigando compostos emergentes presentes em concentrações ultrabaixas, o que exigiu o desenvolvimento de métodos analíticos sofisticados para sua detecção e monitoramento. Os estudos revelaram a presença e os impactos desses contaminantes em áreas urbanas e portuárias, contribuindo para o avanço do conhecimento sobre poluição aquática.',
    publicacoes: [
      {
        titulo:
          'Assessing the spatiotemporal occurrence and ecological risk of antifouling biocides in a Brazilian estuary',
        veiculo: 'Environmental Science and Pollution Research',
        url: 'https://link.springer.com/article/10.1007/s11356-023-31286-x',
      },
      {
        titulo:
          'Determination of Three Estrogens in Environmental Water Samples Using Dispersive Liquid-Liquid Microextraction by High-Performance Liquid Chromatography and Fluorescence Detector',
        veiculo: null,
        url: null, // o site antigo apontava para o link do artigo acima: confirmar o correto
      },
    ],
  },
  {
    id: 'inorganicos',
    titulo: 'Análise de Contaminantes Inorgânicos',
    resumo:
      'Metais pesados, cátions e ânions em águas superficiais e subterrâneas.',
    texto:
      'O GEA analisa poluentes em águas superficiais (rios, lagos e estuários) e subterrâneas (lençóis freáticos e aquíferos), seguindo os padrões da Resolução CONAMA nº 357/2005 e da Portaria GM/MS nº 888/2021, que define os padrões de potabilidade da água no Brasil.',
    publicacoes: [],
  },
  {
    id: 'biomonitoramento',
    titulo: 'Biomonitoramento de Ecossistemas Aquáticos',
    resumo:
      'Organismos bioindicadores para avaliar a saúde de ecossistemas aquáticos.',
    texto:
      'Utilizando moluscos, crustáceos e peixes como bioindicadores, o grupo analisa a bioacumulação de poluentes e seu impacto na cadeia alimentar, identificando áreas críticas de contaminação e orientando políticas públicas de preservação e recuperação ambiental.',
    publicacoes: [
      {
        titulo:
          'Biochemical and morphological responses in Ucides cordatus (Crustacea, Decapoda) as indicators of contamination status in mangroves and port areas from northern Brazil',
        veiculo: 'Environmental Science and Pollution Research',
        url: 'https://link.springer.com/article/10.1007/s11356-019-04849-0',
      },
    ],
  },
  {
    id: 'amostragem-passiva',
    titulo: 'Métodos de Amostragem Passiva',
    resumo:
      'Amostradores passivos para coleta contínua de compostos orgânicos.',
    texto:
      'Dispositivos desenvolvidos pelo grupo para ambientes aquáticos, capazes de avaliar a presença de poluentes em tempo integral e oferecer uma visão mais precisa e representativa dos níveis de contaminação ao longo do tempo.',
    publicacoes: [],
  },
  {
    id: 'toxicos',
    titulo: 'Efeitos Tóxicos e Genotóxicos',
    resumo:
      'Como a exposição prolongada a poluentes afeta organismos aquáticos e terrestres.',
    texto:
      'Experimentos laboratoriais e estudos de campo avaliam como a exposição a poluentes pode gerar mutações, afetar o desenvolvimento e comprometer a reprodução de espécies — dados que dão suporte científico à regulamentação de compostos químicos no Brasil.',
    publicacoes: [
      {
        titulo:
          'Requisições de rotina e testes colorimétricos empregados em Química Forense: do preparo das soluções à descrição dos fenômenos químicos',
        veiculo: 'Revista Brasileira de Criminalística',
        url: 'https://revista.rbc.org.br/index.php/rbc/article/view/336',
      },
      {
        titulo:
          'Punica granatum L. Leaf Extract Attenuates Lung Inflammation in Mice with Acute Lung Injury',
        veiculo: null,
        url: 'https://onlinelibrary.wiley.com/doi/10.1155/2018/6879183',
      },
    ],
  },
  {
    id: 'costeiro',
    titulo: 'Impacto Ambiental em Regiões Costeiras',
    resumo: 'Portos, manguezais e áreas de intensa atividade humana.',
    texto:
      'Pesquisas em ecossistemas vulneráveis revelam o impacto de poluentes em habitats de manguezais e áreas de reprodução de espécies marinhas, destacando a necessidade de políticas de controle de emissões e manejo adequado dos resíduos.',
    publicacoes: [],
  },
  {
    id: 'software',
    titulo: 'Softwares para Laboratórios',
    resumo: 'Sistemas de gestão e monitoramento de analitos sob medida.',
    texto:
      'O GEA desenvolve soluções tecnológicas personalizadas — softwares para laboratórios, sistemas de gestão e ferramentas de controle e monitoramento de analitos — unindo expertise científica e tecnológica para otimizar processos e garantir resultados confiáveis.',
    publicacoes: [],
  },
]

export const docentes = [
  {
    nome: 'Natilene Mesquita Brito',
    papel: 'Coordenadora',
    titulacao: 'Doutora em Química Analítica — USP (2005)',
    email: 'natilene.brito@ifma.edu.br',
    foto: img('natilenePipetando.jpeg'),
  },
  {
    nome: 'Bruno Araújo Gomes',
    papel: 'Vice-coordenador',
    titulacao: 'Doutor em Química Orgânica — UFC (2017)',
    email: 'bruno.gomes@ifma.edu.br',
    foto: img('brunoFoto.jpeg'),
  },
  {
    nome: 'Cleone das Dores Conceição',
    papel: 'Pesquisadora',
    titulacao: 'Doutora em Química Analítica — UFSCar (2004)',
    email: 'cleone@ifma.edu.br',
    foto: img('cleoneEssa.jpeg'),
  },
  {
    nome: 'Ozelito Possidônio de Amarante Júnior',
    papel: 'Pesquisador',
    titulacao: 'Doutor em Ciências da Engenharia Ambiental — USP (2004)',
    email: 'ozelito@ifma.edu.br',
    foto: img('ozelito.jpeg'),
  },
  {
    nome: 'Pablo Cruz Santos',
    papel: 'Pesquisador',
    titulacao: 'Mestre em Biodiversidade e Conservação — UFMA (2012)',
    email: 'pablo.cruz@ifma.edu.br',
    foto: img('pabloEssa.jpeg'),
  },
]

export const tecnicos = [
  {
    nome: 'Lanna Kaniny Silva',
    papel: 'Técnica de laboratório · Engenheira Química',
    email: 'lanna@ifma.edu.br',
  },
]

export const categoriasEquipe = [
  {
    titulo: 'Doutorandos',
    texto:
      'Lideram projetos de pesquisa e auxiliam na orientação de alunos de graduação e mestrado.',
  },
  {
    titulo: 'Mestrandos',
    texto:
      'Desenvolvem pesquisas aprofundadas, contribuindo para a inovação e avanços científicos do laboratório.',
  },
  {
    titulo: 'Graduação',
    texto:
      'Participam ativamente dos projetos, auxiliando em pesquisas, coletas de campo e experimentos.',
  },
  {
    titulo: 'Técnicos',
    texto:
      'Responsáveis pelo suporte técnico, manutenção dos equipamentos e apoio às atividades laboratoriais.',
  },
]

export const equipamentos = [
  {
    nome: 'Shimadzu LC-40 Nexera lite',
    tipo: 'Cromatografia Líquida de Ultra Alta Eficiência (UHPLC)',
    foto: img('equi1.jpeg'),
    specs: [
      'Pressão de trabalho de até 44 MPa',
      'Detector de arranjo de diodos (PDA) SPD-M40',
      'Detector de fluorescência RF-20A',
      'Amostrador automático SIL-20A',
      'Software LabSolutions Multi-PDA',
    ],
  },
  {
    nome: 'PerkinElmer Clarus 680',
    tipo: 'Cromatografia Gasosa acoplada à Espectrometria de Massas (GC-MS)',
    foto: img('equi2.jpeg'),
    specs: [
      'Espectrômetro de massas Clarus 600C',
      'Ideal para análises complexas de compostos voláteis',
    ],
  },
  {
    nome: 'Shimadzu LC-20AT Prominence',
    tipo: 'Cromatografia Líquida de Alta Eficiência (HPLC)',
    foto: img('equi3.jpeg'),
    specs: [
      'Detector UV SPD-20A',
      'Software LC Solution® v1.24 SP1',
    ],
  },
]

export const tecnicas = [
  {
    nome: 'Cromatografia Líquida (HPLC)',
    foto: img('liquida.jpg'),
    texto:
      'Técnica para separar, identificar e quantificar componentes em uma mistura líquida, amplamente usada na análise de compostos químicos e farmacêuticos.',
    aplicacoes: 'Substâncias orgânicas, fármacos e medicamentos',
    vantagens: 'Alta precisão e sensibilidade',
  },
  {
    nome: 'Cromatografia Gasosa (GC)',
    foto: img('gasosa.png'),
    texto:
      'Separa compostos voláteis e os analisa em estado gasoso, aplicada ao controle de qualidade de alimentos, bebidas e produtos químicos.',
    aplicacoes: 'Pesticidas, solventes e poluentes atmosféricos',
    vantagens: 'Alta resolução e análise rápida',
  },
]

export const aplicacoes = [
  'Análise de compostos orgânicos e inorgânicos em líquidos e gases',
  'Estudos de substâncias químicas em processos ambientais e industriais',
  'Monitoramento de qualidade em produtos químicos e alimentos',
]

export const parcerias = [
  {
    icone: 'Building2',
    titulo: 'Empresas',
    texto:
      'Colabore em projetos de pesquisa e inovação ambiental. Juntos desenvolvemos soluções tecnológicas e sustentáveis para os desafios do setor industrial.',
  },
  {
    icone: 'GraduationCap',
    titulo: 'Instituições de ensino',
    texto:
      'Instituições públicas e privadas podem somar esforços em projetos de sustentabilidade, promovendo a preservação ambiental e a saúde pública.',
  },
  {
    icone: 'Globe',
    titulo: 'Parceiros internacionais',
    texto:
      'Buscamos parcerias internacionais para compartilhar conhecimento e desenvolver soluções ambientais que beneficiem o mundo todo.',
  },
]
