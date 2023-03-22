import { Field, reduxForm } from "redux-form";
import { Input } from "../repeating/formBlock/Input";
const SingUpForm = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        className=" input auth_input"
        component={Input}
        name="name"
        placeholder={"name"}
        type="text"
      />
      <Field
        className=" input auth_input"
        component={Input}
        name="email"
        placeholder={"email"}
        type="text"
      />
      <Field
        className=" input auth_input"
        component={Input}
        name="password"
        placeholder={"password"}
        autoComplete="on"
        type="password"
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
