import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Menu } from './components/Menu';
import './global.scss';

export function App() {
  return (
    <>
      <Header />
      <Menu />
      <MainContent />
    </>
  );
}

