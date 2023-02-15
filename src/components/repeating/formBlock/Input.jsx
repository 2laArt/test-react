export const Input = ({ input, placeholder, meta }) => {
  return (
    <span className="input_container">
      <input
        {...input}
        className="input_custom"
        type="text"
        placeholder={placeholder}
      />{" "}
      {meta.active && meta.error && (
        <span className="popup_error">{meta.error}</span>
      )}
    </span>
  );
};
