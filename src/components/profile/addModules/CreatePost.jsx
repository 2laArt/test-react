const CreatePost = ({ newPostText, handlerChange, sendPost }) => {
  const onSendPost = (event) => {
    event.preventDefault();
    sendPost();
  };
  return (
    <section className="create_ports profile_section">
      <h4>Create Post</h4>
      <form>
        <textarea
          placeholder="Write Something"
          value={newPostText}
          onChange={(e) => handlerChange(e.target.value)}
        ></textarea>
        <button type="submit" className="button" onClick={onSendPost}>
          Create
        </button>
      </form>
    </section>
  );
};
export default CreatePost;
