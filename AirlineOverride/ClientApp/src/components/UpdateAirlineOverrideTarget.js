﻿import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import './AirlineOverrideList.css';

export class UpdateAirlineOverrideTarget extends Component {
    displayName = UpdateAirlineOverrideTarget.name

    constructor(props) {
        super(props);
        this.state = {
            airlineoverrideid: '',
            hardmaxroi: '',
            maxroi: '',
            max: '',
            percent: '',
            roi: '',
            overrideid: '',
            sequence: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.successcloseModal = this.successcloseModal.bind(this);
    }

    closeModal(e) {
        this.props.cancelAddTargetModal();
    }

    successcloseModal(e) {
        this.props.successAddTargetModal();
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
        formData.append('AirlineOverrideTargetId', this.props.targetid);
        formData.append('AirlineOverrideId', this.state.overrideid);
        formData.append('HardMaxROI', this.state.hardmaxroi);
        formData.append('MaxROI', this.state.maxroi);
        formData.append('ROI', this.state.roi);
        formData.append('Max', this.state.max);
        formData.append('Percent', this.state.percent);
        formData.append('Sequence', this.state.sequence);

        fetch('api/AirlineOverrideTarget/Edit', {
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

        const { overrideid, targetid } = this.props;
        console.log("update target id: " + targetid)

        fetch('api/AirlineOverrideTarget/Details/' + targetid, {
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
                        hardmaxroi: responseJson.hardMaxRoi,
                        maxroi: responseJson.maxRoi,
                        roi: responseJson.roi,
                        max: responseJson.max,
                        percent: responseJson.percent,
                        sequence: responseJson.sequence,
                        overrideid: responseJson.airlineOverrideId,
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
        return (
            <div id="id01" className="w3-modal" style={{ display: "block" }}>
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{ width: "600px" }}>

                    <div className="w3-center"><br />
                        <span className="w3-button w3-xlarge w3-hover-red w3-display-topright" onClick={this.closeModal} >&times;</span>
                        <img src="" style={{ width: "30%" }} className="w3-circle w3-margin-top"></img>
                    </div>

                    <form className="w3-container" onSubmit={this.handleSubmit}>
                        <div className="w3-section">
                            <label><b>Hard Max ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Hard Max ROI" onChange={e => this.setState({ hardmaxroi: e.target.value })}
                                value={this.state.hardmaxroi} required></input>

                            <label><b>Max ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Max ROI" onChange={e => this.setState({ maxroi: e.target.value })}
                                value={this.state.maxroi} required></input>

                            <label><b>ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="ROI" onChange={e => this.setState({ roi: e.target.value })}
                                value={this.state.roi} required></input>

                            <label><b>Max</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Max" onChange={e => this.setState({ max: e.target.value })}
                                value={this.state.max} required></input>

                            <label><b>Percent</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Perrcent" onChange={e => this.setState({ percent: e.target.value })}
                                value={this.state.percent} required></input>

                            <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Update Airline Override Target</button>

                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
