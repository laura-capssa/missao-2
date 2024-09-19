// components/Card.tsx
import Link from 'next/link';

interface CardProps {
  href: string;
  title: string;
  group: string;
}

const Card: React.FC<CardProps> = ({ href, title, group }) => {
  return (
    <Link href={href} className={`card `}>
      <div className="relative p-4 rounded-lg overflow-hidden">
        <div className="h-24 bg-gray-300 mb-4"></div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{group}</p>
      </div>
    </Link>
  );
};

export default Card;
