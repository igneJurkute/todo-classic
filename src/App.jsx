import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import style from './App.module.css';
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceHTML } from "./pages/ServiceHTML";
import { ServiceCSS } from "./pages/ServiceCSS";
import { Layout } from "./layout/Layout";


function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const fullname = `${name} ${surname}`.trim();

  function updateName(event) {
    setName(event.target.value);
  }

  function updateSurname(event) {
    setSurname(event.target.value);
  }

  return (
    <div className={style.app}>
       
       <BrowserRouter>Add commentMore actions
        <Routes>
          <Route Component={Layout}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/html" element={<ServiceHTML />} />
            <Route path="/services/css" element={<ServiceCSS />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>


      {/* <form className={style.form}>
        <div className={style.row}>
          <label htmlFor='name'>Name</label>
          <input onChange={updateName} value={name} id='name' type='text' placeholder='Name...' />
        </div>
        <div className={style.row}>
          <label htmlFor='surname'>Surname</label>
          <input onChange={updateSurname} value={surname} id='surname' type='text' placeholder='Surname...' />
        </div>
        <div className={style.row}>
          <button type='submit'>Create</button>
        </div>
      </form>

      <div className={style.preview}>"{fullname}"</div> */}
    </div>
  );
}

export default App;
