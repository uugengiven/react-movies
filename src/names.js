import React, { Component } from 'react';

class Names extends Component {
    render() {
        return <ul>{this.props.list_of_names.map((values, i) => {
            return <li key={i}>{values}</li>;
        })}</ul>;
    }
}

export default Names;