import React from 'react';
import { Link } from 'react-router-dom';
import style from '../LandingPage/Landig.module.css';

const LandingPage = () => {
    return (
        <div className={style.wallpaper}>
            <div className={style.centeredContent}>
                <h1 className={style.title}>Bienvenido a Dog´s lover</h1>
                <Link to="/home">
                    <button className={style.dogLoverButton}> Entrar </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
