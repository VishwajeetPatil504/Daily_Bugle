import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import News1 from './components/News1';
import News2 from './components/News2';
import News3 from './components/News3';
import News4 from './components/News4';
import News5 from './components/News5';
import News6 from './components/News6';
import News7 from './components/News7';
import News8 from './components/News8';
import News9 from './components/News9';
import News10 from './components/News10';
import News11 from './components/News11';
import News12 from './components/News12';
import News13 from './components/News13';
import News14 from './components/News14';
import News15 from './components/News15';
import News16 from './components/News16';
import News17 from './components/News17';
import News18 from './components/News18';
import News19 from './components/News19';
import News20 from './components/News20';
import News21 from './components/News21';
import News22 from './components/News22';
import News23 from './components/News23';
import News24 from './components/News24';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/news1" element={<News1/>} />
          <Route path="/news2" element={<News2 />} />
          <Route path="/news3" element={<News3 />} />
          <Route path="/news4" element={<News4 />} />
          <Route path="/news5" element={<News5 />} />
          <Route path="/news6" element={<News6 />} />
          <Route path="/news7" element={<News7 />} />
          <Route path="/news8" element={<News8 />} />
          <Route path="/news9" element={<News9 />} />
          <Route path="/news10" element={<News10 />} />
          <Route path="/news11" element={<News11 />} />
          <Route path="/news12" element={<News12 />} />
          <Route path="/news13" element={<News13 />} />
          <Route path="/news14" element={<News14 />} />
          <Route path="/news15" element={<News15 />} />
          <Route path="/news16" element={<News16 />} />
          <Route path="/news17" element={<News17 />} />
          <Route path="/news18" element={<News18 />} />
          <Route path="/news19" element={<News19 />} />
          <Route path="/news20" element={<News20 />} />
          <Route path="/news21" element={<News21 />} />
          <Route path="/news22" element={<News22 />} />
          <Route path="/news23" element={<News23 />} />
          <Route path="/news24" element={<News24 />} />

          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
