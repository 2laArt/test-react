import React from "react";

export class StatusBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
    };
  }
  changeStatus = (e) => {
    this.setState({ status: e.target.value });
  };
  setUserStatus = () => {
    this.props.setUserStatus(this.state.status ?? "");
    this.props.editModeSwitch(false);
  };
  render() {
    console.log(this.props);
    return (
      <div
        style={{ cursor: "pointer" }}
        onDoubleClick={() => this.props.editModeSwitch(true)}
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
              <span>{this.props.status} </span>
            )}
          </span>
        </div>
      </div>
    );
  }
}
