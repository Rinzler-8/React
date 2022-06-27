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

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    let currentJobs = this.state.arrJobs;
    currentJobs.push(job);
    this.setState({
      // arrJobs: [...this.state.arrJobs, job],
      // "..." - copy 3 phần tử arrJobs ở trên
      arrJobs: currentJobs,
    });
  };

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    // lọc(xóa) phần tử có giống id cần xóa, chỉ trả về array chứa những phần tử khác id cần xóa
    this.setState({
      arrJobs: currentJobs,
    });
  };

  render() {
    console.log(">>> call render: ", this.state);

    return (
      <>
        {/* <> - <React.Fragment> */}
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyComponent2;
