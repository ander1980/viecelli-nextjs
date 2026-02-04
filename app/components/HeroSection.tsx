import { DISCLAIMER } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16 text-center">
      <div className="container-custom">
        <h2 className="text-5xl font-merriweather font-bold mb-4">Orientação Jurídica Geral</h2>
        <p className="text-xl mb-6 opacity-95">
          Explore nosso acervo de conteúdo educativo e informativo sobre as principais áreas do Direito. 
          Encontre respostas para suas dúvidas jurídicas de forma clara e acessível.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg inline-block max-w-2xl">
          <p className="text-gray-900 font-semibold">{DISCLAIMER}</p>
        </div>
      </div>
    </section>
  );
}
