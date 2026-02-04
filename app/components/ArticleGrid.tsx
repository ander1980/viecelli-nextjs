import Link from 'next/link';
import { Article } from '@/lib/types';

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <section className="bg-light-bg py-12">
        <div className="container-custom text-center">
          <p className="text-lg text-gray-600">Nenhum artigo encontrado. Tente outra busca.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-bg py-12">
      <div className="container-custom">
        <h2 className="text-4xl font-merriweather font-bold text-primary mb-2 text-center">
          Artigos em Destaque
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Conheça os artigos mais lidos e relevantes da nossa comunidade jurídica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="card-shadow bg-white rounded-lg overflow-hidden">
              <div className="p-6">
                {/* Difficulty Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {article.difficulty === 'basico' && 'Básico'}
                    {article.difficulty === 'intermediario' && 'Intermediário'}
                    {article.difficulty === 'avancado' && 'Avançado'}
                  </span>
                </div>

                {/* Area */}
                <p className="text-sm text-accent font-semibold mb-2">{article.area}</p>

                {/* Title */}
                <h3 className="text-xl font-merriweather font-bold text-primary mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>{article.date}</span>
                  <span>{article.views} visualizações</span>
                </div>

                {/* Button */}
                <Link
                  href={`/artigos/${article.slug}`}
                  className="btn-primary w-full text-center block"
                >
                  Ler Artigo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
