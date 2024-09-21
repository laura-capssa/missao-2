// src/app/components/Card.tsx
import Link from 'next/link';

interface CardProps {
  href: string;
  title: string;
  group: string;
}

const Card: React.FC<CardProps> = ({ href, title, group }) => {
  return (
    <Link href={href} className="card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <div className="relative p-4 bg-white rounded-lg overflow-hidden">
        <div className="h-24 bg-gray-300 mb-4"></div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{group}</p>
      </div>
    </Link>
  );
};

export default Card;
