import { Message } from "./Message";

export const Messages = ({ messages, myId, children }) => {
  return (
    <div className="messages ">
      <div>
        {messages.map((el, i) => (
          <Message message={el} myId={myId} key={i} />
        ))}
      </div>
      {children}
    </div>
  );
};
