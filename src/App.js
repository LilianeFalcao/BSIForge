import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/home/Home';
import Servicos from './pages/servicos/Servicos';
import QmSomos from './pages/qmSomos/qmSomos';
import Estrutura from "./pages/estrutura/estrutura"
import NavB from './components/layout/Nav/NavB';
import Footer from './components/layout/Footer/Footer';
import Container from './components/layout/Container';
import { Portifolios } from './pages/portifolio/Portifolios';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavB />
        <Container customClass="min-heigth" >
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/servicos' element={ < Servicos/>} />
          <Route path='/portifolios' element={ <Portifolios />} />
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
