export const Input = ({
  input,
  placeholder,
  type,
  autoComplete,
  meta: { active, error },
}) => {
  return (
    <div className="input_container">
      <input
        {...input}
        type={type}
        autoComplete={autoComplete}
        className={
          input.value ? "input input_custom value_true" : "input input_custom "
        }
      />
      <span className="bar"></span>
      <label>{placeholder}</label>
      {active && error && <span className="popup_error">{error}</span>}
    </div>
  );
};
