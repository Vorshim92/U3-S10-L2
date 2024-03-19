import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <ul className="list-group">
      {comments.map((comment, index) => (
        <li key={index} className="list-group-item">
          <p className="mb-0">
            <strong>Commento:</strong> {comment.comment}{" "}
            <span className="ms-2">
              <strong>Valutazione:</strong> {comment.rate}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
