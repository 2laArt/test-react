import { Field, reduxForm } from "redux-form";
import { Input } from "../repeating/formBlock/Input";
import {
  minLength,
  maxLength,
  emailValidator,
  passwordValidator,
} from "../../utilities/validators/validators";
const passwordMinLength = minLength(5);
const emailMinLength = minLength(5);
const inputMaxLength = maxLength(20);
const SingInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        component={Input}
        name="email"
        type="text"
        placeholder={"email"}
        autoFocus={true}
        validate={[emailMinLength, emailValidator, inputMaxLength]}
      />
      <Field
        component={Input}
        name="password"
        type="password"
        placeholder={"password"}
        autoComplete="on"
        validate={[passwordMinLength, passwordValidator, inputMaxLength]}
      />
      <div>
        <label htmlFor="rememberMe " style={{ cursor: "pointer" }}>
          <Field
            component="input"
            id="rememberMe "
            name="rememberMe "
            type="checkbox"
            value={false}
          />{" "}
          remember me
        </label>
      </div>
      {props.error && <div className="form_error">{props.error}</div>}
      <button className="button">sing in</button>
    </form>
  );
};
const SingInReduxForm = reduxForm({ form: "signIn" })(SingInForm);

export const SignIn = ({ userSignIn }) => {
  return (
    <div>
      <h2>Sign In</h2>
      <SingInReduxForm onSubmit={userSignIn} />
    </div>
  );
};
