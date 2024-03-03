import './App.css';

import { Route, Routes } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import HomePage from './page/home/HomePage';
import AboutPage from './page/about/AboutPage';
import ContactPage from './page/contactPage/ContactPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='abt' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
