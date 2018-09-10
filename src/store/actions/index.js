import axios from 'axios';
import {GET_CURRENCIES, GET_SINGLE_CURRENCY} from './actionTypes';

const baseUrl = 'https://api.coinmarketcap.com/v2/';

export const getCurrenciesActionCreator = (res) => {
    return {
        type: GET_CURRENCIES,
        payload: res
    }
}

export const getSingleCurrencyActionCreator = (res) => {
    return {
        type: GET_SINGLE_CURRENCY,
        payload: res
    }
}

export const getCurrencies = () => {
    return dispatch => {
        axios.get(`${baseUrl}ticker`)
        .then(res => {
            dispatch(getCurrenciesActionCreator(Object.values(res.data.data)));
        })
    }
}

export const getSingleCurrency = (id, currency = 'USD') => {
    return dispatch => {
        return axios.get(`${baseUrl}ticker/${id}/?convert=${currency}`)
        .then(res => {
            dispatch(getSingleCurrencyActionCreator(res.data.data));
            return res;
        })
    }
}