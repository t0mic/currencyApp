import {GET_CURRENCIES, GET_SINGLE_CURRENCY} from '../actions/actionTypes';

const initialState = {
    currencies: [],
    singleCurrency: {},
    currencyType: 'USD'
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES: {
            return {
                ...state,
                currencies: action.payload
            }
        }

        case GET_SINGLE_CURRENCY: {
            let currencyType;
            if (Object.keys(action.payload.quotes).length === 1) {
                currencyType = Object.keys(action.payload.quotes)[0];
            } else {
                currencyType = Object.keys(action.payload.quotes)[1];
            }
            return {
                ...state,
                singleCurrency: action.payload,
                currencyType
            }
        }
        default: return initialState
    }
}

export default currencyReducer;