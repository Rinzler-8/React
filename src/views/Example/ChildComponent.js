import React, { Fragment } from "react";
// FORM

class ChildComponent extends React.Component {
  state = {};

  render() {
    console.log(">>> call render: ", this.state);

    return (
      <>
        <div>child component: {this.props.name}</div>
      </>
    );
  }
}

export default ChildComponent;
