const Post = ({ postData }) => {
  return (
    <section className="post profile_section">
      <div className="avatar_min">
        <img src={postData.img} alt="min avatar" />
      </div>
      <div className="post_content">
        <h5 className="title">{postData.title}</h5>
        <p className="content">{postData.text}</p>
      </div>
      <div className="post_footer">
        <div className="like">like: {postData.likes}</div>
      </div>
    </section>
  );
};
export default Post;
