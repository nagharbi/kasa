import './App.css';
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import Apropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/logement/:id' element={<FicheLogement />}/>
        <Route path='/apropos' element={<Apropos />}/>
        <Route path='*' element={<Erreur code="404" />}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
