import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import Page404 from './Pages/404Page';
import ServicePage from './Pages/ServicePage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/*' element={<Page404 />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/service' element={<ServicePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
