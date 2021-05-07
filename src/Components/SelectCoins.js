import React from 'react';
const fetch = require('node-fetch');

class SelectCoins extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: [],
        value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.updatePair = props.updatePair;
    }

    handleChange(event){
        this.setState({value: event.target.value});
        this.updatePair({...event});
    }

    componentDidMount() {
        fetch("https://sideshift.ai/api/v1/facts")
        .then(res => res.json())
        .then(
            (result) => {
                let assets = [];
                for(let key in result.assets){
                    assets.push(result.assets[key]);
                }
            this.setState({
                isLoaded: true,
                items: assets
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <form onSubmit = {this.handleSubmit}>
                    <div className="App"> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            {items.map(coin => (
                                <option key = {coin.id} value = {coin.id.toLowerCase()}>{coin.name}/{coin.id}</option>
                            ))}
                        </select>
                        <p>{this.state.value}</p>
                    </div>
                </form>
            );
        }
    }
}

export default SelectCoins;


/*
fixed -> quote {in, out, deposit} -> create order {type, quoteId, settleAddress}
variable -> create order {type, in, out, settleAddress, affiliateId, sessionSecret}
*/
