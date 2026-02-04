import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Viecelli Advogados - Hub de Orientação Jurídica em Sinop-MT',
  description: 'Hub de Orientação Jurídica da Viecelli Advogados. Conteúdo educativo sobre Direito Civil, Família, Trabalhista, Imobiliário, Registral, Bancário, Processual e Previdenciário. Orientação jurídica gratuita em Sinop-MT.',
  keywords: 'advogado, direito, orientação jurídica, Sinop, MT, direito civil, direito de família, direito trabalhista, direito imobiliário',
  authors: [{ name: 'Viecelli Advogados Associados' }],
  openGraph: {
    title: 'Viecelli Advogados - Hub de Orientação Jurídica',
    description: 'Conteúdo educativo e informativo sobre as principais áreas do Direito. Orientação jurídica gratuita.',
    type: 'website',
    url: 'https://viecelli-advogados.com.br',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <link rel="canonical" href="https://viecelli-advogados.com.br" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              '@id': 'https://viecelli-advogados.com.br',
              name: 'Viecelli Advogados Associados',
              description: 'Hub de Orientação Jurídica com conteúdo educativo sobre as principais áreas do Direito',
              url: 'https://viecelli-advogados.com.br',
              telephone: '+55 66 3531-1234',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sinop',
                addressRegion: 'MT',
                addressCountry: 'BR',
              },
              areaServed: ['Sinop', 'Mato Grosso', 'Brasil'],
              priceRange: 'Conteúdo Gratuito',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
