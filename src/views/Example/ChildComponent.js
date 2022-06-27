import React, { Fragment } from "react";

//FORM;

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    console.log(">>> handleDelete: ", job);
    alert("Delete successfully");
    this.props.deleteJob(job);
  };

  render() {
    console.log(">>> check prop: ", this.props);
    let a;
    let { name, age, arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check conditional: ", check);
    return (
      <>
        {/* <> - <react.fragment> thay div to bọc ở bên ngoài để bọc 2 div nhỏ ở bên trong */}

        {/* show button */}
        {showJobs === false ? (
          <div>
            <button
              type="button"
              className="btn btn-default"
              onClick={(event) => {
                this.handleShowHide(event);
              }}
            >
              show
            </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {
                (a = arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} <span onClick={() => this.handleDelete(item)}>x</span>
                    </div>
                  );
                }))
              }
              {console.log(">>> check map array", a)}
            </div>

            {/* hide button */}
            <div>
              <button
                type="button"
                className="btn btn-default"
                onClick={(event) => {
                  this.handleShowHide(event);
                }}
              >
                hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

// functional component
// const ChildComponent = (props) => {
//   let { arrJobs } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 1000) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;
