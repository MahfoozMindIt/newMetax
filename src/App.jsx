import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Loader from './components/Loader';
import Layout from './pages/Layout';
import ScrollToTop from './components/Scroll';

const Aboutus=lazy(()=>import('./pages/Aboutus'));
const Contact=lazy(()=>import('./pages/Contact'));
const Home=lazy(()=>import('./pages/Home'))


function App() {

  return (
    <Router>
      <ScrollToTop>
      <Suspense fallback={<Loader/>}/>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutUs' element={<Aboutus/>}/>
       
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App
