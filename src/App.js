import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
function App() {

  // const nome = "Thailo";
  // const nomeUpperCase = nome.toUpperCase;

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/empresa" element={<Empresa />}/>
          <Route path="/contato" element={<Contato />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
