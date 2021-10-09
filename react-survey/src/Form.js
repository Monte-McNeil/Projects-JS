import React from 'react'

 export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: ' ',
      gender: ' ',
      sport: ' ',
      enjoy: ' ',
      feedback: ' '
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
  });
}

  handleSubmit(e) {
    e.preventDefault();
    alert('Name is: ' + this.state.fullName +
    ' | Gender is: ' + this.state.gender +
    ' | Sport is: ' + this.state.sport +
    ' | Enjoy is: ' + this.state.enjoy +
    ' | Feedback is: ' + this.state.feedback)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" required name="fullName" 
          value={this.state.fullName} 
          onChange={this.handleChange} />
        </label> <br></br>

        <label>
          What is your gender?
          <select required name="gender"
          value={this.state.gender}
          onChange={this.handleChange}>
             <option value="Man">Man</option>
             <option value="Woman">Women</option>
             <option value="Differ">Prefer not to say</option>
          </select>
        </label>

        <label>
          What sport do you play?
          <input type="text" required name="sport" 
          value={this.state.sport} 
          onChange={this.handleChange} />
        </label> <br></br>

        Did you enjoy your sport?
        Yes
        <input required 
           type="radio"
           name="enjoy"
           value="yes"
           checked={this.state.enjoy === "yes"}
           onChange={this.handleChange}
        />

        No
        <input required 
           type="radio"
           name="enjoy"
           value="no"
           checked={this.state.enjoy === "no"}
           onChange={this.handleChange}
        /> <br></br>

        <label>
          Please provide feedback about your Doane athletic experience <br></br>
          <textarea name="feedback"
          value={this.state.feedback} 
          onChange={this.handleChange} />
        </label> <br></br>

        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}