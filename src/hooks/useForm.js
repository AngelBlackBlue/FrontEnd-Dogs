import { useState, useEffect } from "react";
import validation from "../components/FormPage/Validation";
import { createDog } from "../services/services";
import { useDispatch, useSelector } from "react-redux";
import { addDogs, tempDogs } from "../redux/action";

const useForm = () => {

    const dogs = useSelector(state=> state.dogs);
    const tempDog = useSelector((state) => state.tempDog);

    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        yearsMin: '',
        yearsMax: '',
        newTemp: '',
        temperament: '',
        image: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        yearsMin: '',
        yearsMax: '',
        newTemp: '',
        temperament: '',
    });

    const create = {
        name: userData.name,
        height: `${userData.heightMin} - ${userData.heightMax}`,
        weight: `${userData.weightMin} - ${userData.weightMax}`,
        years: `${userData.yearsMin} - ${userData.yearsMax} years`,
        temperament: userData.temperament + ', ' + userData.newTemp,
        image: userData.image,
    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
        
    }

    const [tempSelect, setTempSelect] = useState([]);
    
    const handleTemp = (event) => {
        const eventTemp = event.target.value;
        const filterTemp = tempSelect.some(temp => temp === eventTemp);
        console.log(filterTemp)

        if (filterTemp) {
            const removeTemp = tempSelect.filter(temp => temp !== eventTemp)
            setTempSelect([...removeTemp]);
        } else {
            if (eventTemp) setTempSelect([...tempSelect, ...[event.target.value]]);
        }

    }

    useEffect(() => {

        const str = tempSelect.join(', ');
        setUserData({ ...userData, temperament: str });
        setErrors(validation({ ...userData, temperament: str }));
              
        // eslint-disable-next-line 
    }, [tempSelect])


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const modifiedName = create.name.split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        
        const repeat = dogs.some(raza=> raza.name === modifiedName);
        
        if(repeat) return window.alert('Raza existene')

        createDog(create);
        setUserData({
            ...userData, name: '', heightMin: '',
            heightMax: '', weightMin: '', weightMax: '',
            yearsMin: '', yearsMax: '', newTemp: '', temperament: '', image: '',
        });
        setTempSelect([])
        
        setTimeout(() => {
            dispatch(addDogs());
            dispatch(tempDogs());
            
        }, 1000);
    }

    return { userData, errors, handleChange, handleSubmit, setUserData, handleTemp, tempDog }

}

export default useForm