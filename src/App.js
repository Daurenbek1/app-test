import './styles/App.scss';

import Home from './pages/Home';

import { Header } from './component/Header'
import { Footer } from './component/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
