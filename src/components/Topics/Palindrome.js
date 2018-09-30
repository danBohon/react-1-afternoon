import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val) {
        this.setState( { userInput: val } )
    }

    checkForPalindrome(userInput) {
        let forwards = this.state.userInput;
        let backwards = userInput.split('').reverse().join('');
        let palindrome = '';
        
        if (forwards === backwards) {
            palindrome = 'true';
        } else palindrome = 'false'
        
        this.setState( {palindrome: palindrome});
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome </h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.checkForPalindrome(this.state.userInput) }> Check </button>
                <span className='resultsBox'> Palindrome: { this.state.palindrome }</span>
            </div>
            )
    }
}