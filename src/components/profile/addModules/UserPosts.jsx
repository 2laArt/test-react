import Post from "./blocks/Post";

const UserPosts = ({ postData }) => {
  return (
    <article className="user_posts">
      {postData.map((el) => (
        <Post postData={el} key={el.id} />
      ))}
    </article>
  );
};

export default UserPosts;
