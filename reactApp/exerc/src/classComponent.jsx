import React, { Component } from 'react';
//If you don't import Component here, you can use it as React.Component

export default class classComponent extends Component {
    render() {
        return (
            <h1>{ this.props.value }</h1>
        )
    }

}