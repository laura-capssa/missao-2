import Link from 'next/link';
import './Card.css'; 

interface CardProps {
  href: string;
  title: string;
  group: string;
}

const Card: React.FC<CardProps> = ({ href, title, group }) => {
  return (
    <Link href={href} className="card">
      <div className="card-container">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>
        <div className="card-content">
          <p className="card-group">{group}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
