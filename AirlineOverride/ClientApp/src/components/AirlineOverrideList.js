import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import { AirlineOverride } from './AirlineOverride';
import { AddAirlineOverride } from './AddAirlineOverride';
import { UpdateAirlineOverride } from './UpdateAirlineOverride';
import { AddAirlineOverrideTarget } from './AddAirlineOverrideTarget';
import { UpdateAirlineOverrideTarget } from './UpdateAirlineOverrideTarget';
import { ClockTime } from './ClockTime';
import './AirlineOverrideList.css';

export class AirlineOverrideList extends Component {
    displayName = AirlineOverrideList.name

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showAddModal: false,
            showUpdateModal: false,
            showTargets: false,
            showAddTargetModal: false,
            updateAirlineId: '',
            addtargetOverrideId: '',
            targetid: '',
            refreshTargets: true,
            showUpdateTargetModal: false
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.cancelAddModal = this.cancelAddModal.bind(this);
        this.cancelAddTargetModal = this.cancelAddTargetModal.bind(this);
        this.cancelUpdateTargetModal = this.cancelUpdateTargetModal.bind(this);
        this.cancelUpdateModal = this.cancelUpdateModal.bind(this);
        this.handleTarget = this.handleTarget.bind(this);
        this.handleAddTarget = this.handleAddTarget.bind(this);
        this.handleUpdateTarget = this.handleUpdateTarget.bind(this);
        this.successAddModal = this.successAddModal.bind(this);
        this.successAddTargetModal = this.successAddTargetModal.bind(this);
        this.successUpdateTargetModal = this.successUpdateTargetModal.bind(this);
        this.successUpdateModal = this.successUpdateModal.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        this.setState({
            showAddModal: true
        })
    }

    handleUpdate(id) {
        console.log("update id: " + id)
        this.setState({
            showUpdateModal: true,
            updateAirlineId: id
        })
    }

    handleUpdateTarget(overrideid, targetid) {
        //console.log("update id: " + id)
        this.setState({
            showUpdateTargetModal: true,
            updateAirlineId: overrideid,
            targetid: targetid
        })
    }

    handleAddTarget(id) {
        console.log("add target")
        this.setState({
            showAddTargetModal: true,
            addtargetOverrideId: id
        })
    }

    cancelAddModal() {
        this.setState({
            showAddModal: false
        })
    }

    successAddModal() {
        this.setState({
            showAddModal: false
        })
        this.componentWillMount()
    }

    cancelAddTargetModal() {
        this.setState({
            showAddTargetModal: false
        })
    }

    successAddTargetModal() {
        this.setState({
            showAddTargetModal: false
        })
        //this.componentWillMount()
    }

    cancelUpdateTargetModal() {
        this.setState({
            showUpdateTargetModal: false
        })
    }

    successUpdateTargetModal() {
        this.setState({
            showUpdateTargetModal: false
        })
        //this.componentWillMount()
    }

    cancelUpdateModal() {
        this.setState({
            showUpdateModal: false
        })
    }

    successUpdateModal() {
        this.setState({
            showUpdateModal: false
        })
        this.componentWillMount()
    }

    handleTarget(overrideId) {
    }

    componentWillMount() {

        fetch('api/AirlineOverride/Index', {
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
        const { showAddModal, showUpdateModal, showAddTargetModal, showUpdateTargetModal, data,
            updateAirlineId, addtargetOverrideId, targetid } = this.state

        return (
            <div className="container">

                <div id="clocktime">
                    <ClockTime />   
                </div>
                <br />
                <div className="icon-bar">
                            <a className="icon-bar-name">Airline Override</a>
                            <a className="icon-bar-right" id="add-button" onClick={this.handleAdd}><i class="fa fa-plus fa-fw"></i></a>
                            <a className="icon-bar-right"><i class="fa fa-search fa-fw"></i></a>
                            <a className="icon-bar-right"><i class="fa fa-envelope fa-fw"></i></a>
                            <a className="icon-bar-right"><i class="fa fa-globe fa-fw"></i></a>
                            <a className="icon-bar-right"><i class="fa fa-trash fa-fw"></i></a>
                </div>


                <table id="airline">
                    <tr>
                        <th></th>
                        <th>Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Groupable</th>
                        <th>Min Revenue</th>
                        <th>Guaranteed ROI</th>
                        <th>Paying From</th>
                        <th>Self Ticketing</th>
                        <th>Actions</th>
                        <th>Add Target</th>
                    </tr>
                    {
                        
                        data.map(row =>
                            //<Blog key={blg.id} blogSummary={blg} />)
                            //<tbody>
                            <AirlineOverride key={row.airlineOverrideId} info={row} handleUpdate={this.handleUpdate} handleTarget={this.handleTarget}
                                handleAddTarget={this.handleAddTarget} handleUpdateTarget={this.handleUpdateTarget} />
                                
                            //    <AirlineOverrideTargetList airlineOverrideID={row.airlineOverrideId} showTargets={showTargets} />
                            //</tbody>
                        )
                    }
                </table>

                {showAddModal ? <AddAirlineOverride cancelAddModal={this.cancelAddModal} successAddModal={this.successAddModal} /> : ''}
                {showUpdateModal ? <UpdateAirlineOverride cancelUpdateModal={this.cancelUpdateModal} successUpdateModal={this.successUpdateModal} id={updateAirlineId} /> : ''}
                {showAddTargetModal ? <AddAirlineOverrideTarget cancelAddTargetModal={this.cancelAddTargetModal} successAddTargetModal={this.successAddTargetModal} overrideid={addtargetOverrideId}/> : ''}
                {showUpdateTargetModal ? <UpdateAirlineOverrideTarget cancelAddTargetModal={this.cancelUpdateTargetModal} successAddTargetModal={this.successUpdateTargetModal} overrideid={addtargetOverrideId}
                    targetid={targetid} /> : ''}

            </div>
        );
    }
}
