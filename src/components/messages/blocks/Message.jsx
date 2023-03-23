export const Message = ({ message, myId }) => {
  return (
    <div
      className="message_box user_created"
      style={{ textAlign: message.senderId === myId ? "right" : "left" }}
    >
      <div className="message card_section">{message.body}</div>
    </div>
  );
};
