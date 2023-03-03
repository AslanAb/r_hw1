import React, { Component } from 'react';

interface IStatus {
    status: string
}

export default class Status extends Component<IStatus> {
    
    render() {
        return (
            <p className='text-base font-bold'>{this.props.status}</p>
        )
    }
}