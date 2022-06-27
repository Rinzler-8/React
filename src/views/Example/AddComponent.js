import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // k cho website reload khi an submit
    console.log(">>> check data input: ", this.state);
    alert("Lets");
  };
  render() {
    return (
      <form>
        <label htmlFor="jobTitle">Job title:</label>
        <br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => {
            this.handleTitleJob(event);
          }}
        />
        <br />
        <label htmlFor="salary">Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => {
            this.handleSalary(event);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}

export default AddComponent;
