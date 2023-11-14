import React from "react";
import style from '../Card/Card.module.css'
import { Link } from "react-router-dom";
import { detailDog } from "../../redux/action";
import { useDispatch } from 'react-redux';

const Card = ({ id, image, name, height, weight, years, temperament }) => {
    const dispatch = useDispatch();
    
    const handelDetail = (id) => {
        dispatch(detailDog(id))
    }

    return (
        <div className={style.container}>
            <Link to='/detail' className={style.titleName} onClick={()=>handelDetail(id)}><h3>{name}</h3></Link>
             <img src={image} alt={name} className={style.image} />
            <h3 className={style.subtitleOne}>Peso: {weight} Kg</h3>
            <h3 className={style.subtitleTwo}>Temperamento: </h3>
            <h4 className={style.temp}>{temperament?.map((temp) => temp).join(", ")}</h4>
        </div>
    )

};

export default Card;


