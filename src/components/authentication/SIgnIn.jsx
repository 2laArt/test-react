import { Field, reduxForm } from "redux-form";
import { Input } from "../repeating/formBlock/Input";
import {
  minLength,
  emailValidator,
  passwordValidator,
} from "../../utilities/validators/validators";
const passwordLength = minLength(7);
const emailLength = minLength(5);
const SingInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <Field
        className="auth_input"
        component={Input}
        name="email"
        type="text"
        placeholder="email"
        validate={[emailLength, emailValidator]}
      />
      <Field
        className="auth_input"
        component={Input}
        name="password"
        type="text"
        placeholder="Password"
        validate={[passwordLength, passwordValidator]}
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
      <button>sing in</button>
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
