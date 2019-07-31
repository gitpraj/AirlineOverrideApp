import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import { AirlineOverride } from './AirlineOverride';
import { AddAirlineOverride } from './AddAirlineOverride';
import { UpdateAirlineOverride } from './UpdateAirlineOverride';
import { AirlineOverrideTarget } from './AirlineOverrideTarget';
import './AirlineOverrideList.css';
import './AirlineOverrideTargetList.css';

export class AirlineOverrideTargetList extends Component {
    displayName = AirlineOverrideTargetList.name

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showAddModal: false,
            showUpdateModal: false
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.cancelAddModal = this.cancelAddModal.bind(this);
        this.cancelUpdateModal = this.cancelUpdateModal.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        this.setState({
            showAddModal: true
        })
    }

    handleUpdate() {
        this.setState({
            showUpdateModal: true
        })
    }

    cancelAddModal() {
        this.setState({
            showAddModal: false
        })
    }

    cancelUpdateModal() {
        this.setState({
            showUpdateModal: false
        })
    }

    componentWillMount() {

        const { airlineOverrideID } = this.props;
        console.log("overrideID: " + airlineOverrideID)
        fetch('api/AirlineOverrideTarget/TargetDetails/' + airlineOverrideID, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + JSON.stringify(responseJson))
                if (responseJson != null) {
                    this.setState({ data: responseJson })
                } else {
                    //this.setState({ errors: "Credentials seem to be wrong. Please try again or first register with us" })
                }
            })
    }

    render() {
        const { showAddModal, showUpdateModal, data } = this.state
        var showTable = 0;

        if (data.length > 0)
            showTable = 1;

        return (

            <tr>
                {showTable ?
                    <td colspan="11">
                        <table id="airline-nested">
                            <tr>
                                <th colspan="4">Sequence</th>
                                <th colspan="4">Hard Max ROI</th>
                                <th colspan="4">Max ROI</th>
                                <th colspan="4">Max</th>
                                <th colspan="4">Percent</th>
                                <th colspan="4">ROI</th>
                                <th colspan="4">Actions</th>
                            </tr>

                            {data.map(row =>
                                <AirlineOverrideTarget key={row.airlineOverrideTargetId} targetinfo={row} handleUpdateTarget={this.props.handleUpdateTarget}/>
                            )}
                        </table>
                    </td> : ''}
            </tr>

        );
    }
}
