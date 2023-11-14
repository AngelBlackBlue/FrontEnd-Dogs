
const validation = ({ name, heightMin, heightMax, weightMin, weightMax, yearsMin, yearsMax, newTemp, temperament }) => {

    const errors = {};
    const temperamentos = temperament ? temperament.split(',').map((temp) => temp.trim()) : [];
    const newTemps = newTemp ? newTemp.split(',').map(temp => temp.trim()).filter(element => element !== '') : [];
    const totalTemps = [...temperamentos, ...newTemps];
    const regex = /^[a-zA-Z\s]+$/;

    if (!name.length) errors.name = 'Completar nombre. ';
    if (name.length > 30) errors.name = 'El nombre no debe superar los 30 caracteres. ';
    if (!regex.test(name)) errors.name = 'No se admite caracteres especiales, ni números. ';

    if (heightMin < 0 || isNaN(parseInt(heightMin))) errors.heightMin = 'Ingrese un número válido en altura mínima. ';
    if (heightMax < 0 || isNaN(parseInt(heightMax))) errors.heightMax = 'Ingrese un número válido en la altura máxima. ';
    if (parseInt(heightMin) >= parseInt(heightMax)) errors.heightMin = 'La altura mínima no puede ser mayor o igual a la altura máxima. ';

    if (weightMin < 0 || isNaN(parseInt(weightMin))) errors.weightMin = 'Ingrese un número válido en peso mínimo. ';
    if (weightMax < 0 || isNaN(parseInt(weightMax))) errors.weightMax = 'Ingrese un número válido en peso máximo. ';
    if (parseInt(weightMin) >= parseInt(weightMax)) errors.weightMin = 'El peso mínima no puede ser mayor o igual al peso máximo. ';

    if (yearsMin < 0 || isNaN(parseInt(yearsMin))) errors.yearsMin = 'Ingrese un número válido en años mínimo de vida. ';
    if (yearsMax < 0 || isNaN(parseInt(yearsMax))) errors.yearsMax = 'Ingrese un número válido en años máximo de vida. ';
    if (parseInt(yearsMin) >= parseInt(yearsMax)) errors.yearsMin = 'El mínimo de vida no puede ser mayor o igual al año máximo de vida. ';

    if (!totalTemps.length) errors.temperament = 'Completar con al menos un temperamento. ';
    if (totalTemps.some(temp => temp.length > 16)) {
        errors.temperament = 'Temperamento no puede superar las 16 caracteres. ';
    }

    return errors;

}

export default validation;