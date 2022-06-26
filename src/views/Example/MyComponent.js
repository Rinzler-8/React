import React, { Fragment } from "react";
// EVENT, STATE

class MyComponent extends React.Component {
  state = {
    name: "",
    channel: "",
  };
  handleChangeName = (event) => {
    console.log(event.target.value, "event target: ", event.target, "Event object: ", event);
    this.setState({ name: event.target.value });
  };

  handleChangeChannel = (event) => {
    console.log(event.target.value, "event target: ", event.target, "Event object: ", event);
    this.setState({ channel: event.target.value });
  };

  handleClick = () => {
    alert("Click click");
  };
  render() {
    console.log(">>> call render: ", this.state);
    let name = "Eric";
    return (
      <>
        <div className="first">
          <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)} />
          Hello my name is {this.state.name}
        </div>
        <div className="second">
          <input value={this.state.channel} type="text" onChange={(event) => this.handleChangeChannel(event)} />
          Let's go channel {this.state.channel}
        </div>
        <div className="third">
          <button type="button" className="btn btn-default" onClick={(event) => this.handleClick(event)}>
            Click me
          </button>
        </div>
      </>
    );
  }
}

export default MyComponent;
