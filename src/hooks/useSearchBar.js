import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchDogs, tempDogs } from '../redux/action';


const useSearchBar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleBuscarClick = (name) => {
        if (!name) return window.alert('Ingrese un raza')
        dispatch(tempDogs());
        dispatch(searchDogs(name))
        setName('');
    }

    return { name, handleChange, handleBuscarClick}

}

export default useSearchBar;