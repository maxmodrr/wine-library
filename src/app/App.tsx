import { Outlet } from 'react-router-dom';
import { Header } from '../shared/ui/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
