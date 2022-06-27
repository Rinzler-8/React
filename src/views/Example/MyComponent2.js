import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
// FORM

class MyComponent2 extends React.Component {
  state = {
    arrJobs: [
      { id: "1", title: "dev", salary: "500" },
      { id: "2", title: "devedr", salary: "5500" },
      { id: "3", title: "PM", salary: "550023" },
    ],
  };

  render() {
    console.log(">>> call render: ", this.state);

    return (
      <>
        <AddComponent />
        {/* <> - <React.Fragment> */}

        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent2;
