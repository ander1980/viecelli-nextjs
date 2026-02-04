export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  area: LegalArea;
  difficulty: 'basico' | 'intermediario' | 'avancado';
  date: string;
  views: number;
  content?: string;
}

export type LegalArea = 
  | 'Direito Civil'
  | 'Direito de Família'
  | 'Direito Trabalhista'
  | 'Direito Imobiliário'
  | 'Direito Registral'
  | 'Direito Bancário'
  | 'Direito Processual Civil'
  | 'Direito Penal'
  | 'Direito Previdenciário'
  | 'Direito Administrativo'
  | 'Direito Tributário';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
