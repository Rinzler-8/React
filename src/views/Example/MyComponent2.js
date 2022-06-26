import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
// FORM

class MyComponent2 extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastname = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // k cho website reload khi an submit
    console.log(">>> check data input: ", this.state);
    alert("Lets");
  };
  render() {
    console.log(">>> call render: ", this.state);

    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleFirstName(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => {
              this.handleLastname(event);
            }}
          />
          <br />
          <br />
          <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
        <ChildComponent name={"childOne"} />
        <ChildComponent name={"childTwo"} />
        <ChildComponent name={"childThree"} />
      </>
    );
  }
}

export default MyComponent2;
