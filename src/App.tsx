import './App.css'
import { Routes, Route } from 'react-router-dom';
import Zustand from './Components/Zustand';
import Mobx from './Components/Mobx';
import Recoil from './Components/Recoil';
import Redux from './Components/Redux';
import { ContextPage } from './Components/Context';

function App() {

  return (
    <>
      <Routes>
        <Route path='zustand' element={<Zustand />} />
        <Route path='mobx' element={<Mobx />} />
        <Route path='recoil' element={<Recoil />} />
        <Route path='redux' element={<Redux />} />
        <Route path='context' element={<ContextPage />} />
      </Routes>
    </>
  )
}

export default App
