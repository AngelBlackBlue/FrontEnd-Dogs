
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandigPage'
import Nav from './components/Nav/Nav';
import style from './components/Wallpaper/Wallpaper.module.css'
import Cards from './components/Cards/Cards';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';

const App = () => {
  return (
    <div  className={style.wallpaper}>
      <Routes>
        <Route path="/" element={<LandingPage />} />;
        <Route path="/home" element={<><Nav /><Cards /></>} />;
        <Route path="/form" element={<><FormPage /></>}/>;
        <Route path="/detail" element={<DetailPage/>}></Route>
        <Route path="*"></Route>
      </Routes>
    </div>
  );
}

export default App;
