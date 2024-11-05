import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import QmSomos from './pages/qmSomos/qmSomos';
import NavB from './components/layout/Nav/NavB';
import Footer from './components/layout/Footer/Footer';
import Container from './components/layout/Container';
import { Portifolio } from './pages/portifolio/Portifolio';
import { PS } from './pages/processoSeletivo/PS';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavB />
        <Container customClass="min-heigth" >
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/servicos' element={ < Servicos/>} />
          <Route path='/portifolio' element={ <Portifolio />} />
          <Route path='/quemSomos' element={ <QmSomos />} />
          <Route path='/ps' element={ <PS />} />
        </Routes>
        </Container>
        <Footer />
        <Toaster  
          position='bottom-right'
          reverseOrder={false}
          />
        </BrowserRouter>
    </div>
  );
}

export default App;
