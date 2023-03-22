import { Message } from "./Message";

export const Messages = ({ selectedDialog, children }) => {
  return (
    <div className="messages ">
      <div>
        {selectedDialog.map((el, i) => (
          <Message message={el} key={i} />
        ))}
      </div>
      {children}
    </div>
  );
};
