import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingSupport from '../components/ui/FloatingSupport';
import LaunchBriefPopup from '../components/ui/LaunchBriefPopup';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <LaunchBriefPopup />
      <Header transparent={isHome} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingSupport />
    </>
  );
}
