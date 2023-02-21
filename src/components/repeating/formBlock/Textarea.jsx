export const Textarea = ({ input, placeholder, meta: { error } }) => {
  return (
    <div className="textarea_container">
      <textarea
        {...input}
        className="textarea_custom"
        name="newMessage"
        placeholder={placeholder}
      />
      {error && <div className="textarea_error">{error}</div>}
    </div>
  );
};
