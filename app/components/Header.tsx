import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary text-white py-6 border-b-4 border-accent">
      <div className="container-custom">
        <div className="flex items-center gap-8 justify-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Viecelli Advogados"
              width={200}
              height={90}
              priority
              className="h-auto w-auto"
            />
          </div>

          {/* Título e Subtítulo */}
          <div className="flex-1">
            <h1 className="text-4xl font-merriweather font-bold tracking-wide uppercase">
              Hub de Orientação Jurídica
            </h1>
          </div>

          {/* Informações */}
          <div className="text-right flex-shrink-0">
            <p className="font-bold text-lg">Sinop-MT</p>
            <p className="text-sm opacity-90">Conteúdo Informativo</p>
          </div>
        </div>
      </div>
    </header>
  );
}
