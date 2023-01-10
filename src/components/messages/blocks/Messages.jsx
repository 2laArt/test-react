import { Message } from "./Message";

export const Messages = ({ getSelectedDialog, children }) => {
  return (
    <div className="messages">
      <div>
        {getSelectedDialog().map((el, i) => (
          <Message message={el} key={i} />
        ))}
      </div>
      {children}
    </div>
  );
};
