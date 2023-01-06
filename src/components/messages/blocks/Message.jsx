export const Message = ({ message }) => {
  return (
    <div
      className="message_box"
      style={{ textAlign: message.id === 1 ? "right" : "left" }}
    >
      <div className="message">{message.text}</div>
    </div>
  );
};
