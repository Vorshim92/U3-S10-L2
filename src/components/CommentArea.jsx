import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComponent from "./AddComponent";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [bookId]);

  const fetchComments = async () => {
    if (!bookId) return;

    setIsLoading(true);
    setError(null);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMTkyMzJkN2IxMTAwMTkwZTc3MjAiLCJpYXQiOjE3MTA3NzIxMTgsImV4cCI6MTcxMTk4MTcxOH0.ujYelJM2JBZx5kusXwT1ZFwUkIB5KFc18o_NOF6FBK4";
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);

    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        method: "GET",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
      }
      const fetchedComments = await response.json();
      setComments(fetchedComments);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (newComment) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMTkyMzJkN2IxMTAwMTkwZTc3MjAiLCJpYXQiOjE3MTA3NzIxMTgsImV4cCI6MTcxMTk4MTcxOH0.ujYelJM2JBZx5kusXwT1ZFwUkIB5KFc18o_NOF6FBK4";
    const options = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to add comment: ${response.statusText}`);
      }
      fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="comment-section" id="comment-area">
      <h2 className="my-3 text-center">COMMENTS AREA</h2>
      {isLoading && <p>Loading comments...</p>}
      {error && <p>Error fetching comments: {error}</p>}
      <AddComponent bookId={bookId} onAddComment={handleAddComment} />
      <CommentList comments={comments} bookID={bookId} />
    </div>
  );
};

export default CommentArea;
