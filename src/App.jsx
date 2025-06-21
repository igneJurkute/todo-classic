import { useState } from 'react';
import style from './App.module.css';

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
      <form className={style.form}>
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

      <div className={style.preview}>"{fullname}"</div>
    </div>
  );
}

export default App;
