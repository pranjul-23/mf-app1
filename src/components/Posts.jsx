import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading posts...</div>;
  }

  return (
    <div className="posts-container" style={{ padding: "20px" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>All Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="post"
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4 style={{ color: "#333", marginBottom: "10px" }}>
            Title: {post.title}
          </h4>
          <div style={{ lineHeight: "1.6" }}>{post.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
