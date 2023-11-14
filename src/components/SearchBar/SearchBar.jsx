import style from './SearchBar.module.css';
import useSearchBar from '../../hooks/useSearchBar';

const SearchBar = () => {
    
    const {name, handleBuscarClick, handleChange } = useSearchBar();
    
    return (
        <div>
            <input type='search' placeholder="Buscar por raza...." className={style.input} onChange={handleChange} value={name} />
            <button onClick={() => handleBuscarClick(name)} className={style.dogLoverButton}>Buscar</button>
        </div>
    );

}

export default SearchBar




