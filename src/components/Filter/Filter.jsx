import style from './Filter.module.css'
import useFilter from '../../hooks/useFilter'

const Filter = () => {

    const { tempDog, filters, handleFilters } = useFilter();

    return (
        <div className={style.divContainer}>
            <div className={style.container}>

                <div className={style.items}>
                    <label>Temperamento: </label>
                    <select name='temp' className={style.selectTemp} onChange={handleFilters} value={filters.temp}>
                        <option value='todos'>todos</option>
                        {tempDog && tempDog.length > 0 && tempDog.map((temp, index) => (<option key={index} value={temp}>{temp}</option>))}
                    </select>
                </div>
                <div className={style.items}>
                    <label>Origen: </label>
                    <select name='origen' onChange={handleFilters} value={filters.origen}>
                        <option value='todos'>todos</option>
                        <option value='bdd'>bdd</option>
                        <option value='api'>api</option>
                    </select>
                </div>
                <div className={style.items}>
                    <label>Orden: </label>
                    <select name='order' value={filters.order} onChange={handleFilters} >
                        <option value='Aleatorio'>Aleatorio</option>
                        <option value='A'>A-Z</option>
                        <option value='Z'>Z-A</option>
                    </select>
                </div>
                <div className={style.items}>
                    <label>Peso: </label>
                    <select name='weight' value={filters.weight} onChange={handleFilters}>
                        <option value='Aleatorio'>Aleatorio</option>
                        <option value='Min'>Mínimo</option>
                        <option value='Max'>Máximo</option>
                    </select>

                </div>
            </div>
        </div>
    )


}

export default Filter;

