import React, { Component } from 'react';
import EventItem from './event_item.js';

class Events extends Component {
    render() {
        return <div>{this.props.list_of_events.map(
            (value, i) => {
                // if whatever they typed == value.title then return
                if (value.title.includes(this.props.search_term))
                {
                    return <EventItem event={value} key={i} />;
                }
            }
    )}</div>;
    }
}

export default Events;