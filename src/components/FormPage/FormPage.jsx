import style from './FormPage.module.css';
import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';

const FormPage = () => {

    const { userData, errors, handleChange, handleSubmit, handleTemp, tempDog  } = useForm();

    return (

        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div className={style.divDistance}>
                    <label>Nombre: </label>
                    <input className={style.inputName} type="text" name='name' placeholder="<Nombre>" value={userData.name} onChange={handleChange} />
                    {errors.name && <p className={style.errorMessage}>{errors.name}</p>}
                </div> 
                <div className={style.divDistance}>
                    <label>Imagen: </label>   
                    <input className={style.inputImg} type="text" name="image" placeholder="<Ingrese la URL de la imagen>" value={userData.image} onChange={handleChange}/>   
                </div> 
                <div className={style.divDistance}>
                    <label>Altura: </label>
                    <input className={style.input} type="text" name='heightMin' placeholder="<Minima>" value={userData.heightMin} onChange={handleChange} />
                    <> - </>
                    <input className={style.input} type="text" name='heightMax' placeholder="<Maxima>" value={userData.heightMax} onChange={handleChange} />
                    <> cm. </>
                </div>
                <div className={style.errorMessage}>
                    {errors.heightMin && <> {errors.heightMin}</>}
                    {errors.heightMax && <>{errors.heightMax}</>}
                </div>
                <div className={style.divDistance}>
                    <label>Peso: </label>
                    <input className={style.input} type="text" name='weightMin' placeholder="<Minimo>" value={userData.weightMin} onChange={handleChange} />
                    <> - </>
                    <input className={style.input} type="text" name='weightMax' placeholder="<Maximo>" value={userData.weightMax} onChange={handleChange} />
                    <> Kg. </>
                </div> 
                <div className={style.errorMessage}>
                    {errors.weightMin && <>{errors.weightMin}</>}
                    {errors.weightMax && <>{errors.weightMax}</>}
                </div>             
                <div className={style.divDistance}>
                    <label>Años de vida: </label>
                    <input className={style.input} type="text" name='yearsMin' placeholder="<Minimo>" value={userData.yearsMin} onChange={handleChange} />
                    <> - </>
                    <input className={style.input} type="text" name='yearsMax' placeholder="<Maximo>" value={userData.yearsMax} onChange={handleChange} />
                </div >
                <div className={style.errorMessage}>
                    {errors.yearsMin && <>{errors.yearsMin}</>}
                    {errors.yearsMax && <>{errors.yearsMax}</>}
                </div>
                <div className={style.divDistance}>
                    <label >Nuevo Temperamento : </label>
                </div>
                <input className={style.inputTemp} type="text" name='newTemp' placeholder="Puede crear nuevos temperamentos, separados por coma." value={userData.newTemp} onChange={handleChange} />
                <div className={style.divTemp}>
                    <label>Temperamento: </label>
                    <select value="" onChange={handleTemp} className={style.selectTemp}>
                        <option value="" >Select...</option>
                        {tempDog && tempDog.length > 0 && tempDog.map((temp, index) => (<option key={index} value={temp} >{temp}</option>))}
                    </select>
                </div>
                <div>
                    <textarea className={style.textTemp} type="text" name='temperament' placeholder="<Temperamento>" value={userData?.temperament} onChange={handleChange}  disabled/>
                </div>
                <div className={style.errorMessage}>
                    {errors.temperament && <>{errors.temperament}</>}
                </div>
 
                <div className={style.divButton} >  
                    <Link to={'/Home'}>
                       <button className={style.dogLoverButton}>Home</button>
                    </Link> 
                    <div>
                        <button className={style.dogLoverButtonCrear} type='submit'>Crear</button>   
                    </div>
                </div>
            </form>
        </div>
    )

}

export default FormPage