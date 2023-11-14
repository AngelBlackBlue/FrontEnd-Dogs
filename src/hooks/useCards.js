import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDogs, tempDogs } from '../redux/action';

const useCards = () => {

    const dogs = useSelector((state) => state.dogs);
    const backDogs = useSelector((state) => state.backDogs)
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;

    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
    const totalPages = Math.ceil(dogs.length / dogsPerPage);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!backDogs.length) {
            setIsLoading(true); 
            dispatch(addDogs());
          
            setTimeout(() => {
             dispatch(tempDogs());
            }, 1000);
            setTimeout(() => {
             setIsLoading(false);
            }, 5000);
            
        }
        if (currentPage > totalPages) setCurrentPage(totalPages);
        if (!totalPages) setCurrentPage(1)
    }, [backDogs, totalPages, currentPage, dispatch])

    // useEffect(() => {

    //     if (!backDogs.length) {
    //         setIsLoading(true); 
    //         const fetchData = async () => {
    //             await dispatch(addDogs());
    //             await dispatch(tempDogs())
    //         }
    //       fetchData()
    //       setIsLoading(false)
    //     }
    //     if (currentPage > totalPages) setCurrentPage(totalPages);
    //     if (!totalPages) setCurrentPage(1)
    // }, [backDogs, totalPages, currentPage, dispatch])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleLastPage = () => {
        if (totalPages > 1) {
            setCurrentPage(totalPages);
        }
    }

    return { currentDogs, currentPage, totalPages,handleNextPage, handleFirstPage, handlePrevPage, handleLastPage, isLoading }



}

export default useCards;