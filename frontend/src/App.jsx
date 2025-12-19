import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from "./pages/Mainpage";
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost'
import Article from './pages/Article'
import FreeAPI from "./pages/FreeAPI";
import Contact from './components/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/free-api" element={<FreeAPI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artical" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;