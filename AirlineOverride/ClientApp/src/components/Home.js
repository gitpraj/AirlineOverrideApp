import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import './Home.css';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleEnterRiderSubmit = this.handleEnterRiderSubmit.bind(this);
    }

    handleEnterRiderSubmit(e) {
        e.preventDefault();
        this.props.history.push("/airlineoverridelist");
    }

    render() {
        return (
            <div className="bg-text">
                <div className="back">
                    <div className="button_base b07_3d_double_roll" onClick={this.handleEnterRiderSubmit}>
                        <div>Enter AirlineOverride</div>
                        <div>Enter AirlineOverride</div>
                        <div>Enter AirlineOverride</div>
                        <div>Enter AirlineOverride</div>
                    </div>
                </div>
            </div>
        );
    }
}
