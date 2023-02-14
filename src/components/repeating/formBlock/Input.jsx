export const Input = ({ input, placeholder, meta: touched, error }) => {
  console.log(error);
  return (
    <span className="input_container">
      <input
        {...input}
        className="input_custom"
        type="text"
        placeholder={placeholder}
      />{" "}
      {touched && error && <span className="popup_error">{error}</span>}
    </span>
  );
};
