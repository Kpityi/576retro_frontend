import './index.scss';

const CommentBox = ({ name, comment }) => {
  return (
    <div className="comment-box">
      <div className="comment-box__name">{name}</div>
      <div className="comment-box__comment">{comment}</div>
    </div>
  );
};

export default CommentBox;
