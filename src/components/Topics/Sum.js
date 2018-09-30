import React, { Component } from 'react';

export default class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }
    handleChange1(val){
        this.setState( {number1: parseInt(val, 10) });
    }
    handleChange2(val){
        this.setState( {number2: parseInt(val, 10) });
    }

    addNumbers(num1, num2) {
        this.setState( {sum: num1 + num2})
    }


    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum </h4>
                <input className='inputLine' onChange={ (e) => this.handleChange1(e.target.value) }></input>
                <input className='inputLine' onChange={ (e) => this.handleChange2(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.addNumbers(this.state.number1, this.state.number2) }> Add </button>
                <span className='resultsBox'> { this.state.sum } </span>
            </div>
        )
    }
}