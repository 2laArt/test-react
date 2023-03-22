export const Textarea = ({ input, placeholder, meta: { error } }) => {
  return (
    <div className="input_container">
      <textarea
        {...input}
        className={
          input.value
            ? "input input_custom value_true textarea_custom"
            : "input input_custom textarea_custom"
        }
        name="newMessage"
      />
      <span className="bar"></span>
      <label>{placeholder}</label>
      {error && <div className="textarea_error">{error}</div>}
    </div>
  );
};
