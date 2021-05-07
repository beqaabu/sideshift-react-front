import React from 'react';
import SelectCoins from './SelectCoins';
import EnterAmount from './EnterAmount';
import Address from './Address.js';
const fetch = require('node-fetch');

class SelectType extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: '',
            pair1: '',
            pair2: '',
            amount: ''
        };

        this.response = {}

        this.handleChange = this.handleChange.bind(this);
        this.updatePair1 = this.updatePair1.bind(this);
        this.updatePair2 = this.updatePair2.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
    }

    handleChange(event){
        console.log(event);
        this.setState({type: event.target.value});
    }

    updatePair1(event) {
        this.setState({pair1: event.target.value});
    }

    updatePair2(event) {
        this.setState({pair2: event.target.value});
    }

    updateAmount(event){
        this.setState({amount: event.target.value});
    }
    
   /*postQuote(){
        let data = [
            {
                "depositMethod": this.state.pair1,
                "settleMethod": this.state.pair2,
                "depositAmount": this.state.amount
            }
        ]

        const url = 'https://sideshift.ai/api/v1/quotes';
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((result) => {
            this.response = result;
        })
        .catch((e) => console.log(e));

        console.log(data.depositMethod);
    }*/

    TypeSelection(){
        if(this.state.type === 'fixed'){
            return(
                <div>
                    <p>Fixed exchange type selected</p>
                    <SelectCoins updatePair = {this.updatePair1} onChange = {this.handleChange}/>
                    <SelectCoins updatePair = {this.updatePair2} onChange = {this.handleChange}/>
                    <EnterAmount updateAmount = {this.updateAmount} />
                </div>
            )
        } else if(this.state.type === 'variable'){
            return(
                <div>
                    <p>Variable exchange type selected</p>
                    <SelectCoins updatePair = {this.updatePair1} onChange = {this.handleChange}/>
                    <SelectCoins updatePair = {this.updatePair2} onChange = {this.handleChange}/>
                    <Address />
                </div>
            )
        }   
    }

    render(){
        if(this.state.type !== ''){
            return(
                <div>
                    {this.TypeSelection()}
                    <p>{this.state.pair1} {this.state.pair2} {this.state.amount}</p>
                </div>
            )
        } else {
            return(
                <div className="type">
                    <p>Select the Type of the Exchange</p>
                    <select value={this.state.type} onChange={this.handleChange}>
                        <option value=''>Select</option>
                        <option value="fixed">Fixed</option>
                        <option value="variable">Variable</option>
                    </select>
                    <p>{this.TypeSelection()}</p>
                    <p>{this.state.pair1} {this.state.pair2} {this.state.amount}</p>
                </div>
            )
        }
    }
}

export default SelectType;
