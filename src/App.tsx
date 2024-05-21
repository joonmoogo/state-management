import './App.css'
import { Routes, Route } from 'react-router-dom';
import { MobxPage } from './Components/Mobx';
import { RecoilPage } from './Components/Recoil';
import { ReduxPage } from './Components/Redux';
import { ContextPage } from './Components/Context';
import ZustandPage from './Components/Zustand';

function App() {

  return (
    <>
      <Routes>
        <Route path='zustand' element={<ZustandPage />} />
        <Route path='mobx' element={<MobxPage />} />
        <Route path='recoil' element={<RecoilPage />} />
        <Route path='redux' element={<ReduxPage />} />
        <Route path='context' element={<ContextPage />} />
      </Routes>
    </>
  )
}

export default App
