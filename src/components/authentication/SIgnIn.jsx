import { Field, reduxForm } from "redux-form";

const SingInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <Field
        className="auth_input"
        component="input"
        name="email"
        type="text"
        placeholder="email"
      />
      <Field
        className="auth_input"
        component="input"
        name="password"
        type="text"
        placeholder="Password"
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
