import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch(`api/`)
      .then(res => res.json())
      .then(events => {
        this.setState({ events: events });
      });
    // fetch(`api`)
    //   .then(res => res.json())
    //   .then(events => {
    //     this.setState({ events: events });
    //   });
  }

  render() {
    return (
      <ul>
        {
          this.state.events.map(event => (
            <li>Event: {event.name}</li>
          ))
        }
      </ul>
    )
  }
}

export default Results