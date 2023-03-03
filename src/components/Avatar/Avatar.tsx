import React, { Component } from 'react';

interface IAvatar {
    avatar: string
}

export default class Avatar extends Component<IAvatar> {
    
    render() {
        return (
            <img src={this.props.avatar} className='w-96'></img>
        )
    }
}