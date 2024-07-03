import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import QmSomos from './pages/qmSomos/qmSomos';
import Portifolio from './pages/portifolio/Portifolio';
import Estrutura from "./pages/estrutura/estrutura"
import NavB from './components/layout/Nav/NavB';
import Footer from './components/layout/Footer/Footer';
import Container from './components/layout/Container';

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
          <Route path='/estrutura' element={ <Estrutura />} />
        </Routes>
        </Container>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
