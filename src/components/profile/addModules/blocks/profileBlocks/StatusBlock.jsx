import React, { useState } from "react";
import { Loader } from "../../../../repeating/preloader/Loader";

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
      data-testid="status"
      onDoubleClick={() => props.isLoadStatus && props.editModeSwitch(true)}
    >
      <div className="item">
        <span className="bold_color">Status: </span>

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
            <span className="status_text" data-testid="statusText">
              {props.status}
              {!props.isLoadStatus && (
                <Loader size="15px" style={{ marginLeft: "1rem;" }} />
              )}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
