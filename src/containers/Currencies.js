import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCurrencies} from '../store/actions/index';
import SingleCurrency from '../components/SingleCurrency';
import _ from 'lodash';
import Loading from '../components/Loading';

class Currencies extends Component {
    
    componentDidMount () {
        this.props.getData()
    }

    render() {
        let currencies = <Loading />;
        if (this.props.currencies && this.props.currencies.length > 0) {
            currencies = 
            _.sortBy(this.props.currencies, item => item.rank).map(currency => {
                return (
                    <SingleCurrency key={currency.rank} currency={currency} />
                )
            })
        }
        return (
            <div>
                {currencies}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.currencies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getCurrencies())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
