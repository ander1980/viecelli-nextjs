import { LegalArea } from './types';

export const LEGAL_AREAS: LegalArea[] = [
  'Direito Civil',
  'Direito de Família',
  'Direito Trabalhista',
  'Direito Imobiliário',
  'Direito Registral',
  'Direito Bancário',
  'Direito Processual Civil',
  'Direito Penal',
  'Direito Previdenciário',
  'Direito Administrativo',
  'Direito Tributário',
];

export const AREA_DESCRIPTIONS: Record<LegalArea, string> = {
  'Direito Civil': 'Contratos, Obrigações, Responsabilidade Civil e Direito de Propriedade',
  'Direito de Família': 'Guarda Compartilhada, Pensão Alimentícia, Divórcio e Sucessões',
  'Direito Trabalhista': 'Rescisão Contratual, Direitos do Trabalhador e Benefícios',
  'Direito Imobiliário': 'Compra e Venda, Locação, Distrato e Regularização de Imóveis',
  'Direito Registral': 'Usucapião, Regularização de Imóveis e Registros Públicos',
  'Direito Bancário': 'Juros Abusivos, Revisão de Contratos e Direitos do Consumidor',
  'Direito Processual Civil': 'Citação, Intimação, Prazos Processuais e Procedimentos Judiciais',
  'Direito Penal': 'Crimes, Penas e Direitos do Acusado',
  'Direito Previdenciário': 'Aposentadoria, Benefícios, INSS e Direitos Previdenciários',
  'Direito Administrativo': 'Direito Público, Administração Pública e Atos Administrativos',
  'Direito Tributário': 'Impostos, Tributos e Obrigações Fiscais',
};

export const CONTACT_INFO = {
  whatsapp: '+55 66 99621-5200',
  email: 'contato@viecelli.com.br',
  phone: '(66) 3531-1234',
  address: 'Sinop, Mato Grosso, Brasil',
  instagram: '@viecelliadvogados',
};

export const DISCLAIMER = `⚠️ AVISO IMPORTANTE: O conteúdo deste site é puramente educativo e informativo. Não substitui uma consulta jurídica individualizada com um advogado qualificado. Para questões específicas, consulte um profissional do Direito.`;
