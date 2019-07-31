import React, { Component } from 'react';
import Clock from 'react-clock';

export class ClockTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    render() {
        return (
            <div>
                <br />
                <Clock
                    value={this.state.date}
                />
            </div>
        );
    }
}