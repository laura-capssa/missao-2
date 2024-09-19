import Image from 'next/image';
import icon from '../imagens/icon.png';

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 fixed w-full top-0 left-0 z-10">
      <div className="flex items-center space-x-2">
        <Image
          src={icon}
          alt="Google Sala de Aula"
          width={320}
          height={320}
        />
      </div>
    </header>
  );
}