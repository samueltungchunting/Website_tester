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
import Navbar from './global/navbar/Navbar';
import Loader from './global/loader/Loader';
import UseEffectUseRefUseState from './pages/UseEffectUseRefUseState';
import UseInView from './pages/UseInView';
// import TabPage from './pages/TabPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <BrowserRouter>
      {/* <Suspense fallback={null}> */}
      <Loader />
        <Navbar />
        <Routes>
          <Route path='/' element={<Page2 />} />
          <Route path='/page1' element={<Page1 />}/>
          <Route path='/page2' element={<Page2 />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/gallery1' element={<GalleryTest />} />
          {/* <Route path='/tabpage' element={<TabPage />} /> */}
          <Route path='/page3' element={<UseEffectUseRefUseState />} />
          <Route path='/page4' element={<UseInView />} />
          {/* <Route path='/page5' element={< />} /> */}
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </Suspense>

  </React.StrictMode>
);
