import React, { Component } from 'react';
//If you don't import Component here, you can use it as React.Component

export default class classComponent extends Component {
    //state and props are a pattern. All the props are read only, you can't change their value.
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }

    sum(delta) {
        this.setState({ value: this.state.value + delta});
    }

    render() {
        return (
            <div>
                <h1>{ this.props.label }</h1>
                <h2>{ this.state.value }</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }

}