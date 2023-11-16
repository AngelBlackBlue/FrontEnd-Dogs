import useDetail from '../../hooks/useDetail';
import style from './DetailPage.module.css';
import { Link } from 'react-router-dom';


const DetailPage = () => {

    const { detail, handleClearDetail} = useDetail()
   
   
    return(
        <div className={style.container}>
            <h2 className={style.subtitle}>Id: {detail?.id}</h2>
            <img className={style.image} src={detail?.image} alt="Imagen"/>
            <h2 className={style.subtitleOne}>Nombre: {detail?.name}</h2> 
            <h2 className={style.subtitleTwo}>Altua: {detail?.height} Cm.</h2> 
            <h2 className={style.subtitleTwo}>Peso: {detail?.weight} kg. </h2>   
            <h2 className={style.subtitleTwo}>Años de vide: {detail?.years}</h2>  
            <h2 className={style.temp}>Temperamento: {detail?.temperament?.map((temp) => temp).join(', ')}</h2> 
            <Link to={'/home'} >
                <button className={style.dogLoverButton} onClick={handleClearDetail}>Home</button>
            </Link>        
        </div>
        
    )
    
}

export default DetailPage