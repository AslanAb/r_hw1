import React, { Component } from 'react';

interface IName {
    name: string
}

export default class Name extends Component<IName> {
    
    render() {
        return (
            <p className='text-lg font-bold'>{this.props.name}</p>
        )
    }
}