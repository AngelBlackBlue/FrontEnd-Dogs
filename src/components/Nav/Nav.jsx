import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
import logo from '../Wallpaper/logo.png'
import useNav from '../../hooks/useNav';

const Nav = () => { 
    
    const { handleClick } = useNav();

    return (
        <div className={style.nav} >
            <div className={style.logo}>
              <img className={style.logoDog} src={logo} alt="logo" />
              <h4 className={style.logoText}>Dog's Lover</h4>
            </div>
            <div className={style.filter}><Filter /></div>
            <div className={style.groupButton}>
              <button onClick={handleClick} className={style.dogLoverButton}>Reset</button>
              <Link to={'/form'}>
                  <button className={style.dogLoverButton}>Crear</button>
              </Link>
              <SearchBar />
            </div>
        </div>
    );

}

export default Nav;