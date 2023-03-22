export const Input = ({
  type,
  placeholder,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div className="input_container">
      <input
        {...field}
        type={type}
        className={
          field.value ? "input input_custom value_true" : "input input_custom "
        }
      />
      <span className="bar"></span>
      <label>{placeholder}</label>
      {/* {errors && <span className="popup_error">{errors}</span>} */}
    </div>
  );
};
