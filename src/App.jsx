import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Navegacion} from './components/Navegacion';

import { HomePage } from './components/Pages/HomePage';
import { ServicePage } from './components/Pages/ServicePage';  
import { ProductPage } from './components/Pages/ProductPage';
import { AboutPage } from './components/Pages/AboutPage';
import { ContactPage } from './components/Pages/ContactPage';
import { NotFoundPage } from './components/Pages/NotFoundPage';

function App() {
  return (<BrowserRouter> 
          
            <Navegacion/>
            <Routes>
              <Route path='/bit02spa' element={<HomePage/>} />
              <Route path='/bit02spa/servicios' element={<ServicePage/>} />
              <Route path='/bit02spa/productos' element={<ProductPage/>} />
              <Route path='/bit02spa/acerca-de' element={<AboutPage/>} />
              <Route path='/bit02spa/contacto' element={<ContactPage/>} />
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            
          </BrowserRouter>);
}

export default App
