import video from "../data/video.js";
import Video from "./Video"
import CommentList from "./CommentList"

function App() {
  const { id, title, embedUrl, views, createdAt, upvotes, downvotes, comments } = video

  console.log("Props in app:", title)
  // console.log("Here's your data:", video);

  return (
  
    <>
      <Video key={id} title={title} url={embedUrl} views={views} created={createdAt} upvotes={upvotes} downvotes={downvotes} />
      <hr></hr>
      <CommentList comments={comments} />
    </>

  );
}

export default App;

