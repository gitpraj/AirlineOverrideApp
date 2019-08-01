import React, { Component } from 'react';
import '../Style/AirlineOverrideList.css';

export class AddAirlineOverrideTarget extends Component {
    displayName = AddAirlineOverrideTarget.name

    constructor(props) {
        super(props);
        this.state = {
            airlineoverrideid: '',
            hardmaxroi: '',
            maxroi: '',
            max: '',
            percent: '',
            roi: ''
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
    }

    handleSubmit(e) {
        e.preventDefault();

        var formData = new FormData(e.target);
        formData.append('AirlineOverrideId', this.props.overrideid);
        formData.append('HardMaxROI', this.state.hardmaxroi);
        formData.append('MaxROI', this.state.maxroi);
        formData.append('ROI', this.state.roi);
        formData.append('Max', this.state.max);
        formData.append('Percent', this.state.percent);
        
        fetch('api/AirlineOverrideTarget/Create', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("success: " + responseJson)
                if (responseJson != -1) {
                    this.successcloseModal();
                } else {
                    this.closeModal();
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
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Hard Max ROI" maxlength="7" onChange={e => this.setState({ hardmaxroi: e.target.value })}
                                value={this.state.hardmaxroi} required></input>

                            <label><b>Max ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Max ROI" maxlength="7" onChange={e => this.setState({ maxroi: e.target.value })}
                                value={this.state.maxroi} required></input>

                            <label><b>ROI</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="ROI" maxlength="7" onChange={e => this.setState({ roi: e.target.value })}
                                value={this.state.roi} required></input>

                            <label><b>Max</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Max" maxlength="7" onChange={e => this.setState({ max: e.target.value })}
                                value={this.state.max} required></input>

                            <label><b>Percent</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeholder="Perrcent" maxlength="7" onChange={e => this.setState({ percent: e.target.value })}
                                value={this.state.percent} required></input>

                            <button className="w3-button w3-block w3-green w3-section w3-padding" type="submit">Add Airline Override Target</button>

                        </div>
                    </form>

                </div>
            </div>
        );
    }
}
