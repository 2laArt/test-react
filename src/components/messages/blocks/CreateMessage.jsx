export const CreateMessage = ({
  messageValue,
  chooseMessageValue,
  sendMessage,
}) => {
  const onSendMessage = (event) => {
    event.preventDefault();
    sendMessage();
  };
  return (
    <form>
      <textarea
        placeholder="write message"
        value={messageValue}
        onChange={(e) => chooseMessageValue(e.target.value)}
      ></textarea>
      <button className="button" onClick={onSendMessage}>
        Create
      </button>
    </form>
  );
};
