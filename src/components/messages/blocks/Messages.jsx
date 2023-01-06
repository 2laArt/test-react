import { Message } from "./Message";

export const Messages = ({ currentDialog, children }) => {
  return (
    <div className="messages">
      <div>
        {currentDialog.map((el, i) => (
          <Message message={el} key={i} />
        ))}
      </div>
      {children}
    </div>
  );
};
