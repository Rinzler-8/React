import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // k cho website reload khi an submit
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params");
      return;
    }
    console.log(">>> check data input: ", this.state);
    alert("Lets");
    this.props.addNewJob({ id: Math.floor(Math.random() * 1001), title: this.state.title, salary: this.state.salary });
    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="jobTitle">Job title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
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
