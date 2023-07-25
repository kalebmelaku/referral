import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar';
import QuickLinks from './components/quickLinks/QuickLinks';
import Bids from './pages/bids';
import Research from './pages/research';
import Auth from './pages/auth';

function App() {
  return (
    <section className=' relative w-screen h-screen'>

        <NavBar />
        <QuickLinks />
    
        <section className=' components-wrapper absolute top-[80px] right-0 h-[calc(100vh-80px)] flex'>

          <Routes>
            <Route path='/' element={<Bids/>}/>
            <Route path='/research' element={<Research />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>

        </section>

    </section>
  );
}

export default App;
