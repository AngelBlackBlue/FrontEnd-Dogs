import { ADD_DOGS, SEARCH_DOGS, ORDER_DOGS, FILTER_DOGS_TEMP, TEMPERAMENT, ORIGEN, WEIGHT_DOG, DETAIL_DOG, CLEAR_DETAIL} from "./action-type";

const initialState = {

    dogs: [],
    backDogs: [],
    tempDog: [],
    detail: [],
    backTempDog:[],
    backOrigenDog:[],
    backOrderDog:[],

};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_DOGS:
            return { ...state, dogs: payload, backDogs: payload };
        case SEARCH_DOGS:
            return { dogs: payload, backDogs: payload, backTempDog: payload, backOrigenDog: payload, backOrderDog: payload };
        case TEMPERAMENT:
            let loadTemper = payload.map(temp => temp.temperament).sort((a, b) => a.localeCompare(b))
            return { ...state, tempDog: loadTemper }
        case DETAIL_DOG:
            return { ...state, detail: payload }
        case CLEAR_DETAIL:
            return {...state, detail: payload}    
        case FILTER_DOGS_TEMP:
            let filterTemp = state.backDogs;
            if (payload !== 'todos') {
                filterTemp = state.backDogs.filter(temp => temp.temperament.some(temper => temper === payload))
            }
            return { ...state, dogs: filterTemp, backTempDog: filterTemp }
        case ORIGEN:
            let filterOrigen = state.backTempDog;
            if (payload === 'bdd') { filterOrigen = [...state.backTempDog].filter(origen => isNaN(origen.id)) }
            if (payload === 'api') { filterOrigen = [...state.backTempDog].filter(origen => !isNaN(origen.id)) }
            return { ...state, dogs: filterOrigen, backOrigenDog: filterOrigen }
        case ORDER_DOGS:
            let filterOrder = state.backOrigenDog
            if (payload === 'A') { filterOrder = [...state.backOrigenDog].sort((a, b) => a.name.localeCompare(b.name)) };
            if (payload === 'Z') { filterOrder = [...state.backOrigenDog].sort((a, b) => b.name.localeCompare(a.name)) };
            return { ...state, dogs: filterOrder, backOrderDog: filterOrder };
        case WEIGHT_DOG:
            let auxWeight = state.backOrderDog;
            if (payload === 'Min') {
                auxWeight = [...state.dogs].sort((a, b) => {
                    let weightA = parseInt(a.weight.split(' ')[0]);
                    let weightB = parseInt(b.weight.split(' ')[0]);
                    if (weightA === weightB) {
                        weightA = parseInt(a.weight.split(' ')[a.weight.split(' ').length - 1]);
                        weightB = parseInt(b.weight.split(' ')[b.weight.split(' ').length - 1]);
                    }
                    return weightA - weightB
                })
            };
            if (payload === 'Max') {
                auxWeight = [...state.dogs].sort((a, b) => {
                    let weightA = parseInt(a.weight.split(' ')[a.weight.split(' ').length - 1]);
                    let weightB = parseInt(b.weight.split(' ')[b.weight.split(' ').length - 1]);
                    if (weightA === weightB) {
                        weightA = parseInt(a.weight.split(' ')[0]);
                        weightB = parseInt(b.weight.split(' ')[0]);
                    }
                    return weightB - weightA
                })
            };
            return { ...state, dogs: auxWeight }
        default:
            return { ...state }
    }

}

export default reducer;

