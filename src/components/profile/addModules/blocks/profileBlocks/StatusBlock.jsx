import React from "react";
// import { ReactComponent as LoaderStatus } from "../../../../../assets/images/icons/loaderStatus.svg";
import LoaderStatus from "../../../../../assets/images/icons/loaderStatus.gif";

export class StatusBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }
  changeStatus = (e) => {
    this.setState({ status: e.target.value });
  };
  setUserStatus = () => {
    if (this.props.status !== this.state.status) {
      this.props.loadStatusFalse();
      this.props.setUserStatus(this.state.status ?? "");
    }
    this.props.editModeSwitch(false);
  };
  render() {
    console.log(this.props.isLoadStatus);
    return (
      <div
        className="status_container"
        style={{ cursor: "pointer" }}
        onDoubleClick={() =>
          this.props.isLoadStatus && this.props.editModeSwitch(true)
        }
      >
        <div className="item">
          <span className="bold_color"> Status: </span>

          <span>
            {this.props.editMode ? (
              <input
                type="text"
                value={this.state.status}
                onChange={this.changeStatus}
                onBlur={this.setUserStatus}
                autoFocus={true}
              />
            ) : (
              <span className="status_text">
                {this.props.status}
                {!this.props.isLoadStatus && (
                  <img
                    className="loader_status"
                    src={LoaderStatus}
                    alt="loader"
                  />
                )}
              </span>
            )}
          </span>
        </div>
      </div>
    );
  }
}
