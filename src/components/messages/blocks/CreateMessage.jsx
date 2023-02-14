import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../repeating/formBlock/Textarea";
import { maxLength } from "../../../utilities/validators/validators";

const maxLengthMessage = maxLength(50);
const MessageForm = (props) => {
  const { handleSubmit, reset } = props;
  const f = (v) => {
    handleSubmit(v);
    reset();
  };
  return (
    <>
      <form onSubmit={f}>
        <Field
          name="newMessage"
          type="text"
          component={Textarea}
          placeholder="write message"
          validate={[maxLengthMessage]}
        />
        <button className="button">Create</button>
      </form>
    </>
  );
};

const MessageReduxForm = reduxForm({ form: "newMessage" })(MessageForm);

export const CreateMessage = ({ sendMessage }) => {
  const createMessage = (v) => sendMessage(v.newMessage);
  return <MessageReduxForm onSubmit={createMessage} />;
};
