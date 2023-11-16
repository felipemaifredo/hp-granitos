//Imports
import './App.css';
import {  HashRouter, Routes, Route,  } from 'react-router-dom';

//Routes
import Home from './Routes/Home';
import ProductsPage from './Routes/ProductsPage';
import ProjectsPage from './Routes/ProjectsPage';
import AboutPage from './Routes/AboutPage';
//Components
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/sobre' element={ <AboutPage /> } />
          <Route path='/produtos' element={ <ProductsPage /> } />
          <Route path='/projetos' element={ <ProjectsPage /> } />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
