import React, { Component } from 'react';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <div className="container">
            {this.props.children}
        </div>
    );
  }
}
