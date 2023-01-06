import { useState } from "react";

export const CreateMessage = ({ sendMessage }) => {
  const [value, setValue] = useState("");
  const newValue = (event) => setValue(() => event.target.value);
  const click = (event) => {
    event.preventDefault();
    sendMessage(value);
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
