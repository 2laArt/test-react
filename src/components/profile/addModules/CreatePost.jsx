import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../repeating/formBlock/Textarea";
import { maxLength } from "../../../utilities/validators/validators";
const maxLengthPost = maxLength(10);
const PostForm = (props) => {
  const { handleSubmit, reset } = props;
  const onSubmit = (v) => {
    handleSubmit(v);
    reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <Field
        placeholder="Write Something"
        name="newPostValue"
        component={Textarea}
        type="text"
        validate={[maxLengthPost]}
      />
      <button type="submit" className="button">
        Create
      </button>
    </form>
  );
};
const PostReduxForm = reduxForm({ form: "userPost" })(PostForm);
export const CreatePost = ({ sendPost }) => {
  const f = (v) => sendPost(v.newPostValue);
  return (
    <section className="create_ports profile_section ">
      <h4>Create Post</h4>
      <PostReduxForm onSubmit={f} />
    </section>
  );
};
