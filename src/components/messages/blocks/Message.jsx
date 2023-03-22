export const Message = ({ message }) => {
  return (
    <div
      className="message_box user_created"
      style={{ textAlign: message.id === 1 ? "right" : "left" }}
    >
      <div className="message card_section">{message.text}</div>
    </div>
  );
};
