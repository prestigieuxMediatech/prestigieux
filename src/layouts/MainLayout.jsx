import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Header transparent={isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
