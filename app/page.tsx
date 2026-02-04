import { getArticles } from '@/lib/articles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import ArticleGrid from './components/ArticleGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LEGAL_AREAS, AREA_DESCRIPTIONS } from '@/lib/constants';

export default async function Home() {
  const articles = await getArticles();

  return (
    <>
      <WhatsAppButton />
      <Header />
      <Navigation />
      <HeroSection />
      <SearchBar onSearch={() => {}} />

      <section className="bg-white py-12">
        <div className="container-custom">
          <h2 className="text-4xl font-merriweather font-bold text-primary mb-2 text-center">
            Áreas de Orientação
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Explore as principais áreas do Direito e encontre conteúdo relevante para sua dúvida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEGAL_AREAS.slice(0, 9).map((area) => (
              <div key={area} className="card-shadow bg-light-bg rounded-lg p-6">
                <h3 className="text-xl font-merriweather font-bold text-primary mb-2">
                  {area}
                </h3>
                <p className="text-gray-600 text-sm">
                  {AREA_DESCRIPTIONS[area]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ArticleGrid articles={articles} />

      <ContactForm />
      <Footer />
    </>
  );
}
