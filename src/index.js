import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import GalleryTest from './pages/GalleryTest';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <BrowserRouter>
      {/* <Suspense fallback={null}> */}
        <Routes>
          <Route path='/' element={<Page2 />} />
          <Route path='/page1' element={<Page1 />}/>
          <Route path='/page2' element={<Page2 />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/gallery1' element={<GalleryTest />} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>
);
