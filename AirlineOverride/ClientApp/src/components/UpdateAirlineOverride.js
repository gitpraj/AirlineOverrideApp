﻿import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import './AirlineOverrideList.css';

export class UpdateAirlineOverride extends Component {
    displayName = UpdateAirlineOverride.name

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            startdate: '',
            enddate: '',
            groupable: false,
            minrevenue: '',
            guranteedroi: '',
            selfticketing: false,
            payingfrom: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.handleViewRidersSubmit = this.handleViewRidersSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.successcloseModal = this.successcloseModal.bind(this);
    }

    closeModal(e) {
        this.props.cancelUpdateModal();
    }

    successcloseModal(e) {
        this.props.successUpdateModal();
    }

    handleViewRidersSubmit(e) {
        e.preventDefault();
        //tdis.props.history.push("/riders");
    }

    handleSubmit(e) {
        e.preventDefault();

        //if (this.state.groupable == '') {
        //    this.setState({
        //        groupable: false
        //    })
        //}
        //if (this.state.selfticketing == '') {
        //    this.setState({
        //        selfticketing: false
        //    })
        //}
        console.log("code: " + JSON.stringify(this.state))


        var formData = new FormData(e.target);
        formData.append('AirlineOverrideId', this.props.id);
        formData.append('Code', this.state.code);
        formData.append('StartDate', this.state.startdate);
        formData.append('EndDate', this.state.enddate);
        console.log(this.state.groupable)
        formData.append('GroupableStr', this.state.groupable);
        formData.append('MinRevenue', this.state.minrevenue);
        formData.append('GuaranteedROI', this.state.guaranteedroi);
        formData.append('PayingFrom', this.state.payingfrom);
        formData.append('SelfTicketing', this.state.selfticketing);
        console.log(JSON.stringify(formData))

        fetch('api/AirlineOverride/Edit', {
            method: 'PUT',
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + responseJson)
                if (responseJson != -1) {
                    //this.setState({
                    //    message: "Rider added Successfully",
                    //    firstname: "",
                    //    lastname: "",
                    //    phonenum: "",
                    //    email: "",
                    //})
                    this.successcloseModal();
                } else {
                    //.setState({ message: "Rider Email to be unique" })
                    this.closeModal();
                }
            })
    }

    componentWillMount() {

        const { id } = this.props;
        console.log("update id: " + id)

        fetch('api/AirlineOverride/Details/' + id, {
            method: 'GET'
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + JSON.stringify(responseJson))
                if (responseJson != null) {

                    //const code = responseJson.code;
                    //const startdate = responseJson.startDate;
                    //const enddate = responseJson.endDate;
                    //const groupable = responseJson.groupable;
                    //const minrevenue = responseJson.minRevenue;
                    //const guaranteedroi = responseJson.guaranteedRoi;
                    //const payingfrom = responseJson.payingFrom
                    //const selfticketing = responseJson.selfTicketing;

                    this.setState({
                        code: responseJson.code,
                        startdate: responseJson.startDate.substring(0, responseJson.startDate.length - 9),
                        enddate: responseJson.endDate.substring(0, responseJson.endDate.length - 9),
                        groupable: responseJson.groupable,
                        minrevenue: responseJson.minRevenue,
                        guaranteedroi: responseJson.guaranteedRoi,
                        payingfrom: responseJson.payingFrom,
                        selfticketing: responseJson.selfTicketing
                    })
                } else {
                    //this.setState({ errors: "Credentials seem to be wrong. Please try again or first register with us" })
                }
            })
    }

    handleChange({ target }) {
        console.log(target)
        let change = {}

        if (target.checked) {
            change[target.name] = true
        } else {
            change[target.name] = false

        }
        this.setState(change)
    }

    render() {

        const { groupable, selfticketing } = this.state;

        return (
            <div id="id01" className="w3-modal" style={{ display: "block" }}>
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{ width: "600px" }}>

                    <div className="w3-center"><br />
                        <span className="w3-button w3-xlarge w3-hover-red w3-display-topright" onClick={this.closeModal} >&times;</span>
                        <img src="" style={{ width: "30%" }} className="w3-circle w3-margin-top"></img>
                    </div>

                    <form className="w3-container" onSubmit={this.handleSubmit}>
                        <div className="w3-section">
                            <label><b>Code</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Code" onChange={e => this.setState({ code: e.target.value })}
                                value={this.state.code} required></input>

                            <label><b>Start Date</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="date" placeholder="Start Date" onChange={e => this.setState({ startdate: e.target.value })}
                                value={this.state.startdate} required></input>

                            <label><b>End Date</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="date" placeholder="End Date" onChange={e => this.setState({ enddate: e.target.value })}
                                value={this.state.enddate} required></input>

                            <label><b>Min Revenue</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Min Revenue" onChange={e => this.setState({ minrevenue: e.target.value })}
                                value={this.state.minrevenue} required></input>

                            <label><b>Guaranteed ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Guaranteed ROI" onChange={e => this.setState({ guaranteedroi: e.target.value })}
                                value={this.state.guaranteedroi} required></input>

                            <label><b>Paying From</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Paying From" onChange={e => this.setState({ payingfrom: e.target.value })}
                                value={this.state.payingfrom} required></input>

                            {groupable ? <input className="w3-check w3-margin-top" type="checkbox" name="groupable" onClick={this.handleChange} checked />  : 
                                <input className="w3-check w3-margin-top" type="checkbox" name="groupable" onClick={this.handleChange} />} Groupable

                            {selfticketing ? <input className="w3-check w3-margin-top" type="checkbox" name="selfticketing" onClick={this.handleChange} checked /> :
                                <input className="w3-check w3-margin-top" type="checkbox" name="selfticketing" onClick={this.handleChange} />} Self Ticketing

                            <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Update Airline Override</button>

                        </div>
                    </form>

                </div>
            </div>
        );
    }
}