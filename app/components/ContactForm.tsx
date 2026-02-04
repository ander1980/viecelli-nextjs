'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consulta Jurídica',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('✅ Mensagem enviada com sucesso! Responderemos em breve.');
        setFormData({ name: '', email: '', phone: '', subject: 'Consulta Jurídica', message: '' });
      } else {
        setMessage('❌ Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setMessage('❌ Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12 border-t-4 border-accent">
      <div className="container-custom">
        <h2 className="text-4xl font-merriweather font-bold text-primary mb-2 text-center">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Tem uma dúvida jurídica? Entre em contato conosco. Responderemos o mais breve possível.
        </p>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome Completo *"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="Consulta Jurídica">Consulta Jurídica</option>
                <option value="Dúvida sobre Conteúdo">Dúvida sobre Conteúdo</option>
                <option value="Sugestão">Sugestão</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Descreva sua dúvida ou mensagem... *"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-accent"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {message && (
              <p className={`text-center text-sm ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Nota: Este formulário é apenas informativo. Para consultas jurídicas específicas, recomendamos agendar uma consulta profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
