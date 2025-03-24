import { Header } from '@shared/components/Header';
import s from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
