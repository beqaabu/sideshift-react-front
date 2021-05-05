import React from 'react';

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
    }

    render(){
        return(
            <div className="type">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value=''>Select</option>
                    <option value="fixed">Fixed</option>
                    <option value="variable">Variable</option>
                </select>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default SelectType;