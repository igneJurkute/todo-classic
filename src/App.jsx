import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import style from './App.module.css';
import { Home } from "./pages/Home";
import { Page404 } from "./pages/Page404";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Service } from "./pages/Service";
import { Layout } from "./layout/Layout";
import { Layout2 } from "./layout/Layout2";


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
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Service />} />
            <Route path="/services/:serviceId/edit" element={<Service />} />
            <Route path="/services/:serviceId/providers/:name" element={<Service />} />
          </Route>
          <Route Component={Layout2}>
            <Route path="/about" element={<About />} />
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
