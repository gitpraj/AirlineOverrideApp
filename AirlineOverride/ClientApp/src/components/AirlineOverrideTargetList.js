import React, { Component } from 'react';
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
                        <table class="airline-nested" id="airline-nested-header">
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
