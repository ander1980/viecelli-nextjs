import { CONTACT_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Olá%20Viecelli%20Advogados`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition-transform z-50 flex items-center gap-2"
    >
      💬 WhatsApp
    </a>
  );
}
