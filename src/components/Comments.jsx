import { dummyCommentData } from "../utils/constant";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ data }) => {
  return (
    <div className="flex gap-2 bg-gray-50 px-4 py-2 my-2 rounded-lg">
      <div className="text-2xl">
        <FaUserCircle />
      </div>
      <div>
        <span className="font-bold">{data.name}:</span>
        <p className="mb-2">{data.text}</p>
        {data.replies && (
          <div className="pl-6 border-l border-gray-400">
            <CommentsList comments={data.replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
    </div>
  ));
};

const Comments = () => {
  return (
    <div>
      <h1 className="font-bold text-xl py-2">Comments:</h1>
      <CommentsList comments={dummyCommentData} />
    </div>
  );
};

export default Comments;
