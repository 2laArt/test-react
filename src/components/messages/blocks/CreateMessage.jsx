import { useState } from "react";

export const CreateMessage = ({ dispatch }) => {
  const [value, setValue] = useState("");
  const newValue = (event) => setValue(() => event.target.value);
  const click = (event) => {
    event.preventDefault();
    dispatch({ type: "SEND-MESSAGE", param: value });
    setValue(() => "");
  };
  return (
    <form>
      <textarea
        placeholder="write message"
        value={value}
        onChange={newValue}
      ></textarea>
      <button className="button" onClick={click}>
        Create
      </button>
    </form>
  );
};
