import { Field, reduxForm } from "redux-form";
const SingUpForm = ({ handleSubmit }) => {
  return (
    <form className="auth_form" onSubmit={handleSubmit}>
      <Field
        className="auth_input"
        component="input"
        name="name"
        type="text"
        placeholder="Login"
      />
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
        <label htmlFor="remember" style={{ cursor: "pointer" }}>
          <Field
            component="input"
            id="remember"
            name="remember"
            type="checkbox"
          />{" "}
          remember me
        </label>
      </div>

      <button>sing up</button>
    </form>
  );
};
const SingUpReduxForm = reduxForm({ form: "signUp" })(SingUpForm);

export const SignUp = () => {
  const signUp = (v) => console.log(v);
  return (
    <div>
      <h2>Sign Up</h2>
      <SingUpReduxForm onSubmit={signUp} />
    </div>
  );
};
