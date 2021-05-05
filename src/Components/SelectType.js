import React from 'react';
let x = '';

class SelectType extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
        //type = event.target.value;
    }

    render(){
        return(
            <div className="type">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value="fixed">Fixed</option>
                    <option value="variable">Variable</option>
                </select>
                {x = this.state.value}
            </div>
        )
    }
}

export default SelectType;