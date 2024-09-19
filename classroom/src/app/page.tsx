import Card from './components/Card';
import Header from './components/Header'; // Assumindo que o Header está neste caminho

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            href="/estrutura-de-software" 
            title="IJ - Estrutura de Software" 
            group="PROFESSOR" 
          />
          <Card 
            href="/programacao" 
            title="IJ - Programação" 
            group="LORI RONALDO FLORES MACHADO FILHO" 
          />
        </div>
      </main>
    </>
  );
}
