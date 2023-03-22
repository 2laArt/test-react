import React, { useState } from "react";
import { Loader } from "../../../../repeating/preloader/Loader";
import { Input } from "../../../../repeating/formBlock/InputFrom";

export const StatusBlock = (props) => {
  const [status, setStatus] = useState(props.status ?? "");
  const [editStatus, setEditStatus] = useState(false);
  const changeStatus = (e) => setStatus(e.target.value);
  const setUserStatus = () => {
    if (props.status !== status.trim()) {
      props.loadStatusFalse();
      props.setUserStatus(status ?? "");
    }
    setStatus(props.status);
    setEditStatus(props.editMode && false);
  };
  return (
    <div
      className="status_container"
      style={{ cursor: props.editMode && "pointer" }}
      data-testid="status"
      onDoubleClick={() =>
        props.isLoadStatus && setEditStatus(props.editMode && true)
      }
    >
      {editStatus ? (
        <Input
          field={{
            value: status,
            onChange: changeStatus,
            onBlur: setUserStatus,
            autoFocus: true,
          }}
          form={{ touched: false, errors: false }}
          type="text"
          placeholder="Status"
        />
      ) : (
        <div className="status_text" data-testid="statusText">
          <span className="bold_color">Status: </span>
          {props.status}
          {!props.isLoadStatus && (
            <Loader size="15px" style={{ marginLeft: "1rem;" }} />
          )}
        </div>
      )}
    </div>
  );
};
