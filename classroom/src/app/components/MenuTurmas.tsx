import Link from 'next/link';

const MenuTurmas = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/turma/estrutura-de-software">Estrutura de Software</Link>
        </li>
        <li>
          <Link href="/turma/programacao">Programação</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuTurmas;
