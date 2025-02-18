import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main className="bg-dark content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
