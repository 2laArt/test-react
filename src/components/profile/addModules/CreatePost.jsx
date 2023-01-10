import {
  createNewPostActionCreator,
  updateInputPostActionCreator,
} from "../../../redux/reducers/profileReducer";
const CreatePost = ({ newPostText, dispatch }) => {
  const handlerChange = (event) => {
    dispatch(updateInputPostActionCreator(event.target.value));
  };
  const sendPost = (event) => {
    event.preventDefault();
    dispatch(createNewPostActionCreator());
  };
  return (
    <section className="create_ports profile_section">
      <h4>Create Post</h4>
      <form>
        <textarea
          placeholder="Write Something"
          value={newPostText}
          onChange={handlerChange}
        ></textarea>
        <button type="submit" className="button" onClick={sendPost}>
          Create
        </button>
      </form>
    </section>
  );
};
export default CreatePost;
