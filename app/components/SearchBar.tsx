export default function SearchBar() {
  return (
    <section className="bg-light-bg py-8 border-b border-border">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Buscar por tópico ou dúvida..."
            className="w-full px-4 py-3 border-2 border-border rounded-lg font-poppins text-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
            disabled
          />
          <p className="text-xs text-gray-500 mt-2">
            💡 Dica: Use a busca do navegador (Ctrl+F) para encontrar tópicos específicos
          </p>
        </div>
      </div>
    </section>
  );
}
