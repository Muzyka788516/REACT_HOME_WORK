import { posts } from "../config/posts";
import catImage from "../images/cat.png";

function Posts() {
  return (
    <>
      <h1>POSTS</h1>
      <div className="posts">
        {posts.map((item) => (
          <div className="post_section">
            <div className="descr">
              <h4> title: {item.title}</h4>
              <div className="linie_1"></div>
              <p>description: {item.description}</p>
              <div className="linie_2"></div>
            </div>

            <div className="cat_box">
              <img className="cat" src={catImage} alt="картинка кота" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Posts;
