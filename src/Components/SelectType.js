import React from 'react';
import SelectCoins from './SelectCoins';
import EnterAmount from './EnterAmount';
import Address from './Address.js';

class SelectType extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({type: event.target.value});
    }

    render(){
        if(this.state.type !== ''){
            return(
                <div>
                    {TypeSelection(this)}
                </div>
            )
        }
        else {
            return(
                <div className="type">
                    <p>Select the Type of the Exchange</p>
                    <select value={this.state.type} onChange={this.handleChange}>
                        <option value=''>Select</option>
                        <option value="fixed">Fixed</option>
                        <option value="variable">Variable</option>
                    </select>
                    <p>{TypeSelection(this)}</p>

                    
                </div>
            )
        }
    }
}

function TypeSelection(props){
    if(props.state.type === 'fixed'){
        return(
            <div>
                <p>Fixed exchange type selected</p>
                <SelectCoins />
                <SelectCoins />
                <EnterAmount />
            </div>
        )
    } else if(props.state.type === 'variable'){
        return(
            <div>
                <p>Variable exchange type selected</p>
                <SelectCoins />
                <SelectCoins />
                <Address />
            </div>
        )
    }
}

export default SelectType;
