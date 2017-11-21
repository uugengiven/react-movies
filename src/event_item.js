import React, { Component } from 'react';

class EventItem extends Component {
    render() {
        var eventItem = this.props.event;
        return (
        <div key={this.props.key}>
            <img src={eventItem.imageUrl} />
            <p>{eventItem.title}</p>
        </div>
        );
    }
}

export default EventItem;