export const Input = ({ input, placeholder, meta: { active, error } }) => {
  return (
    <span className="input_container">
      <input
        {...input}
        className="input_custom"
        type="text"
        placeholder={placeholder}
      />{" "}
      {active && error && <span className="popup_error">{error}</span>}
    </span>
  );
};
