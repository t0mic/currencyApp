import React from 'react';
import { Link } from 'react-router-dom';

const CurrencyDetailData = (props) => {

    const currencyType = props.currencyType;

    const handleChange = (e) => {
        props.handleCurrencyChange(props.data.id, e.target.value)
    }

    return (
        <div className="currencyDetail">
            <h2>{props.data.name} (RANK #{props.data.rank})</h2>
            <div>
                <select onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                </select>
                <div className="detailWrap">
                    <p>Price:</p>
                    <p>{props.data.quotes[currencyType]['price'].toFixed(2)}</p>
                </div>
                <div className="detailWrap">
                    <p>Market Cap:</p>
                    <p>{props.data.quotes[currencyType]['market_cap']}</p>
                </div>
                <div className="detailWrap">
                    <p>Daily Volume:</p>
                    <p>{props.data.quotes[currencyType]['volume_24h'].toFixed(2)}</p>
                </div>
                <div className="detailWrap">
                    <p>Circulation Supply:</p>
                    <p>{props.data.circulating_supply}</p>
                </div>
                <div className="detailWrap">
                    <p>Change (1h):</p>
                    <p style={props.data.quotes[currencyType]['percent_change_1h'] > 0 ? {color: 'green'} : {color: 'red'}}>{props.data.quotes[currencyType]['percent_change_1h']}%</p>
                </div>
                <div className="detailWrap">
                    <p>Change (24h):</p>
                    <p style={props.data.quotes[currencyType]['percent_change_24h'] > 0 ? {color: 'green'} : {color: 'red'}}>{props.data.quotes[currencyType]['percent_change_24h']}%</p>
                </div>
                <div className="detailWrap">
                    <p>Change (7 Days):</p>
                    <p style={props.data.quotes[currencyType]['percent_change_7d'] > 0 ? {color: 'green'} : {color: 'red'}}>{props.data.quotes[currencyType]['percent_change_7d']}%</p>
                </div>
            </div>
            <Link to={"/"}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default CurrencyDetailData