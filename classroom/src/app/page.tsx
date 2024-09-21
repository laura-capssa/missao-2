import Card from './components/Card';

export default function Home() {
  return (
    <div className="grid">
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
  );
}
