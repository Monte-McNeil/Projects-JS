import React from 'react'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      results: null
    }
  }
  
  async componentDidMount() {
    const launch = "https://ll.thespacedevs.com/2.0.0/launch";
    const response = await fetch(launch);
    const data = await response.json();
    this.setState({ results: data.results, loading: false });
  }

  search(url) {

  }

  render() {
    return (
      <div className='text-center bg-gray-400 m-10'>
        <h2>Here you will find all information on all upcoming launches and Rockets</h2>
        <div>

          Check what values you want to see!<br></br>
          <input type="radio" value="rocket" name="filter" /> Rocket <br></br>
          <input type="radio" value="windowStart" name="filter" /> Window Start: 
          <input type="radio" value="windowEnd" name="filter" /> Window End: <br></br>
          <input type="radio" value="facility" name="filter" /> Launch Facility:
          <input type="radio" value="location" name="filter" /> Launch Locaton: <br></br>
          <input type="radio" value="status" name="filter" /> Mission Status:
          <input type="radio" value="map" name="filter" /> Map location
        </div>
          <div>
            {this.state.loading || !this.state.results ? (<div>loading...</div>) : (
              <div>
                <div>
                  {Object.keys(this.state.results).map((launch) => {
                    return (
                    <div style={{padding: "5px"}}>
                      
                      <div className='border 2'>
                        <p>Rocket: {this.state.results[launch].name}</p>
                        <p>Window Start: {this.state.results[launch].window_start}</p>
                        <p>Window End: {this.state.results[launch].window_end}</p>
                        <p>Launch Facility: {this.state.results[launch].pad.location.name}</p>
                        <p>Launch Locaton: {this.state.results[launch].pad.name}</p>
                        <p>Mission Status: {this.state.results[launch].status.name}</p>
                        <a target_blank href={this.state.results[launch].pad.map_url}>
                        <button>Map of Location</button>
                        </a>
                      </div>
                    </div>)
                  })}
                </div>
              </div>
            )}
          </div>
      </div>
    );
  }
}