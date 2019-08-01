import React, { Component } from 'react';
import '../Style/AirlineOverrideList.css';
import { AirlineOverrideTargetList } from './AirlineOverrideTargetList';
import { AddAirlineOverride } from './AddAirlineOverride';

export class AirlineOverride extends Component {
    displayName = AirlineOverride.name

    constructor(props) {
        super(props);
        this.state = {
            showTargets: false,
            showAddTargetModal: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleOverrideTarget = this.handleOverrideTarget.bind(this);
        this.handleAddTarget = this.handleAddTarget.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.handleUpdate(this.props.info.airlineOverrideId);
    }

    handleOverrideTarget(e) {
        e.preventDefault();
        const { showTargets } = this.state

        if (showTargets) {
            this.setState({
                showTargets: false
            })
        } else {
            this.setState({
                showTargets: true
            })
        }
    }

    handleAddTarget(e) {
        e.preventDefault();
        this.props.handleAddTarget(this.props.info.airlineOverrideId);
    }

    render() {

        const { showTargets } = this.state;
        const { info } = this.props;
        const code = info.code;
        const startdate = info.startDate;
        const enddate = info.endDate;
        const groupable = info.groupable;
        const minrevenue = info.minRevenue;
        const guaranteedroi = info.guaranteedRoi;
        const payingfrom = info.payingFrom
        const selfticketing = info.selfTicketing;

        const bestReviewComment = info.bestReviewComment;

        return (
            <tbody>
                <tr>
                    <td><i class="fa fa-arrow-down fa-fw" onClick={this.handleOverrideTarget}></i></td>
                    <td>{code}</td>
                    <td>{startdate}</td>
                    <td>{enddate}</td>
                    {groupable ? <td><input type="checkbox" checked/></td> : <td><input type="checkbox" /></td>}
                    <td>{minrevenue}</td>
                    <td>{guaranteedroi}</td>
                    <td>{payingfrom}</td>
                    {selfticketing ? <td><input type="checkbox" checked /></td> : <td><input type="checkbox" /></td>}
                    <td><i class="fa fa-edit fa-fw" onClick={this.handleEdit}></i></td>
                    <td><i class="fa fa-plus fa-fw" onClick={this.handleAddTarget}></i></td>
                </tr>
                {showTargets ? <AirlineOverrideTargetList airlineOverrideID={this.props.info.airlineOverrideId} handleUpdateTarget={this.props.handleUpdateTarget}/> : ''}

                
            </tbody >
        );
    }
}
