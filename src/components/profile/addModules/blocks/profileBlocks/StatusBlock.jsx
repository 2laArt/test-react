import React, { useState } from "react";
import { ReactComponent as LoaderStatus } from "../../../../../assets/images/icons/loaderStatus.svg";

export const StatusBlock = (props) => {
  const [status, setStatus] = useState(props.status);
  const changeStatus = (e) => {
    setStatus(e.target.value);
  };
  const setUserStatus = () => {
    if (props.status !== status) {
      props.loadStatusFalse();
      props.setUserStatus(status ?? "");
    }
    props.editModeSwitch(false);
  };
  return (
    <div
      className="status_container"
      style={{ cursor: "pointer" }}
      onDoubleClick={() => props.isLoadStatus && props.editModeSwitch(true)}
    >
      <div className="item">
        <span className="bold_color"> Status: </span>

        <span>
          {props.editMode ? (
            <input
              type="text"
              value={status}
              onChange={changeStatus}
              onBlur={setUserStatus}
              autoFocus={true}
            />
          ) : (
            <span className="status_text">
              {props.status}
              {!props.isLoadStatus && <LoaderStatus />}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
