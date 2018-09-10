import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleCurrency} from '../store/actions/index';
import CurrencyDetailData from '../components/CurrencyDetailData';
import Loading from '../components/Loading';

class CurrencyDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentWillMount () {
        this.setState({
            loading: true
        })
    }

    componentDidMount () {
        if (this.props.location.state) {
            this.props.getData(this.props.location.state.id)
            .then(res => {
                this.setState({
                    loading: false
                })
            }) 
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        let singleCurrency = <Loading />;
        
        if (!this.state.loading && this.props.data && this.props.data.quotes) {
            singleCurrency = <CurrencyDetailData currencyType={this.props.currencyType} handleCurrencyChange={this.props.getData} data={this.props.data} />
        }
        return (
            <div>
                {singleCurrency}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currencyNames: state.currencies.map(c => c.website_slug),
        data: state.singleCurrency,
        currencyType: state.currencyType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (id, currency) =>  dispatch(getSingleCurrency(id, currency))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDetail);
