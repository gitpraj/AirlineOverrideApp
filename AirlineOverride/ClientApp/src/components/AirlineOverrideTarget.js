import React, { Component } from 'react';
//import Background from '../images/moped.jpg';
//import Background from 'https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300'
import './AirlineOverrideList.css';

export class AirlineOverrideTarget extends Component {
    displayName = AirlineOverrideTarget.name

    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleOverrideTarget = this.handleOverrideTarget.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.handleUpdateTarget(this.props.targetinfo.airlineOverrideId,
                this.props.targetinfo.airlineOverrideTargetId);
    }

    handleOverrideTarget(e) {
        e.preventDefault();
        this.props.handleTarget();
        //tdis.props.history.push("/riders");
    }

    render() {

        const { targetinfo } = this.props;
        const sequence = targetinfo.sequence;
        const percent = targetinfo.percent;
        const max = targetinfo.max;
        const roi = targetinfo.roi;
        const maxroi = targetinfo.maxRoi;
        const hardmaxroi = targetinfo.hardMaxRoi;

        const bestReviewComment = targetinfo.bestReviewComment;

        return (

            <tr>
                <td colspan="4">{sequence}</td>
                <td colspan="4">{hardmaxroi}</td>
                <td colspan="4">{maxroi}</td>
                <td colspan="4">{max}</td>
                <td colspan="4">{percent}</td>
                <td colspan="4">{roi}</td>
                <td><i class="fa fa-edit fa-fw" onClick={this.handleEdit}></i></td>
            </tr>
        );
    }
}
