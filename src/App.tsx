import './App.css'
import { Routes, Route } from 'react-router-dom';
import Zustand from './Components/Zustand';
import { MobxPage } from './Components/Mobx';
import { RecoilPage } from './Components/Recoil';
import Redux from './Components/Redux';
import { ContextPage } from './Components/Context';

function App() {

  return (
    <>
      <Routes>
        <Route path='zustand' element={<Zustand />} />
        <Route path='mobx' element={<MobxPage />} />
        <Route path='recoil' element={<RecoilPage />} />
        <Route path='redux' element={<Redux />} />
        <Route path='context' element={<ContextPage />} />
      </Routes>
    </>
  )
}

export default App
