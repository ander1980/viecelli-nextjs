import { getArticleBySlug } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Header from '@/app/components/Header';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${article.title} | Viecelli Advogados`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <WhatsAppButton />
      <Header />
      <Navigation />

      <article className="bg-white py-12">
        <div className="container-custom max-w-3xl">
          {/* Breadcrumb */}
          <Link href="/" className="text-accent hover:text-primary mb-4 inline-block">
            ← Voltar
          </Link>

          {/* Header do Artigo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {article.difficulty === 'basico' && 'Básico'}
                {article.difficulty === 'intermediario' && 'Intermediário'}
                {article.difficulty === 'avancado' && 'Avançado'}
              </span>
              <span className="text-sm text-gray-500">{article.area}</span>
            </div>

            <h1 className="text-5xl font-merriweather font-bold text-primary mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600 border-b border-border pb-4">
              <span>📅 {new Date(article.date).toLocaleDateString('pt-BR')}</span>
              <span>👁️ {article.views} visualizações</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-4xl font-merriweather font-bold text-primary mt-8 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-3xl font-merriweather font-bold text-primary mt-6 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl font-merriweather font-bold text-primary mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse border border-border" {...props} />
                  </div>
                ),
                th: ({ node, ...props }) => <th className="border border-border bg-light-bg p-3 text-left font-bold" {...props} />,
                td: ({ node, ...props }) => <td className="border border-border p-3" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-accent pl-4 italic text-gray-600 my-4" {...props} />
                ),
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code className="bg-light-bg px-2 py-1 rounded text-sm font-mono" {...props} />
                  ) : (
                    <code className="block bg-light-bg p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4" {...props} />
                  ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg mt-8">
            <p className="text-gray-900 font-semibold text-sm">
              ⚠️ AVISO IMPORTANTE: Este é conteúdo educativo. Para questões jurídicas específicas, consulte um advogado qualificado.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-6 rounded-lg mt-8 text-center">
            <h3 className="text-2xl font-merriweather font-bold mb-2">Tem uma dúvida jurídica?</h3>
            <p className="mb-4">Entre em contato conosco para uma consulta profissional.</p>
            <a href="https://wa.me/5566996215200?text=Olá%20Viecelli%20Advogados" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition inline-block">
              💬 Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
