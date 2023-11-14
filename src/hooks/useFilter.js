import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { filterDogsTemp, filterDogsTempOrigen, orderDogs, orderWeight } from "../redux/action";

const useFilter = () => {

    const tempDog = useSelector((state) => state.tempDog)
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        temp: 'todos',
        origen: 'todos',
        order: 'Aleatorio',
        weight: 'Aleatorio'
    })

    const handleFilters = (event) => {
        setFilters({ ...filters, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        dispatch(filterDogsTemp(filters.temp));
        dispatch(filterDogsTempOrigen(filters.origen));
        dispatch(orderDogs(filters.order));
        dispatch(orderWeight(filters.weight));
    }, [filters, dispatch]);

    return { tempDog, filters, setFilters, handleFilters };

}

export default useFilter;
