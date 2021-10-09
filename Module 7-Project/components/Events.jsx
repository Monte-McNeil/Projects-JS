import React from 'react'

export default class Events extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        results: null
      }
    }
    
    async componentDidMount() {
      const events = "https://ll.thespacedevs.com/2.0.0/events/";
      const response = await fetch(launch);
      const data = await response.json();
      this.setState({ results: data.results, loading: false });
    }
}
  