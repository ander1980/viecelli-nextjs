import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 border-t-4 border-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contato */}
          <div>
            <h3 className="font-merriweather text-xl font-bold mb-4">Contato</h3>
            <p className="mb-2">
              <strong>Email:</strong> {CONTACT_INFO.email}
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> {CONTACT_INFO.whatsapp}
            </p>
            <p>
              <strong>Localização:</strong> {CONTACT_INFO.address}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-merriweather text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Página Principal
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-merriweather text-xl font-bold mb-4">Redes Sociais</h3>
            <p>
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {CONTACT_INFO.instagram}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent pt-4 text-center text-sm">
          <p>&copy; 2026 Viecelli Advogados Associados. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs opacity-75">
            Este site oferece conteúdo educativo e informativo. Não substitui consulta jurídica profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
