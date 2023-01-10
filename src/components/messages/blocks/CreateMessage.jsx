import { useState } from "react";
import { sendMessageActionCreator } from "../../../redux/reducers/dialogsReducer";
export const CreateMessage = ({ dispatch }) => {
  const [value, setValue] = useState("");
  const newValue = (event) => setValue(() => event.target.value);

  const click = (event) => {
    event.preventDefault();
    dispatch(sendMessageActionCreator(value));
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
