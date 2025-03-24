import Link from 'next/link';

import s from './styles.module.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">ПДР</Link>
        </li>
        <li>
          <Link href="/auth">Особистий кабiнет</Link>
        </li>
        <li>
          <Link href="/rules">Правiла</Link>
        </li>
        <li>
          <Link href="/tests">Тести</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
